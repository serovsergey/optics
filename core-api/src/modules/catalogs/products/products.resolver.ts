import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProductResult } from './dto/product-result';
import { ListCatalogOptionsPipe } from 'pipes/list-catalog-options';
import { Prisma } from '@prisma/client';
import { ListCatalogOptions } from 'types';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ProductsService } from './products.service';
import { extractChildrenCount } from 'utils';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}
  @Query(() => [ProductResult], { name: 'products' })
  async getProducts(
    @Args('parentId', { nullable: true })
    parentId: number,
    @Args(
      'options',
      new ListCatalogOptionsPipe<
        Prisma.ProductWhereInput,
        Prisma.ProductOrderByWithRelationInput
      >(),
    )
    options: ListCatalogOptions<
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
  async getProduct(@Args('id') id: number): Promise<ProductResult> {
    const product = await this.productsService.findOne({
      where: { id },
    });
    if (!product) {
      this.logger.warn(`Product with id ${id} not found`);
      return null;
    }
    return extractChildrenCount(product);
  }
}
