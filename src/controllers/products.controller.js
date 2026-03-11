import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "description"],
    });
    res.status(200).json({ ok: true, data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
    });
    res.status(200).json({ ok: true, data: product });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(name, description);
    const newProduct = await Product.create({
      name,
      description,
    });
    res.status(201).json({ ok: true, data: newProduct });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const product = await Product.findByPk(id);

    product.name = name;
    product.description = description;
    await product.save();

    res.status(200).json({ ok: true, data: product });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: { id },
    });

    res.status(204);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};
