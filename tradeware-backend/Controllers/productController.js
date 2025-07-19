import ProductModel from "../Models/Product.js";

export const addProduct = async (req, res) => {
  const productDetails = req.body;
  try {
    await ProductModel.create(productDetails);
    res.status(200).json({ message: "Product Saved Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productDetails = req.body;
  try {
    await ProductModel.findByIdAndUpdate(id, productDetails);
    res.status(200).json({ message: "Product Details Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = (req, res) => {
  ProductModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
