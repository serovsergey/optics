import { Module } from '@nestjs/common';
import { ColorsModule } from './colors/colors.module';
import { DioptersModule } from './diopters/diopters.module';
import { PositionsModule } from './positions/positions.module';
import { RimShapesModule } from './rim-shapes/rim-shapes.module';

@Module({
  imports: [ColorsModule, DioptersModule, PositionsModule, RimShapesModule],
})
export class ListsModule {}
