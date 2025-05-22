import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Цаг товлолт, захиалгын платформ | TimeLink',
    description: 'TimeLink нь хувь хүн болон бизнесүүдэд зориулсан цаг товлох систем юм.',
    openGraph: {
        title: 'Цаг товлолт, захиалгын платформ | TimeLink',
        description: 'TimeLink - цаг товлолыг автоматжуул.',
        url: 'https://timelink.mn',
        siteName: 'TimeLink',
        images: [
            {
                url: 'https://timelink.mn/og-image.png',
                width: 1200,
                height: 630,
                alt: 'TimeLink OG Image',
            },
        ],
        locale: 'mn_MN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Цаг товлолт, захиалгын платформ | TimeLink',
        description: 'TimeLink - цаг товлолыг автоматжуул.',
        images: ['https://timelink.mn/og-image.png'],
    },
};

export default function HomePage() {
    return (
        <>
            <div className="w-[100vw] min-h-screen pt-[20px] overflow-hidden">
                <div className="max-w-[1600px] mx-auto relative overflow-x-hidden shadow-lg rounded-3xl px-[40px] pb-[40px]">
                    <nav className="flex items-center justify-center gap-[60vw] ">
                        <section className="flex items-center justify-center gap-2">
                            <Image src="/favicon.png" alt="logo" height={40} width={40} />
                            <div className="text-[24px] font-semibold flex">
                                <p className="text-[#914bf1]">Time</p>
                                <p>Link</p>
                            </div>
                        </section>{' '}
                        <Button>Нэвтрэх</Button>
                    </nav>
                    <h1 className="text-center text-[40px] font-black flex mt-[85px] leading-[40px] flex-col items-center justify-center gap-0">
                        Уулзалт, цаг товлолтоо автоматжуулж
                        <span className="text-[#914bf1]"> маш хялбараар шийд</span>
                    </h1>
                    <p className='mt-[30px] text-center max-w-[600px] mx-auto text-note '>
                        Цаг товлолтоо илүү хурдан хийж, эцэс төгсгөлгүй имэйл бичхээс салаарай.
                        Таны өмнөөс бүх асуудлыг шийдэх болно
                    </p>
                </div>
            </div>
        </>
    );
}
