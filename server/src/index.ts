import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app: Express = express();

const allowedOrigins = [
    "http://localhost:3000", // Swagger UI (if hosted here)
    "https://your-frontend.com", // Real frontend domain (prod)
];

const corsOptions: CorsOptions = {
    origin: (
        origin: string | undefined,
        callback: (err: Error | null, allow?: boolean) => void,
    ) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/ping", (_: Request, res: Response) => {
    res.json({ msg: "Success to ping" });
});

app.use(errorHandler);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
