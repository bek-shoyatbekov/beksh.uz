import express from "express";

import {UserController} from "../Controllers/UserController.js";


const router = express.Router();

const Controller = new UserController();

router.get("/blogs", Controller.getAllBlogs);


router.get("/blogs/:id", Controller.getBlogById);

export default router;