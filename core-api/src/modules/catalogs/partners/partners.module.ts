import { Module } from '@nestjs/common';
import { PrismaService } from 'modules/service/database/prisma.service';
import { PartnersService } from './partners.service';
import { PartnersResolver } from './partners.resolver';

@Module({
  providers: [PartnersService, PartnersResolver, PrismaService],
})
export class PartnersModule {}
