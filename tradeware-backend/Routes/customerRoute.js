import express from "express";
const router = express.Router();

import {
  addCustomer,
  updateCustomer,
  getCustomer,
} from "../Controllers/customerController.js";

router.post("/", addCustomer);
router.post("/:id", updateCustomer);
router.get("/", getCustomer);

export default router;
