'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import clsx from 'clsx';

const weekdays = ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'];

const months = [
    'Нэгдүгээр сар',
    'Хоёрдугаар сар',
    'Гуравдугаар сар',
    'Дөрөвдүгээр сар',
    'Тавдугаар сар',
    'Зургаадугаар сар',
    'Долдугаар сар',
    'Наймдугаар сар',
    'Есдүгээр сар',
    'Аравдугаар сар',
    'Арваннэгдүгээр сар',
    'Арванхоёрдугаар сар',
];

const demoTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function DemoPage() {
    const [date, setDate] = useState<Date | undefined>(undefined);
   
    const [dateInfo, setDateInfo] = useState<{
        dayName: string;
        monthName: string;
        dayNumber: number;
    } | null>(null);

    const [selectedInterval, setSelectedInterval] = useState<number>(30);
    const [selectedTime, setSelectedTime] = useState('11:00');

    useEffect(() => {
        if (date) {
            setDateInfo({
                dayName: weekdays[date?.getDay()],
                monthName: months[date?.getMonth()],
                dayNumber: date?.getDate(),
            });
        }
    }, [date]);

    return (
        <>
            <div className="w-[100vw] min-h-screen pt-[60px]">
                <div className="max-w-[800px] h-[600px] mx-auto relative overflow-hidden shadow-lg rounded-3xl flex">
                    <div className="px-[20px] bg-demo-left pt-[30px] flex flex-col gap-[15px] min-w-1/2 rounded-2xl items-center justify-start">
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
                        <p className="mt-[30px] text-[12px] text-note">
                            Таны захиалгын хуудас ингэж харагдах болно.
                        </p>
                    </div>
                    <div className="px-[40px] pt-[30px] flex flex-col gap-[10px] items-center justify-start">
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
                                        selectedInterval === 30 ? 'bg-[#e5e7eb]' : 'bg-[#f3f4f6]',
                                    )}
                                >
                                    30 минут
                                </div>
                                <div
                                    onClick={() => setSelectedInterval(60)}
                                    className={clsx(
                                        'w-1/2 text-center rounded-sm py-[7px] hover:bg-[#e5e7eb] cursor-pointer',
                                        selectedInterval === 60 ? 'bg-[#e5e7eb]' : 'bg-[#f3f4f6]',
                                    )}
                                >
                                    60 минут
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-[20px]">
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
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet
                            aliquid praesentium aliquam dignissimos eligendi eius repudiandae.
                            Blanditiis fuga facere et incidunt accusamus quod vel corporis
                            praesentium. Quia, fugit soluta?
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
