"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const connectMongodb_1 = require("./Utils/connectMongodb");
const app = (0, express_1.default)();
(0, connectMongodb_1.connectDB)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)("dev"));
app.get("/hello", (req, res, next) => {
    return res.status(200).send("Hello Bek");
});
exports.default = app;