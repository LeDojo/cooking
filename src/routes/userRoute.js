import { Router } from "express";
import { createUser, listUsers, login } from "../controllers/userController";
const userRouter = Router();

userRouter.get("/", listUsers);
userRouter.post("/register", createUser);
userRouter.post("/login", login);

export default userRouter;
