import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RimShapesService } from './rim-shapes.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { ListItem } from '../list-item.model';

@Resolver()
export class RimShapesResolver {
  constructor(
    private readonly rimShapeService: RimShapesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => ListItem, { name: 'rimShape', nullable: true })
  async getRimShape(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ListItem> {
    const rimShape = await this.rimShapeService.findOne({
      where: { id },
    });
    if (!rimShape) {
      this.logger.warn(`Rim shape with id ${id} not found`);
      return null;
    }

    return rimShape;
  }

  @Query(() => [ListItem], { name: 'rimShapes' })
  getRimShapes(): Promise<ListItem[]> {
    return this.rimShapeService.findMany({});
  }

  @Mutation(() => ListItem, { name: 'createRimShape' })
  createRimShape(@Args('value') value: string): Promise<ListItem> {
    return this.rimShapeService.create({ value });
  }

  @Mutation(() => ListItem, { name: 'updateRimShape' })
  updateRimShape(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('value') value: string,
  ): Promise<ListItem> {
    return this.rimShapeService.update({ data: { value }, where: { id } });
  }

  @Mutation(() => ListItem, { name: 'deleteRimShape' })
  deleteRimShape(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ListItem> {
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
