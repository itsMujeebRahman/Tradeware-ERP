import SupplierModel from "../Models/Supplier.js";

export const addSupplier = (req, res) => {
  const supplierData = req.body;
  SupplierModel.create(supplierData)
    .then((result) => res.status(200).json({ result }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

export const getSupplier = (req, res) => {
  SupplierModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
