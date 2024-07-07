import { Router } from "express";
import { login, me, signup } from "../controllers/auth";
import { errorHandler } from "../error-handler";
import authMiddleware from "../middlewares/auth";

const authRoutes: Router = Router();

/* These lines of code are setting up routes for handling user authentication in an Express application
using TypeScript. Here's a breakdown of what each line does: */
authRoutes.post("/signup", errorHandler(signup));
authRoutes.post("/login", errorHandler(login));
authRoutes.get("/me", authMiddleware, errorHandler(me));

export default authRoutes;
