import { Router } from "express";
const userRouter = Router();

userRouter.get("/", listUsers);
userRouter.post("/register", createUser);

export default userRouter;
