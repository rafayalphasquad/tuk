/*
  Warnings:

  - You are about to drop the `_licensesTousers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_templatesTousers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_licensesTousers" DROP CONSTRAINT "_licensesTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_licensesTousers" DROP CONSTRAINT "_licensesTousers_B_fkey";

-- DropForeignKey
ALTER TABLE "_templatesTousers" DROP CONSTRAINT "_templatesTousers_A_fkey";

-- DropForeignKey
ALTER TABLE "_templatesTousers" DROP CONSTRAINT "_templatesTousers_B_fkey";

-- AlterTable
ALTER TABLE "licenses" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "templates" ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "_licensesTousers";

-- DropTable
DROP TABLE "_templatesTousers";

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templates" ADD CONSTRAINT "templates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
