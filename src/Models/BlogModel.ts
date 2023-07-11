import {model, Schema} from "mongoose";
import {BlogInterface} from "../Types/BlogInterface";


const BlogSchema = new Schema<BlogInterface>({
    type: String,
    title: String,
    body: {
        link: String,
        code: Object,
        image: String,
    }
}, {
    timestamps: true
});

const Blog = model<BlogInterface>("Blog", BlogSchema);

export default Blog;