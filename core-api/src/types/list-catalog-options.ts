import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class ListCatalogOptions<W, O> {
  @Field(() => GraphQLJSON, { nullable: true })
  where?: W;

  @Field(() => GraphQLJSON, { nullable: true })
  orderBy?: O;

  @Field({ nullable: true })
  skip?: number;

  @Field({ nullable: true })
  take?: number;
}
