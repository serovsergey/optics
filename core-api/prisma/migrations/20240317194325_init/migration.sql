-- CreateEnum
CREATE TYPE "SingularValue" AS ENUM ('singular');

-- CreateEnum
CREATE TYPE "NomenclatureVariant" AS ENUM ('lenses', 'ready_glasses');

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
CREATE TABLE "list.positions" (
    "id" SERIAL NOT NULL,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "list.positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog.employees" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "is_folder" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR NOT NULL,
    "description" VARCHAR,
    "positionId" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog.employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalog_types.nomenclatures" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "totals" BOOLEAN NOT NULL DEFAULT true,
    "variants_table" "NomenclatureVariant",
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catalog_types.nomenclatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant.lenses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "sph_id" INTEGER,
    "cyl_id" INTEGER,
    "diameter" INTEGER,
    "tone" VARCHAR(2),

    CONSTRAINT "variant.lenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant.ready_glasses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "sph_id" INTEGER,
    "pd" INTEGER,
    "tone" VARCHAR(2),

    CONSTRAINT "variant.ready_glasses_pkey" PRIMARY KEY ("id")
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
    "partner_id" INTEGER NOT NULL,
    "warehouse_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,
    "total" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "is_posted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "document.purchase_invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document.purchase_invoices._items" (
    "id" SERIAL NOT NULL,
    "invoice_id" INTEGER,
    "nomenclature_id" INTEGER,
    "variant_id" INTEGER,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "total" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document.purchase_invoices._items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_singular_key" ON "constant.company_name"("singular");

-- CreateIndex
CREATE UNIQUE INDEX "constant.company_name_date_key" ON "constant.company_name"("date");

-- CreateIndex
CREATE UNIQUE INDEX "constant.accountant_date_key" ON "constant.accountant"("date");

-- CreateIndex
CREATE UNIQUE INDEX "list.colors_value_key" ON "list.colors"("value");

-- CreateIndex
CREATE UNIQUE INDEX "list.rim_shapes_value_key" ON "list.rim_shapes"("value");

-- CreateIndex
CREATE UNIQUE INDEX "list.diopters_value_key" ON "list.diopters"("value");

-- CreateIndex
CREATE UNIQUE INDEX "list.positions_value_key" ON "list.positions"("value");

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
ALTER TABLE "catalog.employees" ADD CONSTRAINT "catalog.employees_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "list.positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant.lenses" ADD CONSTRAINT "variant.lenses_sph_id_fkey" FOREIGN KEY ("sph_id") REFERENCES "list.diopters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant.lenses" ADD CONSTRAINT "variant.lenses_cyl_id_fkey" FOREIGN KEY ("cyl_id") REFERENCES "list.diopters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant.ready_glasses" ADD CONSTRAINT "variant.ready_glasses_sph_id_fkey" FOREIGN KEY ("sph_id") REFERENCES "list.diopters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.partners" ADD CONSTRAINT "catalog.partners_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "catalog.partners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures" ADD CONSTRAINT "catalog.nomenclatures_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catalog.nomenclatures" ADD CONSTRAINT "catalog.nomenclatures_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "catalog_types.nomenclatures"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "document.purchase_invoices._items" ADD CONSTRAINT "document.purchase_invoices._items_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "document.purchase_invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document.purchase_invoices._items" ADD CONSTRAINT "document.purchase_invoices._items_nomenclature_id_fkey" FOREIGN KEY ("nomenclature_id") REFERENCES "catalog.nomenclatures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
