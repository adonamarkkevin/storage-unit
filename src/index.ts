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

        const PORT = 8181;

        app.listen(PORT, () => {
            console.log(`server started on localhost: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("TypeORM connection error: ", error);
        process.exit(0);
    });
