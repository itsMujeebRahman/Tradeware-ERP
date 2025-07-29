import express from "express";
import connectDB from "./databse.js";

import customerRoutes from "./Routes/customerRoute.js";
import supplierRoutes from "./Routes/supplierRoute.js";
import userRoutes from "./Routes/userRoute.js";
import categoryRoutes from "./Routes/categoryRoute.js";
import unitRoutes from "./Routes/unitRoute.js";
import productRoute from "./Routes/productRoute.js";
import purchaseRoute from "./Routes/purchaseRoute.js";

const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

app.use("/customer", customerRoutes);
app.use("/supplier", supplierRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/unit", unitRoutes);
app.use("/product", productRoute);
app.use("/purchase", purchaseRoute);

connectDB();
app.listen(3001, () => {
  console.log("SERVER IS RUNNING ");
});
