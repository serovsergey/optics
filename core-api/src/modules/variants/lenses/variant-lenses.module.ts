import { Module } from '@nestjs/common';
import { VariantLensesResolver } from './variant-lenses.resolver';
import { VariantLensesService } from './variant-lenses.service';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [VariantLensesResolver, VariantLensesService, PrismaService],
})
export class VariantLensesModule {}
