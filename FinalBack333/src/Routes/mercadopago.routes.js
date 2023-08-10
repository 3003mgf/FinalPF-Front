import { Router } from "express";
import { postMercadoPago } from "../Handlers/MercadoPago/mercadoPagoHandler.js";

export const mercadoPagoRouter = Router();

mercadoPagoRouter.post("/", postMercadoPago);
