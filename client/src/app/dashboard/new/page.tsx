'use client';
import Navbar from '@/components/sections/Navbar';

export default function newPage() {
    return (
        <>
            <div className="w-[100vw] min-h-screen overflow-x-hidden">
                <div className="-z-10 absolute h-[64px] w-full shadow-md"></div>

                <div className="max-w-[1200px] w-screen mx-auto relative px-[40px] pb-[40px] min-h-screen overflow-x-hidden">
                    <Navbar />
                    <p>new</p>
                </div>
            </div>
        </>
    );
}
