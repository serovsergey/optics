import { Injectable } from '@nestjs/common';
import { Nomenclature, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'modules/service/database/prisma.service';
import { VariantLens } from 'modules/variants/lenses/models/variant-lens.model';
import { VariantReadyGlasses } from 'modules/variants/ready-glasses/models/variant-ready-glasses.model';

@Injectable()
export class NomenclaturesService {
  constructor(private prisma: PrismaService) {}

  private readonly include: Prisma.NomenclatureInclude<DefaultArgs> = {
    type: true,
    appearance: { include: { color: true } },
    lensParams: true,
    rimParams: { include: { shape: true } },
    _count: { select: { children: true } },
  };

  findOne(options: Prisma.NomenclatureFindUniqueArgs) {
    return this.prisma.nomenclature.findUnique({
      ...options,
      include: this.include,
    });
  }

  async findMany(options: Prisma.NomenclatureFindManyArgs) {
    // const sqlQuery = `
    // SELECT
    //   cn.*,
    //   nom.*,
    //   lens.*,
    //   glasses.*
    // FROM
    //   public."catalog.nomenclatures" cn
    // left join
    //   public."catalog_types.nomenclatures" nom on cn.type_id = nom.id
    // LEFT JOIN
    //   public."variant.lenses" AS lens ON nom.variants_table = 'lenses'
    // LEFT JOIN
    //   public."variant.ready_glasses" AS glasses ON nom.variants_table = 'ready_glasses';
    // `;
    // const sql: Prisma.Sql = new Prisma.Sql([sqlQuery], []);
    // const result =
    //   await this.prisma.$queryRaw<
    //     Array<
    //       Partial<Nomenclature> &
    //         Partial<VariantLens> &
    //         Partial<VariantReadyGlasses>
    //     >
    //   >(sql);

    // return result.map((row) => {
    //   const {
    //     id,
    //     name,
    //     isFolder,
    //     parentId,
    //     typeId,
    //     description,
    //     code,
    //     createdAt,
    //     updatedAt,
    //     ...variant
    //   } = row;
    //   return {
    //     id,
    //     name,
    //     isFolder,
    //     parentId,
    //     typeId,
    //     description,
    //     code,
    //     createdAt,
    //     updatedAt,
    //     variants: variant.cyl ? variant : null,
    //   };
    // });
    return this.prisma.nomenclature.findMany({
      ...options,
      include: this.include,
    });
  }

  async create(data: Prisma.NomenclatureCreateInput) {
    return this.prisma.nomenclature.create({ data });
  }

  async update(options: Prisma.NomenclatureUpdateArgs) {
    return this.prisma.nomenclature.update(options);
  }

  async delete(options: Prisma.NomenclatureDeleteArgs) {
    return this.prisma.nomenclature.delete(options);
  }

  async deleteMany(options: Prisma.NomenclatureDeleteManyArgs) {
    return this.prisma.nomenclature.deleteMany(options);
  }
}
