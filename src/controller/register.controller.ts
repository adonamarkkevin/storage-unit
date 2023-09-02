import { Request, Response } from "express";
import { createUser } from "./user_info/create.user_info";
import { getUser } from "./user_info/get.user_info";

export const RegisterUser = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        // check if user is already registered
        const user_found = await getUser(body.email);

        if (user_found) {
            return res.status(403).send({
                status: "Bad Request",
                message: "User already exists",
            });
        }

        const user = await createUser(body);

        if (user) {
            return res.status(201).send({
                status: "Success",
                message: "User registered successfully",
            });
        }
    } catch (err) {
        return res.status(500).send({
            status: "Server Error",
            message: "Please contact the administrator",
        });
    }
};
