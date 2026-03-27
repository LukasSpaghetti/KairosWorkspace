import { Request, Response } from "express";
import * as bookingsService from "@/services/bookings.service";
import db from "@/lib/db"

export const getAll = async (req: Request, res: Response) => {
    try {
        const bookings = await bookingsService.getAllBookings();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
};

export const getById = async (req : Request, res : Response) => {
    try {
        const booking = await bookingsService.getBookingById(String(req.params.id));
        if(!booking){
            return res.status(404).json({message : "Booking not found"})
        };
        res.json(booking);
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
};

export const deleteById = async (req : Request, res : Response) => {
    try {
        const booking = await bookingsService.getBookingById(String(req.params.id));
        if(!booking){
            return res.status(404).json({message : "Booking not found"})
        };
        res.status(204).json({message : "Booking deleted successfully"})
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
}

export const modify = async (req : Request, res : Response) => {
    try {
        const {id} = req.params
        const {date, start, end, spaceId} = req.body

        const booking = await db.booking.update({
            where: {id : String(id)},
            data : {
                date,
                start,
                end,
                spaceId
            }
        })
        res.json(booking)
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
}

export const create = async (req : Request, res : Response) => {
    try {
        const {date, start, end, userId, spaceId} = req.body
        
        if(!date || !start || !end || !spaceId){
            return res.status(400).json({
                message : "All fields are required"
            })
        }
        const newBooking = await db.booking.create({
            data : {
                date,
                start,
                end,
                userId,
                spaceId
            }
        })
        res.json(newBooking)
    } catch (error) {
        res.status(500).json({message : "Erreur server", error});
    };
}