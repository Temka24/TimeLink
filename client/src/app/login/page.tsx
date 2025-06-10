'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import MinimalLoading from '@/components/minimal-loader';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const router = useRouter();

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
        if (!email || !password) {
            toast('Та имэйл, нууц үгээ оруулна уу');
            return;
        }
        if (password.length < 6) {
            toast('Нууц үг 6 аас их тэмдэгт байх ёстой');
            return;
        }

        setLoading(true);
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });
        setLoading(false);

        if (res?.error) {
            toast.error(res.error);
            return;
        }

        window.location.href = '/dashboard';
    };

    return (
        <>
            <div className="max-w-[500px] mx-auto h-[600px] shadow rounded-2xl mt-[50px] flex flex-col items-center justify-start p-[50px] gap-[20px] relative">
                <section className="flex items-center justify-center gap-2 cursor-pointer scale-75 mt-[-30px] mb-[30px]">
                    <Image src="/favicon.png" alt="logo" height={40} width={40} />
                    <div className="text-[24px] font-semibold flex">
                        <p className="text-[#914bf1]">Time</p>
                        <p>Link</p>
                    </div>
                </section>

                <h1 className="font-bold text-[25px]">Нэвтрэх</h1>
                <Button
                    type="button"
                    variant={'outline'}
                    className="flex items-center justify-center gap-[10px] w-full py-[20px] cursor-pointer"
                    onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                >
                    <Image src="/google_logo.webp" width={30} height={30} alt="logo" />
                    <p>Google ээр нэвтрэх</p>
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
                    <div>
                        <Label htmlFor="email">Имэйл</Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Имэйлээ оруулна уу"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-[6px]"
                        />
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
                    <Button
                        type="submit"
                        className="bg-main hover:bg-main/80 cursor-pointer w-full"
                        disabled={loading}
                    >
                        {loading ? <MinimalLoading /> : 'Нэвтрэх'}
                    </Button>
                </form>
                <div className="text-sm text-note text-nowrap flex items-center justify-center gap-1">
                    Бүртгэлтэй имэйл байхгүй ?{' '}
                    <p
                        className="text-main font-bold cursor-pointer"
                        onClick={() => router.push('/signup')}
                    >
                        {' '}
                        Бүртгүүлэх
                    </p>
                </div>
            </div>
        </>
    );
}
