import { Router } from "express";
import getReviewsHandler from "../Handlers/Reviews/getReviewsHandler.js";
import getReviewsByIdHandler from "../Handlers/Reviews/getReviewsByIdHandler.js";
import postReviewsHandler from "../Handlers/Reviews/postReviewsHandler.js";
import putReviewsHandler from "../Handlers/Reviews/putReviewsHandler.js";
import deleteReviewsHandler from "../Handlers/Reviews/deleteReviewsHandler.js";


export const reviewsRouter = Router()

reviewsRouter.get('/', getReviewsHandler)
reviewsRouter.get('/:id',getReviewsByIdHandler)
reviewsRouter.post('/', postReviewsHandler)
reviewsRouter.put('/:id', putReviewsHandler)
reviewsRouter.delete('/:id', deleteReviewsHandler)