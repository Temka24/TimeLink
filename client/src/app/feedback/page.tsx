'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Feedback() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (subject === '' || message === '') {
            toast.error('Бүх талбарыг бөглөнө үү');
            return;
        }
        console.log(subject, message);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-stretch justify-center relative md:mt-[100px] mt-[20px] gap-[25px] w-[90%] md:max-w-[450px] mx-auto pt-[100px] shadow-lg rounded-3xl md:px-[40px] px-2.5 pb-[40px]"
            >
                <section className="flex items-center justify-center gap-2 cursor-pointer scale-75 mt-[-30px] mb-[30px]">
                    <Image src="/favicon.png" alt="logo" height={40} width={40} />
                    <div className="text-[24px] font-semibold flex">
                        <p className="text-[#914bf1]">Time</p>
                        <p>Link</p>
                    </div>
                </section>

                <h1 className="font-bold text-[25px] text-center">Санал хүсэлт</h1>
                <Button
                    onClick={() => router.push('/')}
                    className="absolute top-[20px] left-[20px] text-demo-left border-demo-left cursor-pointer"
                    variant="outline"
                    type="button"
                >
                    <ChevronLeft /> Буцах
                </Button>
                <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Гарчиг оруулна уу"
                    type="text"
                />
                <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Санал хүсэлт оруулна уу"
                    rows={10}
                    className="h-[150px]"
                />
                <Button type="submit" className="cursor-pointer">
                    Илгээх
                </Button>
                <p className="text-note md:text-sm text-[11px] text-center">
                    Таны илгээсэн санал хүсэлт бидэнд маш их тус болох болно
                </p>
            </form>
        </>
    );
}
