import { CreateBookingDto } from "@/dtos/bookings.dto";
import db from "@/lib/db";
import { start } from "node:repl";

export async function getAllBookings() {
  return db.booking.findMany();
}

export async function getBookingById(id: string) {
  const booking = await db.booking.findUnique({
    where: { id }});

  if (!booking) return null;
  return booking;
}

export async function deleteById(id: string) {
    const booking = await db.booking.findUnique({
        where: { id }});

    if (!booking) return null;
    return {message : "deleted booking successfully"}
}

export async function  modify(id: string) {
    const booking = await db.booking.findUnique({
        where : { id }});

    if (!booking) return null;
    return {message : "updated booking successfully"}
}

export const create = async (userId : string, d : CreateBookingDto) => {
    return db.booking.create({
        data : {
            date : d.date,
            start : d.start,
            end : d.end,
            spaceId : d.spaceId,
            userId
        }
    })
}
