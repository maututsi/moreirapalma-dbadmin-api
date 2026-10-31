import type { Request, Response } from "express"
import { productoRepository } from "../repository/ProductoRepository.js";

export const getProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const producto = await productoRepository.findById(Number(id));
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
    });
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const exito = await productoRepository.delete(id);

    if (exito) {
        return res.json({
            message: `Se ha eliminado correctamente el producto con id ${id}`,
            status: 200
        });
    }
    else {
        return res.json({
            message: `No se ha podido eliminar el producto con id ${id}`,
            status: 500
        });
    }
}

export const updateProductStock = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const nuevaCantidad = req.body.cantidad;

    const producto = productoRepository.updateStock(id, nuevaCantidad);
    
    if (producto) {
        return res.json({
            message: `El producto ${id} se ha actualizado correctamente.`,
            status: 200,
            data: producto
        });
    } else {
        return res.json({
            message: "No se ha podido actualizar el producto.",
            status: 500
        });
    }
}