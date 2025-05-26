'use client';
import axios from 'axios';

export default function Feedback() {
    const backend_url = process.env.NEXT_PUBLIC_API_URL;
    const handleSubmit = async () => {
        try {
            if (!backend_url) {
                console.error('backend_url undefined');
                return;
            }
            const res = await axios.post(backend_url, {});
            console.log(res.data);
        } catch (err: unknown) {
            console.error(err);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center relative min-w-[300px] gap-[25px] max-w-[500px] mx-auto pt-[100px] overflow-x-hidden w-screen shadow-lg rounded-3xl px-[40px] pb-[40px]"
            >
                <div className="flex flex-row items-center justify-between w-[100%] gap-[20px]">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px]"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px]"
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px] w-[100%]"
                />
                <textarea
                    rows={7}
                    required
                    placeholder="Message"
                    className="bg-transparent border-[2px] border-[#2a1454] focus:border-pink-500/70 focus:outline focus:outline-pink-500/70 placeholder:text-joke/50 text-joke rounded-[6px] px-[20px] py-[8px] w-[100%]"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="border-[2px] border-joke text-joke font-[700] rounded-[20px] px-[25px] py-[10px] self-start ml-[10%] capitalize hover:bg-gradient-to-r from-[#9500ff] via-[#2a1454] to-[#9500ff] bg-[length:300%] cursor-pointer transition-all duration-700 hover:bg-right"
                />
            </form>
        </>
    );
}
