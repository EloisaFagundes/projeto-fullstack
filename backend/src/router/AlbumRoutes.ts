import express from 'express'
import { AlbumController } from "../controller/AlbumController"

export const albumRoutes = express.Router()

albumRoutes.post("/register-album", new AlbumController().createAlbum)
albumRoutes.get("/all-band-albuns", new AlbumController().getAlbunsByBandId)

