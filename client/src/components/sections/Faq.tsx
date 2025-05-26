'use client';
import { motion } from 'motion/react';

export default function Faq() {
    return (
        <>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                key="Faq"
                className="pt-[50px] min-h-screen overflow-x-hidden w-full"
            >
                faq
            </motion.div>
        </>
    );
}
