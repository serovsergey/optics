import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [ProductsResolver, ProductsService, PrismaService],
})
export class ProductsModule {}
