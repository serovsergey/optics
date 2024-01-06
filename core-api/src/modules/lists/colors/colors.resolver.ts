import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ColorsService } from './colors.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { ListItem } from '../list-item.model';

@Resolver()
export class ColorsResolver {
  constructor(
    private readonly colorsService: ColorsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => ListItem, { name: 'color', nullable: true })
  async getColor(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ListItem> {
    const color = await this.colorsService.findOne({
      where: { id },
    });
    if (!color) {
      this.logger.warn(`Color with id ${id} not found`);
      return null;
    }

    return color;
  }

  @Query(() => [ListItem], { name: 'colors' })
  getColors(): Promise<ListItem[]> {
    return this.colorsService.findMany({});
  }

  @Mutation(() => ListItem, { name: 'createColor' })
  createColor(@Args('value') value: string): Promise<ListItem> {
    return this.colorsService.create({ value });
  }

  @Mutation(() => ListItem, { name: 'updateColor' })
  updateColor(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('value') value: string,
  ): Promise<ListItem> {
    return this.colorsService.update({ data: { value }, where: { id } });
  }

  @Mutation(() => ListItem, { name: 'deleteColor' })
  deleteColor(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ListItem> {
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
