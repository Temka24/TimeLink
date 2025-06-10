'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import api from '@/lib/axios';
import { signIn } from 'next-auth/react';
import MinimalLoading from '@/components/minimal-loader';

export default function Signup() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loadingCheck, setLoadingCheck] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const res = await fetch('/api/auth/session');
                const data = await res.json();

                if (Object.keys(data).length > 0) {
                    // Session байгаа → /dashboard руу
                    router.replace('/dashboard');
                }
            } catch (err) {
                console.error('Session шалгах үед алдаа гарлаа:', err);
            } finally {
                setLoadingCheck(false);
            }
        };

        checkSession();
    }, [router]);

    if (loadingCheck) return <p>Түр хүлээнэ үү...</p>;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !username || !password || !confirmPassword) {
            toast('Та бүх талбарыг оруулна уу');
            return;
        }
        if (password.length < 6) {
            toast('Нууц үг 6 аас их тэмдэгт байх ёстой');
            return;
        }
        if (password !== confirmPassword) {
            toast('Нууц үг таарахгүй байна');
            return;
        }

        try {
            setLoading(true);
            const res = await api.post('/signup', {
                email,
                username,
                password,
            });
            toast.success(res.data.msg);

            const response = await signIn('credentials', {
                email,
                password,
                redirect: false, // ⛔ redirect хийгүүлэхгүйн тулд false
            });

            if (response?.error) {
                toast.error(response.error); // 👈 authorize() доторх Error message
                return;
            }

            window.location.href = '/dashboard';
        } catch (err) {
            const error = err as AxiosError<{ msg: string }>;
            toast.error(error.response?.data?.msg || 'Бүртгэлтэй алдаа гарлаа');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="max-w-[500px] mx-auto h-[630px] shadow rounded-2xl mt-[40px] flex flex-col items-center justify-start p-[50px] gap-[20px] relative">
                <section className="flex items-center justify-center gap-2 cursor-pointer scale-75 mt-[-30px] mb-[30px]">
                    <Image src="/favicon.png" alt="logo" height={40} width={40} />
                    <div className="text-[24px] font-semibold flex">
                        <p className="text-[#914bf1]">Time</p>
                        <p>Link</p>
                    </div>
                </section>

                <h1 className="font-bold text-[25px]">Бүртгүүлэх</h1>
                <Button
                    type="button"
                    variant={'outline'}
                    className="flex items-center justify-center gap-[10px] w-full py-[20px] cursor-pointer"
                    onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                >
                    <Image src="/google_logo.webp" width={30} height={30} alt="logo" />
                    <p>Google ээр бүртгүүлэх</p>
                </Button>
                <div className="flex items-center justify-center gap-4 my-4 w-full">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm font-medium">Эсвэл</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col items-stretch justify-center gap-4"
                >
                    <div className="flex items-center justify-center gap-5">
                        <div>
                            <Label htmlFor="email">Имэйл</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Имэйл ээ оруулна уу"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-[6px]"
                            />
                        </div>
                        <div>
                            <Label htmlFor="username">Хэрэглэгчийн нэр</Label>
                            <Input
                                type="text"
                                id="username"
                                placeholder="Нэрээ оруулна уу"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-[6px]"
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="password">Нууц үг</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Нууц үгээ оруулна уу"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-[6px]"
                        />
                    </div>
                    <div>
                        <Label htmlFor="confirm-password">Нууц үгээ давтах</Label>
                        <Input
                            type="password"
                            id="confirm-password"
                            placeholder="Нууц үгээ давтана уу"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-[6px]"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="bg-main hover:bg-main/80 cursor-pointer w-full"
                        disabled={loading}
                    >
                        {loading ? <MinimalLoading /> : 'Бүртгүүлэх'}
                    </Button>
                </form>
                <div className="text-sm text-note text-nowrap flex items-center justify-center gap-1">
                    Бүртгэлтэй имэйл байгаа ?{' '}
                    <p
                        className="text-main font-bold cursor-pointer"
                        onClick={() => router.push('/login')}
                    >
                        {' '}
                        Нэвтрэх
                    </p>
                </div>
            </div>
        </>
    );
}
