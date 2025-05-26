'use client';
import { useRouter } from 'next/navigation';
import { Dot } from 'lucide-react';

export default function Footer() {
    const router = useRouter();
    return (
        <>
            <div className="mt-[100px] flex items-center w-screen max-w-[1200px] justify-around text-note text-[14px] font-[500] pb-[10px]">
                <div>© 2025 TimeLink</div>
                <div className="flex items-center justify-center gap-[20px]">
                    <span
                        className="cursor-pointer hover:underline"
                        onClick={() => router.push('/about')}
                    >
                        Бидний тухай
                    </span>
                    <span
                        className="cursor-pointer hover:underline"
                        onClick={() => router.push('/feedback')}
                    >
                        Санал хүсэлт
                    </span>
                    <Dot />
                    <span
                        className="cursor-pointer hover:underline"
                        onClick={() => router.push('/privacy')}
                    >
                        Нууцлалын бодлого
                    </span>
                    <span
                        className="cursor-pointer hover:underline"
                        onClick={() => router.push('/terms')}
                    >
                        Нөхцөл
                    </span>
                </div>
            </div>
        </>
    );
}
