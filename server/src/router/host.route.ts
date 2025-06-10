import { Router } from "express";
import { getBookingPages, getBookings, createBookingPage } from "../controller/host.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import multer from "multer";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/getBookingPages", authMiddleware, getBookingPages);
router.get("/getBookings", authMiddleware, getBookings);
router.post("/createBookingPage", upload.single("image"), authMiddleware, createBookingPage);

export default router;
