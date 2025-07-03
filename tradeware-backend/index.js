import express from "express";
import connectDB from "./databse.js";

import customerRoutes from "./Routes/customerRoute.js";
import supplierRoutes from "./Routes/supplierRoute.js";

const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

app.use("/customer", customerRoutes);
app.use("/supplier", supplierRoutes);

connectDB();
app.listen(3001, () => {
  console.log("SERVER IS RUNNING ");
});
