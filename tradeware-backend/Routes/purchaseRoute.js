import {
  addPurchase,
  getPurchase,
  updatePurchase,
} from "../Controllers/purchaseController.js";
import express from "express";

const router = express.Router();

router.post("/", addPurchase);
router.get("/", getPurchase);
router.post("/:id", updatePurchase);

export default router;
