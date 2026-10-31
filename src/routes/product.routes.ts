import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProductStock } from "../controllers/product.controller.js";

const router = Router();

router.get("/producto/:id", getProduct);
router.get("/productos", getProducts);

router.post("/producto", createProduct);

router.delete("/producto/:id", deleteProduct);

router.put("/producto/:id", updateProductStock);

export default router;