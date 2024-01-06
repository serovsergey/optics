import { Module } from '@nestjs/common';
import { NomenclaturesResolver } from './nomenclatures.resolver';
import { NomenclaturesService } from './nomenclatures.service';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  providers: [NomenclaturesResolver, NomenclaturesService, PrismaService],
})
export class NomenclaturesModule {}
