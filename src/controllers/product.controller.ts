import type { Request, Response } from "express"
import { productoRepository } from "../repository/ProductoRepository.js";

export const getProduct = async (req: Request, res: Response) => {
    const producto = await productoRepository.findById(1);
    return res.json({ producto });
};

export const getProducts = async (req: Request, res: Response) => {
    const productos = await productoRepository.findAll();
    return res.json({ productos });
}

export const createProduct = async (req: Request, res: Response) => {
    const { nombre, precio, stock, categoriaId } = req.body;

    const producto = await productoRepository.create({ nombre, precio, stock, categoriaId });
    return res.json({
        message: "Producto creado",
        status: 201,
        data: producto
    })
}