import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ColorsService } from './colors.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { Color } from './models/color.model';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';

@Resolver()
export class ColorsResolver {
  constructor(
    private readonly colorsService: ColorsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => Color, { name: 'color', nullable: true })
  async getProduct(
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
  async getColors(
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
    const colors = await this.colorsService.findMany(options);
    return colors;
  }
}
