import type { Metadata } from 'next';
import { inter } from './font';
import './globals.css';
import Providers from './providers';

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
            <head>
                <meta
                    name="google-site-verification"
                    content="0oeCKn2LnsyTwxkltEmvlntWjUbT7JGoaIl4TmLQ3iY"
                />
            </head>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
