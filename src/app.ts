import express, {NextFunction, Request, Response} from "express"

import logger from "morgan";

import AdminRouter from "./Routes/AdminRouter.js";

import UserRouter from "./Routes/UserRouter.js";

import {Auth} from "./Utils/oAuth3.0.js";


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger("dev"))
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use("/admin", Auth, AdminRouter);
app.use("/", UserRouter);


export default app


