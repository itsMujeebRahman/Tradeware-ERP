import express from "express";
import {
  addProduct,
  getProduct,
  updateProduct,
} from "../Controllers/productController.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getProduct);
router.post("/:id", updateProduct);

export default router;
