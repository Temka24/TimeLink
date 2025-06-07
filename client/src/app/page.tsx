import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import OuterNavbar from '@/components/sections/outerNavbar';
import {
    Scale,
    Link as LinkIcon,
    CalendarCheck,
    AlignLeft,
    BellRing,
    ClockFading,
    BringToFront,
    Workflow,
    SwatchBook,
    CircleDollarSign,
} from 'lucide-react';

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
            <div className="max-w-[1600px] mx-auto min-h-screen pt-[20px] relative overflow-x-hidden w-screen shadow-lg rounded-3xl px-[40px] pb-[60px]">
                <OuterNavbar />
                <h1 className="text-center text-[40px] font-[700] flex mt-[130px] leading-[40px] flex-col items-center justify-center gap-0">
                    Цаг товлолт, уулзалт бүртгэлийг автоматжуул
                    <span className="text-[#914bf1]">хурдан, хялбар, үр дүнтэй шийдэл</span>
                </h1>
                <h4 className="mt-[30px] text-center max-w-[600px] mx-auto text-note tracking-wide">
                    Цаг товлолтоо илүү хурдан хийж, бүтээмжээ өсгөмөөр байна уу.
                    <p>Таны өмнөөс бүх асуудлыг шийдэх болно</p>
                </h4>
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
                        width={700}
                        className="object-cover h-auto"
                    />
                </div>
                <h2 className="font-semibold text-[40px] text-center mt-[160px]">
                    Яг одооноос цаг товлолтоо автоматжуул
                </h2>
                <section className="mt-[70px] w-[90%] rounded-2xl shadow py-[60px] px-[100px] mx-auto bg-[url('/shinny-bg.svg')] bg-no-repeat bg-cover">
                    <article className="flex items-center justify-center gap-[10%]">
                        <div className="flex flex-col items-start justify-start gap-2.5 w-2/3">
                            <h2 className="text-[24px] font-semibold">Хэрхэн ажилдаг вэ</h2>
                            <p className="text-note">Ердөө 3 алхам</p>
                            <div className="flex flex-col items-stretch justify-center gap-7 mt-[30px]">
                                <div className="flex items-start justify-start gap-5">
                                    <div className="h-fit p-2 bg-main rounded-sm">
                                        <Scale color="#fff" />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-medium">
                                            Өөрийн боломжит цагаа сонгох
                                        </h4>
                                        <p className="text-note mt-[5px] text-sm">
                                            Тохируулах нь хялбар бөгөөд маш уян хатан
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start gap-5">
                                    <div className="h-fit p-2 bg-main rounded-sm">
                                        <LinkIcon color="#fff" />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-medium">
                                            Өөрийн үүсгэсэн хуудсаа бусдад хуваалцах
                                        </h4>
                                        <p className="text-note mt-[5px] text-sm">
                                            Таны үүсгэсэн хуудсанд линк үүсэх ба та бусдад хуваалцах
                                            боломжтой
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start gap-5">
                                    <div className="h-fit p-2 bg-main rounded-sm">
                                        <CalendarCheck color="#fff" />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-medium">Цаг захиалга</h4>
                                        <p className="text-note mt-[5px] text-sm">
                                            Таны үүсгэсэн линкээр хэн ч цаг захиалж болох ба
                                            захиалсан цагуудыг таны хяналтын самбарт нэмэгдэх болно
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
                            <Image
                                src="/avialableTime.png"
                                alt="logo"
                                height={0}
                                width={400}
                                className="object-cover h-auto"
                            />
                        </div>
                    </article>

                    <article className="flex items-center justify-center gap-[10%] mt-[100px]">
                        <div className="rounded-xl overflow-hidden shadow-lg flex justify-center items-center w-3/5">
                            <Image
                                src="/bookingList.png"
                                alt="logo"
                                height={0}
                                width={800}
                                className="object-cover h-auto"
                            />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2.5 w-2/5">
                            <h2 className="text-[24px] font-semibold">
                                Үргэлж таны хяналтад байх болно
                            </h2>
                            <div className="flex flex-col items-stretch justify-center gap-7 mt-[30px]">
                                <div className="flex items-start justify-start gap-5">
                                    <div className="h-fit p-2 bg-main rounded-sm">
                                        <AlignLeft color="#fff" />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-medium">
                                            Бүх захиалгын жагсаалт
                                        </h4>
                                        <p className="text-note mt-[5px] text-sm">
                                            Платформ дотор бүх захиалгын жагсаалтаа харах боломжтой
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start gap-5">
                                    <div className="h-fit p-2 bg-main rounded-sm">
                                        <BellRing color="#fff" />
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-medium">Имэйл мэдэгдэл</h4>
                                        <p className="text-note mt-[5px] text-sm">
                                            Таны үүсгэсэн цаг захиалгын хуудсаар цаг захиалах үед
                                            танд болон цаг захиалагчид хоёуланд мэдэгдэл илгээдэг
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                <h2 className="font-semibold text-[40px] text-center mt-[160px]">
                    Яагаад TimeLink ийг сонгох хэрэгтэй гэж ?
                </h2>

                <section className="mt-[70px] w-[80%] py-[60px] px-[100px] mx-auto shadow rounded-2xl bg-[url('/wave-1.svg')] bg-no-repeat bg-cover bg-center">
                    <article className="flex items-center justify-center gap-[50px]">
                        <div className="w-2/5 shadow p-[30px] rounded-2xl backdrop-blur-lg bg-white/30">
                            <div className="flex items-center justify-start gap-2">
                                <div className="h-fit p-2 bg-main rounded-sm">
                                    <ClockFading color="#fff" />
                                </div>
                                <h3 className="text-[30px] font-bold ml-[20px]">Хугацаа хэмнэнэ</h3>
                            </div>
                            <p className="text-[18px] font-medium mt-[30px]">
                                Утас, чатаар цаг тохирох шаардлагагүй.
                            </p>
                        </div>
                        <div className="w-3/5 shadow p-[30px] rounded-2xl backdrop-blur-lg bg-white/30">
                            <div className="flex items-center justify-start gap-2">
                                <div className="h-fit p-2 bg-main rounded-sm">
                                    <Workflow color="#fff" />
                                </div>
                                <h3 className="text-[30px] font-bold ml-[20px]">
                                    Бүх зүйл автомат
                                </h3>
                            </div>
                            <p className="text-[18px] font-medium mt-[30px]">
                                Мэдэгдэл, захиалгын хуваарь, төлбөр бүгд автомат.
                            </p>
                        </div>
                    </article>
                    <div className="shadow p-[30px] rounded-2xl mt-[30px] backdrop-blur-lg bg-white/30">
                        <div className="flex items-center justify-start gap-2 ">
                            <div className="h-fit p-2 bg-main rounded-sm">
                                <BringToFront color="#fff" />
                            </div>
                            <h3 className="text-[30px] font-bold ml-[20px]">
                                Цаг давхцах асуудлын шийдэл
                            </h3>
                        </div>
                        <p className="text-[18px] font-medium mt-[30px]">
                            Захиалсан цагуудыг гараар тэмдэглэх шаардлаггүй тул цаг давхцах асуудал
                            гарахгүй
                        </p>
                    </div>
                    <article className="flex items-center justify-center gap-[50px] mt-[30px]">
                        <div className="w-3/5 shadow p-[30px] rounded-2xl backdrop-blur-lg bg-white/30">
                            <div className="flex items-center justify-start gap-2">
                                <div className="h-fit p-2 bg-main rounded-sm">
                                    <SwatchBook color="#fff" />
                                </div>
                                <h3 className="text-[30px] font-bold ml-[20px]">
                                    Хэрэглэхэд хялбар
                                </h3>
                            </div>
                            <p className="text-[18px] font-medium mt-[30px]">
                                Зөвхөн линк хуваалцаж, хэрэглэгч бүр захиалга өгөх боломжтой.
                            </p>
                        </div>
                        <div className="w-2/5 shadow p-[30px] rounded-2xl backdrop-blur-lg bg-white/30">
                            <div className="flex items-center justify-start gap-2">
                                <div className="h-fit p-2 bg-main rounded-sm">
                                    <CircleDollarSign color="#fff" />
                                </div>
                                <h3 className="text-[30px] font-bold ml-[20px]">
                                    Орлого нэмэгдүүлнэ
                                </h3>
                            </div>
                            <p className="text-[18px] font-medium mt-[30px]">
                                Илүү олон захиалга, системтэй менежмент.
                            </p>
                        </div>
                    </article>
                </section>

                <h2 className="text-[45px] mt-[100px] text-center font-bold text-transparent max-w-[800px] mx-auto bg-clip-text bg-gradient-to-r from-main to-pink-500">
                    Яг одоо бүртгүүлснээр 100% үнэгүй ашиглах боломжтой
                </h2>

                <section className="mt-[70px] w-[70%] py-0 px-[100px] flex items-center relative overflow-hidden justify-center mx-auto shadow rounded-2xl bg-[url('/footer-shinny.svg')] bg-no-repeat bg-cover bg-center">
                    <div className="w-2/3 flex flex-col items-start justify-center gap-2.5">
                        <h2 className="text-[30px] font-[600]">
                            Та цаг бүртгэхэд зарцуулах цагаа хэмнэмээр байна уу ?{' '}
                        </h2>
                        <div className="flex mt-[10px] items-center justify-center gap-[20px] font-semibold">
                            <Button
                                variant={'outline'}
                                className="py-[25px] px-[40px] cursor-pointer border-none rounded-2xl text-[18px] bg-purple-500 hover:bg-purple-500/90"
                            >
                                <Link href="/dashboard">Эхлэх</Link>
                            </Button>
                            <div className="shadow py-[13px] px-[35px] rounded-2xl cursor-pointer text-[18px] backdrop-blur-lg bg-white/30">
                                <Link href="/demo">Туршиж үзэх</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-1/3 mt-2.5">
                        <Image
                            src="/tttwinkle.svg"
                            alt="twinkle"
                            height={0}
                            width={600}
                            className="object-cover h-auto"
                        />
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}
