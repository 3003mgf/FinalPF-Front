import { Router } from "express";
import {
  getAllAlbumsHandler,
  getAlbumsHandler,
  getAlbumsByIdHandler,
  postAlbumsHandler,
  deleteAlbumsHandler,
  putAlbumsHandler,
} from "../Handlers/Albums/albumsHandler.js";
import { validateAlbum } from "../Handlers/Albums/validate.js";
import { albumsToDb } from "../Util/initFetch.js";

export const albumsRouter = Router();

albumsRouter.get("/", getAlbumsHandler);
albumsRouter.get('/all', getAllAlbumsHandler)
albumsRouter.get("/:id", getAlbumsByIdHandler);
albumsRouter.post("/", postAlbumsHandler);
albumsRouter.put("/:id", putAlbumsHandler);
albumsRouter.delete("/:id", deleteAlbumsHandler);

// Ruta para insertar por primera vez los albums a la DB.
albumsRouter.get('/db/fetch', albumsToDb)