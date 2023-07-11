import { isValidBody } from "../Utils/checkReqBody";
export class AdminController {
    async createBlog(req, res, next) {
        try {
            const { title, type, body } = isValidBody(req.body);
            res.status(200).send({ title, type, body });
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
