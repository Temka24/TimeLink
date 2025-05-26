// app/about/page.tsx
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import OuterNavbar from '@/components/sections/outerNavbar';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
    title: 'Бидний тухай | TimeLink',
    description: 'TimeLink — Цаг захиалгын системийг хялбар, хурдан, автомат болгоно.',
    openGraph: {
        title: 'Цаг товлолт, захиалгын платформ | TimeLink',
        description: 'TimeLink - цаг товлолыг автоматжуул.',
        url: 'https://timelink.mn/about',
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

export default async function AboutPage() {
    const filePath = path.join(process.cwd(), 'src', 'content', 'about.md');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return (
        <main className="max-w-4xl mx-auto px-4 py-12 relative">
            <OuterNavbar />
            <div className="prose prose-lg dark:prose-invert mt-[100px]">
                <ReactMarkdown>{fileContent}</ReactMarkdown>
            </div>
            <Footer />
        </main>
    );
}
