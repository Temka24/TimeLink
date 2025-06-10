'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/axios';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { signOut } from 'next-auth/react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

import { useNavbarStore } from '@/store/navbarStore';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const currentSection = useNavbarStore((s) => s.current);
    const setCurrentSection = useNavbarStore((s) => s.switch);
    const pathname = usePathname();
    const router = useRouter();

    const checkPathname = () => {
        if (!(pathname === '/dashboard')) {
            router.push('/dashboard');
        }
    };

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const res = await api.get('/getUserInfo');
                return res.data.user;
            } catch (err) {
                const error = err as AxiosError<{ msg: string }>;

                const message = error.response?.data?.msg;
                toast.error(message);
                return null;
            }
        },
    });

    return (
        <>
            <nav className="flex items-center justify-between gap-[50px] h-[64px] w-full">
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
                                'text-[14px] relative cursor-pointer hover:text-black flex items-center justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-22px] duration-100 before:w-0 before:h-[2px]',
                                currentSection === 'Dashboard'
                                    ? 'before:w-full text-black before:bg-main'
                                    : 'text-note before:bg-note',
                            )}
                            onClick={() => {
                                setCurrentSection('Dashboard');
                                checkPathname();
                            }}
                        >
                            Хяналтын самбар
                        </div>
                        <div
                            className={clsx(
                                'text-[14px] relative cursor-pointer hover:text-black flex items-center text-nowrap justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-22px] duration-100 before:w-0 before:h-[2px]',
                                currentSection === 'Booking'
                                    ? 'before:w-full text-black before:bg-main'
                                    : 'text-note before:bg-note',
                            )}
                            onClick={() => {
                                setCurrentSection('Booking');
                                checkPathname();
                            }}
                        >
                            Захиалгууд
                        </div>
                        <div
                            className={clsx(
                                'text-[14px] relative cursor-pointer hover:text-black flex items-center text-nowrap justify-center before:content-[""] hover:before:w-full before:absolute  before:bottom-[-22px] duration-100 before:w-0 before:h-[2px]',
                                currentSection === 'FAQ'
                                    ? 'before:w-full text-black before:bg-main'
                                    : 'text-note before:bg-note',
                            )}
                            onClick={() => {
                                setCurrentSection('FAQ');
                                checkPathname();
                            }}
                        >
                            Түгээмэл асуулт
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
                            <span>{user?.username}</span>
                            <ChevronDown color="#6b7280" size="18px" />
                        </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[240px]">
                        <DropdownMenuLabel className="text-nowrap">{user?.email}</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <Dialog>
                            <DialogTrigger asChild>
                                <DropdownMenuItem
                                    className="cursor-pointer text-nowrap"
                                    onSelect={(e) => e.preventDefault()}
                                >
                                    Нэр солих
                                </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="w-[400px] p-[20px]">
                                <DialogHeader>
                                    <DialogTitle>Нэр өөрчлөх</DialogTitle>
                                </DialogHeader>
                                <div>
                                    <input type="text" readOnly value={user?.username} />
                                    <div className="flex items-center justify-end gap-3 font-[500]">
                                        <DialogClose asChild>
                                            <Button variant="outline">Хаах</Button>
                                        </DialogClose>
                                        <Button className="bg-main text-white">Хадгалах</Button>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>

                        <DropdownMenuItem
                            onClick={() => signOut({ callbackUrl: '/login' })}
                            className="cursor-pointer text-red-500"
                        >
                            Гарах
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </>
    );
}
