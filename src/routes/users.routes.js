import { Router } from "express";
import { loginController, registerController } from "../controllers/user.controller.js";

const router = Router();

// router.route("/register").post(registerController);
// router.route("/login").post(loginController);
export default router;