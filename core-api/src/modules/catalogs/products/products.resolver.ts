import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductResult } from './dto/product-result';
import { Prisma } from '@prisma/client';
import { ListOptions } from 'types';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ProductsService } from './products.service';
import { extractChildrenCount } from 'utils';
import { Product } from './models/product.model';
import { ProductCreateInput } from './dto/product-create-input';
import { ListOptionsPipe } from 'pipes';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}
  @Query(() => [ProductResult], { name: 'products' })
  async getProducts(
    @Args('parentId', { nullable: true, type: () => Int })
    parentId: number,
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.ProductWhereInput,
        Prisma.ProductOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.ProductWhereInput,
      Prisma.ProductOrderByWithRelationInput
    >,
  ): Promise<ProductResult[]> {
    const products = await this.productsService.findMany({
      ...options,
      where: { ...options.where, parentId },
    });

    return products.map(extractChildrenCount);
  }

  @Query(() => ProductResult, { name: 'product', nullable: true })
  async getProduct(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ProductResult> {
    const product = await this.productsService.findOne({
      where: { id },
    });
    if (!product) {
      this.logger.warn(`Product with id ${id} not found`);
      return null;
    }

    return extractChildrenCount(product);
  }

  @Mutation(() => Product, { name: 'createProduct' })
  async createProduct(
    @Args('data') data: ProductCreateInput,
  ): Promise<Product> {
    const { appearance, lensParams, rimParams, ...rest } = data;
    const { shapeId, ...rimParamsRest } = rimParams || {};
    const { colorId, ...appearanceRest } = appearance || {};
    const hasAppearance = appearance && Object.values(appearance).some(Boolean);
    const hasLensParams = lensParams && Object.values(lensParams).some(Boolean);
    const hasRimParams = rimParams && Object.values(rimParams).some(Boolean);
    return this.productsService.create({
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
