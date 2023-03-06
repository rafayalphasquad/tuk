/*
  Warnings:

  - You are about to drop the column `usersId` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `templates` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "licenses" DROP CONSTRAINT "licenses_usersId_fkey";

-- DropForeignKey
ALTER TABLE "templates" DROP CONSTRAINT "templates_usersId_fkey";

-- AlterTable
ALTER TABLE "licenses" DROP COLUMN "usersId";

-- AlterTable
ALTER TABLE "templates" DROP COLUMN "usersId";

-- CreateTable
CREATE TABLE "_licensesTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_templatesTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_licensesTousers_AB_unique" ON "_licensesTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_licensesTousers_B_index" ON "_licensesTousers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_templatesTousers_AB_unique" ON "_templatesTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_templatesTousers_B_index" ON "_templatesTousers"("B");

-- AddForeignKey
ALTER TABLE "_licensesTousers" ADD CONSTRAINT "_licensesTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "licenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_licensesTousers" ADD CONSTRAINT "_licensesTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_templatesTousers" ADD CONSTRAINT "_templatesTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_templatesTousers" ADD CONSTRAINT "_templatesTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
