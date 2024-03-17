import { Module } from '@nestjs/common';
import { PrismaService } from 'modules/service/database/prisma.service';
import { PositionsService } from './positions.service';
import { PositionsResolver } from './positions.resolver';

@Module({
  providers: [PositionsService, PositionsResolver, PrismaService],
})
export class PositionsModule {}
