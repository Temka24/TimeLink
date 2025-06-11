import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AxiosError } from 'axios';
import { JWT } from 'next-auth/jwt';
import { Session, User } from 'next-auth';
import api from './axios';

export const authOptions: AuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const res = await api.post('/login', {
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    const user = res.data.user;

                    if (!user || !user.email) {
                        throw new Error('Хэрэглэгч олдсонгүй');
                    }

                    return { email: user.email, id: user.id };
                } catch (err) {
                    const error = err as AxiosError<{ msg: string }>;

                    const message = error.response?.data?.msg || 'Нэвтрэх үед алдаа гарлаа';

                    throw new Error(message);
                }
            },
        }),
    ],
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: User }) {
            if (user?.email) {
                await api.post('/createUserByGoogle', {
                    email: user.email,
                });

                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            if (session.user) {
                session.user.email = token.email;
            }
            return session;
        },
    },
    useSecureCookies: process.env.NODE_ENV === 'development' ? false : true,
    cookies: {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: process.env.NODE_ENV === 'development' ? false : true,
                domain: '.timelink.mn',
            },
        },
    },
    pages: { signIn: '/login' },
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
