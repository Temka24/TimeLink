'use client';
import { EventFormType } from '@/app/dashboard/new/page';
import { useWatch, Control } from 'react-hook-form';
import Image from 'next/image';
import { MonitorDot, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarClock, ChevronLeft, Clock, ChevronRight, Check } from 'lucide-react';
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
import {
    set,
    addMinutes,
    isAfter,
    isBefore,
    areIntervalsOverlapping,
    format,
    parse,
} from 'date-fns';

type Props = {
    control: Control<EventFormType>;
    previewImage: string | null;
};

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
    const [demoSlots, setDemoSlots] = useState<string[]>([]);
    const [selectedDuration, setSelectedDuration] = useState<number>(0);
    const [selectedTime, setSelectedTime] = useState('');
    const [lastTime, setLastTime] = useState('');

    const generateFilteredSlots = (
        date: Date | undefined,
        startHour: number,
        startMinute: number,
        endHour: number,
        endMinute: number,
        startBreakHour: number,
        startBreakMinute: number,
        endBreakHour: number,
        endBreakMinute: number,
        interval: number,
        slotDuration: number,
    ): string[] => {
        const slots: string[] = [];

        if (!date || !slotDuration) return slots;

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
            hours: startBreakHour,
            minutes: startBreakMinute,
            seconds: 0,
            milliseconds: 0,
        });
        const breakEnd = set(date, {
            hours: endBreakHour,
            minutes: endBreakMinute,
            seconds: 0,
            milliseconds: 0,
        });

        while (isBefore(current, end)) {
            const slotEnd = addMinutes(current, slotDuration);
            const isOverLappingBreak = areIntervalsOverlapping(
                { start: current, end: slotEnd },
                { start: breakStart, end: breakEnd },
            );

            if (!isOverLappingBreak && !isAfter(slotEnd, end)) {
                slots.push(format(current, 'HH:mm'));
            }
            current = addMinutes(current, interval);
        }

        return slots;
    };

    useEffect(() => {
        const slots = generateFilteredSlots(
            date,
            values?.startHour,
            values?.startMinute,
            values?.endHour,
            values?.endMinute,
            values?.startBreakHour,
            values?.startBreakMinute,
            values?.endBreakHour,
            values?.endBreakMinute,
            values.increment,
            selectedDuration,
        );
        setDemoSlots(slots);
    }, [
        date,
        selectedDuration,
        values.startHour,
        values.startMinute,
        values.endHour,
        values.endMinute,
        values.startBreakHour,
        values.startBreakMinute,
        values.endBreakHour,
        values.endBreakMinute,
        values.increment,
    ]);

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
        if (selectedTime && date && selectedDuration !== 0) {
            setIsOpenConfirmSection(true);
        } else {
            setIsOpenConfirmSection(false);
        }
    }, [selectedTime, date, selectedDuration]);

    useEffect(() => {
        if (!selectedDuration || !selectedTime) {
            return;
        }
        const parsedTime = parse(selectedTime, 'HH:mm', new Date());
        const updatedTime = addMinutes(parsedTime, selectedDuration);
        const result = format(updatedTime, 'HH:mm');
        setLastTime(result);
    }, [selectedDuration, selectedTime]);

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
                <div
                    className={cn(
                        'w-full pt-[60px] absolute',
                        device === 'mobile' ? 'left-[13%]' : '-left-[130px]',
                    )}
                >
                    <div
                        className={cn(
                            'h-[600px] relative overflow-hidden shadow-lg rounded-3xl flex',
                            device === 'mobile' ? 'w-[400px]' : 'w-[800px]',
                        )}
                    >
                        <div
                            className={cn(
                                'px-[20px] bg-demo-left pt-[30px] flex flex-col gap-[15px] duration-500 rounded-2xl items-center justify-start',
                                isOpenConfirmSection
                                    ? device === 'mobile'
                                        ? 'w-full'
                                        : 'min-w-1/3'
                                    : device === 'mobile'
                                      ? 'w-full '
                                      : 'min-w-1/2',
                                date && (device === 'mobile' ? 'hidden ' : 'flex'),
                            )}
                        >
                            <div className="w-[70px] aspect-square border-white border-3 rounded-full overflow-hidden">
                                <Image
                                    src={previewImage || '/avatar.png'}
                                    alt="Profile"
                                    width={70}
                                    height={70}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 className="text-white text-[22px]">
                                {values.title || 'Цаг товлолтоо'}
                            </h1>
                            {!isOpenConfirmSection ? (
                                <Calendar
                                    mode="single"
                                    disabled={(date) => {
                                        const day = date.getDay(); // 0-6
                                        return !values.activeDays[day]; // true = disable
                                    }}
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md shadow-md mt-[50px]"
                                />
                            ) : (
                                values.eventDescription && (
                                    <div>
                                        <p className="text-[14px] mt-4 text-white text-center h-full text-wrap break-words break-after-all">
                                            {values.eventDescription}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                        {!isOpenConfirmSection ? (
                            <div
                                className={cn(
                                    'px-[40px] pt-[30px] items-center flex flex-col gap-[10px] justify-start',
                                    device === 'mobile' ? 'w-full' : 'min-w-1/2',
                                    !date &&
                                        (device === 'mobile'
                                            ? 'hidden'
                                            : 'flex flex-col gap-[10px]'),
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
                                        {values.durations.map((duration, i: number) => (
                                            <div
                                                key={i}
                                                onClick={() => setSelectedDuration(duration)}
                                                className={cn(
                                                    'w-1/2 text-center rounded-sm py-[7px] hover:bg-[#e5e7eb] cursor-pointer',
                                                    selectedDuration === duration
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
                                        {demoSlots.length !== 0 ? (
                                            demoSlots.map((time, i: number) => (
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
                                            ))
                                        ) : (
                                            <p className="text-[14px] text-note text-center mt-[100px] mx-[40px]">
                                                Он сар үргэлжлэх хугацаа сонгоно уу
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <Button
                                    className={cn(
                                        'absolute bottom-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer',
                                        device === 'desktop' && 'hidden',
                                    )}
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
                                            {selectedDuration} минут
                                        </div>
                                        <ClientInfo setIsOpenSuccess={setIsOpenSuccess} />

                                        <Button
                                            className={cn(
                                                'cursor-pointer absolute bottom-[20px] self-center',
                                                device === 'mobile' ? 'scale-75' : 'scale-100',
                                            )}
                                            onClick={() => setIsOpenMap(true)}
                                        >
                                            Байршил харах <ChevronRight />
                                        </Button>
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
                                        <LocationMap
                                            lat={values.location.lat}
                                            lng={values.location.lng}
                                        />
                                        <p className="mt-[20px] text-note">
                                            {values.locationDescription}
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
