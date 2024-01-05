import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorsService } from './colors.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { Color } from './models/color.model';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';
import { ColorCreateInput } from './dto/color-create-input';

@Resolver()
export class ColorsResolver {
  constructor(
    private readonly colorsService: ColorsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => Color, { name: 'color', nullable: true })
  async getColor(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Color> {
    const color = await this.colorsService.findOne({
      where: { id },
    });
    if (!color) {
      this.logger.warn(`Color with id ${id} not found`);
      return null;
    }

    return color;
  }

  @Query(() => [Color], { name: 'colors' })
  getColors(
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.ColorWhereInput,
        Prisma.ColorOrderByWithRelationInput
      >(),
    )
    options?: ListOptions<
      Prisma.ColorWhereInput,
      Prisma.ColorOrderByWithRelationInput
    >,
  ): Promise<Color[]> {
    return this.colorsService.findMany(options);
  }

  @Mutation(() => Color, { name: 'createColor' })
  createColor(@Args('data') data: ColorCreateInput): Promise<Color> {
    return this.colorsService.create(data);
  }

  @Mutation(() => Color, { name: 'updateColor' })
  updateColor(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: ColorCreateInput,
  ): Promise<Color> {
    return this.colorsService.update({ data, where: { id } });
  }

  @Mutation(() => Color, { name: 'deleteColor' })
  deleteColor(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Color> {
    return this.colorsService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteColors' })
  async deleteColors(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.colorsService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
