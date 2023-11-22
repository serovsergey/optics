import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { Environments } from '@constants';
import GraphQLJSON from 'graphql-type-json';
import { join } from 'path';

import { GraphqlContext } from './types';
import { ConfigService } from '../config/config.module';

@Module({
  imports: [
    // NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   useFactory: (configService: ConfigService) => {
    //     const isProduction =
    //       configService.get<Environments>('ENVIRONMENT') ===
    //       Environments.PRODUCTION;
    //     return {
    //       typePaths: ['./**/*.graphql'],
    //       introspection: !isProduction,
    //       playground: !isProduction,
    //       definitions: {
    //         path: join(process.cwd(), 'src/graphql.ts'),
    //         outputAs: 'interface',
    //       },
    //       resolvers: {
    //         JSON: GraphQLJSON,
    //       },
    //       context: (context: GraphqlContext) => {
    //         // TODO: consider the need using connectionParams
    //         return context.connectionParams
    //           ? {
    //               req: {
    //                 headers: {
    //                   account_key: context.connectionParams?.account_key,
    //                   account_id: context.connectionParams?.account_id,
    //                 },
    //               },
    //             } // Pass the connectionParams for subscriptions
    //           : { context }; // Pass the context for queries and mutations
    //       },
    //       subscriptions: {
    //         'graphql-ws': true,
    //       },
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    NestGraphQLModule.forRoot<ApolloDriverConfig>({
      playground: {
        subscriptionEndpoint: '/subscriptions',
      },
      autoSchemaFile: join(process.cwd(), 'src/schema.sdl'),
      driver: ApolloDriver,
      sortSchema: true,
      // context: ({ req, res, connection }) =>
      //   connection ? { req: connection.context, res } : { req, res },
      context: ({ req, res }) => ({ req, res }),
      subscriptions: {
        'subscriptions-transport-ws': true,
        'graphql-ws': {
          path: '/subscriptions',
        },
      },
    }),
  ],
})
export class GraphQlModule {}
