import { Context } from 'graphql-ws';

export interface GraphqlContext extends Context {
  req: Request;
  res: Response;
}
