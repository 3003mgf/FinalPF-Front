import { Router } from "express";

import getGenresHandler, { deleteGenresHandler, getGenresByIdHandler, postGenresHandler } from "../Handlers/Genres/genresHandler.js";

export const genresRouter = Router()

genresRouter.get('/', getGenresHandler)
genresRouter.get('/:id',getGenresByIdHandler)
genresRouter.post('/', postGenresHandler)
genresRouter.delete('/:id', deleteGenresHandler)