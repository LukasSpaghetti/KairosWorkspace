import { z } from "zod/v4";

export const createSpaceSchema = z.object({
  name: z.string().min(1, "Le titre est obligatoire").max(50),
  description: z.string().min(1, "La description est obligatoire").max(500),
  capacity: z.number().int().positive().nullable(),
});

export type CreateSpaceDto = z.infer<typeof createSpaceSchema>;