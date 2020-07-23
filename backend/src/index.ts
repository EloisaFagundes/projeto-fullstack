import express from "express";
import cors from "cors";

import { userRouter } from "./router/UserRouter";
import { genreRoutes } from "./router/GenreRoutes";
import { albumRoutes } from "./router/AlbumRoutes";
import { musicRoutes } from "./router/MusicRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/", genreRoutes);
app.use("/", albumRoutes);
app.use("/", musicRoutes);


export default app 