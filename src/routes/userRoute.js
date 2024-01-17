import { Router } from "express";
import { createUser } from "../controllers/userController";
const userRouter = Router();

userRouter.post("/register", createUser);

export default userRouter;
