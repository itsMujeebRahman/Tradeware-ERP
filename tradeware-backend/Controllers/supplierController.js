import SupplierModel from "../Models/Supplier.js";

export const addSupplier = (req, res) => {
  const supplierData = req.body;
  SupplierModel.create(supplierData)
    .then((result) => res.status(200).json({ result }))
    .catch((err) => res.status(500).json({ error: err.message }));
};

export const updateSupplier = async (req, res) => {
  const { id } = req.params;
  const customerData = req.body;
  await SupplierModel.findByIdAndUpdate(id, customerData)
    .then(async () => {
      SupplierModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.json(err));
};

export const getSupplier = (req, res) => {
  SupplierModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
