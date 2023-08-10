import { Router } from "express";
import { createOrderHandler, getUserOrdersHandler } from "../Handlers/Orders/ordersHandler.js";

export const ordersRouter = Router();


ordersRouter.get("/:id", getUserOrdersHandler)
ordersRouter.post("/create", createOrderHandler)