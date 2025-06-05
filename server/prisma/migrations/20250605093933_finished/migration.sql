/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "username" TEXT NOT NULL DEFAULT 'Хэрэглэгч',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "BookingPage" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "durations" JSONB NOT NULL,
    "locationDescription" TEXT NOT NULL,
    "eventDescription" TEXT NOT NULL DEFAULT '',
    "image" TEXT,
    "activeDays" JSONB NOT NULL,
    "startHour" INTEGER NOT NULL,
    "startMinute" INTEGER NOT NULL,
    "endHour" INTEGER NOT NULL,
    "endMinute" INTEGER NOT NULL,
    "startBreakHour" INTEGER NOT NULL,
    "startBreakMinute" INTEGER NOT NULL,
    "endBreakHour" INTEGER NOT NULL,
    "endBreakMinute" INTEGER NOT NULL,
    "increment" INTEGER NOT NULL,
    "buffer" INTEGER NOT NULL,
    "location" JSONB NOT NULL,

    CONSTRAINT "BookingPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "bookingPageId" INTEGER NOT NULL,
    "isoString" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "inviteeFirstName" TEXT NOT NULL,
    "inviteeLastName" TEXT NOT NULL,
    "inviteeEmail" TEXT NOT NULL,
    "inviteePhone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingPage" ADD CONSTRAINT "BookingPage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_bookingPageId_fkey" FOREIGN KEY ("bookingPageId") REFERENCES "BookingPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
