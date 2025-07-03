import CustomerModel from "../Models/Customer.js"

export const addCustomer = (req, res) => {
  const customerData = req.body;

  CustomerModel.create(customerData)
    .then(async () => {
      return CustomerModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.json(err));
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const customerData = req.body;

  await CustomerModel.findByIdAndUpdate(id, customerData)
    .then(async () => {
      return CustomerModel.find()
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json({ error: err.message }));
    })
    .catch((err) => res.json(err));
};

export const getCustomer = (req, res) => {
  CustomerModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};


