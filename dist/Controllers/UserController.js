import Blog from "../Models/BlogModel.js";
export class UserController {
    async getAllBlogs(req, res, next, filterBy) {
        try {
            const blogs = await Blog.find({
                type: filterBy
            });
            if (!blogs || !blogs.length) {
                return res.sendStatus(404);
            }
            res.status(200).send(blogs);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    async getBlogById(req, res, next) {
        try {
            const blog = await Blog.findById(req.params.id);
            if (!blog) {
                return res.sendStatus(404);
            }
            res.status(200).send(blog);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
