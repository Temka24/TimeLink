import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import z from "zod";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

const prisma = new PrismaClient();

const createUserSchema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const signup: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parseResult = createUserSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({
                msg: "Validation failed",
                errors: parseResult.error.errors.map((e) => ({
                    field: e.path[0],
                    msg: e.message,
                })),
            });
            return;
        }

        const { username, email, password } = parseResult.data;

        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (existingUser) {
            res.status(409).json({
                msg: "Имэйл бүртгэлтэй байна нэвтрэнэ үү ",
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({
            msg: "Амжилттай бүртгэгдлээ",
        });
    } catch (err) {
        next(err);
    }
};

export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parseResult = loginSchema.safeParse(req.body);
        if (!parseResult.success) {
            res.status(400).json({
                msg: "Validation failed",
                errors: parseResult.error.errors.map((e) => ({
                    field: e.path[0],
                    msg: e.message,
                })),
            });
            return;
        }
        const { email, password } = parseResult.data;

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            res.status(404).json({
                msg: "Имэйл бүртгэлгүй байна бүртгүүлнэ үү ",
            });
            return;
        }
        if (user.password) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                res.status(200).json({
                    user: { email: user.email, id: user.id },
                    msg: "Амжилттай нэвтэрлээ",
                });
            } else {
                res.status(401).json({ msg: "Нууц үг буруу байна" });
            }
        } else {
            res.status(401).json({
                msg: "Та Google-ээр бүртгүүлсэн байна. Нууц үгээр нэвтрэх боломжгүй.",
            });
        }
    } catch (err) {
        next(err);
    }
};

export const getUserInfo: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const userInfo = await prisma.user.findFirst({
            where: {
                email: (req as AuthenticatedRequest).user?.email,
            },
            select: {
                id: true,
                username: true,
                email: true,
            },
        });
        res.status(200).json({ user: userInfo });
    } catch (err) {
        next(err);
    }
};

export const createUserByGoogle: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(400).json({
                msg: "Email байхгүй байна",
            });
            return;
        }
        const userExist = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!userExist) {
            await prisma.user.create({
                data: {
                    email,
                },
            });
        }

        res.status(200).json({ msg: "Амжилттай бүртгэгдлээ Google ээр " });
    } catch (err) {
        next(err);
    }
};
