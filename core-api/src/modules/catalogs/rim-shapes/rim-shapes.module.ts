import { Module } from '@nestjs/common';
import { RimShapesResolver } from './rim-shapes.resolver';
import { RimShapesService } from './rim-shapes.service';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [RimShapesResolver, RimShapesService, PrismaService],
})
export class RimShapesModule {}
