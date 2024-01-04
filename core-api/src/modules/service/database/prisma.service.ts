import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { ConfigService } from '../config/config.module';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'info'>
  implements OnModuleInit
{
  constructor(private readonly configService: ConfigService) {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      errorFormat: 'pretty',
    });
  }
  async onModuleInit() {
    await this.$connect();
    if (this.configService.get<boolean>('DATABASE_LOGGING')) {
      this.$on('query', (event: Prisma.QueryEvent) => {
        console.log(
          `\x1b[32mQuery (${event.duration}ms): \x1b[90m`,
          event.query,
        );
        console.log('\x1b[32mParams: \x1b[90m', event.params, '\x1b[0m');
      });
    }
  }
}
