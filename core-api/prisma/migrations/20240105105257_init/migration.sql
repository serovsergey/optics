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
CREATE TABLE "colors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rim_shapes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rim_shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products.appearance" (
    "product_id" INTEGER NOT NULL,
    "color_id" INTEGER,
    "weight" INTEGER
);

-- CreateTable
CREATE TABLE "products.rim_params" (
    "product_id" INTEGER NOT NULL,
    "bridge" INTEGER,
    "temple" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "shape_id" INTEGER
);

-- CreateTable
CREATE TABLE "products.lens_params" (
    "product_id" INTEGER NOT NULL,
    "index" DOUBLE PRECISION,
    "diameter" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_singular_key" ON "constant.company_name"("singular");

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_date_key" ON "constant.company_name"("date");

-- CreateIndex
CREATE UNIQUE INDEX "constant.accountant_date_key" ON "constant.accountant"("date");

-- CreateIndex
CREATE UNIQUE INDEX "products.appearance_product_id_key" ON "products.appearance"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "products.rim_params_product_id_key" ON "products.rim_params"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "products.lens_params_product_id_key" ON "products.lens_params"("product_id");

-- AddForeignKey
ALTER TABLE "constant.accountant" ADD CONSTRAINT "constant.accountant_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partners" ADD CONSTRAINT "partners_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products.appearance" ADD CONSTRAINT "products.appearance_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products.appearance" ADD CONSTRAINT "products.appearance_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products.rim_params" ADD CONSTRAINT "products.rim_params_shape_id_fkey" FOREIGN KEY ("shape_id") REFERENCES "rim_shapes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products.rim_params" ADD CONSTRAINT "products.rim_params_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products.lens_params" ADD CONSTRAINT "products.lens_params_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
