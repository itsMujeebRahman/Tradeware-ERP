import productModel from "../Models/Product.js";

export const addProduct = async (req, res) => {
  const productDetails = req.body;
  try {
    await productModel.create(productDetails);
    res.status(200).json({ message: "Product Saved Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = (req, res) => {
  productModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
