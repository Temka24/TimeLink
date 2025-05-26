'use client';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/sections/Navbar';
import Faq from '@/components/sections/Faq';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Footer from '@/components/sections/Footer';
import {
    UsersRound,
    Plus,
    Clock,
    MapPin,
    Copy,
    SquareArrowOutUpRight,
    SquarePen,
    Trash2,
    Share2,
    Ellipsis,
    Check,
} from 'lucide-react';

import { useNavbarStore } from '@/store/navbarStore';
import { motion, AnimatePresence } from 'motion/react';

export type Booking = {
    name: string;
    duration: number;
    location: string;
    bookingLink: string;
    total: number;
};

export default function DashboardPage() {
    const roueter = useRouter();
    const [copied, setCopied] = useState<boolean>(false);
    const currentSection = useNavbarStore((s) => s.current);

    const copyAction = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err: unknown) {
            console.error(err);
        }
    };

    const demoUserName = 'Temka B';
    const demoBooking: Booking[] = [
        {
            name: 'Цаг товлолт уулзалт',
            duration: 30,
            location: 'Central tower 12 давхар 1201',
            bookingLink:
                'https://timelink/link/bookingid1111111111111111111111111111111111111111111111111111',
            total: 0,
        },
        {
            name: 'Тэмүүжинтэй уулзалт',
            duration: 60,
            location: 'Twin tower 2 давхар 207',
            bookingLink: 'https://timelink/link/bookingid2',
            total: 2,
        },
        {
            name: 'Цаг товлолт ',
            duration: 90,
            location: 'Ub Hotel 5 давхар 501',
            bookingLink: 'https://timelink/link/bookingid3',
            total: 5,
        },
    ];

    return (
        <>
            <div className="w-[100vw] min-h-screen overflow-x-hidden">
                <div className="-z-10 absolute h-[64px] w-full shadow-md"></div>
                <div className="max-w-[1200px] w-screen mx-auto relative px-[40px] pb-[40px] min-h-screen overflow-x-hidden">
                    <Navbar />
                    <AnimatePresence mode="wait">
                        {currentSection === 'Dashboard' && (
                            <motion.div
                                className="pt-[50px] min-h-screen overflow-x-hidden w-full"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.4 }}
                                key="Dashboard"
                            >
                                <div className="flex items-center justify-between px-[20px]">
                                    <div className="flex items-center justify-center gap-2">
                                        <Image
                                            src="/avatar.png"
                                            alt="avatar"
                                            height={45}
                                            width={45}
                                        />
                                        <span>{demoUserName}</span>
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="border-dotted bg-hov-color cursor-pointer"
                                        onClick={() => roueter.push('/dashboard/new')}
                                    >
                                        <Plus size="25px" /> Захиалах хуудас үүсгэх
                                    </Button>
                                </div>
                                <section className="mt-[20px] flex flex-col justify-start items-stretch gap-[20px]">
                                    {demoBooking.map((booking: Booking, i: number) => (
                                        <div
                                            key={i}
                                            className="border border-l-4 border-l-demo-left rounded-xl border-hov-color flex items-center justify-start relative px-[24px] py-[16px]"
                                        >
                                            <div className="flex flex-col justify-start items-start gap-1.5">
                                                <div className="text-main font-semibold">
                                                    {booking.name}
                                                </div>
                                                <div className="flex items-center justify-start text-note gap-[16px]">
                                                    <span className="flex text-[15px] items-center gap-1 justify-center">
                                                        <UsersRound size={16} />
                                                        {booking.total} захиалга байна
                                                    </span>
                                                    <span className="flex text-[15px] items-center gap-1 justify-center">
                                                        <Clock size={16} /> {booking.duration} минут
                                                    </span>
                                                    <span className="flex text-[15px] items-center gap-1 justify-center">
                                                        <MapPin size={16} /> {booking.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-around absolute right-[26px] gap-[20px]">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button className="cursor-pointer">
                                                            <Share2 /> Линк авах
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="w-[300px] p-[20px]">
                                                        <DialogHeader>
                                                            <DialogTitle>
                                                                Таны захиалгын линк
                                                            </DialogTitle>
                                                        </DialogHeader>
                                                        <DropdownMenuSeparator />
                                                        <div
                                                            className={clsx(
                                                                'rounded-xl border cursor-pointer border-b-transparent overflow-hidden relative',
                                                                copied
                                                                    ? 'border-green-600'
                                                                    : 'border-main',
                                                            )}
                                                        >
                                                            <p
                                                                className={clsx(
                                                                    'px-[16px] py-[12px] break-words',
                                                                    copied
                                                                        ? 'text-green-600'
                                                                        : 'text-main',
                                                                )}
                                                            >
                                                                {booking.bookingLink}
                                                            </p>

                                                            <div
                                                                className={clsx(
                                                                    'flex items-center px-[16px] py-[12px] justify-center gap-2 hover:opacity-90 h-auto',
                                                                    copied
                                                                        ? 'bg-green-600'
                                                                        : 'bg-main',
                                                                )}
                                                                onClick={() =>
                                                                    copyAction(booking.bookingLink)
                                                                }
                                                            >
                                                                {copied ? (
                                                                    <p className="flex items-center justify-center gap-2">
                                                                        <Check /> Copied!
                                                                    </p>
                                                                ) : (
                                                                    <p className="flex items-center justify-center gap-2">
                                                                        <Copy /> Copy link
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                                <Link href={booking.bookingLink}>
                                                    <Button className="cursor-pointer">
                                                        <SquareArrowOutUpRight /> Харах
                                                    </Button>
                                                </Link>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button className="cursor-pointer">
                                                            <Ellipsis />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuItem className="cursor-pointer">
                                                            <SquarePen /> Засах
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="cursor-pointer text-red-500">
                                                            <Trash2 className="text-red-500" />{' '}
                                                            Устгах
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </div>
                                    ))}
                                </section>
                            </motion.div>
                        )}

                        {currentSection === 'Booking' && (
                            <motion.div
                                className="pt-[50px] min-h-screen overflow-x-hidden w-full"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                key="Booking"
                            >
                                Booking
                            </motion.div>
                        )}

                        {currentSection === 'FAQ' && <Faq />}
                    </AnimatePresence>
                    <Footer />
                </div>
            </div>
        </>
    );
}
