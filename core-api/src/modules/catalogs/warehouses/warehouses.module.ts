import { Module } from '@nestjs/common';
import { WarehousesResolver } from './warehouses.resolver';
import { WarehousesService } from './warehouses.service';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [WarehousesResolver, WarehousesService, PrismaService],
})
export class WarehousesModule {}
