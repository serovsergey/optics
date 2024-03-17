import { Module } from '@nestjs/common';
import { VariantLensesModule } from './lenses/variant-lenses.module';
import { VariantReadyGlassesModule } from './ready-glasses/variant-ready-glasses.module';

@Module({
  imports: [VariantLensesModule, VariantReadyGlassesModule],
})
export class VariantsModule {}
