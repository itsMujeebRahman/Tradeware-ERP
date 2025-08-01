import PurchaseModel from "../Models/Purchase.js";

export const addPurchase = async (req, res) => {
  const { productDetails, headerData } = req.body;
  try {
    await PurchaseModel.create({ ...headerData, productDetails });
    res.status(200).json({ message: "Purchase Saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPurchase = async (req, res) => {
  await PurchaseModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
