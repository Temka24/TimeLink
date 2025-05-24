'use client';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, UsersRound, Plus, Clock, MapPin, Copy, SquareArrowOutUpRight, SquarePen, Trash2 } from 'lucide-react';

export type Booking = {
    name: string;
    duration: number;
    location: string;
    bookingLink: string;
};

export default function DashboardPage() {
    const [currentSection, setCurrentSection] = useState<'Dashboard' | 'Booking'>('Dashboard');

    const demoUserName = 'Temka B';
    const demoEmail = 'thxdeadshotxht@gmail.com';
    const demoBooking: Booking[] = [
        {
            name: 'Цаг товлолт уулзалт',
            duration: 30,
            location: 'Central tower 12 давхар 1201',
            bookingLink: 'https://timelink/link/bookingid1',
        },
        {
            name: 'Тэмүүжинтэй уулзалт',
            duration: 60,
            location: 'Twin tower 2 давхар 207',
            bookingLink: 'https://timelink/link/bookingid2',
        },
        {
            name: 'Цаг товлолт ',
            duration: 90,
            location: 'Ub Hotel 5 давхар 501',
            bookingLink: 'https://timelink/link/bookingid3',
        },
    ];

    return (
        <>
            <div className="w-[100vw] min-h-screen overflow-hidden">
                <div className="-z-10 absolute h-[64px] w-full shadow-md"></div>
                <div className="max-w-[1200px] w-screen mx-auto relative overflow-x-hidden border px-[40px] pb-[40px]">
                    <nav className="flex items-center justify-between gap-[50px] h-[64px]">
                        <div className="flex items-center justify-center gap-[55px]">
                            <section className="flex items-center justify-center gap-2">
                                <Image src="/favicon.png" alt="logo" height={35} width={35} />
                                <div className="text-[20px] font-semibold flex">
                                    <p className="text-main">Time</p>
                                    <p>Link</p>
                                </div>
                            </section>
                            <div className="flex items-stretch justify-center gap-5">
                                <div
                                    className={clsx(
                                        'text-[14px] relative cursor-pointer hover:text-black flex items-center justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-21px] duration-100 before:w-0 before:h-[2px]',
                                        currentSection === 'Dashboard' ? 'before:w-full text-black before:bg-main' : 'text-note before:bg-note'
                                    )}
                                    onClick={() => setCurrentSection('Dashboard')}
                                >
                                    Хяналтын самбар
                                </div>
                                <div
                                   className={clsx(
                                        'text-[14px] relative cursor-pointer hover:text-black flex items-center justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-21px] duration-100 before:w-0 before:h-[2px]',
                                        currentSection === 'Booking' ? 'before:w-full text-black before:bg-main' : 'text-note before:bg-note'
                                    )}
                                    onClick={() => setCurrentSection('Booking')}
                                >
                                    Захиалгууд
                                </div>
                            </div>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <span className="cursor-pointer flex items-center justify-center gap-2.5 hover:bg-hov-color p-1 rounded-md duration-300">
                                    <Image
                                        src="/avatar.png"
                                        alt="avatar"
                                        height={0}
                                        width={35}
                                        className="rounded-full object-cover h-auto"
                                    />
                                    <span>{demoUserName}</span>
                                    <ChevronDown color="#6b7280" size="18px" />
                                </span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[240px]">
                                <DropdownMenuLabel className="text-nowrap">
                                    {demoEmail}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer text-nowrap">
                                    Нэр солих
                                </DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer text-red-500">
                                    Гарах
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                    <div className="pt-[50px]">
                        <div className="flex items-center justify-between px-[20px]">
                            <div className="flex items-center justify-center gap-2">
                                <Image src="/avatar.png" alt="avatar" height={45} width={45} />
                                <span>{demoUserName}</span>
                            </div>
                            <Button
                                variant="outline"
                                className="border-dotted bg-hov-color cursor-pointer"
                            >
                                <Plus size='25px'/> Захиалах хуудас үүсгэх
                            </Button>
                        </div>
                        <section className="mt-[20px] flex flex-col justify-start items-stretch gap-[20px]">
                            {demoBooking.map((booking: Booking, i: number) => (
                                <div
                                    key={i}
                                    className="shadow-md border-l-4 border-note flex items-center justify-around"
                                >
                                    <div className='flex justify-center items-start gap-1.5'>
                                        <div>{booking.name}</div>
                                        <div>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
