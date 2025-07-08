import express from "express";

const router = express.Router();

import { addCategory, getCategory } from "../Controllers/categoryController.js";

router.post("/", addCategory);
router.get("/",getCategory)

export default router;
