import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { Position } from './models/position.model';
import { PositionsService } from './positions.service';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';

@Resolver()
export class PositionsResolver {
  constructor(
    private readonly positionsService: PositionsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => Position, { name: 'position', nullable: true })
  async getPosition(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Position> {
    const position = await this.positionsService.findOne({
      where: { id },
    });
    if (!position) {
      this.logger.warn(`Position with id ${id} not found`);
      return null;
    }

    return position;
  }

  @Query(() => [Position], { name: 'positions' })
  getPositions(
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.PositionWhereInput,
        Prisma.PositionOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.PositionWhereInput,
      Prisma.PositionOrderByWithRelationInput
    >,
  ): Promise<Position[]> {
    return this.positionsService.findMany(options);
  }

  @Mutation(() => Position, { name: 'createPosition' })
  createPosition(@Args('value') value: string): Promise<Position> {
    return this.positionsService.create({ value });
  }

  @Mutation(() => Position, { name: 'updatePosition' })
  updatePosition(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('value') value: string,
  ): Promise<Position> {
    return this.positionsService.update({ data: { value }, where: { id } });
  }

  @Mutation(() => Position, { name: 'deletePosition' })
  deletePosition(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Position> {
    return this.positionsService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deletePositions' })
  async deletePositions(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.positionsService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
