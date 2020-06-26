import express from "express"
import { GenreController } from "../controller/GenreController"

export const genreRoutes = express.Router()

genreRoutes.post("/register-genre", new GenreController().addMusicalGenre)
genreRoutes.get("/all-genres", new GenreController().getAllMusicalGenres)