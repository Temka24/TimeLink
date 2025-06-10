import { Router } from "express";
import { signup, login, getUserInfo, createUserByGoogle } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getUserInfo", authMiddleware, getUserInfo);
router.post("/createUserByGoogle", createUserByGoogle);

export default router;
