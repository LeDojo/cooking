import { Router } from "express";
import {
  createSubscriber,
  deleteSubscriber,
  getSubscriberById,
  getSubscribers,
  updateSubscriber,
} from "../controllers/subscriberController";
const subRouter = Router();

subRouter.get("/", getSubscribers);
subRouter.get("/:id", getSubscriberById);
subRouter.post("/add", createSubscriber);
subRouter.put("/:id/edit", updateSubscriber);
subRouter.delete("/:id/clean", deleteSubscriber);

export default subRouter;
