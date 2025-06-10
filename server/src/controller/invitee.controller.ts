import { Request, Response, NextFunction } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import z from "zod";
import { RequestHandler } from "express";
import { addMinutes, isBefore, set, isAfter, areIntervalsOverlapping } from "date-fns";

const prisma = new PrismaClient();

function generateFilteredSlots(
    date: Date,
    startHour: number,
    startMinute: number,
    endHour: number,
    endMinute: number,
    breakStartHour: number,
    breakStartMinute: number,
    breakEndHour: number,
    breakEndMinute: number,
    interval: number,
    slotDuration: number,
    bookings: { startsAt: string; duration: number }[],
    buffer: number,
): string[] {
    const slots: string[] = [];

    let current = set(date, {
        hours: startHour,
        minutes: startMinute,
        seconds: 0,
        milliseconds: 0,
    });
    const end = set(date, {
        hours: endHour,
        minutes: endMinute,
        seconds: 0,
        milliseconds: 0,
    });

    const breakStart = set(date, {
        hours: breakStartHour,
        minutes: breakStartMinute,
        seconds: 0,
        milliseconds: 0,
    });
    const breakEnd = set(date, {
        hours: breakEndHour,
        minutes: breakEndMinute,
        seconds: 0,
        milliseconds: 0,
    });

    while (isBefore(current, end)) {
        const slotEnd = addMinutes(current, slotDuration);

        const overlapsBreak = areIntervalsOverlapping(
            { start: current, end: slotEnd },
            { start: breakStart, end: breakEnd },
        );

        const overlapsBooking = bookings.some((b) => {
            const bStart = new Date(b.startsAt);
            const bEnd = addMinutes(bStart, b.duration + buffer);
            return areIntervalsOverlapping(
                { start: current, end: slotEnd },
                { start: bStart, end: bEnd },
            );
        });

        if (!overlapsBreak && !overlapsBooking && !isAfter(slotEnd, end)) {
            slots.push(current.toISOString());
        }

        current = addMinutes(current, interval);
    }

    return slots;
}

export const getBookingPageInfoById: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const bookingPageId = Number(req.params.id);

        if (isNaN(bookingPageId)) {
            res.status(400).json({ msg: "id буруу байна" });
            return;
        }
        const bookingPage = await prisma.bookingPage.findUnique({
            where: {
                id: bookingPageId,
            },
        });

        if (!bookingPage) {
            res.status(404).json({ msg: "Цаг захиалгын хуудас олдсонгүй" });
            return;
        }

        const result = {
            title: bookingPage.title,
            image: bookingPage.image,
            locationDescription: bookingPage.locationDescription,
            eventDescription: bookingPage.eventDescription,
            activeDays: bookingPage.activeDays,
            durations: bookingPage.durations,
            location: bookingPage.location,
        };

        res.status(200).json({ result });
    } catch (err) {
        next(err);
    }
};

export const getSlotsByDateAndDuration: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const bookingPageId = Number(req.params.id);
        const { date, duration } = req.body;

        if (isNaN(bookingPageId)) {
            res.status(400).json({ msg: "id буруу байна" });
            return;
        }

        const bookingPage = await prisma.bookingPage.findUnique({
            where: {
                id: bookingPageId,
            },
        });

        if (!bookingPage) {
            res.status(404).json({ msg: "Цаг захиалгын хуудас олдсонгүй" });
            return;
        }

        const hostId = bookingPage.userId;

        const hostBookings = await prisma.booking.findMany({
            where: {
                bookingPage: {
                    userId: hostId,
                },
            },
            select: {
                isoString: true,
                duration: true,
            },
        });

        const formattedBookings = hostBookings.map((b) => ({
            startsAt: b.isoString,
            duration: b.duration,
        }));

        const slots = generateFilteredSlots(
            new Date(date),
            bookingPage.startHour,
            bookingPage.startMinute,
            bookingPage.endHour,
            bookingPage.endMinute,
            bookingPage.startBreakHour,
            bookingPage.startBreakMinute,
            bookingPage.endBreakHour,
            bookingPage.endBreakMinute,
            bookingPage.increment,
            duration,
            formattedBookings,
            bookingPage.buffer,
        );

        res.status(200).json({ slots });
    } catch (err) {
        next(err);
    }
};

const registerBookingSchema = z.object({
    selectedDuration: z.number(),
    selectedSlot: z.string(),
    firstName: z.string().min(2, { message: "Хамгийн багадаа 2 тэмдэгт" }),
    lastName: z.string().min(2, { message: "Хамгийн багадаа 2 тэмдэгт" }),
    email: z.string().email({ message: "Зөв email бичнэ үү" }),
    phone: z.string().regex(/^\d{8}$/, { message: "Утасны дугаар 8 оронтой байх ёстой" }),
});

export const registerBooking: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const bookingPageId = Number(req.params.id);
        if (isNaN(bookingPageId)) {
            res.status(400).json({ msg: "id буруу байна" });
            return;
        }
        const parseResult = registerBookingSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({
                msg: "Validation failed",
                errors: parseResult.error.errors.map((e) => ({
                    field: e.path[0],
                    msg: e.message,
                })),
            });
            return;
        }
        const { selectedDuration, selectedSlot, firstName, lastName, email, phone } =
            parseResult.data;

        const newBooking = await prisma.booking.create({
            data: {
                bookingPage: {
                    connect: {
                        id: bookingPageId,
                    },
                },
                duration: selectedDuration,
                isoString: selectedSlot,
                inviteeFirstName: firstName,
                inviteeLastName: lastName,
                inviteeEmail: email,
                inviteePhone: phone,
            },
        });

        if (!newBooking) {
            res.status(400).json({ msg: "Бүртгэгд алдаа гарлаа" });
            return;
        }

        res.status(200).json({ msg: "Амжалттай бүртгэгдлээ" });
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
            res.status(409).json({ msg: "Энэ цаг аль хэдийн захиалагдсан байна" });
            return;
        }
        next(err);
    }
};
