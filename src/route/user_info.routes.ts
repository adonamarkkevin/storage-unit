import { Router } from "express";
import { RegisterUser } from "../controller/register.controller";

export const UserInfoRoutes = Router();

UserInfoRoutes.post("/user", RegisterUser);
