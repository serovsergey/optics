import { Resolver } from '@nestjs/graphql';
import { RimShapesService } from './rim-shapes.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, LoggerService } from '@nestjs/common';

@Resolver()
export class RimShapesResolver {
  constructor(
    private readonly productsService: RimShapesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}
}
