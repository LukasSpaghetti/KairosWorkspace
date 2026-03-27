import { Request, Response } from "express";
import * as bookingsService from "@/services/bookings.service";
import { createBookingSchema } from "@/lib/schemas";

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
        const parsed = createBookingSchema.safeParse(req.body);
        if(!parsed.success){
            return res.status(400).json({message : "Données invalides", errors : parsed.error.issues});
        }
        const booking = await bookingsService.create(req.userId! , parsed.data)
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