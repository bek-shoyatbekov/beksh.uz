import {Request, Response} from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {
    let stack = {};
    if (err.stack) {
        stack = err.stack;
    }
    res.status(500).json({
        message: err.message,
        stack
    })
    process.exit(1);
}