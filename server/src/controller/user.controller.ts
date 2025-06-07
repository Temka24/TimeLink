import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../prisma/generated/prisma/index.js";
import z from "zod";
import bcrypt from "bcryptjs";

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

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parseResult = createUserSchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json({
                msg: "Validation failed",
                errors: parseResult.error.errors.map((e) => ({
                    field: e.path[0],
                    msg: e.message,
                })),
            });
        }

        const { username, email, password } = parseResult.data;

        const existingUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!existingUser) {
            return res.status(409).json({
                msg: "Имэйл бүртгэлтэй байна нэвтрэнэ үү ",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({ user, msg: "Амжилттай бүртгэгдлээ" });
    } catch (err) {
        next(err);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parseResult = loginSchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json({
                msg: "Validation failed",
                errors: parseResult.error.errors.map((e) => ({
                    field: e.path[0],
                    msg: e.message,
                })),
            });
        }
        const { email, password } = parseResult.data;

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(404).json({
                msg: "Имэйл бүртгэлгүй байна бүртгүүлнэ үү ",
            });
        }
        if (user.password) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                res.status(200).json({ user, msg: "Амжилттай нэвтэрлээ" });
            } else {
                res.status(401).json({ msg: "Нууц үг буруу байна" });
            }
        } else {
            res.status(401).json({ msg: "Нууц үг байхгүй байна" });
        }
    } catch (err) {
        next(err);
    }
};
