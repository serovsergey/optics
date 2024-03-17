import { Inject, LoggerService } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';
import { VariantReadyGlassesInput } from './dto/variant-ready-glasses-input';
import { VariantReadyGlassesService } from './variant-ready-glasses.service';
import { VariantReadyGlasses } from './models/variant-ready-glasses.model';

@Resolver()
export class VariantReadyGlassesResolver {
  constructor(
    private readonly variantReadyGlassesService: VariantReadyGlassesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => VariantReadyGlasses, {
    name: 'readyGlassesVariant',
    nullable: true,
  })
  async getVariantReadyGlasses(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<VariantReadyGlasses> {
    const variantReadyGlasses = await this.variantReadyGlassesService.findOne({
      where: { id },
    });
    if (!variantReadyGlasses) {
      this.logger.warn(`Lens variant with id ${id} not found`);
      return null;
    }

    return variantReadyGlasses;
  }

  @Query(() => [VariantReadyGlasses], { name: 'readyGlassesVariants' })
  getVariantsLens(
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.Variant_ReadyGlassesWhereInput,
        Prisma.Variant_ReadyGlassesOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.Variant_ReadyGlassesWhereInput,
      Prisma.Variant_ReadyGlassesOrderByWithRelationInput
    >,
  ): Promise<VariantReadyGlasses[]> {
    return this.variantReadyGlassesService.findMany(options);
  }

  @Mutation(() => VariantReadyGlasses, { name: 'createReadyGlassesVariant' })
  createVariantReadyGlasses(
    @Args('data') data: VariantReadyGlassesInput,
  ): Promise<VariantReadyGlasses> {
    return this.variantReadyGlassesService.create(data);
  }

  @Mutation(() => VariantReadyGlasses, { name: 'updateReadyGlassesVariant' })
  updateVariantReadyGlasses(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: VariantReadyGlassesInput,
  ): Promise<VariantReadyGlasses> {
    return this.variantReadyGlassesService.update({ data, where: { id } });
  }

  @Mutation(() => VariantReadyGlasses, { name: 'deleteReadyGlassesVariant' })
  deleteVariantReadyGlasses(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<VariantReadyGlasses> {
    return this.variantReadyGlassesService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteReadyGlassesVariants' })
  async bulkDeleteVariantReadyGlasses(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.variantReadyGlassesService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
