/*
  Warnings:

  - You are about to drop the column `userId` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `templates` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "licenses" DROP CONSTRAINT "licenses_userId_fkey";

-- DropForeignKey
ALTER TABLE "templates" DROP CONSTRAINT "templates_userId_fkey";

-- AlterTable
ALTER TABLE "licenses" DROP COLUMN "userId",
ADD COLUMN     "usersId" INTEGER;

-- AlterTable
ALTER TABLE "templates" DROP COLUMN "userId",
ADD COLUMN     "usersId" INTEGER;

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templates" ADD CONSTRAINT "templates_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
