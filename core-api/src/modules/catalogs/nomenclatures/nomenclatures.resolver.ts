import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NomenclatureResult } from './dto/nomenclature-result';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { NomenclaturesService } from './nomenclatures.service';
import { extractChildrenCount } from 'utils';
import { Nomenclature } from './models/nomenclature.model';
import { NomenclatureCreateInput } from './dto/nomenclature-create-input';
import { ListOptionsPipe } from 'pipes';

@Resolver()
export class NomenclaturesResolver {
  constructor(
    private readonly nomenclaturesService: NomenclaturesService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => [NomenclatureResult], { name: 'nomenclatures' })
  async getNomenclatures(
    @Args('parentId', { nullable: true, type: () => Int })
    parentId: number,
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.NomenclatureWhereInput,
        Prisma.NomenclatureOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.NomenclatureWhereInput,
      Prisma.NomenclatureOrderByWithRelationInput
    >,
  ): Promise<NomenclatureResult[]> {
    const nomenclatures = await this.nomenclaturesService.findMany({
      ...options,
      where: { ...options.where, parentId },
    });

    return nomenclatures.map(extractChildrenCount);
  }

  @Query(() => NomenclatureResult, { name: 'nomenclature', nullable: true })
  async getNomenclature(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<NomenclatureResult> {
    const nomenclature = await this.nomenclaturesService.findOne({
      where: { id },
    });
    if (!nomenclature) {
      this.logger.warn(`Nomenclature with id ${id} not found`);
      return null;
    }

    return extractChildrenCount(nomenclature);
  }

  @Mutation(() => Nomenclature, { name: 'createNomenclature' })
  async createNomenclature(
    @Args('data') data: NomenclatureCreateInput,
  ): Promise<Nomenclature> {
    const { appearance, lensParams, rimParams, ...rest } = data;
    const { shapeId, ...rimParamsRest } = rimParams || {};
    const { colorId, ...appearanceRest } = appearance || {};
    const hasAppearance = appearance && Object.values(appearance).some(Boolean);
    const hasLensParams = lensParams && Object.values(lensParams).some(Boolean);
    const hasRimParams = rimParams && Object.values(rimParams).some(Boolean);
    return this.nomenclaturesService.create({
      ...rest,
      ...(hasAppearance && {
        appearance: {
          create: {
            ...appearanceRest,
            ...(colorId && { color: { connect: { id: colorId } } }),
          },
        },
      }),
      ...(hasLensParams && {
        lensParams: { create: lensParams },
      }),
      ...(hasRimParams && {
        rimParams: {
          create: {
            ...rimParamsRest,
            ...(shapeId && {
              shape: { connect: { id: shapeId } },
            }),
          },
        },
      }),
    });
  }
}
