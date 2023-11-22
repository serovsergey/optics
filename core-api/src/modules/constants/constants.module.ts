import { Module } from '@nestjs/common';
import { ConstantsService } from './constants.service';
import { ConstantsResolver } from './constants.resolver';
import { ServiceModule } from 'modules/service/service.module';
import { PrismaService } from 'modules/service/database/prisma.service';

@Module({
  imports: [ServiceModule],
  providers: [ConstantsService, ConstantsResolver, PrismaService],
})
export class ConstantsModule {}
