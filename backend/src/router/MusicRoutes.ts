import express from "express";
import { MusicController } from "../controller/MusicController";

export const musicRoutes = express.Router();

musicRoutes.post("/register-music", new MusicController().createMusic);
