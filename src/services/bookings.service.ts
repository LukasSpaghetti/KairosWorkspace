import db from "@/lib/db";

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
