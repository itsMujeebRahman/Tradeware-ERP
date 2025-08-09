import PurchaseModel from "../Models/Purchase.js";

export const addPurchase = async (req, res) => {
  const { productDetails, headerPayload } = req.body;
  try {
    await PurchaseModel.create({ ...headerPayload, productDetails });
    res.status(200).json({ message: "Purchase Saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePurchase = async (req, res) => {
  const { id } = req.params;
  const { productDetails, isCancelled, headerData } = req.body;

  try {
    const updateFields = { ...headerData };

    if (productDetails) {
      updateFields.productDetails = productDetails;
    }

    if (isCancelled) {
      updateFields.isCancelled = true;
    }

    await PurchaseModel.findByIdAndUpdate(id, updateFields);
    res.status(200).json({ message: "Purchase updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPurchase = async (req, res) => {
  await PurchaseModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
