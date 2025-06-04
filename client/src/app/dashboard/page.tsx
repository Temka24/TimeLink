'use client';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/sections/Navbar';
import Faq from '@/components/sections/Faq';
import { Button } from '@/components/ui/button';
import Footer from '@/components/sections/Footer';
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { useNavbarStore } from '@/store/navbarStore';
import { motion, AnimatePresence } from 'motion/react';
import { addMinutes, format, formatDistanceToNowStrict } from 'date-fns';
import { mn } from 'date-fns/locale';

export type BookingPage = {
    name: string;
    duration: number;
    location: string;
    bookingLink: string;
    total: number;
};

export type Booking = {
    bookingName: string;
    isoString: string;
    inviteeName: string;
    inviteeEmail: string;
    location: string;
    lng: number;
    lat: number;
    duration: number;
    createdAt: string;
};

export default function DashboardPage() {
    const roueter = useRouter();
    const [copied, setCopied] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');
    const currentSection = useNavbarStore((s) => s.current);
    const [currentOpenTab, setCurrentOpenTab] = useState<'upcoming' | 'pending' | 'past'>(
        'upcoming',
    );

    const [selectedBooking, setSelectedBooking] = useState('Бүх');
    const [triggeredSearchText, setTriggeredSearchText] = useState('');

    const [selectedDetailBooking, setSelectedDetailBooking] = useState<string>('');

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

    const filterBookingsFunc = () => {
        let filteredBookings = demoBookings.sort(
            (a: Booking, b: Booking) =>
                new Date(a.isoString).getTime() - new Date(b.isoString).getTime(),
        );
        const now = new Date();

        switch (currentOpenTab) {
            case 'upcoming':
                filteredBookings = filteredBookings.filter(
                    (book) => new Date(book.isoString) > now,
                );
                break;
            case 'pending':
                filteredBookings = filteredBookings.filter((book) => {
                    const start = new Date(book.isoString);
                    const end = addMinutes(start, book.duration);
                    return start <= now && end > now;
                });
                break;
            case 'past':
                filteredBookings = filteredBookings.filter((book) => {
                    const end = addMinutes(new Date(book.isoString), book.duration);
                    return end < now;
                });
                break;
        }

        if (!(selectedBooking === 'Бүх')) {
            filteredBookings = filteredBookings.filter(
                (book) => book.bookingName === selectedBooking,
            );
        }

        if (triggeredSearchText) {
            filteredBookings = filteredBookings.filter(
                (book) =>
                    book.inviteeName
                        .toLocaleLowerCase()
                        .includes(triggeredSearchText.toLocaleLowerCase()) ||
                    book.inviteeEmail
                        .toLocaleLowerCase()
                        .includes(triggeredSearchText.toLocaleLowerCase()),
            );
        }

        const groupBookingByDate = (bookings: Booking[]) => {
            return bookings.reduce(
                (acc, book) => {
                    if (!book.isoString) return acc;

                    const date = new Date(book.isoString);
                    const groupKey = format(date, 'EEEE, d MMMM yyyy', { locale: mn });

                    if (!acc[groupKey]) acc[groupKey] = [];
                    acc[groupKey].push(book);

                    return acc;
                },
                {} as Record<string, Booking[]>,
            );
        };

        const groupedBookings = groupBookingByDate(filteredBookings);

        return groupedBookings;
    };

    const demoUserName = 'Temka B';
    const demoBookingpages: BookingPage[] = [
        {
            name: 'Meeting 1',
            duration: 30,
            location: 'Central tower 12 давхар 1201',
            bookingLink:
                'https://timelink/link/bookingid1111111111111111111111111111111111111111111111111111',
            total: 0,
        },
        {
            name: 'Meeting 2 with Temka in barber booking okey broa homei a',
            duration: 60,
            location: 'Twin tower 2 давхар 207',
            bookingLink: 'https://timelink/link/bookingid2',
            total: 2,
        },
        {
            name: 'Meeting 3',
            duration: 90,
            location: 'Ub Hotel 5 давхар 501',
            bookingLink: 'https://timelink/link/bookingid3',
            total: 5,
        },
    ];

    const demoBookings: Booking[] = [
        {
            bookingName: 'Meeting 1',
            isoString: '2025-05-29T09:00:00.000Z',
            inviteeEmail: 'bymb@example.com',
            inviteeName: 'Bymb',
            location: 'Central tower',
            lat: 0,
            lng: 0,
            duration: 30,
            createdAt: '2025-05-29T10:00:00.000Z',
        },
        {
            bookingName: 'Meeting 1',
            isoString: '2025-05-30T10:00:00.000Z',
            inviteeEmail: 'test@example.com',
            inviteeName: 'Temka',
            location: 'Central tower',
            lat: 0,
            lng: 0,
            duration: 30,
            createdAt: '2025-05-29T10:00:00.000Z',
        },
        {
            bookingName: 'Meeting 3',
            isoString: '2025-05-30T16:00:00.000Z',
            inviteeEmail: 'bymb@example.com',
            inviteeName: 'Bymb',
            location: 'Central tower',
            lat: 0,
            lng: 0,
            duration: 90,
            createdAt: '2025-05-27T10:00:00.000Z',
        },
        {
            bookingName: 'Meeting 3',
            isoString: '2025-05-29T10:00:00.000Z',
            inviteeEmail: 'bymb@example.com',
            inviteeName: 'Bymb',
            location: 'Central tower',
            lat: 0,
            lng: 0,
            duration: 30,
            createdAt: '2025-05-27T14:00:00.000Z',
        },
        {
            bookingName: 'Meeting 2 with Temka in barber booking okey broa homei a',
            isoString: '2025-05-28T10:00:00.000Z',
            inviteeEmail: 'bymb@example.com',
            inviteeName: 'Bymb',
            location: 'Central tower',
            lat: 0,
            lng: 0,
            duration: 30,
            createdAt: '2025-05-28T11:00:00.000Z',
        },
        {
            bookingName: 'Meeting 2 with Temka in barber booking okey broa homei a',
            isoString: '2025-05-26T10:00:00.000Z',
            inviteeEmail: 'bymb@example.com',
            inviteeName: 'Bymb',
            location: 'Central tower',
            lat: 0,
            lng: 0,
            duration: 30,
            createdAt: '2025-05-26T11:00:00.000Z',
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
                                        <Plus size="25px" /> Захиалах хуудас нэмэх
                                    </Button>
                                </div>
                                <div className="mt-[30px] text-[14px]">
                                    Таны үүсгэсэн цаг захиалах хуудсууд
                                </div>
                                <section className="mt-[10px] flex flex-col justify-start items-stretch gap-[20px]">
                                    {demoBookingpages.map((booking: BookingPage, i: number) => (
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
                                <div className="flex items-center justify-start gap-[100px]">
                                    <div className="w-[300px] overflow-x-scroll custom-scroll">
                                        <Select
                                            value={selectedBooking}
                                            onValueChange={setSelectedBooking}
                                            defaultValue={selectedBooking}
                                        >
                                            <SelectTrigger>
                                                <SelectValue
                                                    className="overflow-x-scroll overflow-y-hidden"
                                                    placeholder="Бүх захиалах хуудсууд"
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem
                                                        value="Бүх"
                                                        className="cursor-pointer font-extrabold"
                                                    >
                                                        Бүх захиалах хуудсууд
                                                    </SelectItem>
                                                    {demoBookingpages.map((book, i: number) => (
                                                        <SelectItem
                                                            value={book.name}
                                                            key={i}
                                                            className="cursor-pointer"
                                                        >
                                                            {book.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex items-center justify-center rounded-sm border overflow-hidden">
                                        <input
                                            type="text"
                                            value={searchText}
                                            onChange={(e) => setSearchText(e.target.value.trim())}
                                            placeholder="Нэр эсвэл имэйл ээр хайх"
                                            className="px-2.5 py-1.5 text-[14px] focus:outline-none"
                                        />
                                        <Button
                                            className="rounded-none cursor-pointer"
                                            onClick={() => setTriggeredSearchText(searchText)}
                                        >
                                            Хайх
                                        </Button>
                                    </div>
                                </div>
                                <div className="border-b border-hov-color flex items-center justify-start gap-[60px] mt-[20px] p-[10px] ml-4 font-[600]">
                                    <div
                                        className={clsx(
                                            'text-[14px] relative cursor-pointer hover:text-black flex items-center justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-11px] duration-100 before:w-0 before:h-[1px]',
                                            currentOpenTab === 'upcoming'
                                                ? 'before:w-full text-main before:bg-main '
                                                : 'text-note before:bg-note',
                                        )}
                                        onClick={() => {
                                            setCurrentOpenTab('upcoming');
                                        }}
                                    >
                                        Удахгүй
                                    </div>
                                    <div
                                        className={clsx(
                                            'text-[14px] relative cursor-pointer hover:text-black flex items-center justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-11px] duration-100 before:w-0 before:h-[1px]',
                                            currentOpenTab === 'pending'
                                                ? 'before:w-full text-main before:bg-main'
                                                : 'text-note before:bg-note',
                                        )}
                                        onClick={() => {
                                            setCurrentOpenTab('pending');
                                        }}
                                    >
                                        Яг одоо
                                    </div>
                                    <div
                                        className={clsx(
                                            'text-[14px] relative cursor-pointer hover:text-black flex items-center justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-11px] duration-100 before:w-0 before:h-[1px]',
                                            currentOpenTab === 'past'
                                                ? 'before:w-full text-main before:bg-main'
                                                : 'text-note before:bg-note',
                                        )}
                                        onClick={() => {
                                            setCurrentOpenTab('past');
                                        }}
                                    >
                                        Өнгөрсөн
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch justify-start gap-7 mt-[20px]">
                                    {Object.values(filterBookingsFunc()).flat().length === 0 ? (
                                        <div className="ml-2.5">Захиалга байхгүй байна</div>
                                    ) : (
                                        Object.entries(filterBookingsFunc()).map(
                                            ([dateStr, bookings]) => (
                                                <div
                                                    key={dateStr}
                                                    className="flex flex-col items-center justify-center gap-0 relative"
                                                >
                                                    <p className="text-[16px] font-[600] mb-2 self-start">
                                                        {dateStr}
                                                    </p>

                                                    {bookings.map((b: Booking, i: number) => {
                                                        const start = format(
                                                            new Date(b.isoString),
                                                            'HH:mm',
                                                        );
                                                        const end = format(
                                                            addMinutes(
                                                                new Date(b.isoString),
                                                                b.duration,
                                                            ),
                                                            'HH:mm',
                                                        );

                                                        return (
                                                            <div
                                                                key={i}
                                                                className="mb-1 text-sm w-full border-l-[5px] shadow rounded-md border-demo-left px-2.5 py-3.5 relative"
                                                            >
                                                                <div className="flex items-start justify-start pl-5 gap-[20%]">
                                                                    <div>
                                                                        {start} - {end}
                                                                    </div>
                                                                    <div className="flex flex-col items-start justify-center gap-1">
                                                                        <div className="flex items-center justify-center gap-0.5">
                                                                            <p>{b.inviteeName}</p>
                                                                            <p>{b.inviteeEmail}</p>
                                                                        </div>
                                                                        <div>{b.bookingName}</div>
                                                                    </div>
                                                                    <Button
                                                                        onClick={() => {
                                                                            const val =
                                                                                selectedDetailBooking ===
                                                                                b.isoString
                                                                                    ? ''
                                                                                    : b.isoString;
                                                                            setSelectedDetailBooking(
                                                                                val,
                                                                            );
                                                                        }}
                                                                        className="absolute right-[10%] top-3.5 cursor-pointer"
                                                                    >
                                                                        Дэлгэрэнгүй
                                                                    </Button>
                                                                </div>
                                                                {selectedDetailBooking ===
                                                                    b.isoString && (
                                                                    <div className="pl-5 flex flex-col items-stretch justify-start gap-2.5 relative mt-[30px]">
                                                                        <hr />
                                                                        <div className="flex items-center justify-start gap-[25%]">
                                                                            <p className="font-[500] text-demo-left">
                                                                                Захиалагч
                                                                            </p>
                                                                            <p>{b.inviteeName}</p>
                                                                        </div>
                                                                        <div className="flex items-center justify-start gap-[25%]">
                                                                            <p className="font-[500] text-demo-left">
                                                                                Имэйл
                                                                            </p>
                                                                            <p>{b.inviteeEmail}</p>
                                                                        </div>
                                                                        <div className="flex items-center justify-start gap-[25%]">
                                                                            <p className="font-[500] text-demo-left">
                                                                                Байршил
                                                                            </p>
                                                                            <p>{b.location}</p>
                                                                        </div>

                                                                        <p className="font-[500] text-demo-left ml-[10%]">
                                                                            {formatDistanceToNowStrict(
                                                                                new Date(
                                                                                    b.isoString,
                                                                                ),
                                                                                { locale: mn },
                                                                            )}{' '}
                                                                            ийн өмнө
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ),
                                        )
                                    )}
                                </div>
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
