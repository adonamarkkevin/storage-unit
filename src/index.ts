import { AppDataSource } from "./data-source";
import express from "express";
import cors from "cors";
AppDataSource.initialize()
    .then(async () => {
        const app = express();

        const corsOpts = {
            origin: true,
            methonds: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "authorization", "x-access-token"],
            credentials: true,
            exposedHeaders: ["set-cookie"],
        };

        app.use(express.json());
        app.use(cors(corsOpts));
    })
    .catch((error) => console.log(error));
