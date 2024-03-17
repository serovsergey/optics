import { Module } from '@nestjs/common';
import { PrismaService } from 'modules/service/database/prisma.service';
import { VariantReadyGlassesResolver } from './variant-ready-glasses.resolver';
import { VariantReadyGlassesService } from './variant-ready-glasses.service';

@Module({
  providers: [
    VariantReadyGlassesResolver,
    VariantReadyGlassesService,
    PrismaService,
  ],
})
export class VariantReadyGlassesModule {}
