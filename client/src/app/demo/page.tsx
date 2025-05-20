'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import clsx from 'clsx';
import { CalendarClock, ChevronLeft, Clock, ChevronRight, CircleCheck, MapPin } from 'lucide-react';
import { addMinutes, format, parse } from 'date-fns';
import ClientInfo from '@/components/form/ClientInfo';
import { Button } from '@/components/ui/button';
import LocationMap from '@/components/features/LocationMap';
import { motion, AnimatePresence } from 'motion/react';

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

const bookingLocation = 'Улаанбаатар, Central Tower 9 давхар 901 тоот';

const demoTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function DemoPage() {
    const [date, setDate] = useState<Date | undefined>(undefined);

    const [dateInfo, setDateInfo] = useState<{
        dayName: string;
        monthName: string;
        dayNumber: number;
    } | null>(null);

    const [selectedInterval, setSelectedInterval] = useState<number>(30);
    const [selectedTime, setSelectedTime] = useState('');
    const [lastTime, setLastTime] = useState('');

    const [isOpenConfirmSection, setIsOpenConfirmSection] = useState<boolean>(false);
    const [isOpenMap, setIsOpenMap] = useState<boolean>(false);
    const [isOpenSuccess, setIsOpenSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (date) {
            setDateInfo({
                dayName: weekdays[date?.getDay()],
                monthName: months[date?.getMonth()],
                dayNumber: date?.getDate(),
            });
        }
    }, [date]);

    useEffect(() => {
        if (selectedTime && date) {
            setIsOpenConfirmSection(true);
        } else {
            setIsOpenConfirmSection(false);
        }
    }, [selectedTime, date]);

    useEffect(() => {
        if (!selectedInterval || !selectedTime) {
            return;
        }
        const parsedTime = parse(selectedTime, 'HH:mm', new Date());
        const updatedTime = addMinutes(parsedTime, selectedInterval);
        const result = format(updatedTime, 'HH:mm');
        setLastTime(result);
    }, [selectedInterval, selectedTime]);

    return (
        <>
            <div
                className={clsx(
                    'w-[100vw] min-h-screen pt-[60px] overflow-hidden',
                    isOpenSuccess && 'hidden',
                )}
            >
                <div className="max-w-[800px] h-[600px] mx-auto relative overflow-hidden shadow-lg rounded-3xl flex">
                    <div
                        className={clsx(
                            'px-[20px] bg-demo-left pt-[30px] flex flex-col gap-[15px] duration-500 rounded-2xl items-center justify-start',
                            isOpenConfirmSection ? 'w-full md:min-w-1/3' : 'w-full md:min-w-1/2',
                            date && 'hidden md:flex',
                        )}
                    >
                        <div className="w-[70px] aspect-square border-white border-3 rounded-full overflow-hidden">
                            <Image
                                src="/photo-women.avif"
                                alt="Profile"
                                width={70}
                                height={70}
                                className="w-full h-full"
                            />
                        </div>
                        <h1 className="text-white text-[22px]">Тантай цаг товлолт</h1>
                        {!isOpenConfirmSection && (
                            <Calendar
                                mode="single"
                                disabled={(date) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);

                                    const isPast = date < today;
                                    const isWeekend = date.getDay() === 0 || date.getDay() === 6; // Sunday = 0

                                    return isPast || isWeekend;
                                }}
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md shadow-md mt-[50px]"
                            />
                        )}

                        <p className="mt-[30px] text-[12px] text-note text-center">
                            Таны захиалгын хуудас ингэж харагдах болно.
                        </p>
                    </div>
                    {!isOpenConfirmSection ? (
                        <div
                            className={clsx(
                                'px-[40px] pt-[30px] items-center flex flex-col gap-[10px] justify-start md:min-w-1/2 w-full',
                                !date && 'md:flex md:flex-col md:gap-[10px] hidden',
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
                                    <div
                                        onClick={() => setSelectedInterval(30)}
                                        className={clsx(
                                            'w-1/2 text-center rounded-sm py-[7px] hover:bg-[#e5e7eb] cursor-pointer',
                                            selectedInterval === 30
                                                ? 'bg-[#e5e7eb]'
                                                : 'bg-[#f3f4f6]',
                                        )}
                                    >
                                        30 минут
                                    </div>
                                    <div
                                        onClick={() => setSelectedInterval(60)}
                                        className={clsx(
                                            'w-1/2 text-center rounded-sm py-[7px] hover:bg-[#e5e7eb] cursor-pointer',
                                            selectedInterval === 60
                                                ? 'bg-[#e5e7eb]'
                                                : 'bg-[#f3f4f6]',
                                        )}
                                    >
                                        60 минут
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-[10px]">
                                <span className="text-left font-bold text-[14px]">
                                    Сонгох боломжтой цагууд
                                </span>
                                <div className="flex flex-col gap-[10px] items-center justify-start overflow-y-scroll h-[60%] mt-[10px] pr-[5px]">
                                    {demoTimes.map((time, i: number) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedTime(time)}
                                            className={clsx(
                                                'w-full border rounded-sm text-center cursor-pointer border-[#e5e7eb] hover:bg-[#e5e7eb] py-[10px]',
                                                selectedTime === time && 'bg-[#e5e7eb]',
                                            )}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button
                                className="absolute bottom-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer md:hidden"
                                variant="outline"
                                onClick={() => {
                                    setSelectedTime('');
                                    setDate(undefined);
                                    setDateInfo(null);
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
                                                {selectedTime} - {lastTime}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-start justify-center font-semibold">
                                        <Clock />
                                        {selectedInterval} минут
                                    </div>
                                    <ClientInfo setIsOpenSuccess={setIsOpenSuccess} />

                                    <Button
                                        className="cursor-pointer absolute bottom-[20px] self-center scale-75 md:scale-100"
                                        onClick={() => setIsOpenMap(true)}
                                    >
                                        Байршил харах <ChevronRight />
                                    </Button>
                                    <p className="text-note text-[12px] leading-4 tracking-normal mt-[10px] text-center">
                                        Энэ бол зүгээр нэг жишээ гэдгийг анхаарна уу. Тиймээс таны
                                        нэр, имэйлийг хадгалахгүй бөгөөд танд имэйлээр мэдэгдэл
                                        илгээхгүй.
                                    </p>
                                    <Button
                                        className="absolute bottom-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer"
                                        variant="outline"
                                        onClick={() => {
                                            setSelectedTime('');
                                            setDate(undefined);
                                            setDateInfo(null);
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
                                    <LocationMap lat={47.9181} lng={106.9206} />
                                    <p className="mt-[20px] text-note">
                                        Байршлын дэлгэрэнгүй тайлбар
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
            </div>
            {isOpenSuccess && (
                <div className="w-[100vw] min-h-screen pt-[60px] overflow-hidden">
                    <motion.div
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                        key="C"
                        className="h-[600px] mx-auto relative overflow-x-hidden overflow-y-scroll md:max-w-[450px] max-w-[350px] shadow-lg rounded-3xl flex flex-col items-center gap-[10px] justify-center md:py-[50px] pb-[20px] pt-[20px] px-[60px]"
                    >
                        <div className="text-green-700">
                            {' '}
                            <CircleCheck size={70} strokeWidth={1} />
                        </div>
                        <h1 className="font-semibold text-[20px]">Амжилттай</h1>
                        <p className="text-[15px] text-note text-center">
                            Манай захиалгын хуудасны жишээг туршиж үзсэнд баярлалаа.
                        </p>
                        <p className="text-[15px] text-note text-center">
                            Хэрэв энэ нь жинхэнэ захиалга байсан бол захиалгийн бүх дэлгэрэнгүй
                            мэдээллийг агуулсан календарийн урилгыг танд имэйлээр илгээх байсан.
                        </p>
                        <div className="border border-[#e5e7eb] rounded-sm px-[20px] py-[10px] flex flex-col items-start justify-center gap-[7px] mt-2">
                            <div className="flex items-start justify-center gap-2 text-green-700 font-[600] mt-[10px]">
                                <CalendarClock />
                                <div>
                                    <p>
                                        {dateInfo?.dayName}, {dateInfo?.monthName}{' '}
                                        {dateInfo?.dayNumber}
                                    </p>
                                    <p>
                                        {selectedTime} - {lastTime}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start justify-center font-semibold">
                                <Clock />
                                {selectedInterval} минут
                            </div>
                            <div className="flex gap-2 items-start justify-center font-[500]">
                                <MapPin />
                                {bookingLocation}
                            </div>
                        </div>
                        <p className="text-[15px] text-center">
                            Одоо өөрийнхөө захиалгын хуудсыг үүсгээрэй
                        </p>
                        <Button className="bg-[#4f46e5] hover:bg-[#4f46e0] text-[18px] cursor-pointer font-[600] rounded-3xl py-[25px] px-[25px]">
                            Эхэлцгээе
                        </Button>
                    </motion.div>
                </div>
            )}
        </>
    );
}
