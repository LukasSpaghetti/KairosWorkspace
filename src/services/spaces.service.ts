import db from "@/lib/db";

export async function getAllSpaces() {
  return db.space.findMany();
}

export async function getSpaceById(id: string) {
  const space = await db.space.findUnique({
    where: { id }});

  if (!space) return null;
  return space;
}