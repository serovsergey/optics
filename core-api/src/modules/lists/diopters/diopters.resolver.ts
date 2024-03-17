import { Inject, LoggerService } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { DioptersService } from './diopters.service';
import { Diopter } from './models/diopter.model';

@Resolver()
export class DioptersResolver {
  constructor(
    private readonly dioptersService: DioptersService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => Diopter, { name: 'diopter', nullable: true })
  async getDiopter(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Diopter> {
    const diopter = await this.dioptersService.findOne({
      where: { id },
    });
    if (!diopter) {
      this.logger.warn(`Diopter with id ${id} not found`);
      return null;
    }

    return diopter;
  }

  @Query(() => [Diopter], { name: 'diopters' })
  getDiopters(): Promise<Diopter[]> {
    return this.dioptersService.findMany({});
  }

  @Mutation(() => Diopter, { name: 'createDiopter' })
  createDiopter(@Args('value') value: string): Promise<Diopter> {
    return this.dioptersService.create({ value });
  }

  @Mutation(() => Diopter, { name: 'updateDiopter' })
  updateDiopter(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('value') value: string,
  ): Promise<Diopter> {
    return this.dioptersService.update({ data: { value }, where: { id } });
  }

  @Mutation(() => Diopter, { name: 'deleteDiopter' })
  deleteDiopter(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Diopter> {
    return this.dioptersService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteDiopters' })
  async deleteDiopters(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.dioptersService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
