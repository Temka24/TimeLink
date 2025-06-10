// middleware.ts
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        cookieName: 'next-auth.session-token',
    });

    // 🔐 Token байхгүй бол login руу redirect хийнэ
    if (!token?.email) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // ✅ Token байвал үргэлжлүүлнэ
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
    runtime: 'nodejs',
};
