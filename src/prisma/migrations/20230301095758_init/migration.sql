-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "licenses" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "usersId" INTEGER,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "templates" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "usersId" INTEGER,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "method" TEXT,
    "status" BOOLEAN DEFAULT false,
    "checkoutSessionId" TEXT,
    "customerId" TEXT,
    "card" JSONB,
    "amount" INTEGER,
    "usersId" INTEGER,
    "templatesId" INTEGER,
    "licensesId" INTEGER,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usersMeta" (
    "id" SERIAL NOT NULL,
    "key" TEXT,
    "value" TEXT,
    "usersId" INTEGER,

    CONSTRAINT "usersMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "uiKits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "licensesId" INTEGER NOT NULL,

    CONSTRAINT "uiKits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kitsId" INTEGER,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "subCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "components" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subCategoryId" INTEGER,

    CONSTRAINT "components_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "componentsMeta" (
    "id" SERIAL NOT NULL,
    "key" TEXT,
    "value" TEXT,
    "componentsId" INTEGER,

    CONSTRAINT "componentsMeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrationsComponent" (
    "id" SERIAL NOT NULL,
    "framework" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "componentsId" INTEGER,

    CONSTRAINT "integrationsComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integrationsTemplate" (
    "id" SERIAL NOT NULL,
    "framework" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "templatesId" INTEGER,

    CONSTRAINT "integrationsTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "uiKits_licensesId_key" ON "uiKits"("licensesId");

-- AddForeignKey
ALTER TABLE "licenses" ADD CONSTRAINT "licenses_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "templates" ADD CONSTRAINT "templates_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_templatesId_fkey" FOREIGN KEY ("templatesId") REFERENCES "templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_licensesId_fkey" FOREIGN KEY ("licensesId") REFERENCES "licenses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usersMeta" ADD CONSTRAINT "usersMeta_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "uiKits" ADD CONSTRAINT "uiKits_licensesId_fkey" FOREIGN KEY ("licensesId") REFERENCES "licenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_kitsId_fkey" FOREIGN KEY ("kitsId") REFERENCES "uiKits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subCategory" ADD CONSTRAINT "subCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "components" ADD CONSTRAINT "components_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "componentsMeta" ADD CONSTRAINT "componentsMeta_componentsId_fkey" FOREIGN KEY ("componentsId") REFERENCES "components"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrationsComponent" ADD CONSTRAINT "integrationsComponent_componentsId_fkey" FOREIGN KEY ("componentsId") REFERENCES "components"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrationsTemplate" ADD CONSTRAINT "integrationsTemplate_templatesId_fkey" FOREIGN KEY ("templatesId") REFERENCES "templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
