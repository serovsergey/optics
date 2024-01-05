import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Prisma } from '@prisma/client';
import { extractChildrenCount } from 'utils';
import { ListOptionsPipe } from 'pipes';
import { ListOptions } from 'types';
import { PartnerResult } from './dto/partner-result';
import { PartnersService } from './partners.service';
import { Partner } from './models/partner.model';
import { PartnerCreateInput } from './dto/partner-create-input';

@Resolver()
export class PartnersResolver {
  constructor(
    private readonly partnersService: PartnersService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => [PartnerResult], { name: 'partners' })
  async getPartners(
    @Args('parentId', { nullable: true, type: () => Int })
    parentId: number,
    @Args(
      { name: 'options', nullable: true },
      new ListOptionsPipe<
        Prisma.PartnerWhereInput,
        Prisma.PartnerOrderByWithRelationInput
      >(),
    )
    options: ListOptions<
      Prisma.PartnerWhereInput,
      Prisma.PartnerOrderByWithRelationInput
    >,
  ): Promise<PartnerResult[]> {
    const partner = await this.partnersService.findMany({
      ...options,
      where: { ...options.where, parentId },
    });
    return partner.map(extractChildrenCount);
  }

  @Query(() => PartnerResult, { name: 'partner', nullable: true })
  async getPartner(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<PartnerResult | null> {
    const partner = await this.partnersService.findOne({ where: { id } });
    if (!partner) {
      this.logger.warn(`Partner with id ${id} not found`);
      return null;
    }
    return extractChildrenCount(partner);
  }

  @Mutation(() => Partner, { name: 'createPartner' })
  createPartner(@Args('data') data: PartnerCreateInput): Promise<Partner> {
    return this.partnersService.create(data);
  }

  @Mutation(() => Partner, { name: 'updatePartner' })
  updatePartner(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: PartnerCreateInput,
  ): Promise<Partner> {
    return this.partnersService.update({ data, where: { id } });
  }

  @Mutation(() => Partner, { name: 'deletePartner' })
  deletePartner(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<Partner> {
    return this.partnersService.delete({ where: { id } });
  }

  @Mutation(() => Int, { name: 'deletePartners' })
  async deletePartners(
    @Args({ name: 'ids', type: () => [Int] }) ids: number[],
  ): Promise<number> {
    const deleted = await this.partnersService.deleteMany({
      where: { id: { in: ids } },
    });

    return deleted.count;
  }
}
