import {NextFunction, Request, Response} from "express";

import * as dotenv from "dotenv";

dotenv.config();

export function Auth(req: Request, res: Response, next: NextFunction) {
    return checkUserIsValid(req.query.name as string, req.query.password as string) ? next() : res.sendStatus(401);
}

function checkUserIsValid(name: string, password: string) {
    return process.env.NAME === name && process.env.PASSWORD == password;
}