'use client';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function newPage() {
    return (
        <>
            <div className="w-[100vw] min-h-screen overflow-x-hidden">
                <div className="-z-10 absolute h-[64px] w-full shadow-md"></div>

                <div className="max-w-[1200px] w-screen mx-auto relative px-[40px] pb-[40px] min-h-screen overflow-x-hidden border">
                    <Navbar />
                    <div className="flex items-center justify-center w-full h-full mt-[40px]">
                        <main className="w-1/2 border relative flex flex-col items-stretch justify-start">
                            <div className="">
                                <div className="absolute top-0 right-0 w-full h-1 sm:rounded-t-lg bg-gradient-to-r from-blue-400 to-indigo-400"></div>
                                <h1>Цаг захиалах хуудас</h1>
                            </div>
                        </main>

                        <section className="w-1/2 border-red-500 border relative">de</section>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
