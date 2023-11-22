import { Injectable, PipeTransform } from '@nestjs/common';

import { ListCatalogOptions } from 'types';
// import { parseOrder, parseWhere } from 'utils';

@Injectable()
export class ListCatalogOptionsPipe<W, O> implements PipeTransform {
  transform(args: any): ListCatalogOptions<W, O> {
    console.log({ args });

    return {
      ...args,
      // orderBy: parseOrder(args.order),
      // where: parseWhere(args.where),
    };
  }
}
