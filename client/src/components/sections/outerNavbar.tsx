import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function OuterNavbar() {
    return (
        <>
            <nav className="flex items-center justify-center md:gap-[60%] gap-[30%] w-full">
                <Link href="/">
                    <section className="flex items-center justify-center gap-2 cursor-pointer">
                        <Image src="/favicon.png" alt="logo" height={40} width={40} />
                        <div className="text-[24px] font-semibold flex">
                            <p className="text-[#914bf1]">Time</p>
                            <p>Link</p>
                        </div>
                    </section>
                </Link>
                <Button className="cursor-pointer">
                    <Link href="/login">Нэвтрэх</Link>
                </Button>
            </nav>
        </>
    );
}
