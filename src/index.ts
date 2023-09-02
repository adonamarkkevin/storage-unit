import { AppDataSource } from "./data-source";
import express from "express";
import cors from "cors";
import { UserInfoRoutes } from "./route/user_info.routes";
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

        // version 1 API routes

        app.use("/api/v1", UserInfoRoutes);
        const PORT = 8181;

        app.listen(PORT, () => {
            console.log(`server started on localhost: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("TypeORM connection error: ", error);
        process.exit(0);
    });
