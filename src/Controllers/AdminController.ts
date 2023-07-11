import {NextFunction, Request, Response} from "express";

import {isValidBody} from "../Utils/checkReqBody.js";

import Blog from "../Models/BlogModel.js";


export class AdminController {
    async createBlog(req: Request, res: Response, next: NextFunction) {
        try {
            const validBody = isValidBody(req.body);
            if (!validBody) {
                return res.sendStatus(400);
            }
            let newBlog = new Blog({
                type: validBody.type,
                title: validBody.title,
                body: validBody.body
            });
            await newBlog.save();
            res.status(200).send(newBlog);
            return;
        } catch (err) {
            next(err);
        }
    }

    async editBlog(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body || req.body.length == 0) {
                return res.sendStatus(400);
            }
            const blog = await Blog.findById(req.params.id);
            if (!blog) {
                return res.sendStatus(404);
            }
            blog.type = req.body.type || blog.type;
            blog.title = req.body.title || blog.title;
            blog.body = req.body.body || blog.body;
            await blog.save();
            res.status(200).send(blog);
            return;
        } catch (err) {
            next(err);
        }
    }

    async deleteBlogById(req: Request, res: Response, next: NextFunction) {
        try {
            const success = await Blog.findByIdAndDelete(req.params.id);
            if (!success) {
                return res.sendStatus(404);
            }
            res.sendStatus(200);
            return;
        } catch (err) {
            next(err);
        }
    }
}
