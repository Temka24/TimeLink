import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import OuterNavbar from '@/components/sections/outerNavbar';

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
            <div className="max-w-[1600px] mx-auto min-h-screen pt-[20px] relative overflow-x-hidden w-screen shadow-lg rounded-3xl px-[40px] pb-[40px]">
                <OuterNavbar />
                <h1 className="text-center text-[40px] font-black flex mt-[130px] leading-[40px] flex-col items-center justify-center gap-0">
                    Цаг товлолт, уулзалт бүртгэлийг автоматжуул
                    <span className="text-[#914bf1]">хурдан, хялбар, үр дүнтэй шийдэл</span>
                </h1>
                <p className="mt-[30px] text-center max-w-[600px] mx-auto text-note tracking-wide">
                    Цаг товлолтоо илүү хурдан хийж, эцэс төгсгөлгүй имэйл бичхээс салаарай. Таны
                    өмнөөс бүх асуудлыг шийдэх болно
                </p>
                <div className="flex mt-[60px] items-center justify-center gap-[20px] font-semibold">
                    <Button className="py-[25px] px-[40px] cursor-pointer text-[18px]">
                        <Link href="/dashboard">Эхлэх</Link>
                    </Button>
                    <div className="shadow py-[13px] px-[35px] rounded-xl cursor-pointer text-[18px]">
                        <Link href="/demo">Туршиж үзэх</Link>
                    </div>
                </div>
                <div className="rounded-3xl overflow-hidden mt-[70px] flex justify-center items-center">
                    <Image
                        src="/demopage.png"
                        alt="Туршилт зураг"
                        height={0}
                        width={800}
                        className="object-cover h-auto"
                    />
                </div>
                <Footer />
            </div>
        </>
    );
}
