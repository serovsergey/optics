import { Inject, LoggerService } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VariantLensesService } from './variant-lenses.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { VariantLens } from './models/variant-lens.model';
import { VariantLensInput } from './dto/variant-lens-input';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';

@Resolver()
export class VariantLensesResolver {
  constructor(
    private readonly variantLensesService: VariantLensesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => VariantLens, { name: 'lensVariant', nullable: true })
  async getVariantLens(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<VariantLens> {
    const variantLens = await this.variantLensesService.findOne({
      where: { id },
    });
    if (!variantLens) {
      this.logger.warn(`Lens variant with id ${id} not found`);
      return null;
    }

    return variantLens;
  }

  @Query(() => [VariantLens], { name: 'lensVariants' })
  getVariantsLens(
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.Variant_LensWhereInput,
        Prisma.Variant_LensOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.Variant_LensWhereInput,
      Prisma.Variant_LensOrderByWithRelationInput
    >,
  ): Promise<VariantLens[]> {
    return this.variantLensesService.findMany(options);
  }

  @Mutation(() => VariantLens, { name: 'createLensVariant' })
  createVariantLens(
    @Args('data') data: VariantLensInput,
  ): Promise<VariantLens> {
    return this.variantLensesService.create(data);
  }

  @Mutation(() => VariantLens, { name: 'updateLensVariant' })
  updateVariantLens(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: VariantLensInput,
  ): Promise<VariantLens> {
    return this.variantLensesService.update({ data, where: { id } });
  }

  @Mutation(() => VariantLens, { name: 'deleteLensVariant' })
  deleteVariantLens(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<VariantLens> {
    return this.variantLensesService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteLensVariants' })
  async deleteVariantLenses(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.variantLensesService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
