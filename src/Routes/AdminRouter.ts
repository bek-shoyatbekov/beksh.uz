import express from "express";

import {AdminController} from "../Controllers/AdminController.js";

const router = express.Router();

const Controller = new AdminController();

router.post("/add", Controller.createBlog);

router.post("/edit/:id", Controller.editBlog);

router.delete("/delete/:id", Controller.deleteBlogById);

export default router;