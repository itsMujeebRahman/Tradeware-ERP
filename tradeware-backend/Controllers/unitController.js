import UnitModel from "../Models/Unit.js";

export const addUnit = async (req, res) => {
  const unitDetails = req.body;
  try {
    await UnitModel.create(unitDetails);
    res.status(200).json({ message: "Unit Added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUnit = (req, res) => {
  UnitModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};
