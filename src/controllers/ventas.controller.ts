import type { Request, Response } from "express"
import { ventaRepository } from "../repository/VentaRepository.js"

export const getVentaById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const venta = await ventaRepository.findById(Number(id))
    return res.json({ venta });
}

export const getVentas = async (req: Request, res: Response) => {
    const ventas = await ventaRepository.findAll();
    return res.json({ ventas });
}

export const createVenta = async (req: Request, res: Response) => {
    const { fecha, cliente, total, detalles } = req.body;

    const venta = await ventaRepository.create({ fecha, cliente, total, detalles });
    return res.json({
        message: "Venta creada",
        status: 200,
        data: venta
    });
}

export const deleteVentaById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const exito = await ventaRepository.delete(id);
    
    if (exito) {
        return res.json({
            message: `La venta con el id ${id} se ha eliminado correctamente.`,
            status: 200
        });
    } else {
        return res.json({
            message: `No se ha podido eliminar la venta con el id ${id}.`,
            status: 500
        });
    }
}

export const updateVenta = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { fecha, cliente, total, detalles } = req.body;

    const venta = await ventaRepository.update(id, { fecha, cliente, total, detalles });

    if (venta) {
        return res.json({
            message: `Se ha actualizado correctamente la venta ${id}.`,
            status: 200,
            data: venta
        });
    } else {
        return res.json({
            message: "No se ha podido actualizar la venta.",
            status: 500
        });
    }
}