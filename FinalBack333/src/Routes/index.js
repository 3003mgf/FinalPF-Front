import { Router } from "express";
import { usersRouter } from './users.routes.js'
import { songsRouter } from './songs.routes.js'
import { reviewsRouter } from './reviews.routes.js'
import { playlistsRouter } from './playlists.routes.js'
import { albumsRouter } from './albums.routes.js'
import { membershipsRouter } from './memberships.routes.js'
import { genresRouter } from './genres.routes.js'
import { mercadoPagoRouter } from "./mercadopago.routes.js";
import { ordersRouter } from "./orders.routes.js";

export const router = Router()

router.use('/users', usersRouter)
router.use('/songs', songsRouter)
router.use('/reviews', reviewsRouter)
router.use('/playlists', playlistsRouter)
router.use('/albums', albumsRouter)
router.use('/memberships', membershipsRouter)
router.use('/genres', genresRouter)

router.use('/orders', ordersRouter)
router.use("/create_preference", mercadoPagoRouter);
