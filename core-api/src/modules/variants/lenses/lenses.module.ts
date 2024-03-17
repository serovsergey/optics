import { Module } from '@nestjs/common';
import { LensesResolver } from './lenses.resolver';

@Module({
  providers: [LensesResolver],
})
export class LensesModule {}
