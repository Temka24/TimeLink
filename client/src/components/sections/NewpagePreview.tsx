'use client';
import { EventFormType } from '@/app/dashboard/new/page';
import { useWatch, Control } from 'react-hook-form';
import Image from 'next/image';
import { MonitorDot, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarClock, ChevronLeft, Clock, ChevronRight, Check } from 'lucide-react';
import { addMinutes, format, parse } from 'date-fns';
import ClientInfo from '@/components/form/ClientInfo';
import { Button } from '@/components/ui/button';
import LocationMap from '@/components/features/LocationMap';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from '@/components/ui/calendar';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';

type Props = {
    control: Control<EventFormType>;
    previewImage: string | null;
};

const demoTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

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

export default function NewPagePreview({ control, previewImage }: Props) {
    const values = useWatch({ control }) as EventFormType;
    const [device, setDevice] = useState<'mobile' | 'desktop'>('desktop');

    const [isOpenConfirmSection, setIsOpenConfirmSection] = useState<boolean>(false);
    const [isOpenMap, setIsOpenMap] = useState<boolean>(false);
    const [isOpenSuccess, setIsOpenSuccess] = useState<boolean>(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [dateInfo, setDateInfo] = useState<{
        dayName: string;
        monthName: string;
        dayNumber: number;
    } | null>(null);
    const [selectedInterval, setSelectedInterval] = useState<number>(30);
    const [selectedTime, setSelectedTime] = useState('');
    const [lastTime, setLastTime] = useState('');

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
            <section className="flex items-center justify-center gap-2 shadow py-1 px-3 rounded-sm w-fit h-fit mx-auto mt-[30px]">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className={cn(
                                'cursor-pointer',
                                device === 'mobile' ? 'text-[#914bf1]' : 'text-note',
                            )}
                            onClick={() => setDevice('mobile')}
                        >
                            <Smartphone />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Ухаалаг утсан дээр харагдах</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className={cn(
                                'cursor-pointer',
                                device === 'desktop' ? 'text-[#914bf1]' : 'text-note',
                            )}
                            onClick={() => setDevice('desktop')}
                        >
                            <MonitorDot />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Компьютер дээр харагдах</p>
                    </TooltipContent>
                </Tooltip>
            </section>

            <section className="w-full absolute scale-65">
                <div className={cn('w-full pt-[60px] absolute -left-[130px]')}>
                    <div className="w-[800px] h-[600px] relative overflow-hidden shadow-lg rounded-3xl flex">
                        <div
                            className={cn(
                                'px-[20px] bg-demo-left pt-[30px] flex flex-col gap-[15px] duration-500 rounded-2xl items-center justify-start',
                                isOpenConfirmSection
                                    ? 'w-full md:min-w-1/3'
                                    : 'w-full md:min-w-1/2',
                                date && 'hidden md:flex',
                            )}
                        >
                            <div className="w-[70px] aspect-square border-white border-3 rounded-full overflow-hidden">
                                <Image
                                    src="/avatar.png"
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
                                        const isWeekend =
                                            date.getDay() === 0 || date.getDay() === 6; // Sunday = 0

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
                                className={cn(
                                    'px-[40px] pt-[30px] items-center flex flex-col gap-[10px] justify-start md:min-w-1/2 w-full',
                                    !date && 'md:flex md:flex-col md:gap-[10px] hidden',
                                )}
                            >
                                {dateInfo ? (
                                    <div className="text-[15px] bg-[#f3f4f6] w-full py-[8px] rounded-sm text-center font-[500]">
                                        {dateInfo.dayName}, {dateInfo.monthName}{' '}
                                        {dateInfo.dayNumber}
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
                                            className={cn(
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
                                            className={cn(
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
                                                className={cn(
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
                                            Энэ бол зүгээр нэг жишээ гэдгийг анхаарна уу. Тиймээс
                                            таны нэр, имэйлийг хадгалахгүй бөгөөд танд имэйлээр
                                            мэдэгдэл илгээхгүй.
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
                    <Dialog defaultOpen>
                        <DialogContent className="[&>button.absolute]:hidden w-fit h-fit">
                            <DialogHeader>
                                <DialogTitle></DialogTitle>
                            </DialogHeader>
                            <div>
                                <div className="text-green-800 bg-green-200 p-2.5 rounded-full w-fit h-fit mx-auto">
                                    <Check />
                                </div>
                                <h1 className="font-semibold text-center text-lg mt-1.5">
                                    Туршиж үзсэнд баярлалаа
                                </h1>
                                <p className="text-sm text-center text-note mt-1">
                                    Одоо жинхэнэ линкээ үргэлжлүүлцгээе
                                </p>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button
                                        className="cursor-pointer"
                                        onClick={() => setIsOpenSuccess(false)}
                                    >
                                        Буцах
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </section>
            <h1 className="text-center mt-[500px] text-[12px] text-note italic">
                Таны захиалгын хуудас хүмүүст харагдах байдал
            </h1>
        </>
    );
}
