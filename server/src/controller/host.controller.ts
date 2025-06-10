import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import z from "zod";
import { RequestHandler } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import cloudinary from "../service/cloudinary.js";
import { Readable } from "stream";

const prisma = new PrismaClient();

export const getBookingPages: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const host = await prisma.user.findUnique({
            where: {
                email: (req as AuthenticatedRequest).user?.email,
            },
        });

        if (!host) {
            res.status(403).json({ msg: "Unauthorized" });
            return;
        }

        const bookingPages = await prisma.bookingPage.findMany({
            where: {
                userId: host?.id,
            },
            include: {
                bookings: true,
            },
        });

        const result = bookingPages.map((bookingPage) => {
            const bookingLink = `${process.env.CLIENT_URL}/link/${bookingPage.id}`;
            return {
                name: bookingPage.title,
                duration: bookingPage.durations,
                location: bookingPage.locationDescription,
                bookingLink: bookingLink,
                total: bookingPage.bookings.length,
            };
        });

        res.status(200).json({ result });
    } catch (err) {
        next(err);
    }
};

export const getBookings: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const host = await prisma.user.findUnique({
            where: {
                email: (req as AuthenticatedRequest).user?.email,
            },
        });

        if (!host) {
            res.status(404).json({ msg: "Host not found" });
            return;
        }

        const bookings = await prisma.booking.findMany({
            where: {
                bookingPage: {
                    userId: host?.id,
                },
            },
            include: {
                bookingPage: true,
            },
        });

        const result = bookings.map((booking) => {
            const bookingLocation = booking.bookingPage.location as { lat?: number; lng?: number };
            return {
                bookingName: booking.bookingPage.title,
                isoString: booking.isoString,
                inviteeEmail: booking.inviteeEmail,
                inviteeFirstName: booking.inviteeFirstName,
                inviteeLastName: booking.inviteeLastName,
                inviteePhone: booking.inviteePhone,
                location: booking.bookingPage.locationDescription,
                lat: bookingLocation?.lat,
                lng: bookingLocation?.lng,
                duration: booking.duration,
                createdAt: booking.createdAt,
            };
        });

        res.status(200).json({ result });
    } catch (err) {
        next(err);
    }
};

const createBookingPageSchema = z.object({
    title: z.string().min(1, "Гарчиг оруулна уу !"),
    locationDescription: z.string().min(1, "Байршлийн дэлгэрэнгүй мэдээллээ оруулна уу"),
    eventDescription: z.string().optional(),
    activeDays: z.record(z.string(), z.boolean()),
    startHour: z.number(),
    startMinute: z.number(),
    endHour: z.number(),
    endMinute: z.number(),
    startBreakHour: z.number(),
    startBreakMinute: z.number(),
    endBreakHour: z.number(),
    endBreakMinute: z.number(),
    durations: z.array(z.number()).min(1, "Үргэлжлэх хугацаа сонгоно уу"),
    increment: z.number(),
    buffer: z.number(),
    location: z.object({
        lng: z.number(),
        lat: z.number(),
    }),
});

export interface FileRequest extends Request {
    file?: Express.Multer.File;
}

export const createBookingPage = async (req: FileRequest, res: Response, next: NextFunction) => {
    try {
        if (!req.body.data) return res.status(400).json({ msg: "data талбар алга" });

        const file = (req as FileRequest).file;
        let secure_url: string | null = null;

        const parsedJSON = JSON.parse(req.body.data);
        const parseResult = createBookingPageSchema.safeParse(parsedJSON);
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
        const data = parseResult.data;

        const host = await prisma.user.findUnique({
            where: {
                email: (req as AuthenticatedRequest).user?.email,
            },
        });
        if (!host) {
            res.status(404).json({ msg: "Host not found" });
            return;
        }

        const uploadToCloudinary = (file: Express.Multer.File): Promise<string> => {
            return new Promise((resolve, reject) => {
                const mime = file.mimetype;
                let resourceType: "image" | "video" | "raw" = "raw";

                if (mime.startsWith("image/")) {
                    resourceType = "image";
                } else if (mime.startsWith("video/")) {
                    resourceType = "video";
                }

                const public_id = String(Date.now());

                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder:
                            resourceType === "image"
                                ? "timelink/my_images"
                                : resourceType === "video"
                                  ? "timelink/my_videos"
                                  : "timelink/my_documents",
                        resource_type: resourceType,
                        public_id,
                    },
                    (error, result) => {
                        if (error || !result) {
                            return reject(error);
                        }
                        resolve(result.secure_url);
                    },
                );

                Readable.from(file.buffer).pipe(stream);
            });
        };

        if (file) {
            secure_url = await uploadToCloudinary(file);
        }

        await prisma.bookingPage.create({
            data: {
                ...data,
                image: secure_url,
                user: {
                    connect: {
                        id: host.id,
                    },
                },
            },
        });

        res.status(200).json({ msg: "Амжилттай бүртгэгдлээ" });
    } catch (err) {
        next(err);
    }
};
