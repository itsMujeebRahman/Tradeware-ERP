import { addPurchase } from "../Controllers/purchaseController.js";
import express from "express";

const router = express.Router();

router.post("/", addPurchase);

export default router;
