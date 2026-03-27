import { z } from "zod/v4";

export const createBookingSchema = z.object({
  date: z.date(),
  start: z.date(),
  end: z.date(),
  spaceId: z.number()
});

export type CreateBookingDto = z.infer<typeof createBookingSchema>;