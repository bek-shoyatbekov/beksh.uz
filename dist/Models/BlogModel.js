"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    id: Number,
    type: String,
    title: String,
    body: mongoose_1.Schema.Types.ObjectId
});
const Blog = (0, mongoose_1.model)("Blog", BlogSchema);
exports.default = Blog;
