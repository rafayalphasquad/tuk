/*
  Warnings:

  - You are about to drop the `integrationsComponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `integrationsTemplate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "integrationsComponent" DROP CONSTRAINT "integrationsComponent_componentsId_fkey";

-- DropForeignKey
ALTER TABLE "integrationsTemplate" DROP CONSTRAINT "integrationsTemplate_templatesId_fkey";

-- DropTable
DROP TABLE "integrationsComponent";

-- DropTable
DROP TABLE "integrationsTemplate";

-- CreateTable
CREATE TABLE "componentsIntegration" (
    "id" SERIAL NOT NULL,
    "framework" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "componentsId" INTEGER,

    CONSTRAINT "componentsIntegration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templatesIntegration" (
    "id" SERIAL NOT NULL,
    "framework" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "templatesId" INTEGER,

    CONSTRAINT "templatesIntegration_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "componentsIntegration" ADD CONSTRAINT "componentsIntegration_componentsId_fkey" FOREIGN KEY ("componentsId") REFERENCES "components"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templatesIntegration" ADD CONSTRAINT "templatesIntegration_templatesId_fkey" FOREIGN KEY ("templatesId") REFERENCES "templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
