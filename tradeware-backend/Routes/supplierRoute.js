import express from "express";
const router = express.Router();

import {
  addSupplier,
  getSupplier,
  updateSupplier,
} from "../Controllers/supplierController.js";

router.post("/", addSupplier);
router.get("/", getSupplier);
router.post("/:id", updateSupplier);

export default router;
