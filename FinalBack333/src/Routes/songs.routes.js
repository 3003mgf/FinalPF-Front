import { Router } from "express";
import getSongsByIdHandler from "../Handlers/Songs/getSongsByIdHandler.js";
import postSongsHandler from "../Handlers/Songs/postSongsHandler.js";
import putSongsHandler from "../Handlers/Songs/putSongsHandler.js";
import deleteSongsHandler from "../Handlers/Songs/deleteSongsHandler.js";
import { getSongsToDb } from "../Util/initFetch.js";
import getAllSongsHandler from "../Handlers/Songs/getAllSongsHandler.js";
import { getSongsHandler } from "../Handlers/Songs/songsHandler.js";

export const songsRouter = Router()

songsRouter.get('/', getSongsHandler)
songsRouter.get('/all', getAllSongsHandler)
songsRouter.get('/:id',getSongsByIdHandler)
songsRouter.post('/', postSongsHandler)
songsRouter.put('/:id', putSongsHandler)
songsRouter.delete('/:id', deleteSongsHandler)
//Para cargar datos de la Api 
songsRouter.get("/db/fetch", getSongsToDb);