import express from "express";
import { addUnit, getUnit } from "../Controllers/unitController.js";
const router = express.Router();

router.post("/", addUnit);
router.get("/", getUnit);

export default router;
