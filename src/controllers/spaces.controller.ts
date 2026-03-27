import { Request, Response } from "express";
import * as spacesService from "@/services/spaces.service";

export const getAll = async (req: Request, res: Response) => {
    try {
        const spaces = await spacesService.getAllSpaces();
        res.json(spaces);
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
};

export const getById = async (req : Request, res : Response) => {
    try {
        const space = await spacesService.getSpaceById(Number(req.params.id));
        if(!space){
            return res.status(400).json({message : "Space not found"})
        };
        res.json(space);
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
};