import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { getToken } from "next-auth/jwt";

dotenv.config();

interface TokenPayload {
    email: string;
    id?: string;
}

export interface AuthenticatedRequest extends Request {
    user: TokenPayload;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies["next-auth.session-token"];

        if (!token) {
            res.status(401).json({ msg: "Token хугацаа дууссан байна нэвтрэнэ үү" });
            return;
        }

        const payload = (await getToken({
            req,
            secret: process.env.NEXTAUTH_SECRET!,
        })) as TokenPayload;

        if (!payload || typeof payload !== "object" || !("email" in payload)) {
            res.status(401).json({ msg: "Token алдаатай байна шүү" });
            return;
        }
        (req as AuthenticatedRequest).user = payload;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token шалгахад алдаа гарлаа нэвтрэнэ үү" });
        console.error("Token шалгахад алдаа гарлаа");
        console.log(req.cookies["next-auth.session-token"]);
        console.error(err);
        return;
    }
};
