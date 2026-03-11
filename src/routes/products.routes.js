import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/productos", getProducts);
router.post("/crear-producto", createProduct);
router.get("/productos/:id", getProductById);
router.put("/actualizar-producto/:id", updateProduct);
router.delete("/eliminar-producto/:id", deleteProduct);

export default router;
