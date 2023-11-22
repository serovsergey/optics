-- CreateEnum
CREATE TYPE "SingularValue" AS ENUM ('singular');

-- CreateTable
CREATE TABLE "constant.company_name" (
    "singular" "SingularValue" NOT NULL DEFAULT 'singular',
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" VARCHAR
);

-- CreateTable
CREATE TABLE "constant.accountant" (
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employeeId" INTEGER
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "parent_id" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "parent_id" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "parent_id" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_singular_key" ON "constant.company_name"("singular");

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_date_key" ON "constant.company_name"("date");

-- CreateIndex
CREATE UNIQUE INDEX "constant.accountant_date_key" ON "constant.accountant"("date");

-- AddForeignKey
ALTER TABLE "constant.accountant" ADD CONSTRAINT "constant.accountant_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partners" ADD CONSTRAINT "partners_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
