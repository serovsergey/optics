import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstantsService } from './constants.service';
import { Constants } from './models/constants.model';
import { AccountantHistory } from './dto/accountant-history';
import { CompanyName } from './dto/company-name';
import { Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Resolver()
export class ConstantsResolver {
  constructor(
    private readonly constantsService: ConstantsService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  @Query(() => Constants, { name: 'constants', nullable: true })
  async getConstants(
    @Args('date', { nullable: true }) date: Date,
    @Info() info,
  ): Promise<Constants> {
    const selection: Record<keyof Constants, boolean> =
      info.fieldNodes[0].selectionSet.selections.reduce(
        (acc, selection) => ({
          ...acc,
          [selection.name.value]: selection.selectionSet?.selections.some(
            ({ name }) => name.value === 'history',
          ),
        }),
        {},
      );

    const constants: Constants = {};
    if (selection.hasOwnProperty('companyName')) {
      constants.companyName = await this.constantsService.getCompanyName();
    }
    if (selection.hasOwnProperty('accountant')) {
      constants.accountant = {
        ...(await this.constantsService.getAccountant(date)),
        history:
          selection.accountant &&
          (await this.constantsService.getAccountantHistory()),
      };
    }

    return constants;
  }

  @Mutation(() => CompanyName)
  updateCompanyName(@Args('value') value: string): Promise<CompanyName> {
    return this.constantsService.updateCompanyName(value);
  }

  @Mutation(() => AccountantHistory)
  updateAccountant(
    @Args('employeeId') employeeId: number,
    @Args('date', { nullable: true }) date: Date = new Date(),
  ): Promise<AccountantHistory> {
    return this.constantsService.updateAccountant(employeeId, date);
  }

  @Mutation(() => Boolean)
  async deleteAccountantHistoryRecord(
    @Args('date') date: Date,
  ): Promise<boolean> {
    try {
      return Boolean(
        await this.constantsService.deleteAccountantHistoryRecord(date),
      );
    } catch (error) {
      this.logger.error(error);
      return false;
    }
  }
}
