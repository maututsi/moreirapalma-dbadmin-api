import { Router } from "express";
import { createProduct, getProduct, getProducts } from "../controllers/product.controller.js";

const router = Router();

router.get("/producto/:id", getProduct);
router.get("/productos", getProducts);
router.post("/producto", createProduct);

export default router;