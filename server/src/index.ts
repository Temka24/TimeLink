import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import userRouter from "./router/user.route.js";
import hostRouter from "./router/host.route.js";
import inviteeRouter from "./router/invitee.route.js";

dotenv.config();

const app: Express = express();

app.set("trust proxy", 1);

app.use(cookieParser());

const corsOptions = {
    origin: "https://timelink.mn",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/ping", (_: Request, res: Response) => {
    res.json({ msg: "Success to ping" });
});

app.use("/api", userRouter);
app.use("/api", hostRouter);
app.use("/api", inviteeRouter);

app.use((req, res) => {
    res.status(404).json({ msg: `Route ${req.originalUrl} олдсонгүй` });
});
app.use(errorHandler);

const PORT = process.env.PORT ?? 5001;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
