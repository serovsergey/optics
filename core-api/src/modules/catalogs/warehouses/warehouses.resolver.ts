import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WarehousesService } from './warehouses.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';
import { ListOptionsPipe } from 'pipes';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';
import { WarehouseResult } from './dto/warehouse-result';
import { extractChildrenCount } from 'utils';
import { Warehouse } from './models/warehouse.model';
import { WarehouseCreateInput } from './dto/warehouse-create-input';

@Resolver()
export class WarehousesResolver {
  constructor(
    private readonly warehousesService: WarehousesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => [WarehouseResult], { name: 'warehouses' })
  async getWarehouses(
    @Args('parentId', { nullable: true, type: () => Int })
    parentId: number,
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.WarehouseWhereInput,
        Prisma.WarehouseOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.WarehouseWhereInput,
      Prisma.WarehouseOrderByWithRelationInput
    >,
  ): Promise<WarehouseResult[]> {
    const warehouse = await this.warehousesService.findMany({
      ...options,
      where: { ...options.where, parentId },
    });
    return warehouse.map(extractChildrenCount);
  }

  @Query(() => WarehouseResult, { name: 'warehouse', nullable: true })
  async getWarehouse(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<WarehouseResult | null> {
    const warehouse = await this.warehousesService.findOne({ where: { id } });
    if (!warehouse) {
      this.logger.warn(`Warehouse with id ${id} not found`);
      return null;
    }
    return extractChildrenCount(warehouse);
  }

  @Mutation(() => Warehouse, { name: 'createWarehouse' })
  createWarehouse(
    @Args('data') data: WarehouseCreateInput,
  ): Promise<Warehouse> {
    return this.warehousesService.create(data);
  }

  @Mutation(() => Warehouse, { name: 'updateWarehouse' })
  updateWarehouse(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: WarehouseCreateInput,
  ): Promise<Warehouse> {
    return this.warehousesService.update({ data, where: { id } });
  }

  @Mutation(() => Warehouse, { name: 'deleteWarehouse' })
  deleteWarehouse(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Warehouse> {
    return this.warehousesService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deleteWarehouses' })
  async deleteWarehouses(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.warehousesService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
