import CategoryModel from "../Models/Category.js";

export const addCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    await CategoryModel.create(categoryData);
    res.status(200).json({ message: "Category Added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategory = (req, res) => {
  CategoryModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
