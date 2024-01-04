/*
  Warnings:

  - You are about to drop the column `color` on the `products.appearance` table. All the data in the column will be lost.
  - You are about to drop the column `frameShape` on the `products.rim_params` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products.appearance" DROP COLUMN "color",
ADD COLUMN     "color_id" INTEGER;

-- AlterTable
ALTER TABLE "products.rim_params" DROP COLUMN "frameShape",
ADD COLUMN     "frame_shape_id" INTEGER;

-- CreateTable
CREATE TABLE "colors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frame_shapes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "frame_shapes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products.appearance" ADD CONSTRAINT "products.appearance_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products.rim_params" ADD CONSTRAINT "products.rim_params_frame_shape_id_fkey" FOREIGN KEY ("frame_shape_id") REFERENCES "frame_shapes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
