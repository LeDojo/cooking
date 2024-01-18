import { Router } from "express";
import { createUser, listUsers } from "../controllers/userController";
const userRouter = Router();

userRouter.get("/", listUsers);
userRouter.post("/register", createUser);

export default userRouter;
