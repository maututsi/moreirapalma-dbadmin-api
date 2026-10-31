import type { Request, Response } from "express";


export const getUsers = (req: Request, res: Response) => {
    res.json({
        code: "200",
        1: {
            name: "Molina",
            lastname: "Mollinedo"
        },
        2: {
            name: "Jorge",
            lastname: "Martinez"
        },
        3: {
            name: "Michael",
            lastname: "Scott"
        },
        4: {
            name: "Guillermo",
            lastname: "Isaac"
        },
        5: {
            name: "Mecha",
            lastname: "Mau"
        }
    });
};

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        code: "200",
        data: {
            id: id,
            name: "Carlos",
            lastname: "Mendoza"
        }
    });
};

