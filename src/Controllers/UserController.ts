import {NextFunction, Request, Response} from "express";
import Blog from "../Models/BlogModel.js";

export class UserController {
    async getAllBlogs(req: Request, res: Response, next: NextFunction) {
        try {
            const filterBy: "article" | "project" = req.query.filterBy as "article" | "project";
            const blogs = await Blog
                .find({
                    type: filterBy
                }, ["title body _id createdAt"], {
                    sort: {
                        createdAt: -1
                    }
                }).select("title body _id createdAt");

            if (!blogs || !blogs.length) {
                return res.sendStatus(404);
            }
            res.status(200).send(blogs);
            return;
        } catch (err) {
            next(err);
        }

    }

    async getBlogById(req: Request, res: Response, next: NextFunction) {
        try {
            const blog = await Blog.findById(req.params.id);
            if (!blog) {
                return res.sendStatus(404);
            }
            res.status(200).send(blog);
            return;
        } catch (err) {
            next(err);
        }
    }

}