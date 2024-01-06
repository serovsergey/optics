import { Module } from '@nestjs/common';
import { DioptersResolver } from './diopters.resolver';
import { PrismaService } from 'modules/service/database/prisma.service';
import { DioptersService } from './diopters.service';

@Module({
  providers: [DioptersResolver, DioptersService, PrismaService],
})
export class DioptersModule {}
