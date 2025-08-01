import { addPurchase, getPurchase } from "../Controllers/purchaseController.js";
import express from "express";

const router = express.Router();

router.post("/", addPurchase);
router.get("/", getPurchase);

export default router;
