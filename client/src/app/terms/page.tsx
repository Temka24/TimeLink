// app/privacy-policy/page.tsx
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import OuterNavbar from '@/components/sections/outerNavbar';
import Footer from '@/components/sections/Footer';

export const dynamic = 'force-dynamic';

export default async function PrivacyPolicyPage() {
    const filePath = path.join(process.cwd(), 'src', 'content', 'terms.md');
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
