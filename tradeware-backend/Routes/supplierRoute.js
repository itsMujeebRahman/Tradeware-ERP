import express from "express";
const router = express.Router();

import { addSupplier, getSupplier } from "../Controllers/supplierController.js";

router.post("/", addSupplier);
router.get("/", getSupplier);

export default router;
