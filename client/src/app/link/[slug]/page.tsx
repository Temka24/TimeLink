'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { CalendarClock, ChevronLeft, Clock, ChevronRight, CircleCheck, MapPin } from 'lucide-react';
import { addMinutes, format } from 'date-fns';
import { Button } from '@/components/ui/button';
import LocationMap from '@/components/features/LocationMap';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const weekdays = ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'];

const months = [
    'Нэгдүгээр сарын',
    'Хоёрдугаар сарын',
    'Гуравдугаар сарын',
    'Дөрөвдүгээр сарын',
    'Тавдугаар сарын',
    'Зургаадугаар сарын',
    'Долдугаар сарын',
    'Наймдугаар сарын',
    'Есдүгээр сарын',
    'Аравдугаар сарын',
    'Арваннэгдүгээр сарын',
    'Арванхоёрдугаар сарын',
];

const demoDataBookingPage = {
    title: 'Temka тай уулзах уулз',
    image: '/avatar.png',
    locationDescription: 'Улаанбаатар, Central Tower 9 давхар 901',
    eventDescription: 'evow eko lorem ipsum ewv ew er er ,leljokrjiorko orjokorjoj r r',
    activeDays: {
        0: false,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: false,
    } as Record<number, boolean>,
    slots: [
        '1970-01-01T09:00:00.000Z',
        '1970-01-01T10:00:00.000Z',
        '1970-01-01T11:00:00.000Z',
        '1970-01-01T12:00:00.000Z',
        '1970-01-01T14:00:00.000Z',
        '1970-01-01T15:00:00.000Z',
        '1970-01-01T16:00:00.000Z',
        '1970-01-01T17:00:00.000Z',
        '1970-01-01T18:00:00.000Z',
    ],
    durations: [30, 45, 60],
    location: { lat: 47.9185, lng: 106.917 },
};

const bookingSchema = z.object({
    date: z.date().optional(),
    selectedDuration: z.number(),
    selectedSlot: z.string(),
    firstName: z.string().min(2, { message: 'Хамгийн багадаа 2 тэмдэгт' }),
    lastName: z.string().min(2, { message: 'Хамгийн багадаа 2 тэмдэгт' }),
    email: z.string().email({ message: 'Зөв email бичнэ үү' }),
    phone: z.string().regex(/^\d{8}$/, { message: 'Утасны дугаар 8 оронтой байх ёстой' }),
});

type FormData = z.infer<typeof bookingSchema>;

export default function LinkPage() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            date: undefined,
            selectedDuration: 0,
            selectedSlot: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
    });

    const onSubmit = (data: FormData) => {
        console.log('Form data:', data);
        setIsOpenSuccess(true);
    };

    const [dateInfo, setDateInfo] = useState<{
        dayName: string;
        monthName: string;
        dayNumber: number;
    } | null>(null);
    const watchDate = watch('date');
    const watchSelectedDuration = watch('selectedDuration');
    const watchSelectedSlot = watch('selectedSlot');

    const [isOpenConfirmSection, setIsOpenConfirmSection] = useState<boolean>(false);
    const [isOpenMap, setIsOpenMap] = useState<boolean>(false);
    const [isOpenSuccess, setIsOpenSuccess] = useState<boolean>(false);
    const [lastTime, setLastTime] = useState('');

    const router = useRouter();
    const slug = useParams().slug;

    useEffect(() => {
        if (watchDate) {
            setDateInfo({
                dayName: weekdays[watchDate?.getDay()],
                monthName: months[watchDate?.getMonth()],
                dayNumber: watchDate?.getDate(),
            });
        }
    }, [watchDate]);

    useEffect(() => {
        if (watchSelectedSlot && watchDate && watchSelectedDuration !== 0) {
            setIsOpenConfirmSection(true);
        } else {
            setIsOpenConfirmSection(false);
        }
    }, [watchSelectedSlot, watchDate, watchSelectedDuration]);

    useEffect(() => {
        if (!watchSelectedDuration || !watchSelectedSlot) {
            return;
        }
        const addedTime = addMinutes(new Date(watchSelectedSlot), watchSelectedDuration);
        const formattedTime = format(addedTime, 'HH:mm');
        setLastTime(formattedTime);
    }, [watchSelectedDuration, watchSelectedSlot]);

    return (
        <>
            <form
                className={cn(
                    'w-[100vw] min-h-screen pt-[60px] overflow-hidden',
                    isOpenSuccess && 'hidden',
                )}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="max-w-[800px] h-[600px] mx-auto relative overflow-hidden shadow-lg rounded-3xl flex">
                    <div
                        className={cn(
                            'px-[20px] bg-demo-left pt-[30px] flex flex-col gap-[15px] duration-500 rounded-2xl items-center justify-start',
                            isOpenConfirmSection ? 'w-full md:min-w-1/3' : 'w-full md:min-w-1/2',
                            watchDate && 'hidden md:flex',
                        )}
                    >
                        <div className="w-[70px] aspect-square border-white border-3 rounded-full overflow-hidden">
                            <Image
                                src={demoDataBookingPage.image || '/avatar.png'}
                                alt="Profile"
                                width={70}
                                height={70}
                                className="w-full h-full"
                            />
                        </div>
                        <h1 className="text-white text-[22px]">{demoDataBookingPage.title}</h1>
                        <h2>slug is {slug}</h2>
                        {!isOpenConfirmSection ? (
                            <Calendar
                                mode="single"
                                disabled={(date) => {
                                    const day = date.getDay(); // 0-6
                                    return !demoDataBookingPage.activeDays[day]; // true = disable
                                }}
                                selected={watchDate}
                                onSelect={(date) =>
                                    setValue('date', date, { shouldValidate: true })
                                }
                                className="rounded-md shadow-md mt-[50px]"
                            />
                        ) : (
                            demoDataBookingPage.eventDescription && (
                                <div>
                                    <p className="text-[14px] mt-4 text-white text-center h-full text-wrap break-words break-after-all">
                                        {demoDataBookingPage.eventDescription}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                    {!isOpenConfirmSection ? (
                        <div
                            className={cn(
                                'px-[40px] pt-[30px] items-center flex flex-col gap-[10px] justify-start md:min-w-1/2 w-full',
                                !watchDate && 'md:flex md:flex-col md:gap-[10px] hidden',
                            )}
                        >
                            {dateInfo ? (
                                <div className="text-[15px] bg-[#f3f4f6] w-full py-[8px] rounded-sm text-center font-[500]">
                                    {dateInfo.dayName}, {dateInfo.monthName} {dateInfo.dayNumber}
                                </div>
                            ) : (
                                <div className="text-[15px] bg-[#f3f4f6] w-full py-[8px] rounded-sm text-center font-[500]">
                                    Өдрөө сонгоно уу
                                </div>
                            )}

                            <div className="w-full mt-[20px]">
                                <span className="font-bold text-[14px]">Үргэлжлэх хугацаа</span>
                                <div className="flex gap-[10px] mt-[10px]">
                                    {demoDataBookingPage.durations.map((duration, i: number) => (
                                        <div
                                            key={i}
                                            onClick={() => setValue('selectedDuration', duration)}
                                            className={cn(
                                                'w-1/2 text-center rounded-sm py-[7px] hover:bg-[#e5e7eb] cursor-pointer font-[500]',
                                                watchSelectedDuration === duration
                                                    ? 'bg-[#e5e7eb]'
                                                    : 'bg-[#f3f4f6]',
                                            )}
                                        >
                                            {duration} минут
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full mt-[10px]">
                                <span className="text-left font-bold text-[14px]">
                                    Сонгох боломжтой цагууд
                                </span>
                                <div className="flex flex-col gap-[10px] items-center justify-start overflow-y-scroll h-[330px] mt-[10px] pr-[5px]">
                                    {demoDataBookingPage.slots.length !== 0 ? (
                                        demoDataBookingPage.slots.map((time, i: number) => (
                                            <div
                                                key={i}
                                                onClick={() => setValue('selectedSlot', time)}
                                                className={cn(
                                                    'w-full border rounded-sm text-center cursor-pointer border-[#e5e7eb] hover:bg-[#e5e7eb] py-[10px]',
                                                    watchSelectedSlot === time && 'bg-[#e5e7eb]',
                                                )}
                                            >
                                                {format(new Date(time), 'HH:mm')}
                                            </div>
                                        ))
                                    ) : watchDate && watchSelectedDuration ? (
                                        <p>Энэ өдөр цаг байхгүй байна </p>
                                    ) : (
                                        <p className="text-[14px] text-note text-center mt-[100px] mx-[40px]">
                                            Он сар үргэлжлэх хугацаа сонгоно уу
                                        </p>
                                    )}
                                </div>
                            </div>
                            <Button
                                className="absolute bottom-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer md:hidden"
                                variant="outline"
                                onClick={() => {
                                    setValue('selectedSlot', '');
                                    setValue('selectedDuration', 0);
                                    setValue('date', undefined);
                                }}
                            >
                                <ChevronLeft /> Буцах
                            </Button>
                        </div>
                    ) : (
                        <AnimatePresence mode="wait">
                            {!isOpenMap ? (
                                <motion.div
                                    className="px-[40px] py-[30px] flex flex-col items-start justify-start gap-[10px] min-w-2/3 relative"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5 }}
                                    key="A"
                                >
                                    <h1 className="font-semibold text-[20px] self-center">
                                        Захиалга баталгаажуулах
                                    </h1>
                                    <div className="flex items-start justify-center gap-2 text-green-700 font-[600] mt-[10px]">
                                        <CalendarClock />
                                        <div>
                                            <p>
                                                {dateInfo?.dayName}, {dateInfo?.monthName}{' '}
                                                {dateInfo?.dayNumber}
                                            </p>
                                            <p>
                                                {format(new Date(watchSelectedSlot), 'HH:mm')} -{' '}
                                                {lastTime}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start justify-center font-semibold">
                                        <Clock />
                                        {watchSelectedDuration} минут
                                    </div>

                                    <section className="flex flex-col items-stretch justify-center gap-[10px] mt-[20px]">
                                        <div className="flex gap-[20px] items-center justify-center">
                                            <div>
                                                <label className="font-bold text-[14px]">
                                                    Овог *
                                                </label>
                                                <input
                                                    {...register('firstName')}
                                                    className="border p-2 w-full rounded-md"
                                                />
                                                <p className="text-red-500 text-sm">
                                                    {errors.firstName?.message}
                                                </p>
                                            </div>

                                            <div>
                                                <label className="font-bold text-[14px]">
                                                    Өөрийн нэр *
                                                </label>
                                                <input
                                                    {...register('lastName')}
                                                    className="border p-2 w-full rounded-md"
                                                />
                                                <p className="text-red-500 text-sm">
                                                    {errors.lastName?.message}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-bold text-[14px]">Имэйл *</label>
                                            <input
                                                {...register('email')}
                                                className="border p-2 w-full rounded-md"
                                            />
                                            <p className="text-red-500 text-sm">
                                                {errors.email?.message}
                                            </p>
                                        </div>

                                        <div>
                                            <label className="font-bold text-[14px]">
                                                Утасны дугаар *
                                            </label>
                                            <input
                                                {...register('phone')}
                                                type="number"
                                                className="border p-2 w-full rounded-md"
                                            />
                                            <p className="text-red-500 text-sm">
                                                {errors.phone?.message}
                                            </p>
                                        </div>
                                        <Button
                                            type="submit"
                                            className="absolute bottom-[20px] right-[20px] text-white bg-demo-left cursor-pointer"
                                        >
                                            Захиалах
                                        </Button>
                                    </section>

                                    <Button
                                        className="cursor-pointer absolute bottom-[20px] self-center scale-75 md:scale-100"
                                        onClick={() => setIsOpenMap(true)}
                                        type="button"
                                    >
                                        Байршил харах <ChevronRight />
                                    </Button>
                                    <Button
                                        className="absolute bottom-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer"
                                        variant="outline"
                                        onClick={() => {
                                            setValue('selectedSlot', '');
                                            setValue('selectedDuration', 0);
                                            setValue('date', undefined);
                                        }}
                                    >
                                        <ChevronLeft /> Буцах
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="flex flex-col items-center justify-center w-full px-[40px] relative"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    key="B"
                                >
                                    <LocationMap
                                        lat={demoDataBookingPage.location.lat}
                                        lng={demoDataBookingPage.location.lng}
                                    />
                                    <p className="mt-[20px] text-note">
                                        {demoDataBookingPage.locationDescription}
                                    </p>
                                    <Button
                                        onClick={() => setIsOpenMap(false)}
                                        className="absolute bottom-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer"
                                        variant="outline"
                                    >
                                        <ChevronLeft /> Буцах
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}
                </div>
            </form>
            {isOpenSuccess && (
                <div className="w-[100vw] min-h-screen md:pt-[60px] pt-[10px] overflow-hidden">
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        key="C"
                        className="md:h-[650px] h-[750px] mx-auto relative overflow-x-hidden overflow-y-scroll md:max-w-[450px] max-w-[350px] shadow-lg rounded-3xl flex flex-col items-center gap-[10px] justify-start md:py-[50px] pt-[70px] pb-[20px] px-[60px] overflow-hidden scale-90 md:scale-100"
                    >
                        <div className="text-green-700">
                            <CircleCheck size={70} strokeWidth={1} />
                        </div>
                        <h1 className="font-semibold text-[20px]">Амжилттай</h1>
                        <p className="text-[15px] text-note text-center">
                            Захиалгын бүх дэлгэрэнгүй мэдээллийг танд имэйл ээр илгээсэн.
                        </p>
                        <div className="border border-[#e5e7eb] rounded-sm px-[20px] py-[10px] flex flex-col items-start justify-center gap-[7px] mt-2">
                            <div className="flex items-start justify-center gap-2 text-green-700 font-[600] mt-[10px]">
                                <CalendarClock />
                                <div>
                                    <p className="text-nowrap">
                                        {dateInfo?.dayName}, {dateInfo?.monthName}{' '}
                                        {dateInfo?.dayNumber}
                                    </p>
                                    <p>
                                        {format(watchSelectedSlot, 'HH:mm')} - {lastTime}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start justify-center font-semibold">
                                <Clock />
                                {watchSelectedDuration} минут
                            </div>
                            <div className="flex gap-2 items-start justify-center font-[500]">
                                <MapPin />
                                {demoDataBookingPage.locationDescription}
                            </div>
                        </div>
                        <p className="text-[15px] text-center text-note mt-[20px] pt-[20px]">
                            Та ч гэсэн өөрийнхөө цаг захиалгын хуудсыг үүсгэмээр байна уу
                        </p>
                        <Button
                            onClick={() => router.push('/')}
                            className="bg-[#4f46e5] hover:bg-[#4f46e0] text-[18px] cursor-pointer font-[600] rounded-3xl py-[25px] px-[25px]"
                        >
                            Бүртгүүлэх
                        </Button>
                    </motion.div>
                </div>
            )}
        </>
    );
}
