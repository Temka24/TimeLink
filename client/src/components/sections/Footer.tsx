'use client';
import { useRouter } from 'next/navigation';
import { Dot } from 'lucide-react';

export default function Footer() {
    const router = useRouter();
    return (
        <>
            <div className="mt-[100px] flex md:flex-row flex-col-reverse items-center gap-12 sm:gap-8 md:gap-0 w-full max-w-[1200px] justify-around text-note text-[14px] font-[500] pb-[10px]">
                <div>© 2025 TimeLink</div>
                <div className="flex md:flex-row flex-col items-center justify-center md:gap-[20px] gap-0 text-sm">
                    <div className="flex items-center justify-center md:gap-[20px] gap-[20px]">
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
                    </div>
                    <Dot />
                    <div className="flex items-center justify-center md:gap-[20px] gap-[20px]">
                        <span
                            className="cursor-pointer hover:underline"
                            onClick={() => router.push('/policy')}
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
            </div>
        </>
    );
}
