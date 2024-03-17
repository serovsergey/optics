import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RimShapesService } from './rim-shapes.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { RimShape } from './models/rim-shape.model';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';

@Resolver()
export class RimShapesResolver {
  constructor(
    private readonly rimShapeService: RimShapesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => RimShape, { name: 'rimShape', nullable: true })
  async getRimShape(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<RimShape> {
    const rimShape = await this.rimShapeService.findOne({
      where: { id },
    });
    if (!rimShape) {
      this.logger.warn(`Rim shape with id ${id} not found`);
      return null;
    }

    return rimShape;
  }

  @Query(() => [RimShape], { name: 'rimShapes' })
  getRimShapes(
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.RimShapeWhereInput,
        Prisma.RimShapeOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.RimShapeWhereInput,
      Prisma.RimShapeOrderByWithRelationInput
    >,
  ): Promise<RimShape[]> {
    return this.rimShapeService.findMany(options);
  }

  @Mutation(() => RimShape, { name: 'createRimShape' })
  createRimShape(@Args('value') value: string): Promise<RimShape> {
    return this.rimShapeService.create({ value });
  }

  @Mutation(() => RimShape, { name: 'updateRimShape' })
  updateRimShape(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('value') value: string,
  ): Promise<RimShape> {
    return this.rimShapeService.update({ data: { value }, where: { id } });
  }

  @Mutation(() => RimShape, { name: 'deleteRimShape' })
  deleteRimShape(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<RimShape> {
    return this.rimShapeService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteRimShapes' })
  async deleteRimShapes(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.rimShapeService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
