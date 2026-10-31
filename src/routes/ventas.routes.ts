import { Router } from "express";
import { createVenta, deleteVentaById, getVentaById, getVentas, updateVenta } from "../controllers/ventas.controller.js";

const router = Router();

router.get("/ventas/:id", getVentaById);
router.get("/ventas", getVentas);

router.post("/ventas", createVenta);

router.delete("/venta:id", deleteVentaById);

router.put("/ventas/:id", updateVenta);