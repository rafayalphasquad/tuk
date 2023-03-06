/*
  Warnings:

  - You are about to drop the `_licensesTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_licensesTousers" DROP CONSTRAINT "_licensesTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_licensesTousers" DROP CONSTRAINT "_licensesTousers_B_fkey";

-- DropTable
DROP TABLE "_licensesTousers";

-- CreateTable
CREATE TABLE "licenseOnUsers" (
    "id" SERIAL NOT NULL,
    "usersId" INTEGER NOT NULL,
    "licensesId" INTEGER NOT NULL,

    CONSTRAINT "licenseOnUsers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "licenseOnUsers" ADD CONSTRAINT "licenseOnUsers_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "licenseOnUsers" ADD CONSTRAINT "licenseOnUsers_licensesId_fkey" FOREIGN KEY ("licensesId") REFERENCES "licenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
