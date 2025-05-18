import type { Metadata } from 'next';
import { outfit } from './font';
import './globals.css';

export const metadata: Metadata = {
    title: 'Цаг товлолт, захиалгын платформ | TimeLink',
    description:
        'TimeLink нь хувь хүн болон бизнесүүдэд зориулсан цаг товлох систем юм. Захиалга, мэдэгдэл, хэрэглэгчийн удирдлага бүгдийг автоматжуулна.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.png',
            type: 'image/png',
            sizes: '512x512',
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
