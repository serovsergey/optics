import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './modules/service/service.module';
import { HealthModule } from './modules/health/health.module';
import { ConstantsModule } from './modules/constants/constants.module';
import { VariantsModule } from 'modules/variants/variants.module';
import { ListsModule } from 'modules/lists/lists.module';
import { DocumentsModule } from 'modules/documents/documents.module';
import { CatalogsModule } from 'modules/catalogs/catalogs.module';

@Module({
  imports: [
    HealthModule,
    ServiceModule,
    ConstantsModule,
    CatalogsModule,
    ListsModule,
    DocumentsModule,
    VariantsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
