"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BodySchema = new mongoose_1.Schema({
    id: Number,
    link: String,
    code: String,
    image: String,
    blog: mongoose_1.Schema.Types.ObjectId
});
const Body = (0, mongoose_1.model)("Body", BodySchema);
exports.default = Body;
