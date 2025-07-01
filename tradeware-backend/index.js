const express = require("express");
const connectDB = require("./databse");
const app = express();
const cors = require("cors");
const CustomerModel = require("./Model/Customer");
const SupplierModel = require("./Model/Supplier");

app.use(express.json());
app.use(cors());

app.post("/addCustomer", (req, res) => {
  const customerData = req.body;

  CustomerModel.create(customerData)
    .then(async () => {
      return CustomerModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.json(err));
});

app.post("/addCustomer/:id", async (req, res) => {
  const { id } = req.params;
  const customerData = req.body;

  await CustomerModel.findByIdAndUpdate(id, customerData)
    .then(async () => {
      return CustomerModel.find()
        .then((result) => res.json('gfujhfdkgkun'))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.json(err));
});

app.get("/getCustomer", (req, res) => {
  CustomerModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/addSupplier", (req, res) => {
  const supplierData = req.body;

  SupplierModel.create(supplierData);

  res.status(200).json({ message: "Supplier Data Received" });
});

connectDB();
app.listen(3001, () => {
  console.log("SERVER IS RUNNING ");
});
