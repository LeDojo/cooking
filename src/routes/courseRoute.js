import { Router } from "express";
import { getAllCourses } from "../controllers/coursesController";
const courseRouter = Router();

courseRouter.get("/", getAllCourses);

export default courseRouter;
