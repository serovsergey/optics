import { Injectable, PipeTransform } from '@nestjs/common';

import { ListOptions } from 'types';
// import { parseOrder, parseWhere } from 'utils';

@Injectable()
export class ListOptionsPipe<W, O> implements PipeTransform {
  transform(args: any): ListOptions<W, O> {
    console.log({ args });

    return {
      ...args,
      // orderBy: parseOrder(args.order),
      // where: parseWhere(args.where),
    };
  }
}
