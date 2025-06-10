import Router from "express";
import {
    getBookingPageInfoById,
    getSlotsByDateAndDuration,
    registerBooking,
} from "../controller/invitee.controller.js";

const router = Router();

router.get("/getBookingPageInfoById/:id", getBookingPageInfoById);
router.post("/getSlotsByDateAndDuration/:id", getSlotsByDateAndDuration);
router.post("/registerBooking/:id", registerBooking);

export default router;
