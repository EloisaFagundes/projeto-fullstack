import cors from "cors";
import express from "express";
import { AddressInfo } from "net";
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

const server = app.listen(3001, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
