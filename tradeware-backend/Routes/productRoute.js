import express from "express";
import { addProduct, getProduct } from "../Controllers/productController.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getProduct);

export default router;
