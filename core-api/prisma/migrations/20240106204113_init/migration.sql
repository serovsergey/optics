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
CREATE TABLE "list.colors" (
    "id" SERIAL NOT NULL,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "list.colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "list.rim_shapes" (
    "id" SERIAL NOT NULL,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "list.rim_shapes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "list.diopters" (
    "id" SERIAL NOT NULL,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "list.diopters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog.employees" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog.employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog_types.nomenclatures" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "countable" BOOLEAN NOT NULL DEFAULT true,
    "variants_table" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog_types.nomenclatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variants.lens" (
    "id" SERIAL NOT NULL,
    "nomenclature_id" INTEGER,
    "cyl" DOUBLE PRECISION,
    "sph" DOUBLE PRECISION,
    "diameter" INTEGER,
    "color" VARCHAR(2),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "variants.lens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variants.ready_glass" (
    "id" SERIAL NOT NULL,
    "nomenclature_id" INTEGER,
    "sph" DOUBLE PRECISION,
    "pd" INTEGER,
    "lensColor" VARCHAR(2),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "variants.ready_glass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog.partners" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog.partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog.nomenclatures" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "type_id" INTEGER,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "code" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog.nomenclatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog.nomenclatures.appearance" (
    "nomenclature_id" INTEGER NOT NULL,
    "color_id" INTEGER,
    "weight" INTEGER
);

-- CreateTable
CREATE TABLE "catalog.nomenclatures.rim_params" (
    "nomenclature_id" INTEGER NOT NULL,
    "bridge" INTEGER,
    "temple" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "shape_id" INTEGER
);

-- CreateTable
CREATE TABLE "catalog.nomenclatures.lens_params" (
    "nomenclature_id" INTEGER NOT NULL,
    "index" DOUBLE PRECISION,
    "diameter" INTEGER
);

-- CreateTable
CREATE TABLE "catalog.warehouses" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog.warehouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document.purchase_invoices" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "num" VARCHAR NOT NULL,
    "partner_id" INTEGER,
    "warehouse_id" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER,

    CONSTRAINT "document.purchase_invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document.purchase_invoices.items" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER,
    "nomenclature_id" INTEGER,
    "quantity" INTEGER,
    "price" DOUBLE PRECISION,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document.purchase_invoices.items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_singular_key" ON "constant.company_name"("singular");

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_date_key" ON "constant.company_name"("date");

-- CreateIndex
CREATE UNIQUE INDEX "constant.accountant_date_key" ON "constant.accountant"("date");

-- CreateIndex
CREATE UNIQUE INDEX "catalog.nomenclatures.appearance_nomenclature_id_key" ON "catalog.nomenclatures.appearance"("nomenclature_id");

-- CreateIndex
CREATE UNIQUE INDEX "catalog.nomenclatures.rim_params_nomenclature_id_key" ON "catalog.nomenclatures.rim_params"("nomenclature_id");

-- CreateIndex
CREATE UNIQUE INDEX "catalog.nomenclatures.lens_params_nomenclature_id_key" ON "catalog.nomenclatures.lens_params"("nomenclature_id");

-- AddForeignKey
ALTER TABLE "constant.accountant" ADD CONSTRAINT "constant.accountant_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "catalog.employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.employees" ADD CONSTRAINT "catalog.employees_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "catalog.employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variants.lens" ADD CONSTRAINT "variants.lens_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variants.ready_glass" ADD CONSTRAINT "variants.ready_glass_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.partners" ADD CONSTRAINT "catalog.partners_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "catalog.partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures" ADD CONSTRAINT "catalog.nomenclatures_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures" ADD CONSTRAINT "catalog.nomenclatures_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "catalog_types.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures.appearance" ADD CONSTRAINT "catalog.nomenclatures.appearance_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "list.colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures.appearance" ADD CONSTRAINT "catalog.nomenclatures.appearance_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures.rim_params" ADD CONSTRAINT "catalog.nomenclatures.rim_params_shape_id_fkey" FOREIGN KEY ("shape_id") REFERENCES "list.rim_shapes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures.rim_params" ADD CONSTRAINT "catalog.nomenclatures.rim_params_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures.lens_params" ADD CONSTRAINT "catalog.nomenclatures.lens_params_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.warehouses" ADD CONSTRAINT "catalog.warehouses_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "catalog.warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document.purchase_invoices" ADD CONSTRAINT "document.purchase_invoices_partner_id_fkey" FOREIGN KEY ("partner_id") REFERENCES "catalog.partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document.purchase_invoices" ADD CONSTRAINT "document.purchase_invoices_warehouse_id_fkey" FOREIGN KEY ("warehouse_id") REFERENCES "catalog.warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document.purchase_invoices" ADD CONSTRAINT "document.purchase_invoices_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "catalog.employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document.purchase_invoices.items" ADD CONSTRAINT "document.purchase_invoices.items_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "document.purchase_invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document.purchase_invoices.items" ADD CONSTRAINT "document.purchase_invoices.items_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
