import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsResolver } from './colors.resolver';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [ColorsService, ColorsResolver, PrismaService],
})
export class ColorsModule {}
