/*
  Warnings:

  - The primary key for the `spaces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `spaces` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `spaceId` on the `bookings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_spaceId_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "spaceId",
ADD COLUMN     "spaceId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "spaces" DROP CONSTRAINT "spaces_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "spaces_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_spaceId_date_start_end_key" ON "bookings"("spaceId", "date", "start", "end");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "spaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
