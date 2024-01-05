
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model const_CompanyName
 * 
 */
export type const_CompanyName = $Result.DefaultSelection<Prisma.$const_CompanyNamePayload>
/**
 * Model const_Accountant
 * 
 */
export type const_Accountant = $Result.DefaultSelection<Prisma.$const_AccountantPayload>
/**
 * Model Color
 * 
 */
export type Color = $Result.DefaultSelection<Prisma.$ColorPayload>
/**
 * Model RimShape
 * 
 */
export type RimShape = $Result.DefaultSelection<Prisma.$RimShapePayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductAppearance
 * 
 */
export type ProductAppearance = $Result.DefaultSelection<Prisma.$ProductAppearancePayload>
/**
 * Model ProductRimParams
 * 
 */
export type ProductRimParams = $Result.DefaultSelection<Prisma.$ProductRimParamsPayload>
/**
 * Model ProductLensParams
 * 
 */
export type ProductLensParams = $Result.DefaultSelection<Prisma.$ProductLensParamsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SingularValue: {
  singular: 'singular'
};

export type SingularValue = (typeof SingularValue)[keyof typeof SingularValue]

}

export type SingularValue = $Enums.SingularValue

export const SingularValue: typeof $Enums.SingularValue

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Const_CompanyNames
 * const const_CompanyNames = await prisma.const_CompanyName.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Const_CompanyNames
   * const const_CompanyNames = await prisma.const_CompanyName.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.const_CompanyName`: Exposes CRUD operations for the **const_CompanyName** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Const_CompanyNames
    * const const_CompanyNames = await prisma.const_CompanyName.findMany()
    * ```
    */
  get const_CompanyName(): Prisma.const_CompanyNameDelegate<ExtArgs>;

  /**
   * `prisma.const_Accountant`: Exposes CRUD operations for the **const_Accountant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Const_Accountants
    * const const_Accountants = await prisma.const_Accountant.findMany()
    * ```
    */
  get const_Accountant(): Prisma.const_AccountantDelegate<ExtArgs>;

  /**
   * `prisma.color`: Exposes CRUD operations for the **Color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.ColorDelegate<ExtArgs>;

  /**
   * `prisma.rimShape`: Exposes CRUD operations for the **RimShape** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RimShapes
    * const rimShapes = await prisma.rimShape.findMany()
    * ```
    */
  get rimShape(): Prisma.RimShapeDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productAppearance`: Exposes CRUD operations for the **ProductAppearance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAppearances
    * const productAppearances = await prisma.productAppearance.findMany()
    * ```
    */
  get productAppearance(): Prisma.ProductAppearanceDelegate<ExtArgs>;

  /**
   * `prisma.productRimParams`: Exposes CRUD operations for the **ProductRimParams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRimParams
    * const productRimParams = await prisma.productRimParams.findMany()
    * ```
    */
  get productRimParams(): Prisma.ProductRimParamsDelegate<ExtArgs>;

  /**
   * `prisma.productLensParams`: Exposes CRUD operations for the **ProductLensParams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductLensParams
    * const productLensParams = await prisma.productLensParams.findMany()
    * ```
    */
  get productLensParams(): Prisma.ProductLensParamsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    const_CompanyName: 'const_CompanyName',
    const_Accountant: 'const_Accountant',
    Color: 'Color',
    RimShape: 'RimShape',
    Employee: 'Employee',
    Partner: 'Partner',
    Product: 'Product',
    ProductAppearance: 'ProductAppearance',
    ProductRimParams: 'ProductRimParams',
    ProductLensParams: 'ProductLensParams'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'const_CompanyName' | 'const_Accountant' | 'color' | 'rimShape' | 'employee' | 'partner' | 'product' | 'productAppearance' | 'productRimParams' | 'productLensParams'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      const_CompanyName: {
        payload: Prisma.$const_CompanyNamePayload<ExtArgs>
        fields: Prisma.const_CompanyNameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.const_CompanyNameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.const_CompanyNameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>
          }
          findFirst: {
            args: Prisma.const_CompanyNameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.const_CompanyNameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>
          }
          findMany: {
            args: Prisma.const_CompanyNameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>[]
          }
          create: {
            args: Prisma.const_CompanyNameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>
          }
          createMany: {
            args: Prisma.const_CompanyNameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.const_CompanyNameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>
          }
          update: {
            args: Prisma.const_CompanyNameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>
          }
          deleteMany: {
            args: Prisma.const_CompanyNameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.const_CompanyNameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.const_CompanyNameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_CompanyNamePayload>
          }
          aggregate: {
            args: Prisma.Const_CompanyNameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConst_CompanyName>
          }
          groupBy: {
            args: Prisma.const_CompanyNameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Const_CompanyNameGroupByOutputType>[]
          }
          count: {
            args: Prisma.const_CompanyNameCountArgs<ExtArgs>,
            result: $Utils.Optional<Const_CompanyNameCountAggregateOutputType> | number
          }
        }
      }
      const_Accountant: {
        payload: Prisma.$const_AccountantPayload<ExtArgs>
        fields: Prisma.const_AccountantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.const_AccountantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.const_AccountantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>
          }
          findFirst: {
            args: Prisma.const_AccountantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.const_AccountantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>
          }
          findMany: {
            args: Prisma.const_AccountantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>[]
          }
          create: {
            args: Prisma.const_AccountantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>
          }
          createMany: {
            args: Prisma.const_AccountantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.const_AccountantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>
          }
          update: {
            args: Prisma.const_AccountantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>
          }
          deleteMany: {
            args: Prisma.const_AccountantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.const_AccountantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.const_AccountantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$const_AccountantPayload>
          }
          aggregate: {
            args: Prisma.Const_AccountantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConst_Accountant>
          }
          groupBy: {
            args: Prisma.const_AccountantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Const_AccountantGroupByOutputType>[]
          }
          count: {
            args: Prisma.const_AccountantCountArgs<ExtArgs>,
            result: $Utils.Optional<Const_AccountantCountAggregateOutputType> | number
          }
        }
      }
      Color: {
        payload: Prisma.$ColorPayload<ExtArgs>
        fields: Prisma.ColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findFirst: {
            args: Prisma.ColorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findMany: {
            args: Prisma.ColorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          create: {
            args: Prisma.ColorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          createMany: {
            args: Prisma.ColorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ColorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          update: {
            args: Prisma.ColorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          deleteMany: {
            args: Prisma.ColorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ColorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ColorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateColor>
          }
          groupBy: {
            args: Prisma.ColorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorCountArgs<ExtArgs>,
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
          }
        }
      }
      RimShape: {
        payload: Prisma.$RimShapePayload<ExtArgs>
        fields: Prisma.RimShapeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RimShapeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RimShapeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>
          }
          findFirst: {
            args: Prisma.RimShapeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RimShapeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>
          }
          findMany: {
            args: Prisma.RimShapeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>[]
          }
          create: {
            args: Prisma.RimShapeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>
          }
          createMany: {
            args: Prisma.RimShapeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RimShapeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>
          }
          update: {
            args: Prisma.RimShapeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>
          }
          deleteMany: {
            args: Prisma.RimShapeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RimShapeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RimShapeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RimShapePayload>
          }
          aggregate: {
            args: Prisma.RimShapeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRimShape>
          }
          groupBy: {
            args: Prisma.RimShapeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RimShapeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RimShapeCountArgs<ExtArgs>,
            result: $Utils.Optional<RimShapeCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>,
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>,
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductAppearance: {
        payload: Prisma.$ProductAppearancePayload<ExtArgs>
        fields: Prisma.ProductAppearanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAppearanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAppearanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>
          }
          findFirst: {
            args: Prisma.ProductAppearanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAppearanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>
          }
          findMany: {
            args: Prisma.ProductAppearanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>[]
          }
          create: {
            args: Prisma.ProductAppearanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>
          }
          createMany: {
            args: Prisma.ProductAppearanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductAppearanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>
          }
          update: {
            args: Prisma.ProductAppearanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>
          }
          deleteMany: {
            args: Prisma.ProductAppearanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAppearanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductAppearanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductAppearancePayload>
          }
          aggregate: {
            args: Prisma.ProductAppearanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductAppearance>
          }
          groupBy: {
            args: Prisma.ProductAppearanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductAppearanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAppearanceCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductAppearanceCountAggregateOutputType> | number
          }
        }
      }
      ProductRimParams: {
        payload: Prisma.$ProductRimParamsPayload<ExtArgs>
        fields: Prisma.ProductRimParamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRimParamsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRimParamsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>
          }
          findFirst: {
            args: Prisma.ProductRimParamsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRimParamsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>
          }
          findMany: {
            args: Prisma.ProductRimParamsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>[]
          }
          create: {
            args: Prisma.ProductRimParamsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>
          }
          createMany: {
            args: Prisma.ProductRimParamsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductRimParamsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>
          }
          update: {
            args: Prisma.ProductRimParamsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>
          }
          deleteMany: {
            args: Prisma.ProductRimParamsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRimParamsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductRimParamsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductRimParamsPayload>
          }
          aggregate: {
            args: Prisma.ProductRimParamsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductRimParams>
          }
          groupBy: {
            args: Prisma.ProductRimParamsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductRimParamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRimParamsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductRimParamsCountAggregateOutputType> | number
          }
        }
      }
      ProductLensParams: {
        payload: Prisma.$ProductLensParamsPayload<ExtArgs>
        fields: Prisma.ProductLensParamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductLensParamsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductLensParamsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>
          }
          findFirst: {
            args: Prisma.ProductLensParamsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductLensParamsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>
          }
          findMany: {
            args: Prisma.ProductLensParamsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>[]
          }
          create: {
            args: Prisma.ProductLensParamsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>
          }
          createMany: {
            args: Prisma.ProductLensParamsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductLensParamsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>
          }
          update: {
            args: Prisma.ProductLensParamsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>
          }
          deleteMany: {
            args: Prisma.ProductLensParamsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductLensParamsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductLensParamsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductLensParamsPayload>
          }
          aggregate: {
            args: Prisma.ProductLensParamsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProductLensParams>
          }
          groupBy: {
            args: Prisma.ProductLensParamsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductLensParamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductLensParamsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductLensParamsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ColorCountOutputType
   */

  export type ColorCountOutputType = {
    ProductAppearance: number
  }

  export type ColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductAppearance?: boolean | ColorCountOutputTypeCountProductAppearanceArgs
  }

  // Custom InputTypes

  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorCountOutputType
     */
    select?: ColorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeCountProductAppearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAppearanceWhereInput
  }



  /**
   * Count Type RimShapeCountOutputType
   */

  export type RimShapeCountOutputType = {
    ProductRimParams: number
  }

  export type RimShapeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductRimParams?: boolean | RimShapeCountOutputTypeCountProductRimParamsArgs
  }

  // Custom InputTypes

  /**
   * RimShapeCountOutputType without action
   */
  export type RimShapeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShapeCountOutputType
     */
    select?: RimShapeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RimShapeCountOutputType without action
   */
  export type RimShapeCountOutputTypeCountProductRimParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRimParamsWhereInput
  }



  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    children: number
    const_Accountant: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | EmployeeCountOutputTypeCountChildrenArgs
    const_Accountant?: boolean | EmployeeCountOutputTypeCountConst_AccountantArgs
  }

  // Custom InputTypes

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountConst_AccountantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: const_AccountantWhereInput
  }



  /**
   * Count Type PartnerCountOutputType
   */

  export type PartnerCountOutputType = {
    children: number
  }

  export type PartnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | PartnerCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes

  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerCountOutputType
     */
    select?: PartnerCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PartnerCountOutputType without action
   */
  export type PartnerCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    children: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ProductCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Models
   */

  /**
   * Model const_CompanyName
   */

  export type AggregateConst_CompanyName = {
    _count: Const_CompanyNameCountAggregateOutputType | null
    _min: Const_CompanyNameMinAggregateOutputType | null
    _max: Const_CompanyNameMaxAggregateOutputType | null
  }

  export type Const_CompanyNameMinAggregateOutputType = {
    singular: $Enums.SingularValue | null
    date: Date | null
    value: string | null
  }

  export type Const_CompanyNameMaxAggregateOutputType = {
    singular: $Enums.SingularValue | null
    date: Date | null
    value: string | null
  }

  export type Const_CompanyNameCountAggregateOutputType = {
    singular: number
    date: number
    value: number
    _all: number
  }


  export type Const_CompanyNameMinAggregateInputType = {
    singular?: true
    date?: true
    value?: true
  }

  export type Const_CompanyNameMaxAggregateInputType = {
    singular?: true
    date?: true
    value?: true
  }

  export type Const_CompanyNameCountAggregateInputType = {
    singular?: true
    date?: true
    value?: true
    _all?: true
  }

  export type Const_CompanyNameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which const_CompanyName to aggregate.
     */
    where?: const_CompanyNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_CompanyNames to fetch.
     */
    orderBy?: const_CompanyNameOrderByWithRelationInput | const_CompanyNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: const_CompanyNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_CompanyNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_CompanyNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned const_CompanyNames
    **/
    _count?: true | Const_CompanyNameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Const_CompanyNameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Const_CompanyNameMaxAggregateInputType
  }

  export type GetConst_CompanyNameAggregateType<T extends Const_CompanyNameAggregateArgs> = {
        [P in keyof T & keyof AggregateConst_CompanyName]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConst_CompanyName[P]>
      : GetScalarType<T[P], AggregateConst_CompanyName[P]>
  }




  export type const_CompanyNameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: const_CompanyNameWhereInput
    orderBy?: const_CompanyNameOrderByWithAggregationInput | const_CompanyNameOrderByWithAggregationInput[]
    by: Const_CompanyNameScalarFieldEnum[] | Const_CompanyNameScalarFieldEnum
    having?: const_CompanyNameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Const_CompanyNameCountAggregateInputType | true
    _min?: Const_CompanyNameMinAggregateInputType
    _max?: Const_CompanyNameMaxAggregateInputType
  }

  export type Const_CompanyNameGroupByOutputType = {
    singular: $Enums.SingularValue
    date: Date
    value: string | null
    _count: Const_CompanyNameCountAggregateOutputType | null
    _min: Const_CompanyNameMinAggregateOutputType | null
    _max: Const_CompanyNameMaxAggregateOutputType | null
  }

  type GetConst_CompanyNameGroupByPayload<T extends const_CompanyNameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Const_CompanyNameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Const_CompanyNameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Const_CompanyNameGroupByOutputType[P]>
            : GetScalarType<T[P], Const_CompanyNameGroupByOutputType[P]>
        }
      >
    >


  export type const_CompanyNameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    singular?: boolean
    date?: boolean
    value?: boolean
  }, ExtArgs["result"]["const_CompanyName"]>

  export type const_CompanyNameSelectScalar = {
    singular?: boolean
    date?: boolean
    value?: boolean
  }


  export type $const_CompanyNamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "const_CompanyName"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      singular: $Enums.SingularValue
      date: Date
      value: string | null
    }, ExtArgs["result"]["const_CompanyName"]>
    composites: {}
  }


  type const_CompanyNameGetPayload<S extends boolean | null | undefined | const_CompanyNameDefaultArgs> = $Result.GetResult<Prisma.$const_CompanyNamePayload, S>

  type const_CompanyNameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<const_CompanyNameFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Const_CompanyNameCountAggregateInputType | true
    }

  export interface const_CompanyNameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['const_CompanyName'], meta: { name: 'const_CompanyName' } }
    /**
     * Find zero or one Const_CompanyName that matches the filter.
     * @param {const_CompanyNameFindUniqueArgs} args - Arguments to find a Const_CompanyName
     * @example
     * // Get one Const_CompanyName
     * const const_CompanyName = await prisma.const_CompanyName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends const_CompanyNameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, const_CompanyNameFindUniqueArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Const_CompanyName that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {const_CompanyNameFindUniqueOrThrowArgs} args - Arguments to find a Const_CompanyName
     * @example
     * // Get one Const_CompanyName
     * const const_CompanyName = await prisma.const_CompanyName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends const_CompanyNameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, const_CompanyNameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Const_CompanyName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_CompanyNameFindFirstArgs} args - Arguments to find a Const_CompanyName
     * @example
     * // Get one Const_CompanyName
     * const const_CompanyName = await prisma.const_CompanyName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends const_CompanyNameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, const_CompanyNameFindFirstArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Const_CompanyName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_CompanyNameFindFirstOrThrowArgs} args - Arguments to find a Const_CompanyName
     * @example
     * // Get one Const_CompanyName
     * const const_CompanyName = await prisma.const_CompanyName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends const_CompanyNameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, const_CompanyNameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Const_CompanyNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_CompanyNameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Const_CompanyNames
     * const const_CompanyNames = await prisma.const_CompanyName.findMany()
     * 
     * // Get first 10 Const_CompanyNames
     * const const_CompanyNames = await prisma.const_CompanyName.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const const_CompanyNameWithDateOnly = await prisma.const_CompanyName.findMany({ select: { date: true } })
     * 
    **/
    findMany<T extends const_CompanyNameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, const_CompanyNameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Const_CompanyName.
     * @param {const_CompanyNameCreateArgs} args - Arguments to create a Const_CompanyName.
     * @example
     * // Create one Const_CompanyName
     * const Const_CompanyName = await prisma.const_CompanyName.create({
     *   data: {
     *     // ... data to create a Const_CompanyName
     *   }
     * })
     * 
    **/
    create<T extends const_CompanyNameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, const_CompanyNameCreateArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Const_CompanyNames.
     *     @param {const_CompanyNameCreateManyArgs} args - Arguments to create many Const_CompanyNames.
     *     @example
     *     // Create many Const_CompanyNames
     *     const const_CompanyName = await prisma.const_CompanyName.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends const_CompanyNameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, const_CompanyNameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Const_CompanyName.
     * @param {const_CompanyNameDeleteArgs} args - Arguments to delete one Const_CompanyName.
     * @example
     * // Delete one Const_CompanyName
     * const Const_CompanyName = await prisma.const_CompanyName.delete({
     *   where: {
     *     // ... filter to delete one Const_CompanyName
     *   }
     * })
     * 
    **/
    delete<T extends const_CompanyNameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, const_CompanyNameDeleteArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Const_CompanyName.
     * @param {const_CompanyNameUpdateArgs} args - Arguments to update one Const_CompanyName.
     * @example
     * // Update one Const_CompanyName
     * const const_CompanyName = await prisma.const_CompanyName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends const_CompanyNameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, const_CompanyNameUpdateArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Const_CompanyNames.
     * @param {const_CompanyNameDeleteManyArgs} args - Arguments to filter Const_CompanyNames to delete.
     * @example
     * // Delete a few Const_CompanyNames
     * const { count } = await prisma.const_CompanyName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends const_CompanyNameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, const_CompanyNameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Const_CompanyNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_CompanyNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Const_CompanyNames
     * const const_CompanyName = await prisma.const_CompanyName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends const_CompanyNameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, const_CompanyNameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Const_CompanyName.
     * @param {const_CompanyNameUpsertArgs} args - Arguments to update or create a Const_CompanyName.
     * @example
     * // Update or create a Const_CompanyName
     * const const_CompanyName = await prisma.const_CompanyName.upsert({
     *   create: {
     *     // ... data to create a Const_CompanyName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Const_CompanyName we want to update
     *   }
     * })
    **/
    upsert<T extends const_CompanyNameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, const_CompanyNameUpsertArgs<ExtArgs>>
    ): Prisma__const_CompanyNameClient<$Result.GetResult<Prisma.$const_CompanyNamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Const_CompanyNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_CompanyNameCountArgs} args - Arguments to filter Const_CompanyNames to count.
     * @example
     * // Count the number of Const_CompanyNames
     * const count = await prisma.const_CompanyName.count({
     *   where: {
     *     // ... the filter for the Const_CompanyNames we want to count
     *   }
     * })
    **/
    count<T extends const_CompanyNameCountArgs>(
      args?: Subset<T, const_CompanyNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Const_CompanyNameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Const_CompanyName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Const_CompanyNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Const_CompanyNameAggregateArgs>(args: Subset<T, Const_CompanyNameAggregateArgs>): Prisma.PrismaPromise<GetConst_CompanyNameAggregateType<T>>

    /**
     * Group by Const_CompanyName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_CompanyNameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends const_CompanyNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: const_CompanyNameGroupByArgs['orderBy'] }
        : { orderBy?: const_CompanyNameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, const_CompanyNameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConst_CompanyNameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the const_CompanyName model
   */
  readonly fields: const_CompanyNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for const_CompanyName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__const_CompanyNameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the const_CompanyName model
   */ 
  interface const_CompanyNameFieldRefs {
    readonly singular: FieldRef<"const_CompanyName", 'SingularValue'>
    readonly date: FieldRef<"const_CompanyName", 'DateTime'>
    readonly value: FieldRef<"const_CompanyName", 'String'>
  }
    

  // Custom InputTypes

  /**
   * const_CompanyName findUnique
   */
  export type const_CompanyNameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * Filter, which const_CompanyName to fetch.
     */
    where: const_CompanyNameWhereUniqueInput
  }


  /**
   * const_CompanyName findUniqueOrThrow
   */
  export type const_CompanyNameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * Filter, which const_CompanyName to fetch.
     */
    where: const_CompanyNameWhereUniqueInput
  }


  /**
   * const_CompanyName findFirst
   */
  export type const_CompanyNameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * Filter, which const_CompanyName to fetch.
     */
    where?: const_CompanyNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_CompanyNames to fetch.
     */
    orderBy?: const_CompanyNameOrderByWithRelationInput | const_CompanyNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for const_CompanyNames.
     */
    cursor?: const_CompanyNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_CompanyNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_CompanyNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of const_CompanyNames.
     */
    distinct?: Const_CompanyNameScalarFieldEnum | Const_CompanyNameScalarFieldEnum[]
  }


  /**
   * const_CompanyName findFirstOrThrow
   */
  export type const_CompanyNameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * Filter, which const_CompanyName to fetch.
     */
    where?: const_CompanyNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_CompanyNames to fetch.
     */
    orderBy?: const_CompanyNameOrderByWithRelationInput | const_CompanyNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for const_CompanyNames.
     */
    cursor?: const_CompanyNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_CompanyNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_CompanyNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of const_CompanyNames.
     */
    distinct?: Const_CompanyNameScalarFieldEnum | Const_CompanyNameScalarFieldEnum[]
  }


  /**
   * const_CompanyName findMany
   */
  export type const_CompanyNameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * Filter, which const_CompanyNames to fetch.
     */
    where?: const_CompanyNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_CompanyNames to fetch.
     */
    orderBy?: const_CompanyNameOrderByWithRelationInput | const_CompanyNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing const_CompanyNames.
     */
    cursor?: const_CompanyNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_CompanyNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_CompanyNames.
     */
    skip?: number
    distinct?: Const_CompanyNameScalarFieldEnum | Const_CompanyNameScalarFieldEnum[]
  }


  /**
   * const_CompanyName create
   */
  export type const_CompanyNameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * The data needed to create a const_CompanyName.
     */
    data?: XOR<const_CompanyNameCreateInput, const_CompanyNameUncheckedCreateInput>
  }


  /**
   * const_CompanyName createMany
   */
  export type const_CompanyNameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many const_CompanyNames.
     */
    data: const_CompanyNameCreateManyInput | const_CompanyNameCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * const_CompanyName update
   */
  export type const_CompanyNameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * The data needed to update a const_CompanyName.
     */
    data: XOR<const_CompanyNameUpdateInput, const_CompanyNameUncheckedUpdateInput>
    /**
     * Choose, which const_CompanyName to update.
     */
    where: const_CompanyNameWhereUniqueInput
  }


  /**
   * const_CompanyName updateMany
   */
  export type const_CompanyNameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update const_CompanyNames.
     */
    data: XOR<const_CompanyNameUpdateManyMutationInput, const_CompanyNameUncheckedUpdateManyInput>
    /**
     * Filter which const_CompanyNames to update
     */
    where?: const_CompanyNameWhereInput
  }


  /**
   * const_CompanyName upsert
   */
  export type const_CompanyNameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * The filter to search for the const_CompanyName to update in case it exists.
     */
    where: const_CompanyNameWhereUniqueInput
    /**
     * In case the const_CompanyName found by the `where` argument doesn't exist, create a new const_CompanyName with this data.
     */
    create: XOR<const_CompanyNameCreateInput, const_CompanyNameUncheckedCreateInput>
    /**
     * In case the const_CompanyName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<const_CompanyNameUpdateInput, const_CompanyNameUncheckedUpdateInput>
  }


  /**
   * const_CompanyName delete
   */
  export type const_CompanyNameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
    /**
     * Filter which const_CompanyName to delete.
     */
    where: const_CompanyNameWhereUniqueInput
  }


  /**
   * const_CompanyName deleteMany
   */
  export type const_CompanyNameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which const_CompanyNames to delete
     */
    where?: const_CompanyNameWhereInput
  }


  /**
   * const_CompanyName without action
   */
  export type const_CompanyNameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_CompanyName
     */
    select?: const_CompanyNameSelect<ExtArgs> | null
  }



  /**
   * Model const_Accountant
   */

  export type AggregateConst_Accountant = {
    _count: Const_AccountantCountAggregateOutputType | null
    _avg: Const_AccountantAvgAggregateOutputType | null
    _sum: Const_AccountantSumAggregateOutputType | null
    _min: Const_AccountantMinAggregateOutputType | null
    _max: Const_AccountantMaxAggregateOutputType | null
  }

  export type Const_AccountantAvgAggregateOutputType = {
    employeeId: number | null
  }

  export type Const_AccountantSumAggregateOutputType = {
    employeeId: number | null
  }

  export type Const_AccountantMinAggregateOutputType = {
    date: Date | null
    employeeId: number | null
  }

  export type Const_AccountantMaxAggregateOutputType = {
    date: Date | null
    employeeId: number | null
  }

  export type Const_AccountantCountAggregateOutputType = {
    date: number
    employeeId: number
    _all: number
  }


  export type Const_AccountantAvgAggregateInputType = {
    employeeId?: true
  }

  export type Const_AccountantSumAggregateInputType = {
    employeeId?: true
  }

  export type Const_AccountantMinAggregateInputType = {
    date?: true
    employeeId?: true
  }

  export type Const_AccountantMaxAggregateInputType = {
    date?: true
    employeeId?: true
  }

  export type Const_AccountantCountAggregateInputType = {
    date?: true
    employeeId?: true
    _all?: true
  }

  export type Const_AccountantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which const_Accountant to aggregate.
     */
    where?: const_AccountantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_Accountants to fetch.
     */
    orderBy?: const_AccountantOrderByWithRelationInput | const_AccountantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: const_AccountantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_Accountants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_Accountants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned const_Accountants
    **/
    _count?: true | Const_AccountantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Const_AccountantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Const_AccountantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Const_AccountantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Const_AccountantMaxAggregateInputType
  }

  export type GetConst_AccountantAggregateType<T extends Const_AccountantAggregateArgs> = {
        [P in keyof T & keyof AggregateConst_Accountant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConst_Accountant[P]>
      : GetScalarType<T[P], AggregateConst_Accountant[P]>
  }




  export type const_AccountantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: const_AccountantWhereInput
    orderBy?: const_AccountantOrderByWithAggregationInput | const_AccountantOrderByWithAggregationInput[]
    by: Const_AccountantScalarFieldEnum[] | Const_AccountantScalarFieldEnum
    having?: const_AccountantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Const_AccountantCountAggregateInputType | true
    _avg?: Const_AccountantAvgAggregateInputType
    _sum?: Const_AccountantSumAggregateInputType
    _min?: Const_AccountantMinAggregateInputType
    _max?: Const_AccountantMaxAggregateInputType
  }

  export type Const_AccountantGroupByOutputType = {
    date: Date
    employeeId: number | null
    _count: Const_AccountantCountAggregateOutputType | null
    _avg: Const_AccountantAvgAggregateOutputType | null
    _sum: Const_AccountantSumAggregateOutputType | null
    _min: Const_AccountantMinAggregateOutputType | null
    _max: Const_AccountantMaxAggregateOutputType | null
  }

  type GetConst_AccountantGroupByPayload<T extends const_AccountantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Const_AccountantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Const_AccountantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Const_AccountantGroupByOutputType[P]>
            : GetScalarType<T[P], Const_AccountantGroupByOutputType[P]>
        }
      >
    >


  export type const_AccountantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    employeeId?: boolean
    value?: boolean | const_Accountant$valueArgs<ExtArgs>
  }, ExtArgs["result"]["const_Accountant"]>

  export type const_AccountantSelectScalar = {
    date?: boolean
    employeeId?: boolean
  }

  export type const_AccountantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    value?: boolean | const_Accountant$valueArgs<ExtArgs>
  }


  export type $const_AccountantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "const_Accountant"
    objects: {
      value: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      date: Date
      employeeId: number | null
    }, ExtArgs["result"]["const_Accountant"]>
    composites: {}
  }


  type const_AccountantGetPayload<S extends boolean | null | undefined | const_AccountantDefaultArgs> = $Result.GetResult<Prisma.$const_AccountantPayload, S>

  type const_AccountantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<const_AccountantFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Const_AccountantCountAggregateInputType | true
    }

  export interface const_AccountantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['const_Accountant'], meta: { name: 'const_Accountant' } }
    /**
     * Find zero or one Const_Accountant that matches the filter.
     * @param {const_AccountantFindUniqueArgs} args - Arguments to find a Const_Accountant
     * @example
     * // Get one Const_Accountant
     * const const_Accountant = await prisma.const_Accountant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends const_AccountantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, const_AccountantFindUniqueArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Const_Accountant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {const_AccountantFindUniqueOrThrowArgs} args - Arguments to find a Const_Accountant
     * @example
     * // Get one Const_Accountant
     * const const_Accountant = await prisma.const_Accountant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends const_AccountantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, const_AccountantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Const_Accountant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_AccountantFindFirstArgs} args - Arguments to find a Const_Accountant
     * @example
     * // Get one Const_Accountant
     * const const_Accountant = await prisma.const_Accountant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends const_AccountantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, const_AccountantFindFirstArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Const_Accountant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_AccountantFindFirstOrThrowArgs} args - Arguments to find a Const_Accountant
     * @example
     * // Get one Const_Accountant
     * const const_Accountant = await prisma.const_Accountant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends const_AccountantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, const_AccountantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Const_Accountants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_AccountantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Const_Accountants
     * const const_Accountants = await prisma.const_Accountant.findMany()
     * 
     * // Get first 10 Const_Accountants
     * const const_Accountants = await prisma.const_Accountant.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const const_AccountantWithDateOnly = await prisma.const_Accountant.findMany({ select: { date: true } })
     * 
    **/
    findMany<T extends const_AccountantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, const_AccountantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Const_Accountant.
     * @param {const_AccountantCreateArgs} args - Arguments to create a Const_Accountant.
     * @example
     * // Create one Const_Accountant
     * const Const_Accountant = await prisma.const_Accountant.create({
     *   data: {
     *     // ... data to create a Const_Accountant
     *   }
     * })
     * 
    **/
    create<T extends const_AccountantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, const_AccountantCreateArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Const_Accountants.
     *     @param {const_AccountantCreateManyArgs} args - Arguments to create many Const_Accountants.
     *     @example
     *     // Create many Const_Accountants
     *     const const_Accountant = await prisma.const_Accountant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends const_AccountantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, const_AccountantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Const_Accountant.
     * @param {const_AccountantDeleteArgs} args - Arguments to delete one Const_Accountant.
     * @example
     * // Delete one Const_Accountant
     * const Const_Accountant = await prisma.const_Accountant.delete({
     *   where: {
     *     // ... filter to delete one Const_Accountant
     *   }
     * })
     * 
    **/
    delete<T extends const_AccountantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, const_AccountantDeleteArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Const_Accountant.
     * @param {const_AccountantUpdateArgs} args - Arguments to update one Const_Accountant.
     * @example
     * // Update one Const_Accountant
     * const const_Accountant = await prisma.const_Accountant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends const_AccountantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, const_AccountantUpdateArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Const_Accountants.
     * @param {const_AccountantDeleteManyArgs} args - Arguments to filter Const_Accountants to delete.
     * @example
     * // Delete a few Const_Accountants
     * const { count } = await prisma.const_Accountant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends const_AccountantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, const_AccountantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Const_Accountants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_AccountantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Const_Accountants
     * const const_Accountant = await prisma.const_Accountant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends const_AccountantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, const_AccountantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Const_Accountant.
     * @param {const_AccountantUpsertArgs} args - Arguments to update or create a Const_Accountant.
     * @example
     * // Update or create a Const_Accountant
     * const const_Accountant = await prisma.const_Accountant.upsert({
     *   create: {
     *     // ... data to create a Const_Accountant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Const_Accountant we want to update
     *   }
     * })
    **/
    upsert<T extends const_AccountantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, const_AccountantUpsertArgs<ExtArgs>>
    ): Prisma__const_AccountantClient<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Const_Accountants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_AccountantCountArgs} args - Arguments to filter Const_Accountants to count.
     * @example
     * // Count the number of Const_Accountants
     * const count = await prisma.const_Accountant.count({
     *   where: {
     *     // ... the filter for the Const_Accountants we want to count
     *   }
     * })
    **/
    count<T extends const_AccountantCountArgs>(
      args?: Subset<T, const_AccountantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Const_AccountantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Const_Accountant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Const_AccountantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Const_AccountantAggregateArgs>(args: Subset<T, Const_AccountantAggregateArgs>): Prisma.PrismaPromise<GetConst_AccountantAggregateType<T>>

    /**
     * Group by Const_Accountant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {const_AccountantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends const_AccountantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: const_AccountantGroupByArgs['orderBy'] }
        : { orderBy?: const_AccountantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, const_AccountantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConst_AccountantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the const_Accountant model
   */
  readonly fields: const_AccountantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for const_Accountant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__const_AccountantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    value<T extends const_Accountant$valueArgs<ExtArgs> = {}>(args?: Subset<T, const_Accountant$valueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the const_Accountant model
   */ 
  interface const_AccountantFieldRefs {
    readonly date: FieldRef<"const_Accountant", 'DateTime'>
    readonly employeeId: FieldRef<"const_Accountant", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * const_Accountant findUnique
   */
  export type const_AccountantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * Filter, which const_Accountant to fetch.
     */
    where: const_AccountantWhereUniqueInput
  }


  /**
   * const_Accountant findUniqueOrThrow
   */
  export type const_AccountantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * Filter, which const_Accountant to fetch.
     */
    where: const_AccountantWhereUniqueInput
  }


  /**
   * const_Accountant findFirst
   */
  export type const_AccountantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * Filter, which const_Accountant to fetch.
     */
    where?: const_AccountantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_Accountants to fetch.
     */
    orderBy?: const_AccountantOrderByWithRelationInput | const_AccountantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for const_Accountants.
     */
    cursor?: const_AccountantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_Accountants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_Accountants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of const_Accountants.
     */
    distinct?: Const_AccountantScalarFieldEnum | Const_AccountantScalarFieldEnum[]
  }


  /**
   * const_Accountant findFirstOrThrow
   */
  export type const_AccountantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * Filter, which const_Accountant to fetch.
     */
    where?: const_AccountantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_Accountants to fetch.
     */
    orderBy?: const_AccountantOrderByWithRelationInput | const_AccountantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for const_Accountants.
     */
    cursor?: const_AccountantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_Accountants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_Accountants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of const_Accountants.
     */
    distinct?: Const_AccountantScalarFieldEnum | Const_AccountantScalarFieldEnum[]
  }


  /**
   * const_Accountant findMany
   */
  export type const_AccountantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * Filter, which const_Accountants to fetch.
     */
    where?: const_AccountantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of const_Accountants to fetch.
     */
    orderBy?: const_AccountantOrderByWithRelationInput | const_AccountantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing const_Accountants.
     */
    cursor?: const_AccountantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` const_Accountants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` const_Accountants.
     */
    skip?: number
    distinct?: Const_AccountantScalarFieldEnum | Const_AccountantScalarFieldEnum[]
  }


  /**
   * const_Accountant create
   */
  export type const_AccountantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * The data needed to create a const_Accountant.
     */
    data?: XOR<const_AccountantCreateInput, const_AccountantUncheckedCreateInput>
  }


  /**
   * const_Accountant createMany
   */
  export type const_AccountantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many const_Accountants.
     */
    data: const_AccountantCreateManyInput | const_AccountantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * const_Accountant update
   */
  export type const_AccountantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * The data needed to update a const_Accountant.
     */
    data: XOR<const_AccountantUpdateInput, const_AccountantUncheckedUpdateInput>
    /**
     * Choose, which const_Accountant to update.
     */
    where: const_AccountantWhereUniqueInput
  }


  /**
   * const_Accountant updateMany
   */
  export type const_AccountantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update const_Accountants.
     */
    data: XOR<const_AccountantUpdateManyMutationInput, const_AccountantUncheckedUpdateManyInput>
    /**
     * Filter which const_Accountants to update
     */
    where?: const_AccountantWhereInput
  }


  /**
   * const_Accountant upsert
   */
  export type const_AccountantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * The filter to search for the const_Accountant to update in case it exists.
     */
    where: const_AccountantWhereUniqueInput
    /**
     * In case the const_Accountant found by the `where` argument doesn't exist, create a new const_Accountant with this data.
     */
    create: XOR<const_AccountantCreateInput, const_AccountantUncheckedCreateInput>
    /**
     * In case the const_Accountant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<const_AccountantUpdateInput, const_AccountantUncheckedUpdateInput>
  }


  /**
   * const_Accountant delete
   */
  export type const_AccountantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    /**
     * Filter which const_Accountant to delete.
     */
    where: const_AccountantWhereUniqueInput
  }


  /**
   * const_Accountant deleteMany
   */
  export type const_AccountantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which const_Accountants to delete
     */
    where?: const_AccountantWhereInput
  }


  /**
   * const_Accountant.value
   */
  export type const_Accountant$valueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }


  /**
   * const_Accountant without action
   */
  export type const_AccountantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
  }



  /**
   * Model Color
   */

  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorAvgAggregateOutputType = {
    id: number | null
  }

  export type ColorSumAggregateOutputType = {
    id: number | null
  }

  export type ColorMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColorAvgAggregateInputType = {
    id?: true
  }

  export type ColorSumAggregateInputType = {
    id?: true
  }

  export type ColorMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Color to aggregate.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type ColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithAggregationInput | ColorOrderByWithAggregationInput[]
    by: ColorScalarFieldEnum[] | ColorScalarFieldEnum
    having?: ColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _avg?: ColorAvgAggregateInputType
    _sum?: ColorSumAggregateInputType
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }

  export type ColorGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends ColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type ColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ProductAppearance?: boolean | Color$ProductAppearanceArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductAppearance?: boolean | Color$ProductAppearanceArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Color"
    objects: {
      ProductAppearance: Prisma.$ProductAppearancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["color"]>
    composites: {}
  }


  type ColorGetPayload<S extends boolean | null | undefined | ColorDefaultArgs> = $Result.GetResult<Prisma.$ColorPayload, S>

  type ColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ColorFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ColorCountAggregateInputType | true
    }

  export interface ColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Color'], meta: { name: 'Color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {ColorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ColorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ColorFindUniqueArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Color that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ColorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ColorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ColorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindFirstArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Color that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ColorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ColorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Color.
     * @param {ColorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
    **/
    create<T extends ColorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ColorCreateArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Colors.
     *     @param {ColorCreateManyArgs} args - Arguments to create many Colors.
     *     @example
     *     // Create many Colors
     *     const color = await prisma.color.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ColorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Color.
     * @param {ColorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
    **/
    delete<T extends ColorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ColorDeleteArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Color.
     * @param {ColorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ColorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpdateArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Colors.
     * @param {ColorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ColorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ColorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Color.
     * @param {ColorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
    **/
    upsert<T extends ColorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpsertArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends ColorCountArgs>(
      args?: Subset<T, ColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorGroupByArgs['orderBy'] }
        : { orderBy?: ColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Color model
   */
  readonly fields: ColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ProductAppearance<T extends Color$ProductAppearanceArgs<ExtArgs> = {}>(args?: Subset<T, Color$ProductAppearanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Color model
   */ 
  interface ColorFieldRefs {
    readonly id: FieldRef<"Color", 'Int'>
    readonly name: FieldRef<"Color", 'String'>
    readonly createdAt: FieldRef<"Color", 'DateTime'>
    readonly updatedAt: FieldRef<"Color", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Color findUnique
   */
  export type ColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color findUniqueOrThrow
   */
  export type ColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color findFirst
   */
  export type ColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Color findFirstOrThrow
   */
  export type ColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Color findMany
   */
  export type ColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Colors to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Color create
   */
  export type ColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to create a Color.
     */
    data: XOR<ColorCreateInput, ColorUncheckedCreateInput>
  }


  /**
   * Color createMany
   */
  export type ColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Color update
   */
  export type ColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to update a Color.
     */
    data: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
    /**
     * Choose, which Color to update.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color updateMany
   */
  export type ColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
  }


  /**
   * Color upsert
   */
  export type ColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The filter to search for the Color to update in case it exists.
     */
    where: ColorWhereUniqueInput
    /**
     * In case the Color found by the `where` argument doesn't exist, create a new Color with this data.
     */
    create: XOR<ColorCreateInput, ColorUncheckedCreateInput>
    /**
     * In case the Color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
  }


  /**
   * Color delete
   */
  export type ColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter which Color to delete.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color deleteMany
   */
  export type ColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colors to delete
     */
    where?: ColorWhereInput
  }


  /**
   * Color.ProductAppearance
   */
  export type Color$ProductAppearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    where?: ProductAppearanceWhereInput
    orderBy?: ProductAppearanceOrderByWithRelationInput | ProductAppearanceOrderByWithRelationInput[]
    cursor?: ProductAppearanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAppearanceScalarFieldEnum | ProductAppearanceScalarFieldEnum[]
  }


  /**
   * Color without action
   */
  export type ColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
  }



  /**
   * Model RimShape
   */

  export type AggregateRimShape = {
    _count: RimShapeCountAggregateOutputType | null
    _avg: RimShapeAvgAggregateOutputType | null
    _sum: RimShapeSumAggregateOutputType | null
    _min: RimShapeMinAggregateOutputType | null
    _max: RimShapeMaxAggregateOutputType | null
  }

  export type RimShapeAvgAggregateOutputType = {
    id: number | null
  }

  export type RimShapeSumAggregateOutputType = {
    id: number | null
  }

  export type RimShapeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RimShapeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RimShapeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RimShapeAvgAggregateInputType = {
    id?: true
  }

  export type RimShapeSumAggregateInputType = {
    id?: true
  }

  export type RimShapeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RimShapeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RimShapeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RimShapeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RimShape to aggregate.
     */
    where?: RimShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RimShapes to fetch.
     */
    orderBy?: RimShapeOrderByWithRelationInput | RimShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RimShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RimShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RimShapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RimShapes
    **/
    _count?: true | RimShapeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RimShapeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RimShapeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RimShapeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RimShapeMaxAggregateInputType
  }

  export type GetRimShapeAggregateType<T extends RimShapeAggregateArgs> = {
        [P in keyof T & keyof AggregateRimShape]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRimShape[P]>
      : GetScalarType<T[P], AggregateRimShape[P]>
  }




  export type RimShapeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RimShapeWhereInput
    orderBy?: RimShapeOrderByWithAggregationInput | RimShapeOrderByWithAggregationInput[]
    by: RimShapeScalarFieldEnum[] | RimShapeScalarFieldEnum
    having?: RimShapeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RimShapeCountAggregateInputType | true
    _avg?: RimShapeAvgAggregateInputType
    _sum?: RimShapeSumAggregateInputType
    _min?: RimShapeMinAggregateInputType
    _max?: RimShapeMaxAggregateInputType
  }

  export type RimShapeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RimShapeCountAggregateOutputType | null
    _avg: RimShapeAvgAggregateOutputType | null
    _sum: RimShapeSumAggregateOutputType | null
    _min: RimShapeMinAggregateOutputType | null
    _max: RimShapeMaxAggregateOutputType | null
  }

  type GetRimShapeGroupByPayload<T extends RimShapeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RimShapeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RimShapeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RimShapeGroupByOutputType[P]>
            : GetScalarType<T[P], RimShapeGroupByOutputType[P]>
        }
      >
    >


  export type RimShapeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ProductRimParams?: boolean | RimShape$ProductRimParamsArgs<ExtArgs>
    _count?: boolean | RimShapeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rimShape"]>

  export type RimShapeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RimShapeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductRimParams?: boolean | RimShape$ProductRimParamsArgs<ExtArgs>
    _count?: boolean | RimShapeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RimShapePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RimShape"
    objects: {
      ProductRimParams: Prisma.$ProductRimParamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rimShape"]>
    composites: {}
  }


  type RimShapeGetPayload<S extends boolean | null | undefined | RimShapeDefaultArgs> = $Result.GetResult<Prisma.$RimShapePayload, S>

  type RimShapeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RimShapeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RimShapeCountAggregateInputType | true
    }

  export interface RimShapeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RimShape'], meta: { name: 'RimShape' } }
    /**
     * Find zero or one RimShape that matches the filter.
     * @param {RimShapeFindUniqueArgs} args - Arguments to find a RimShape
     * @example
     * // Get one RimShape
     * const rimShape = await prisma.rimShape.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RimShapeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RimShapeFindUniqueArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RimShape that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RimShapeFindUniqueOrThrowArgs} args - Arguments to find a RimShape
     * @example
     * // Get one RimShape
     * const rimShape = await prisma.rimShape.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RimShapeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RimShapeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RimShape that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeFindFirstArgs} args - Arguments to find a RimShape
     * @example
     * // Get one RimShape
     * const rimShape = await prisma.rimShape.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RimShapeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RimShapeFindFirstArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RimShape that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeFindFirstOrThrowArgs} args - Arguments to find a RimShape
     * @example
     * // Get one RimShape
     * const rimShape = await prisma.rimShape.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RimShapeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RimShapeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RimShapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RimShapes
     * const rimShapes = await prisma.rimShape.findMany()
     * 
     * // Get first 10 RimShapes
     * const rimShapes = await prisma.rimShape.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rimShapeWithIdOnly = await prisma.rimShape.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RimShapeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RimShapeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RimShape.
     * @param {RimShapeCreateArgs} args - Arguments to create a RimShape.
     * @example
     * // Create one RimShape
     * const RimShape = await prisma.rimShape.create({
     *   data: {
     *     // ... data to create a RimShape
     *   }
     * })
     * 
    **/
    create<T extends RimShapeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RimShapeCreateArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RimShapes.
     *     @param {RimShapeCreateManyArgs} args - Arguments to create many RimShapes.
     *     @example
     *     // Create many RimShapes
     *     const rimShape = await prisma.rimShape.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RimShapeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RimShapeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RimShape.
     * @param {RimShapeDeleteArgs} args - Arguments to delete one RimShape.
     * @example
     * // Delete one RimShape
     * const RimShape = await prisma.rimShape.delete({
     *   where: {
     *     // ... filter to delete one RimShape
     *   }
     * })
     * 
    **/
    delete<T extends RimShapeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RimShapeDeleteArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RimShape.
     * @param {RimShapeUpdateArgs} args - Arguments to update one RimShape.
     * @example
     * // Update one RimShape
     * const rimShape = await prisma.rimShape.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RimShapeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RimShapeUpdateArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RimShapes.
     * @param {RimShapeDeleteManyArgs} args - Arguments to filter RimShapes to delete.
     * @example
     * // Delete a few RimShapes
     * const { count } = await prisma.rimShape.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RimShapeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RimShapeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RimShapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RimShapes
     * const rimShape = await prisma.rimShape.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RimShapeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RimShapeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RimShape.
     * @param {RimShapeUpsertArgs} args - Arguments to update or create a RimShape.
     * @example
     * // Update or create a RimShape
     * const rimShape = await prisma.rimShape.upsert({
     *   create: {
     *     // ... data to create a RimShape
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RimShape we want to update
     *   }
     * })
    **/
    upsert<T extends RimShapeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RimShapeUpsertArgs<ExtArgs>>
    ): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RimShapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeCountArgs} args - Arguments to filter RimShapes to count.
     * @example
     * // Count the number of RimShapes
     * const count = await prisma.rimShape.count({
     *   where: {
     *     // ... the filter for the RimShapes we want to count
     *   }
     * })
    **/
    count<T extends RimShapeCountArgs>(
      args?: Subset<T, RimShapeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RimShapeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RimShape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RimShapeAggregateArgs>(args: Subset<T, RimShapeAggregateArgs>): Prisma.PrismaPromise<GetRimShapeAggregateType<T>>

    /**
     * Group by RimShape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RimShapeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RimShapeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RimShapeGroupByArgs['orderBy'] }
        : { orderBy?: RimShapeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RimShapeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRimShapeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RimShape model
   */
  readonly fields: RimShapeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RimShape.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RimShapeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ProductRimParams<T extends RimShape$ProductRimParamsArgs<ExtArgs> = {}>(args?: Subset<T, RimShape$ProductRimParamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RimShape model
   */ 
  interface RimShapeFieldRefs {
    readonly id: FieldRef<"RimShape", 'Int'>
    readonly name: FieldRef<"RimShape", 'String'>
    readonly createdAt: FieldRef<"RimShape", 'DateTime'>
    readonly updatedAt: FieldRef<"RimShape", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * RimShape findUnique
   */
  export type RimShapeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * Filter, which RimShape to fetch.
     */
    where: RimShapeWhereUniqueInput
  }


  /**
   * RimShape findUniqueOrThrow
   */
  export type RimShapeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * Filter, which RimShape to fetch.
     */
    where: RimShapeWhereUniqueInput
  }


  /**
   * RimShape findFirst
   */
  export type RimShapeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * Filter, which RimShape to fetch.
     */
    where?: RimShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RimShapes to fetch.
     */
    orderBy?: RimShapeOrderByWithRelationInput | RimShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RimShapes.
     */
    cursor?: RimShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RimShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RimShapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RimShapes.
     */
    distinct?: RimShapeScalarFieldEnum | RimShapeScalarFieldEnum[]
  }


  /**
   * RimShape findFirstOrThrow
   */
  export type RimShapeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * Filter, which RimShape to fetch.
     */
    where?: RimShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RimShapes to fetch.
     */
    orderBy?: RimShapeOrderByWithRelationInput | RimShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RimShapes.
     */
    cursor?: RimShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RimShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RimShapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RimShapes.
     */
    distinct?: RimShapeScalarFieldEnum | RimShapeScalarFieldEnum[]
  }


  /**
   * RimShape findMany
   */
  export type RimShapeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * Filter, which RimShapes to fetch.
     */
    where?: RimShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RimShapes to fetch.
     */
    orderBy?: RimShapeOrderByWithRelationInput | RimShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RimShapes.
     */
    cursor?: RimShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RimShapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RimShapes.
     */
    skip?: number
    distinct?: RimShapeScalarFieldEnum | RimShapeScalarFieldEnum[]
  }


  /**
   * RimShape create
   */
  export type RimShapeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * The data needed to create a RimShape.
     */
    data: XOR<RimShapeCreateInput, RimShapeUncheckedCreateInput>
  }


  /**
   * RimShape createMany
   */
  export type RimShapeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RimShapes.
     */
    data: RimShapeCreateManyInput | RimShapeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RimShape update
   */
  export type RimShapeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * The data needed to update a RimShape.
     */
    data: XOR<RimShapeUpdateInput, RimShapeUncheckedUpdateInput>
    /**
     * Choose, which RimShape to update.
     */
    where: RimShapeWhereUniqueInput
  }


  /**
   * RimShape updateMany
   */
  export type RimShapeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RimShapes.
     */
    data: XOR<RimShapeUpdateManyMutationInput, RimShapeUncheckedUpdateManyInput>
    /**
     * Filter which RimShapes to update
     */
    where?: RimShapeWhereInput
  }


  /**
   * RimShape upsert
   */
  export type RimShapeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * The filter to search for the RimShape to update in case it exists.
     */
    where: RimShapeWhereUniqueInput
    /**
     * In case the RimShape found by the `where` argument doesn't exist, create a new RimShape with this data.
     */
    create: XOR<RimShapeCreateInput, RimShapeUncheckedCreateInput>
    /**
     * In case the RimShape was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RimShapeUpdateInput, RimShapeUncheckedUpdateInput>
  }


  /**
   * RimShape delete
   */
  export type RimShapeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    /**
     * Filter which RimShape to delete.
     */
    where: RimShapeWhereUniqueInput
  }


  /**
   * RimShape deleteMany
   */
  export type RimShapeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RimShapes to delete
     */
    where?: RimShapeWhereInput
  }


  /**
   * RimShape.ProductRimParams
   */
  export type RimShape$ProductRimParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    where?: ProductRimParamsWhereInput
    orderBy?: ProductRimParamsOrderByWithRelationInput | ProductRimParamsOrderByWithRelationInput[]
    cursor?: ProductRimParamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRimParamsScalarFieldEnum | ProductRimParamsScalarFieldEnum[]
  }


  /**
   * RimShape without action
   */
  export type RimShapeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
  }



  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    parentId: number | null
    isFolder: boolean | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    parentId: number | null
    isFolder: boolean | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    parentId: number
    isFolder: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    parentId: number | null
    isFolder: boolean
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    isFolder?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Employee$parentArgs<ExtArgs>
    children?: boolean | Employee$childrenArgs<ExtArgs>
    const_Accountant?: boolean | Employee$const_AccountantArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    parentId?: boolean
    isFolder?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Employee$parentArgs<ExtArgs>
    children?: boolean | Employee$childrenArgs<ExtArgs>
    const_Accountant?: boolean | Employee$const_AccountantArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      parent: Prisma.$EmployeePayload<ExtArgs> | null
      children: Prisma.$EmployeePayload<ExtArgs>[]
      const_Accountant: Prisma.$const_AccountantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentId: number | null
      isFolder: boolean
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }


  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>
    ): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends Employee$parentArgs<ExtArgs> = {}>(args?: Subset<T, Employee$parentArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Employee$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Employee$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, 'findMany'> | Null>;

    const_Accountant<T extends Employee$const_AccountantArgs<ExtArgs> = {}>(args?: Subset<T, Employee$const_AccountantArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$const_AccountantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Employee model
   */ 
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly parentId: FieldRef<"Employee", 'Int'>
    readonly isFolder: FieldRef<"Employee", 'Boolean'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly description: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
  }


  /**
   * Employee.parent
   */
  export type Employee$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }


  /**
   * Employee.children
   */
  export type Employee$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }


  /**
   * Employee.const_Accountant
   */
  export type Employee$const_AccountantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the const_Accountant
     */
    select?: const_AccountantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: const_AccountantInclude<ExtArgs> | null
    where?: const_AccountantWhereInput
    orderBy?: const_AccountantOrderByWithRelationInput | const_AccountantOrderByWithRelationInput[]
    cursor?: const_AccountantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Const_AccountantScalarFieldEnum | Const_AccountantScalarFieldEnum[]
  }


  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmployeeInclude<ExtArgs> | null
  }



  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type PartnerSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type PartnerMinAggregateOutputType = {
    id: number | null
    parentId: number | null
    isFolder: boolean | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: number | null
    parentId: number | null
    isFolder: boolean | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    parentId: number
    isFolder: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type PartnerSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type PartnerMinAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _avg?: PartnerAvgAggregateInputType
    _sum?: PartnerSumAggregateInputType
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: number
    parentId: number | null
    isFolder: boolean
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    isFolder?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Partner$parentArgs<ExtArgs>
    children?: boolean | Partner$childrenArgs<ExtArgs>
    _count?: boolean | PartnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    id?: boolean
    parentId?: boolean
    isFolder?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Partner$parentArgs<ExtArgs>
    children?: boolean | Partner$childrenArgs<ExtArgs>
    _count?: boolean | PartnerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {
      parent: Prisma.$PartnerPayload<ExtArgs> | null
      children: Prisma.$PartnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentId: number | null
      isFolder: boolean
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }


  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PartnerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Partner that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PartnerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PartnerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
    **/
    create<T extends PartnerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Partners.
     *     @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     *     @example
     *     // Create many Partners
     *     const partner = await prisma.partner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PartnerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
    **/
    delete<T extends PartnerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PartnerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PartnerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PartnerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
    **/
    upsert<T extends PartnerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>
    ): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends Partner$parentArgs<ExtArgs> = {}>(args?: Subset<T, Partner$parentArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Partner$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Partner$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Partner model
   */ 
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'Int'>
    readonly parentId: FieldRef<"Partner", 'Int'>
    readonly isFolder: FieldRef<"Partner", 'Boolean'>
    readonly name: FieldRef<"Partner", 'String'>
    readonly description: FieldRef<"Partner", 'String'>
    readonly createdAt: FieldRef<"Partner", 'DateTime'>
    readonly updatedAt: FieldRef<"Partner", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }


  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }


  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }


  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }


  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }


  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }


  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }


  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
  }


  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }


  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }


  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
  }


  /**
   * Partner.parent
   */
  export type Partner$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    where?: PartnerWhereInput
  }


  /**
   * Partner.children
   */
  export type Partner$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    cursor?: PartnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }


  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PartnerInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    parentId: number | null
    isFolder: boolean | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    parentId: number | null
    isFolder: boolean | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    parentId: number
    isFolder: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    parentId?: true
    isFolder?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    parentId: number | null
    isFolder: boolean
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    isFolder?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Product$parentArgs<ExtArgs>
    children?: boolean | Product$childrenArgs<ExtArgs>
    appearance?: boolean | Product$appearanceArgs<ExtArgs>
    rimParams?: boolean | Product$rimParamsArgs<ExtArgs>
    lensParams?: boolean | Product$lensParamsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    parentId?: boolean
    isFolder?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Product$parentArgs<ExtArgs>
    children?: boolean | Product$childrenArgs<ExtArgs>
    appearance?: boolean | Product$appearanceArgs<ExtArgs>
    rimParams?: boolean | Product$rimParamsArgs<ExtArgs>
    lensParams?: boolean | Product$lensParamsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      parent: Prisma.$ProductPayload<ExtArgs> | null
      children: Prisma.$ProductPayload<ExtArgs>[]
      appearance: Prisma.$ProductAppearancePayload<ExtArgs> | null
      rimParams: Prisma.$ProductRimParamsPayload<ExtArgs> | null
      lensParams: Prisma.$ProductLensParamsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parentId: number | null
      isFolder: boolean
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends Product$parentArgs<ExtArgs> = {}>(args?: Subset<T, Product$parentArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Product$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Product$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    appearance<T extends Product$appearanceArgs<ExtArgs> = {}>(args?: Subset<T, Product$appearanceArgs<ExtArgs>>): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    rimParams<T extends Product$rimParamsArgs<ExtArgs> = {}>(args?: Subset<T, Product$rimParamsArgs<ExtArgs>>): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    lensParams<T extends Product$lensParamsArgs<ExtArgs> = {}>(args?: Subset<T, Product$lensParamsArgs<ExtArgs>>): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly parentId: FieldRef<"Product", 'Int'>
    readonly isFolder: FieldRef<"Product", 'Boolean'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.parent
   */
  export type Product$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }


  /**
   * Product.children
   */
  export type Product$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product.appearance
   */
  export type Product$appearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    where?: ProductAppearanceWhereInput
  }


  /**
   * Product.rimParams
   */
  export type Product$rimParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    where?: ProductRimParamsWhereInput
  }


  /**
   * Product.lensParams
   */
  export type Product$lensParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    where?: ProductLensParamsWhereInput
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model ProductAppearance
   */

  export type AggregateProductAppearance = {
    _count: ProductAppearanceCountAggregateOutputType | null
    _avg: ProductAppearanceAvgAggregateOutputType | null
    _sum: ProductAppearanceSumAggregateOutputType | null
    _min: ProductAppearanceMinAggregateOutputType | null
    _max: ProductAppearanceMaxAggregateOutputType | null
  }

  export type ProductAppearanceAvgAggregateOutputType = {
    productId: number | null
    colorId: number | null
    weight: number | null
  }

  export type ProductAppearanceSumAggregateOutputType = {
    productId: number | null
    colorId: number | null
    weight: number | null
  }

  export type ProductAppearanceMinAggregateOutputType = {
    productId: number | null
    colorId: number | null
    weight: number | null
  }

  export type ProductAppearanceMaxAggregateOutputType = {
    productId: number | null
    colorId: number | null
    weight: number | null
  }

  export type ProductAppearanceCountAggregateOutputType = {
    productId: number
    colorId: number
    weight: number
    _all: number
  }


  export type ProductAppearanceAvgAggregateInputType = {
    productId?: true
    colorId?: true
    weight?: true
  }

  export type ProductAppearanceSumAggregateInputType = {
    productId?: true
    colorId?: true
    weight?: true
  }

  export type ProductAppearanceMinAggregateInputType = {
    productId?: true
    colorId?: true
    weight?: true
  }

  export type ProductAppearanceMaxAggregateInputType = {
    productId?: true
    colorId?: true
    weight?: true
  }

  export type ProductAppearanceCountAggregateInputType = {
    productId?: true
    colorId?: true
    weight?: true
    _all?: true
  }

  export type ProductAppearanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAppearance to aggregate.
     */
    where?: ProductAppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAppearances to fetch.
     */
    orderBy?: ProductAppearanceOrderByWithRelationInput | ProductAppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAppearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAppearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAppearances
    **/
    _count?: true | ProductAppearanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAppearanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductAppearanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAppearanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAppearanceMaxAggregateInputType
  }

  export type GetProductAppearanceAggregateType<T extends ProductAppearanceAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAppearance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAppearance[P]>
      : GetScalarType<T[P], AggregateProductAppearance[P]>
  }




  export type ProductAppearanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAppearanceWhereInput
    orderBy?: ProductAppearanceOrderByWithAggregationInput | ProductAppearanceOrderByWithAggregationInput[]
    by: ProductAppearanceScalarFieldEnum[] | ProductAppearanceScalarFieldEnum
    having?: ProductAppearanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAppearanceCountAggregateInputType | true
    _avg?: ProductAppearanceAvgAggregateInputType
    _sum?: ProductAppearanceSumAggregateInputType
    _min?: ProductAppearanceMinAggregateInputType
    _max?: ProductAppearanceMaxAggregateInputType
  }

  export type ProductAppearanceGroupByOutputType = {
    productId: number
    colorId: number | null
    weight: number | null
    _count: ProductAppearanceCountAggregateOutputType | null
    _avg: ProductAppearanceAvgAggregateOutputType | null
    _sum: ProductAppearanceSumAggregateOutputType | null
    _min: ProductAppearanceMinAggregateOutputType | null
    _max: ProductAppearanceMaxAggregateOutputType | null
  }

  type GetProductAppearanceGroupByPayload<T extends ProductAppearanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAppearanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAppearanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAppearanceGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAppearanceGroupByOutputType[P]>
        }
      >
    >


  export type ProductAppearanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    colorId?: boolean
    weight?: boolean
    color?: boolean | ProductAppearance$colorArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productAppearance"]>

  export type ProductAppearanceSelectScalar = {
    productId?: boolean
    colorId?: boolean
    weight?: boolean
  }

  export type ProductAppearanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    color?: boolean | ProductAppearance$colorArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductAppearancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAppearance"
    objects: {
      color: Prisma.$ColorPayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      colorId: number | null
      weight: number | null
    }, ExtArgs["result"]["productAppearance"]>
    composites: {}
  }


  type ProductAppearanceGetPayload<S extends boolean | null | undefined | ProductAppearanceDefaultArgs> = $Result.GetResult<Prisma.$ProductAppearancePayload, S>

  type ProductAppearanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductAppearanceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductAppearanceCountAggregateInputType | true
    }

  export interface ProductAppearanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAppearance'], meta: { name: 'ProductAppearance' } }
    /**
     * Find zero or one ProductAppearance that matches the filter.
     * @param {ProductAppearanceFindUniqueArgs} args - Arguments to find a ProductAppearance
     * @example
     * // Get one ProductAppearance
     * const productAppearance = await prisma.productAppearance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductAppearanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductAppearanceFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductAppearance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductAppearanceFindUniqueOrThrowArgs} args - Arguments to find a ProductAppearance
     * @example
     * // Get one ProductAppearance
     * const productAppearance = await prisma.productAppearance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductAppearanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductAppearanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductAppearance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceFindFirstArgs} args - Arguments to find a ProductAppearance
     * @example
     * // Get one ProductAppearance
     * const productAppearance = await prisma.productAppearance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductAppearanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductAppearanceFindFirstArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductAppearance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceFindFirstOrThrowArgs} args - Arguments to find a ProductAppearance
     * @example
     * // Get one ProductAppearance
     * const productAppearance = await prisma.productAppearance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductAppearanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductAppearanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductAppearances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAppearances
     * const productAppearances = await prisma.productAppearance.findMany()
     * 
     * // Get first 10 ProductAppearances
     * const productAppearances = await prisma.productAppearance.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productAppearanceWithProductIdOnly = await prisma.productAppearance.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductAppearanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductAppearanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductAppearance.
     * @param {ProductAppearanceCreateArgs} args - Arguments to create a ProductAppearance.
     * @example
     * // Create one ProductAppearance
     * const ProductAppearance = await prisma.productAppearance.create({
     *   data: {
     *     // ... data to create a ProductAppearance
     *   }
     * })
     * 
    **/
    create<T extends ProductAppearanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductAppearanceCreateArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductAppearances.
     *     @param {ProductAppearanceCreateManyArgs} args - Arguments to create many ProductAppearances.
     *     @example
     *     // Create many ProductAppearances
     *     const productAppearance = await prisma.productAppearance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductAppearanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductAppearanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductAppearance.
     * @param {ProductAppearanceDeleteArgs} args - Arguments to delete one ProductAppearance.
     * @example
     * // Delete one ProductAppearance
     * const ProductAppearance = await prisma.productAppearance.delete({
     *   where: {
     *     // ... filter to delete one ProductAppearance
     *   }
     * })
     * 
    **/
    delete<T extends ProductAppearanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductAppearanceDeleteArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductAppearance.
     * @param {ProductAppearanceUpdateArgs} args - Arguments to update one ProductAppearance.
     * @example
     * // Update one ProductAppearance
     * const productAppearance = await prisma.productAppearance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductAppearanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductAppearanceUpdateArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductAppearances.
     * @param {ProductAppearanceDeleteManyArgs} args - Arguments to filter ProductAppearances to delete.
     * @example
     * // Delete a few ProductAppearances
     * const { count } = await prisma.productAppearance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductAppearanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductAppearanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAppearances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAppearances
     * const productAppearance = await prisma.productAppearance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductAppearanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductAppearanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductAppearance.
     * @param {ProductAppearanceUpsertArgs} args - Arguments to update or create a ProductAppearance.
     * @example
     * // Update or create a ProductAppearance
     * const productAppearance = await prisma.productAppearance.upsert({
     *   create: {
     *     // ... data to create a ProductAppearance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAppearance we want to update
     *   }
     * })
    **/
    upsert<T extends ProductAppearanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductAppearanceUpsertArgs<ExtArgs>>
    ): Prisma__ProductAppearanceClient<$Result.GetResult<Prisma.$ProductAppearancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductAppearances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceCountArgs} args - Arguments to filter ProductAppearances to count.
     * @example
     * // Count the number of ProductAppearances
     * const count = await prisma.productAppearance.count({
     *   where: {
     *     // ... the filter for the ProductAppearances we want to count
     *   }
     * })
    **/
    count<T extends ProductAppearanceCountArgs>(
      args?: Subset<T, ProductAppearanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAppearanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAppearance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAppearanceAggregateArgs>(args: Subset<T, ProductAppearanceAggregateArgs>): Prisma.PrismaPromise<GetProductAppearanceAggregateType<T>>

    /**
     * Group by ProductAppearance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAppearanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductAppearanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAppearanceGroupByArgs['orderBy'] }
        : { orderBy?: ProductAppearanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductAppearanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAppearanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAppearance model
   */
  readonly fields: ProductAppearanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAppearance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAppearanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    color<T extends ProductAppearance$colorArgs<ExtArgs> = {}>(args?: Subset<T, ProductAppearance$colorArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductAppearance model
   */ 
  interface ProductAppearanceFieldRefs {
    readonly productId: FieldRef<"ProductAppearance", 'Int'>
    readonly colorId: FieldRef<"ProductAppearance", 'Int'>
    readonly weight: FieldRef<"ProductAppearance", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductAppearance findUnique
   */
  export type ProductAppearanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * Filter, which ProductAppearance to fetch.
     */
    where: ProductAppearanceWhereUniqueInput
  }


  /**
   * ProductAppearance findUniqueOrThrow
   */
  export type ProductAppearanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * Filter, which ProductAppearance to fetch.
     */
    where: ProductAppearanceWhereUniqueInput
  }


  /**
   * ProductAppearance findFirst
   */
  export type ProductAppearanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * Filter, which ProductAppearance to fetch.
     */
    where?: ProductAppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAppearances to fetch.
     */
    orderBy?: ProductAppearanceOrderByWithRelationInput | ProductAppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAppearances.
     */
    cursor?: ProductAppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAppearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAppearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAppearances.
     */
    distinct?: ProductAppearanceScalarFieldEnum | ProductAppearanceScalarFieldEnum[]
  }


  /**
   * ProductAppearance findFirstOrThrow
   */
  export type ProductAppearanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * Filter, which ProductAppearance to fetch.
     */
    where?: ProductAppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAppearances to fetch.
     */
    orderBy?: ProductAppearanceOrderByWithRelationInput | ProductAppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAppearances.
     */
    cursor?: ProductAppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAppearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAppearances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAppearances.
     */
    distinct?: ProductAppearanceScalarFieldEnum | ProductAppearanceScalarFieldEnum[]
  }


  /**
   * ProductAppearance findMany
   */
  export type ProductAppearanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * Filter, which ProductAppearances to fetch.
     */
    where?: ProductAppearanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAppearances to fetch.
     */
    orderBy?: ProductAppearanceOrderByWithRelationInput | ProductAppearanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAppearances.
     */
    cursor?: ProductAppearanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAppearances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAppearances.
     */
    skip?: number
    distinct?: ProductAppearanceScalarFieldEnum | ProductAppearanceScalarFieldEnum[]
  }


  /**
   * ProductAppearance create
   */
  export type ProductAppearanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAppearance.
     */
    data: XOR<ProductAppearanceCreateInput, ProductAppearanceUncheckedCreateInput>
  }


  /**
   * ProductAppearance createMany
   */
  export type ProductAppearanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAppearances.
     */
    data: ProductAppearanceCreateManyInput | ProductAppearanceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductAppearance update
   */
  export type ProductAppearanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAppearance.
     */
    data: XOR<ProductAppearanceUpdateInput, ProductAppearanceUncheckedUpdateInput>
    /**
     * Choose, which ProductAppearance to update.
     */
    where: ProductAppearanceWhereUniqueInput
  }


  /**
   * ProductAppearance updateMany
   */
  export type ProductAppearanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAppearances.
     */
    data: XOR<ProductAppearanceUpdateManyMutationInput, ProductAppearanceUncheckedUpdateManyInput>
    /**
     * Filter which ProductAppearances to update
     */
    where?: ProductAppearanceWhereInput
  }


  /**
   * ProductAppearance upsert
   */
  export type ProductAppearanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAppearance to update in case it exists.
     */
    where: ProductAppearanceWhereUniqueInput
    /**
     * In case the ProductAppearance found by the `where` argument doesn't exist, create a new ProductAppearance with this data.
     */
    create: XOR<ProductAppearanceCreateInput, ProductAppearanceUncheckedCreateInput>
    /**
     * In case the ProductAppearance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAppearanceUpdateInput, ProductAppearanceUncheckedUpdateInput>
  }


  /**
   * ProductAppearance delete
   */
  export type ProductAppearanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
    /**
     * Filter which ProductAppearance to delete.
     */
    where: ProductAppearanceWhereUniqueInput
  }


  /**
   * ProductAppearance deleteMany
   */
  export type ProductAppearanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAppearances to delete
     */
    where?: ProductAppearanceWhereInput
  }


  /**
   * ProductAppearance.color
   */
  export type ProductAppearance$colorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    where?: ColorWhereInput
  }


  /**
   * ProductAppearance without action
   */
  export type ProductAppearanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAppearance
     */
    select?: ProductAppearanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductAppearanceInclude<ExtArgs> | null
  }



  /**
   * Model ProductRimParams
   */

  export type AggregateProductRimParams = {
    _count: ProductRimParamsCountAggregateOutputType | null
    _avg: ProductRimParamsAvgAggregateOutputType | null
    _sum: ProductRimParamsSumAggregateOutputType | null
    _min: ProductRimParamsMinAggregateOutputType | null
    _max: ProductRimParamsMaxAggregateOutputType | null
  }

  export type ProductRimParamsAvgAggregateOutputType = {
    productId: number | null
    bridge: number | null
    temple: number | null
    width: number | null
    height: number | null
    shapeId: number | null
  }

  export type ProductRimParamsSumAggregateOutputType = {
    productId: number | null
    bridge: number | null
    temple: number | null
    width: number | null
    height: number | null
    shapeId: number | null
  }

  export type ProductRimParamsMinAggregateOutputType = {
    productId: number | null
    bridge: number | null
    temple: number | null
    width: number | null
    height: number | null
    shapeId: number | null
  }

  export type ProductRimParamsMaxAggregateOutputType = {
    productId: number | null
    bridge: number | null
    temple: number | null
    width: number | null
    height: number | null
    shapeId: number | null
  }

  export type ProductRimParamsCountAggregateOutputType = {
    productId: number
    bridge: number
    temple: number
    width: number
    height: number
    shapeId: number
    _all: number
  }


  export type ProductRimParamsAvgAggregateInputType = {
    productId?: true
    bridge?: true
    temple?: true
    width?: true
    height?: true
    shapeId?: true
  }

  export type ProductRimParamsSumAggregateInputType = {
    productId?: true
    bridge?: true
    temple?: true
    width?: true
    height?: true
    shapeId?: true
  }

  export type ProductRimParamsMinAggregateInputType = {
    productId?: true
    bridge?: true
    temple?: true
    width?: true
    height?: true
    shapeId?: true
  }

  export type ProductRimParamsMaxAggregateInputType = {
    productId?: true
    bridge?: true
    temple?: true
    width?: true
    height?: true
    shapeId?: true
  }

  export type ProductRimParamsCountAggregateInputType = {
    productId?: true
    bridge?: true
    temple?: true
    width?: true
    height?: true
    shapeId?: true
    _all?: true
  }

  export type ProductRimParamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRimParams to aggregate.
     */
    where?: ProductRimParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRimParams to fetch.
     */
    orderBy?: ProductRimParamsOrderByWithRelationInput | ProductRimParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRimParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRimParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRimParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRimParams
    **/
    _count?: true | ProductRimParamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductRimParamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductRimParamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRimParamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRimParamsMaxAggregateInputType
  }

  export type GetProductRimParamsAggregateType<T extends ProductRimParamsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRimParams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRimParams[P]>
      : GetScalarType<T[P], AggregateProductRimParams[P]>
  }




  export type ProductRimParamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRimParamsWhereInput
    orderBy?: ProductRimParamsOrderByWithAggregationInput | ProductRimParamsOrderByWithAggregationInput[]
    by: ProductRimParamsScalarFieldEnum[] | ProductRimParamsScalarFieldEnum
    having?: ProductRimParamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRimParamsCountAggregateInputType | true
    _avg?: ProductRimParamsAvgAggregateInputType
    _sum?: ProductRimParamsSumAggregateInputType
    _min?: ProductRimParamsMinAggregateInputType
    _max?: ProductRimParamsMaxAggregateInputType
  }

  export type ProductRimParamsGroupByOutputType = {
    productId: number
    bridge: number | null
    temple: number | null
    width: number | null
    height: number | null
    shapeId: number | null
    _count: ProductRimParamsCountAggregateOutputType | null
    _avg: ProductRimParamsAvgAggregateOutputType | null
    _sum: ProductRimParamsSumAggregateOutputType | null
    _min: ProductRimParamsMinAggregateOutputType | null
    _max: ProductRimParamsMaxAggregateOutputType | null
  }

  type GetProductRimParamsGroupByPayload<T extends ProductRimParamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRimParamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRimParamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRimParamsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRimParamsGroupByOutputType[P]>
        }
      >
    >


  export type ProductRimParamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    bridge?: boolean
    temple?: boolean
    width?: boolean
    height?: boolean
    shapeId?: boolean
    shape?: boolean | ProductRimParams$shapeArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRimParams"]>

  export type ProductRimParamsSelectScalar = {
    productId?: boolean
    bridge?: boolean
    temple?: boolean
    width?: boolean
    height?: boolean
    shapeId?: boolean
  }

  export type ProductRimParamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ProductRimParams$shapeArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductRimParamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRimParams"
    objects: {
      shape: Prisma.$RimShapePayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      bridge: number | null
      temple: number | null
      width: number | null
      height: number | null
      shapeId: number | null
    }, ExtArgs["result"]["productRimParams"]>
    composites: {}
  }


  type ProductRimParamsGetPayload<S extends boolean | null | undefined | ProductRimParamsDefaultArgs> = $Result.GetResult<Prisma.$ProductRimParamsPayload, S>

  type ProductRimParamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductRimParamsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductRimParamsCountAggregateInputType | true
    }

  export interface ProductRimParamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRimParams'], meta: { name: 'ProductRimParams' } }
    /**
     * Find zero or one ProductRimParams that matches the filter.
     * @param {ProductRimParamsFindUniqueArgs} args - Arguments to find a ProductRimParams
     * @example
     * // Get one ProductRimParams
     * const productRimParams = await prisma.productRimParams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductRimParamsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRimParamsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductRimParams that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductRimParamsFindUniqueOrThrowArgs} args - Arguments to find a ProductRimParams
     * @example
     * // Get one ProductRimParams
     * const productRimParams = await prisma.productRimParams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductRimParamsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRimParamsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductRimParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsFindFirstArgs} args - Arguments to find a ProductRimParams
     * @example
     * // Get one ProductRimParams
     * const productRimParams = await prisma.productRimParams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductRimParamsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRimParamsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductRimParams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsFindFirstOrThrowArgs} args - Arguments to find a ProductRimParams
     * @example
     * // Get one ProductRimParams
     * const productRimParams = await prisma.productRimParams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductRimParamsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRimParamsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductRimParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRimParams
     * const productRimParams = await prisma.productRimParams.findMany()
     * 
     * // Get first 10 ProductRimParams
     * const productRimParams = await prisma.productRimParams.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productRimParamsWithProductIdOnly = await prisma.productRimParams.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductRimParamsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRimParamsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductRimParams.
     * @param {ProductRimParamsCreateArgs} args - Arguments to create a ProductRimParams.
     * @example
     * // Create one ProductRimParams
     * const ProductRimParams = await prisma.productRimParams.create({
     *   data: {
     *     // ... data to create a ProductRimParams
     *   }
     * })
     * 
    **/
    create<T extends ProductRimParamsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRimParamsCreateArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductRimParams.
     *     @param {ProductRimParamsCreateManyArgs} args - Arguments to create many ProductRimParams.
     *     @example
     *     // Create many ProductRimParams
     *     const productRimParams = await prisma.productRimParams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductRimParamsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRimParamsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductRimParams.
     * @param {ProductRimParamsDeleteArgs} args - Arguments to delete one ProductRimParams.
     * @example
     * // Delete one ProductRimParams
     * const ProductRimParams = await prisma.productRimParams.delete({
     *   where: {
     *     // ... filter to delete one ProductRimParams
     *   }
     * })
     * 
    **/
    delete<T extends ProductRimParamsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRimParamsDeleteArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductRimParams.
     * @param {ProductRimParamsUpdateArgs} args - Arguments to update one ProductRimParams.
     * @example
     * // Update one ProductRimParams
     * const productRimParams = await prisma.productRimParams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductRimParamsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRimParamsUpdateArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductRimParams.
     * @param {ProductRimParamsDeleteManyArgs} args - Arguments to filter ProductRimParams to delete.
     * @example
     * // Delete a few ProductRimParams
     * const { count } = await prisma.productRimParams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductRimParamsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductRimParamsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRimParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRimParams
     * const productRimParams = await prisma.productRimParams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductRimParamsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRimParamsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductRimParams.
     * @param {ProductRimParamsUpsertArgs} args - Arguments to update or create a ProductRimParams.
     * @example
     * // Update or create a ProductRimParams
     * const productRimParams = await prisma.productRimParams.upsert({
     *   create: {
     *     // ... data to create a ProductRimParams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRimParams we want to update
     *   }
     * })
    **/
    upsert<T extends ProductRimParamsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductRimParamsUpsertArgs<ExtArgs>>
    ): Prisma__ProductRimParamsClient<$Result.GetResult<Prisma.$ProductRimParamsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductRimParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsCountArgs} args - Arguments to filter ProductRimParams to count.
     * @example
     * // Count the number of ProductRimParams
     * const count = await prisma.productRimParams.count({
     *   where: {
     *     // ... the filter for the ProductRimParams we want to count
     *   }
     * })
    **/
    count<T extends ProductRimParamsCountArgs>(
      args?: Subset<T, ProductRimParamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRimParamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRimParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductRimParamsAggregateArgs>(args: Subset<T, ProductRimParamsAggregateArgs>): Prisma.PrismaPromise<GetProductRimParamsAggregateType<T>>

    /**
     * Group by ProductRimParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRimParamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductRimParamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRimParamsGroupByArgs['orderBy'] }
        : { orderBy?: ProductRimParamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductRimParamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRimParamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRimParams model
   */
  readonly fields: ProductRimParamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRimParams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRimParamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    shape<T extends ProductRimParams$shapeArgs<ExtArgs> = {}>(args?: Subset<T, ProductRimParams$shapeArgs<ExtArgs>>): Prisma__RimShapeClient<$Result.GetResult<Prisma.$RimShapePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductRimParams model
   */ 
  interface ProductRimParamsFieldRefs {
    readonly productId: FieldRef<"ProductRimParams", 'Int'>
    readonly bridge: FieldRef<"ProductRimParams", 'Int'>
    readonly temple: FieldRef<"ProductRimParams", 'Int'>
    readonly width: FieldRef<"ProductRimParams", 'Int'>
    readonly height: FieldRef<"ProductRimParams", 'Int'>
    readonly shapeId: FieldRef<"ProductRimParams", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductRimParams findUnique
   */
  export type ProductRimParamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductRimParams to fetch.
     */
    where: ProductRimParamsWhereUniqueInput
  }


  /**
   * ProductRimParams findUniqueOrThrow
   */
  export type ProductRimParamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductRimParams to fetch.
     */
    where: ProductRimParamsWhereUniqueInput
  }


  /**
   * ProductRimParams findFirst
   */
  export type ProductRimParamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductRimParams to fetch.
     */
    where?: ProductRimParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRimParams to fetch.
     */
    orderBy?: ProductRimParamsOrderByWithRelationInput | ProductRimParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRimParams.
     */
    cursor?: ProductRimParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRimParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRimParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRimParams.
     */
    distinct?: ProductRimParamsScalarFieldEnum | ProductRimParamsScalarFieldEnum[]
  }


  /**
   * ProductRimParams findFirstOrThrow
   */
  export type ProductRimParamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductRimParams to fetch.
     */
    where?: ProductRimParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRimParams to fetch.
     */
    orderBy?: ProductRimParamsOrderByWithRelationInput | ProductRimParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRimParams.
     */
    cursor?: ProductRimParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRimParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRimParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRimParams.
     */
    distinct?: ProductRimParamsScalarFieldEnum | ProductRimParamsScalarFieldEnum[]
  }


  /**
   * ProductRimParams findMany
   */
  export type ProductRimParamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductRimParams to fetch.
     */
    where?: ProductRimParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRimParams to fetch.
     */
    orderBy?: ProductRimParamsOrderByWithRelationInput | ProductRimParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRimParams.
     */
    cursor?: ProductRimParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRimParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRimParams.
     */
    skip?: number
    distinct?: ProductRimParamsScalarFieldEnum | ProductRimParamsScalarFieldEnum[]
  }


  /**
   * ProductRimParams create
   */
  export type ProductRimParamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductRimParams.
     */
    data: XOR<ProductRimParamsCreateInput, ProductRimParamsUncheckedCreateInput>
  }


  /**
   * ProductRimParams createMany
   */
  export type ProductRimParamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRimParams.
     */
    data: ProductRimParamsCreateManyInput | ProductRimParamsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductRimParams update
   */
  export type ProductRimParamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductRimParams.
     */
    data: XOR<ProductRimParamsUpdateInput, ProductRimParamsUncheckedUpdateInput>
    /**
     * Choose, which ProductRimParams to update.
     */
    where: ProductRimParamsWhereUniqueInput
  }


  /**
   * ProductRimParams updateMany
   */
  export type ProductRimParamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRimParams.
     */
    data: XOR<ProductRimParamsUpdateManyMutationInput, ProductRimParamsUncheckedUpdateManyInput>
    /**
     * Filter which ProductRimParams to update
     */
    where?: ProductRimParamsWhereInput
  }


  /**
   * ProductRimParams upsert
   */
  export type ProductRimParamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductRimParams to update in case it exists.
     */
    where: ProductRimParamsWhereUniqueInput
    /**
     * In case the ProductRimParams found by the `where` argument doesn't exist, create a new ProductRimParams with this data.
     */
    create: XOR<ProductRimParamsCreateInput, ProductRimParamsUncheckedCreateInput>
    /**
     * In case the ProductRimParams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRimParamsUpdateInput, ProductRimParamsUncheckedUpdateInput>
  }


  /**
   * ProductRimParams delete
   */
  export type ProductRimParamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
    /**
     * Filter which ProductRimParams to delete.
     */
    where: ProductRimParamsWhereUniqueInput
  }


  /**
   * ProductRimParams deleteMany
   */
  export type ProductRimParamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRimParams to delete
     */
    where?: ProductRimParamsWhereInput
  }


  /**
   * ProductRimParams.shape
   */
  export type ProductRimParams$shapeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RimShape
     */
    select?: RimShapeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RimShapeInclude<ExtArgs> | null
    where?: RimShapeWhereInput
  }


  /**
   * ProductRimParams without action
   */
  export type ProductRimParamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRimParams
     */
    select?: ProductRimParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductRimParamsInclude<ExtArgs> | null
  }



  /**
   * Model ProductLensParams
   */

  export type AggregateProductLensParams = {
    _count: ProductLensParamsCountAggregateOutputType | null
    _avg: ProductLensParamsAvgAggregateOutputType | null
    _sum: ProductLensParamsSumAggregateOutputType | null
    _min: ProductLensParamsMinAggregateOutputType | null
    _max: ProductLensParamsMaxAggregateOutputType | null
  }

  export type ProductLensParamsAvgAggregateOutputType = {
    productId: number | null
    index: number | null
    diameter: number | null
  }

  export type ProductLensParamsSumAggregateOutputType = {
    productId: number | null
    index: number | null
    diameter: number | null
  }

  export type ProductLensParamsMinAggregateOutputType = {
    productId: number | null
    index: number | null
    diameter: number | null
  }

  export type ProductLensParamsMaxAggregateOutputType = {
    productId: number | null
    index: number | null
    diameter: number | null
  }

  export type ProductLensParamsCountAggregateOutputType = {
    productId: number
    index: number
    diameter: number
    _all: number
  }


  export type ProductLensParamsAvgAggregateInputType = {
    productId?: true
    index?: true
    diameter?: true
  }

  export type ProductLensParamsSumAggregateInputType = {
    productId?: true
    index?: true
    diameter?: true
  }

  export type ProductLensParamsMinAggregateInputType = {
    productId?: true
    index?: true
    diameter?: true
  }

  export type ProductLensParamsMaxAggregateInputType = {
    productId?: true
    index?: true
    diameter?: true
  }

  export type ProductLensParamsCountAggregateInputType = {
    productId?: true
    index?: true
    diameter?: true
    _all?: true
  }

  export type ProductLensParamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductLensParams to aggregate.
     */
    where?: ProductLensParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLensParams to fetch.
     */
    orderBy?: ProductLensParamsOrderByWithRelationInput | ProductLensParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductLensParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLensParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLensParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductLensParams
    **/
    _count?: true | ProductLensParamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductLensParamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductLensParamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductLensParamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductLensParamsMaxAggregateInputType
  }

  export type GetProductLensParamsAggregateType<T extends ProductLensParamsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductLensParams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductLensParams[P]>
      : GetScalarType<T[P], AggregateProductLensParams[P]>
  }




  export type ProductLensParamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductLensParamsWhereInput
    orderBy?: ProductLensParamsOrderByWithAggregationInput | ProductLensParamsOrderByWithAggregationInput[]
    by: ProductLensParamsScalarFieldEnum[] | ProductLensParamsScalarFieldEnum
    having?: ProductLensParamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductLensParamsCountAggregateInputType | true
    _avg?: ProductLensParamsAvgAggregateInputType
    _sum?: ProductLensParamsSumAggregateInputType
    _min?: ProductLensParamsMinAggregateInputType
    _max?: ProductLensParamsMaxAggregateInputType
  }

  export type ProductLensParamsGroupByOutputType = {
    productId: number
    index: number | null
    diameter: number | null
    _count: ProductLensParamsCountAggregateOutputType | null
    _avg: ProductLensParamsAvgAggregateOutputType | null
    _sum: ProductLensParamsSumAggregateOutputType | null
    _min: ProductLensParamsMinAggregateOutputType | null
    _max: ProductLensParamsMaxAggregateOutputType | null
  }

  type GetProductLensParamsGroupByPayload<T extends ProductLensParamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductLensParamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductLensParamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductLensParamsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductLensParamsGroupByOutputType[P]>
        }
      >
    >


  export type ProductLensParamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    index?: boolean
    diameter?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productLensParams"]>

  export type ProductLensParamsSelectScalar = {
    productId?: boolean
    index?: boolean
    diameter?: boolean
  }

  export type ProductLensParamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ProductLensParamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductLensParams"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      index: number | null
      diameter: number | null
    }, ExtArgs["result"]["productLensParams"]>
    composites: {}
  }


  type ProductLensParamsGetPayload<S extends boolean | null | undefined | ProductLensParamsDefaultArgs> = $Result.GetResult<Prisma.$ProductLensParamsPayload, S>

  type ProductLensParamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductLensParamsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductLensParamsCountAggregateInputType | true
    }

  export interface ProductLensParamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductLensParams'], meta: { name: 'ProductLensParams' } }
    /**
     * Find zero or one ProductLensParams that matches the filter.
     * @param {ProductLensParamsFindUniqueArgs} args - Arguments to find a ProductLensParams
     * @example
     * // Get one ProductLensParams
     * const productLensParams = await prisma.productLensParams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductLensParamsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLensParamsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProductLensParams that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductLensParamsFindUniqueOrThrowArgs} args - Arguments to find a ProductLensParams
     * @example
     * // Get one ProductLensParams
     * const productLensParams = await prisma.productLensParams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductLensParamsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLensParamsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProductLensParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsFindFirstArgs} args - Arguments to find a ProductLensParams
     * @example
     * // Get one ProductLensParams
     * const productLensParams = await prisma.productLensParams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductLensParamsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLensParamsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProductLensParams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsFindFirstOrThrowArgs} args - Arguments to find a ProductLensParams
     * @example
     * // Get one ProductLensParams
     * const productLensParams = await prisma.productLensParams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductLensParamsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLensParamsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProductLensParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductLensParams
     * const productLensParams = await prisma.productLensParams.findMany()
     * 
     * // Get first 10 ProductLensParams
     * const productLensParams = await prisma.productLensParams.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productLensParamsWithProductIdOnly = await prisma.productLensParams.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductLensParamsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLensParamsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProductLensParams.
     * @param {ProductLensParamsCreateArgs} args - Arguments to create a ProductLensParams.
     * @example
     * // Create one ProductLensParams
     * const ProductLensParams = await prisma.productLensParams.create({
     *   data: {
     *     // ... data to create a ProductLensParams
     *   }
     * })
     * 
    **/
    create<T extends ProductLensParamsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLensParamsCreateArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProductLensParams.
     *     @param {ProductLensParamsCreateManyArgs} args - Arguments to create many ProductLensParams.
     *     @example
     *     // Create many ProductLensParams
     *     const productLensParams = await prisma.productLensParams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductLensParamsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLensParamsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductLensParams.
     * @param {ProductLensParamsDeleteArgs} args - Arguments to delete one ProductLensParams.
     * @example
     * // Delete one ProductLensParams
     * const ProductLensParams = await prisma.productLensParams.delete({
     *   where: {
     *     // ... filter to delete one ProductLensParams
     *   }
     * })
     * 
    **/
    delete<T extends ProductLensParamsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLensParamsDeleteArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProductLensParams.
     * @param {ProductLensParamsUpdateArgs} args - Arguments to update one ProductLensParams.
     * @example
     * // Update one ProductLensParams
     * const productLensParams = await prisma.productLensParams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductLensParamsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLensParamsUpdateArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProductLensParams.
     * @param {ProductLensParamsDeleteManyArgs} args - Arguments to filter ProductLensParams to delete.
     * @example
     * // Delete a few ProductLensParams
     * const { count } = await prisma.productLensParams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductLensParamsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductLensParamsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductLensParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductLensParams
     * const productLensParams = await prisma.productLensParams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductLensParamsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLensParamsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductLensParams.
     * @param {ProductLensParamsUpsertArgs} args - Arguments to update or create a ProductLensParams.
     * @example
     * // Update or create a ProductLensParams
     * const productLensParams = await prisma.productLensParams.upsert({
     *   create: {
     *     // ... data to create a ProductLensParams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductLensParams we want to update
     *   }
     * })
    **/
    upsert<T extends ProductLensParamsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductLensParamsUpsertArgs<ExtArgs>>
    ): Prisma__ProductLensParamsClient<$Result.GetResult<Prisma.$ProductLensParamsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProductLensParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsCountArgs} args - Arguments to filter ProductLensParams to count.
     * @example
     * // Count the number of ProductLensParams
     * const count = await prisma.productLensParams.count({
     *   where: {
     *     // ... the filter for the ProductLensParams we want to count
     *   }
     * })
    **/
    count<T extends ProductLensParamsCountArgs>(
      args?: Subset<T, ProductLensParamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductLensParamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductLensParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductLensParamsAggregateArgs>(args: Subset<T, ProductLensParamsAggregateArgs>): Prisma.PrismaPromise<GetProductLensParamsAggregateType<T>>

    /**
     * Group by ProductLensParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductLensParamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductLensParamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductLensParamsGroupByArgs['orderBy'] }
        : { orderBy?: ProductLensParamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductLensParamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductLensParamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductLensParams model
   */
  readonly fields: ProductLensParamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductLensParams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductLensParamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProductLensParams model
   */ 
  interface ProductLensParamsFieldRefs {
    readonly productId: FieldRef<"ProductLensParams", 'Int'>
    readonly index: FieldRef<"ProductLensParams", 'Float'>
    readonly diameter: FieldRef<"ProductLensParams", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ProductLensParams findUnique
   */
  export type ProductLensParamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductLensParams to fetch.
     */
    where: ProductLensParamsWhereUniqueInput
  }


  /**
   * ProductLensParams findUniqueOrThrow
   */
  export type ProductLensParamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductLensParams to fetch.
     */
    where: ProductLensParamsWhereUniqueInput
  }


  /**
   * ProductLensParams findFirst
   */
  export type ProductLensParamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductLensParams to fetch.
     */
    where?: ProductLensParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLensParams to fetch.
     */
    orderBy?: ProductLensParamsOrderByWithRelationInput | ProductLensParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductLensParams.
     */
    cursor?: ProductLensParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLensParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLensParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductLensParams.
     */
    distinct?: ProductLensParamsScalarFieldEnum | ProductLensParamsScalarFieldEnum[]
  }


  /**
   * ProductLensParams findFirstOrThrow
   */
  export type ProductLensParamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductLensParams to fetch.
     */
    where?: ProductLensParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLensParams to fetch.
     */
    orderBy?: ProductLensParamsOrderByWithRelationInput | ProductLensParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductLensParams.
     */
    cursor?: ProductLensParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLensParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLensParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductLensParams.
     */
    distinct?: ProductLensParamsScalarFieldEnum | ProductLensParamsScalarFieldEnum[]
  }


  /**
   * ProductLensParams findMany
   */
  export type ProductLensParamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * Filter, which ProductLensParams to fetch.
     */
    where?: ProductLensParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductLensParams to fetch.
     */
    orderBy?: ProductLensParamsOrderByWithRelationInput | ProductLensParamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductLensParams.
     */
    cursor?: ProductLensParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductLensParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductLensParams.
     */
    skip?: number
    distinct?: ProductLensParamsScalarFieldEnum | ProductLensParamsScalarFieldEnum[]
  }


  /**
   * ProductLensParams create
   */
  export type ProductLensParamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductLensParams.
     */
    data: XOR<ProductLensParamsCreateInput, ProductLensParamsUncheckedCreateInput>
  }


  /**
   * ProductLensParams createMany
   */
  export type ProductLensParamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductLensParams.
     */
    data: ProductLensParamsCreateManyInput | ProductLensParamsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProductLensParams update
   */
  export type ProductLensParamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductLensParams.
     */
    data: XOR<ProductLensParamsUpdateInput, ProductLensParamsUncheckedUpdateInput>
    /**
     * Choose, which ProductLensParams to update.
     */
    where: ProductLensParamsWhereUniqueInput
  }


  /**
   * ProductLensParams updateMany
   */
  export type ProductLensParamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductLensParams.
     */
    data: XOR<ProductLensParamsUpdateManyMutationInput, ProductLensParamsUncheckedUpdateManyInput>
    /**
     * Filter which ProductLensParams to update
     */
    where?: ProductLensParamsWhereInput
  }


  /**
   * ProductLensParams upsert
   */
  export type ProductLensParamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductLensParams to update in case it exists.
     */
    where: ProductLensParamsWhereUniqueInput
    /**
     * In case the ProductLensParams found by the `where` argument doesn't exist, create a new ProductLensParams with this data.
     */
    create: XOR<ProductLensParamsCreateInput, ProductLensParamsUncheckedCreateInput>
    /**
     * In case the ProductLensParams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductLensParamsUpdateInput, ProductLensParamsUncheckedUpdateInput>
  }


  /**
   * ProductLensParams delete
   */
  export type ProductLensParamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
    /**
     * Filter which ProductLensParams to delete.
     */
    where: ProductLensParamsWhereUniqueInput
  }


  /**
   * ProductLensParams deleteMany
   */
  export type ProductLensParamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductLensParams to delete
     */
    where?: ProductLensParamsWhereInput
  }


  /**
   * ProductLensParams without action
   */
  export type ProductLensParamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLensParams
     */
    select?: ProductLensParamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductLensParamsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Const_CompanyNameScalarFieldEnum: {
    singular: 'singular',
    date: 'date',
    value: 'value'
  };

  export type Const_CompanyNameScalarFieldEnum = (typeof Const_CompanyNameScalarFieldEnum)[keyof typeof Const_CompanyNameScalarFieldEnum]


  export const Const_AccountantScalarFieldEnum: {
    date: 'date',
    employeeId: 'employeeId'
  };

  export type Const_AccountantScalarFieldEnum = (typeof Const_AccountantScalarFieldEnum)[keyof typeof Const_AccountantScalarFieldEnum]


  export const ColorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const RimShapeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RimShapeScalarFieldEnum = (typeof RimShapeScalarFieldEnum)[keyof typeof RimShapeScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    isFolder: 'isFolder',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    isFolder: 'isFolder',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    isFolder: 'isFolder',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductAppearanceScalarFieldEnum: {
    productId: 'productId',
    colorId: 'colorId',
    weight: 'weight'
  };

  export type ProductAppearanceScalarFieldEnum = (typeof ProductAppearanceScalarFieldEnum)[keyof typeof ProductAppearanceScalarFieldEnum]


  export const ProductRimParamsScalarFieldEnum: {
    productId: 'productId',
    bridge: 'bridge',
    temple: 'temple',
    width: 'width',
    height: 'height',
    shapeId: 'shapeId'
  };

  export type ProductRimParamsScalarFieldEnum = (typeof ProductRimParamsScalarFieldEnum)[keyof typeof ProductRimParamsScalarFieldEnum]


  export const ProductLensParamsScalarFieldEnum: {
    productId: 'productId',
    index: 'index',
    diameter: 'diameter'
  };

  export type ProductLensParamsScalarFieldEnum = (typeof ProductLensParamsScalarFieldEnum)[keyof typeof ProductLensParamsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'SingularValue'
   */
  export type EnumSingularValueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SingularValue'>
    


  /**
   * Reference to a field of type 'SingularValue[]'
   */
  export type ListEnumSingularValueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SingularValue[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type const_CompanyNameWhereInput = {
    AND?: const_CompanyNameWhereInput | const_CompanyNameWhereInput[]
    OR?: const_CompanyNameWhereInput[]
    NOT?: const_CompanyNameWhereInput | const_CompanyNameWhereInput[]
    singular?: EnumSingularValueFilter<"const_CompanyName"> | $Enums.SingularValue
    date?: DateTimeFilter<"const_CompanyName"> | Date | string
    value?: StringNullableFilter<"const_CompanyName"> | string | null
  }

  export type const_CompanyNameOrderByWithRelationInput = {
    singular?: SortOrder
    date?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type const_CompanyNameWhereUniqueInput = Prisma.AtLeast<{
    singular?: $Enums.SingularValue
    date?: Date | string
    AND?: const_CompanyNameWhereInput | const_CompanyNameWhereInput[]
    OR?: const_CompanyNameWhereInput[]
    NOT?: const_CompanyNameWhereInput | const_CompanyNameWhereInput[]
    value?: StringNullableFilter<"const_CompanyName"> | string | null
  }, "singular" | "date">

  export type const_CompanyNameOrderByWithAggregationInput = {
    singular?: SortOrder
    date?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: const_CompanyNameCountOrderByAggregateInput
    _max?: const_CompanyNameMaxOrderByAggregateInput
    _min?: const_CompanyNameMinOrderByAggregateInput
  }

  export type const_CompanyNameScalarWhereWithAggregatesInput = {
    AND?: const_CompanyNameScalarWhereWithAggregatesInput | const_CompanyNameScalarWhereWithAggregatesInput[]
    OR?: const_CompanyNameScalarWhereWithAggregatesInput[]
    NOT?: const_CompanyNameScalarWhereWithAggregatesInput | const_CompanyNameScalarWhereWithAggregatesInput[]
    singular?: EnumSingularValueWithAggregatesFilter<"const_CompanyName"> | $Enums.SingularValue
    date?: DateTimeWithAggregatesFilter<"const_CompanyName"> | Date | string
    value?: StringNullableWithAggregatesFilter<"const_CompanyName"> | string | null
  }

  export type const_AccountantWhereInput = {
    AND?: const_AccountantWhereInput | const_AccountantWhereInput[]
    OR?: const_AccountantWhereInput[]
    NOT?: const_AccountantWhereInput | const_AccountantWhereInput[]
    date?: DateTimeFilter<"const_Accountant"> | Date | string
    employeeId?: IntNullableFilter<"const_Accountant"> | number | null
    value?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
  }

  export type const_AccountantOrderByWithRelationInput = {
    date?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    value?: EmployeeOrderByWithRelationInput
  }

  export type const_AccountantWhereUniqueInput = Prisma.AtLeast<{
    date?: Date | string
    AND?: const_AccountantWhereInput | const_AccountantWhereInput[]
    OR?: const_AccountantWhereInput[]
    NOT?: const_AccountantWhereInput | const_AccountantWhereInput[]
    employeeId?: IntNullableFilter<"const_Accountant"> | number | null
    value?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
  }, "date">

  export type const_AccountantOrderByWithAggregationInput = {
    date?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    _count?: const_AccountantCountOrderByAggregateInput
    _avg?: const_AccountantAvgOrderByAggregateInput
    _max?: const_AccountantMaxOrderByAggregateInput
    _min?: const_AccountantMinOrderByAggregateInput
    _sum?: const_AccountantSumOrderByAggregateInput
  }

  export type const_AccountantScalarWhereWithAggregatesInput = {
    AND?: const_AccountantScalarWhereWithAggregatesInput | const_AccountantScalarWhereWithAggregatesInput[]
    OR?: const_AccountantScalarWhereWithAggregatesInput[]
    NOT?: const_AccountantScalarWhereWithAggregatesInput | const_AccountantScalarWhereWithAggregatesInput[]
    date?: DateTimeWithAggregatesFilter<"const_Accountant"> | Date | string
    employeeId?: IntNullableWithAggregatesFilter<"const_Accountant"> | number | null
  }

  export type ColorWhereInput = {
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    id?: IntFilter<"Color"> | number
    name?: StringFilter<"Color"> | string
    createdAt?: DateTimeFilter<"Color"> | Date | string
    updatedAt?: DateTimeFilter<"Color"> | Date | string
    ProductAppearance?: ProductAppearanceListRelationFilter
  }

  export type ColorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ProductAppearance?: ProductAppearanceOrderByRelationAggregateInput
  }

  export type ColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    name?: StringFilter<"Color"> | string
    createdAt?: DateTimeFilter<"Color"> | Date | string
    updatedAt?: DateTimeFilter<"Color"> | Date | string
    ProductAppearance?: ProductAppearanceListRelationFilter
  }, "id">

  export type ColorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColorCountOrderByAggregateInput
    _avg?: ColorAvgOrderByAggregateInput
    _max?: ColorMaxOrderByAggregateInput
    _min?: ColorMinOrderByAggregateInput
    _sum?: ColorSumOrderByAggregateInput
  }

  export type ColorScalarWhereWithAggregatesInput = {
    AND?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    OR?: ColorScalarWhereWithAggregatesInput[]
    NOT?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Color"> | number
    name?: StringWithAggregatesFilter<"Color"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Color"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Color"> | Date | string
  }

  export type RimShapeWhereInput = {
    AND?: RimShapeWhereInput | RimShapeWhereInput[]
    OR?: RimShapeWhereInput[]
    NOT?: RimShapeWhereInput | RimShapeWhereInput[]
    id?: IntFilter<"RimShape"> | number
    name?: StringFilter<"RimShape"> | string
    createdAt?: DateTimeFilter<"RimShape"> | Date | string
    updatedAt?: DateTimeFilter<"RimShape"> | Date | string
    ProductRimParams?: ProductRimParamsListRelationFilter
  }

  export type RimShapeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ProductRimParams?: ProductRimParamsOrderByRelationAggregateInput
  }

  export type RimShapeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RimShapeWhereInput | RimShapeWhereInput[]
    OR?: RimShapeWhereInput[]
    NOT?: RimShapeWhereInput | RimShapeWhereInput[]
    name?: StringFilter<"RimShape"> | string
    createdAt?: DateTimeFilter<"RimShape"> | Date | string
    updatedAt?: DateTimeFilter<"RimShape"> | Date | string
    ProductRimParams?: ProductRimParamsListRelationFilter
  }, "id">

  export type RimShapeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RimShapeCountOrderByAggregateInput
    _avg?: RimShapeAvgOrderByAggregateInput
    _max?: RimShapeMaxOrderByAggregateInput
    _min?: RimShapeMinOrderByAggregateInput
    _sum?: RimShapeSumOrderByAggregateInput
  }

  export type RimShapeScalarWhereWithAggregatesInput = {
    AND?: RimShapeScalarWhereWithAggregatesInput | RimShapeScalarWhereWithAggregatesInput[]
    OR?: RimShapeScalarWhereWithAggregatesInput[]
    NOT?: RimShapeScalarWhereWithAggregatesInput | RimShapeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RimShape"> | number
    name?: StringWithAggregatesFilter<"RimShape"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RimShape"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RimShape"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    parentId?: IntNullableFilter<"Employee"> | number | null
    isFolder?: BoolFilter<"Employee"> | boolean
    name?: StringFilter<"Employee"> | string
    description?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    parent?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
    children?: EmployeeListRelationFilter
    const_Accountant?: Const_AccountantListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: EmployeeOrderByWithRelationInput
    children?: EmployeeOrderByRelationAggregateInput
    const_Accountant?: const_AccountantOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    parentId?: IntNullableFilter<"Employee"> | number | null
    isFolder?: BoolFilter<"Employee"> | boolean
    name?: StringFilter<"Employee"> | string
    description?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    parent?: XOR<EmployeeNullableRelationFilter, EmployeeWhereInput> | null
    children?: EmployeeListRelationFilter
    const_Accountant?: Const_AccountantListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    parentId?: IntNullableWithAggregatesFilter<"Employee"> | number | null
    isFolder?: BoolWithAggregatesFilter<"Employee"> | boolean
    name?: StringWithAggregatesFilter<"Employee"> | string
    description?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: IntFilter<"Partner"> | number
    parentId?: IntNullableFilter<"Partner"> | number | null
    isFolder?: BoolFilter<"Partner"> | boolean
    name?: StringFilter<"Partner"> | string
    description?: StringNullableFilter<"Partner"> | string | null
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
    parent?: XOR<PartnerNullableRelationFilter, PartnerWhereInput> | null
    children?: PartnerListRelationFilter
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: PartnerOrderByWithRelationInput
    children?: PartnerOrderByRelationAggregateInput
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    parentId?: IntNullableFilter<"Partner"> | number | null
    isFolder?: BoolFilter<"Partner"> | boolean
    name?: StringFilter<"Partner"> | string
    description?: StringNullableFilter<"Partner"> | string | null
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
    parent?: XOR<PartnerNullableRelationFilter, PartnerWhereInput> | null
    children?: PartnerListRelationFilter
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _avg?: PartnerAvgOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
    _sum?: PartnerSumOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partner"> | number
    parentId?: IntNullableWithAggregatesFilter<"Partner"> | number | null
    isFolder?: BoolWithAggregatesFilter<"Partner"> | boolean
    name?: StringWithAggregatesFilter<"Partner"> | string
    description?: StringNullableWithAggregatesFilter<"Partner"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    parentId?: IntNullableFilter<"Product"> | number | null
    isFolder?: BoolFilter<"Product"> | boolean
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    parent?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    children?: ProductListRelationFilter
    appearance?: XOR<ProductAppearanceNullableRelationFilter, ProductAppearanceWhereInput> | null
    rimParams?: XOR<ProductRimParamsNullableRelationFilter, ProductRimParamsWhereInput> | null
    lensParams?: XOR<ProductLensParamsNullableRelationFilter, ProductLensParamsWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: ProductOrderByWithRelationInput
    children?: ProductOrderByRelationAggregateInput
    appearance?: ProductAppearanceOrderByWithRelationInput
    rimParams?: ProductRimParamsOrderByWithRelationInput
    lensParams?: ProductLensParamsOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    parentId?: IntNullableFilter<"Product"> | number | null
    isFolder?: BoolFilter<"Product"> | boolean
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    parent?: XOR<ProductNullableRelationFilter, ProductWhereInput> | null
    children?: ProductListRelationFilter
    appearance?: XOR<ProductAppearanceNullableRelationFilter, ProductAppearanceWhereInput> | null
    rimParams?: XOR<ProductRimParamsNullableRelationFilter, ProductRimParamsWhereInput> | null
    lensParams?: XOR<ProductLensParamsNullableRelationFilter, ProductLensParamsWhereInput> | null
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    parentId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    isFolder?: BoolWithAggregatesFilter<"Product"> | boolean
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductAppearanceWhereInput = {
    AND?: ProductAppearanceWhereInput | ProductAppearanceWhereInput[]
    OR?: ProductAppearanceWhereInput[]
    NOT?: ProductAppearanceWhereInput | ProductAppearanceWhereInput[]
    productId?: IntFilter<"ProductAppearance"> | number
    colorId?: IntNullableFilter<"ProductAppearance"> | number | null
    weight?: IntNullableFilter<"ProductAppearance"> | number | null
    color?: XOR<ColorNullableRelationFilter, ColorWhereInput> | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductAppearanceOrderByWithRelationInput = {
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    color?: ColorOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductAppearanceWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    AND?: ProductAppearanceWhereInput | ProductAppearanceWhereInput[]
    OR?: ProductAppearanceWhereInput[]
    NOT?: ProductAppearanceWhereInput | ProductAppearanceWhereInput[]
    colorId?: IntNullableFilter<"ProductAppearance"> | number | null
    weight?: IntNullableFilter<"ProductAppearance"> | number | null
    color?: XOR<ColorNullableRelationFilter, ColorWhereInput> | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "productId">

  export type ProductAppearanceOrderByWithAggregationInput = {
    productId?: SortOrder
    colorId?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    _count?: ProductAppearanceCountOrderByAggregateInput
    _avg?: ProductAppearanceAvgOrderByAggregateInput
    _max?: ProductAppearanceMaxOrderByAggregateInput
    _min?: ProductAppearanceMinOrderByAggregateInput
    _sum?: ProductAppearanceSumOrderByAggregateInput
  }

  export type ProductAppearanceScalarWhereWithAggregatesInput = {
    AND?: ProductAppearanceScalarWhereWithAggregatesInput | ProductAppearanceScalarWhereWithAggregatesInput[]
    OR?: ProductAppearanceScalarWhereWithAggregatesInput[]
    NOT?: ProductAppearanceScalarWhereWithAggregatesInput | ProductAppearanceScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductAppearance"> | number
    colorId?: IntNullableWithAggregatesFilter<"ProductAppearance"> | number | null
    weight?: IntNullableWithAggregatesFilter<"ProductAppearance"> | number | null
  }

  export type ProductRimParamsWhereInput = {
    AND?: ProductRimParamsWhereInput | ProductRimParamsWhereInput[]
    OR?: ProductRimParamsWhereInput[]
    NOT?: ProductRimParamsWhereInput | ProductRimParamsWhereInput[]
    productId?: IntFilter<"ProductRimParams"> | number
    bridge?: IntNullableFilter<"ProductRimParams"> | number | null
    temple?: IntNullableFilter<"ProductRimParams"> | number | null
    width?: IntNullableFilter<"ProductRimParams"> | number | null
    height?: IntNullableFilter<"ProductRimParams"> | number | null
    shapeId?: IntNullableFilter<"ProductRimParams"> | number | null
    shape?: XOR<RimShapeNullableRelationFilter, RimShapeWhereInput> | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductRimParamsOrderByWithRelationInput = {
    productId?: SortOrder
    bridge?: SortOrderInput | SortOrder
    temple?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    shapeId?: SortOrderInput | SortOrder
    shape?: RimShapeOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductRimParamsWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    AND?: ProductRimParamsWhereInput | ProductRimParamsWhereInput[]
    OR?: ProductRimParamsWhereInput[]
    NOT?: ProductRimParamsWhereInput | ProductRimParamsWhereInput[]
    bridge?: IntNullableFilter<"ProductRimParams"> | number | null
    temple?: IntNullableFilter<"ProductRimParams"> | number | null
    width?: IntNullableFilter<"ProductRimParams"> | number | null
    height?: IntNullableFilter<"ProductRimParams"> | number | null
    shapeId?: IntNullableFilter<"ProductRimParams"> | number | null
    shape?: XOR<RimShapeNullableRelationFilter, RimShapeWhereInput> | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "productId">

  export type ProductRimParamsOrderByWithAggregationInput = {
    productId?: SortOrder
    bridge?: SortOrderInput | SortOrder
    temple?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    shapeId?: SortOrderInput | SortOrder
    _count?: ProductRimParamsCountOrderByAggregateInput
    _avg?: ProductRimParamsAvgOrderByAggregateInput
    _max?: ProductRimParamsMaxOrderByAggregateInput
    _min?: ProductRimParamsMinOrderByAggregateInput
    _sum?: ProductRimParamsSumOrderByAggregateInput
  }

  export type ProductRimParamsScalarWhereWithAggregatesInput = {
    AND?: ProductRimParamsScalarWhereWithAggregatesInput | ProductRimParamsScalarWhereWithAggregatesInput[]
    OR?: ProductRimParamsScalarWhereWithAggregatesInput[]
    NOT?: ProductRimParamsScalarWhereWithAggregatesInput | ProductRimParamsScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductRimParams"> | number
    bridge?: IntNullableWithAggregatesFilter<"ProductRimParams"> | number | null
    temple?: IntNullableWithAggregatesFilter<"ProductRimParams"> | number | null
    width?: IntNullableWithAggregatesFilter<"ProductRimParams"> | number | null
    height?: IntNullableWithAggregatesFilter<"ProductRimParams"> | number | null
    shapeId?: IntNullableWithAggregatesFilter<"ProductRimParams"> | number | null
  }

  export type ProductLensParamsWhereInput = {
    AND?: ProductLensParamsWhereInput | ProductLensParamsWhereInput[]
    OR?: ProductLensParamsWhereInput[]
    NOT?: ProductLensParamsWhereInput | ProductLensParamsWhereInput[]
    productId?: IntFilter<"ProductLensParams"> | number
    index?: FloatNullableFilter<"ProductLensParams"> | number | null
    diameter?: IntNullableFilter<"ProductLensParams"> | number | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ProductLensParamsOrderByWithRelationInput = {
    productId?: SortOrder
    index?: SortOrderInput | SortOrder
    diameter?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductLensParamsWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    AND?: ProductLensParamsWhereInput | ProductLensParamsWhereInput[]
    OR?: ProductLensParamsWhereInput[]
    NOT?: ProductLensParamsWhereInput | ProductLensParamsWhereInput[]
    index?: FloatNullableFilter<"ProductLensParams"> | number | null
    diameter?: IntNullableFilter<"ProductLensParams"> | number | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "productId">

  export type ProductLensParamsOrderByWithAggregationInput = {
    productId?: SortOrder
    index?: SortOrderInput | SortOrder
    diameter?: SortOrderInput | SortOrder
    _count?: ProductLensParamsCountOrderByAggregateInput
    _avg?: ProductLensParamsAvgOrderByAggregateInput
    _max?: ProductLensParamsMaxOrderByAggregateInput
    _min?: ProductLensParamsMinOrderByAggregateInput
    _sum?: ProductLensParamsSumOrderByAggregateInput
  }

  export type ProductLensParamsScalarWhereWithAggregatesInput = {
    AND?: ProductLensParamsScalarWhereWithAggregatesInput | ProductLensParamsScalarWhereWithAggregatesInput[]
    OR?: ProductLensParamsScalarWhereWithAggregatesInput[]
    NOT?: ProductLensParamsScalarWhereWithAggregatesInput | ProductLensParamsScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"ProductLensParams"> | number
    index?: FloatNullableWithAggregatesFilter<"ProductLensParams"> | number | null
    diameter?: IntNullableWithAggregatesFilter<"ProductLensParams"> | number | null
  }

  export type const_CompanyNameCreateInput = {
    singular?: $Enums.SingularValue
    date?: Date | string
    value?: string | null
  }

  export type const_CompanyNameUncheckedCreateInput = {
    singular?: $Enums.SingularValue
    date?: Date | string
    value?: string | null
  }

  export type const_CompanyNameUpdateInput = {
    singular?: EnumSingularValueFieldUpdateOperationsInput | $Enums.SingularValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type const_CompanyNameUncheckedUpdateInput = {
    singular?: EnumSingularValueFieldUpdateOperationsInput | $Enums.SingularValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type const_CompanyNameCreateManyInput = {
    singular?: $Enums.SingularValue
    date?: Date | string
    value?: string | null
  }

  export type const_CompanyNameUpdateManyMutationInput = {
    singular?: EnumSingularValueFieldUpdateOperationsInput | $Enums.SingularValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type const_CompanyNameUncheckedUpdateManyInput = {
    singular?: EnumSingularValueFieldUpdateOperationsInput | $Enums.SingularValue
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type const_AccountantCreateInput = {
    date?: Date | string
    value?: EmployeeCreateNestedOneWithoutConst_AccountantInput
  }

  export type const_AccountantUncheckedCreateInput = {
    date?: Date | string
    employeeId?: number | null
  }

  export type const_AccountantUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    value?: EmployeeUpdateOneWithoutConst_AccountantNestedInput
  }

  export type const_AccountantUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type const_AccountantCreateManyInput = {
    date?: Date | string
    employeeId?: number | null
  }

  export type const_AccountantUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type const_AccountantUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ColorCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductAppearance?: ProductAppearanceCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductAppearance?: ProductAppearanceUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductAppearance?: ProductAppearanceUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductAppearance?: ProductAppearanceUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ColorCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RimShapeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductRimParams?: ProductRimParamsCreateNestedManyWithoutShapeInput
  }

  export type RimShapeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ProductRimParams?: ProductRimParamsUncheckedCreateNestedManyWithoutShapeInput
  }

  export type RimShapeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductRimParams?: ProductRimParamsUpdateManyWithoutShapeNestedInput
  }

  export type RimShapeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ProductRimParams?: ProductRimParamsUncheckedUpdateManyWithoutShapeNestedInput
  }

  export type RimShapeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RimShapeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RimShapeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
    const_Accountant?: const_AccountantCreateNestedManyWithoutValueInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    const_Accountant?: const_AccountantUncheckedCreateNestedManyWithoutValueInput
  }

  export type EmployeeUpdateInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
    const_Accountant?: const_AccountantUpdateManyWithoutValueNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    const_Accountant?: const_AccountantUncheckedUpdateManyWithoutValueNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PartnerCreateNestedOneWithoutChildrenInput
    children?: PartnerCreateNestedManyWithoutParentInput
  }

  export type PartnerUncheckedCreateInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PartnerUncheckedCreateNestedManyWithoutParentInput
  }

  export type PartnerUpdateInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PartnerUpdateOneWithoutChildrenNestedInput
    children?: PartnerUpdateManyWithoutParentNestedInput
  }

  export type PartnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PartnerUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PartnerCreateManyInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateManyMutationInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ProductCreateNestedOneWithoutChildrenInput
    children?: ProductCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ProductUncheckedCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceUncheckedCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsUncheckedCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductUpdateInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ProductUpdateOneWithoutChildrenNestedInput
    children?: ProductUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ProductUncheckedUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUncheckedUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUncheckedUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAppearanceCreateInput = {
    weight?: number | null
    color?: ColorCreateNestedOneWithoutProductAppearanceInput
    product: ProductCreateNestedOneWithoutAppearanceInput
  }

  export type ProductAppearanceUncheckedCreateInput = {
    productId: number
    colorId?: number | null
    weight?: number | null
  }

  export type ProductAppearanceUpdateInput = {
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    color?: ColorUpdateOneWithoutProductAppearanceNestedInput
    product?: ProductUpdateOneRequiredWithoutAppearanceNestedInput
  }

  export type ProductAppearanceUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductAppearanceCreateManyInput = {
    productId: number
    colorId?: number | null
    weight?: number | null
  }

  export type ProductAppearanceUpdateManyMutationInput = {
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductAppearanceUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRimParamsCreateInput = {
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
    shape?: RimShapeCreateNestedOneWithoutProductRimParamsInput
    product: ProductCreateNestedOneWithoutRimParamsInput
  }

  export type ProductRimParamsUncheckedCreateInput = {
    productId: number
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
    shapeId?: number | null
  }

  export type ProductRimParamsUpdateInput = {
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    shape?: RimShapeUpdateOneWithoutProductRimParamsNestedInput
    product?: ProductUpdateOneRequiredWithoutRimParamsNestedInput
  }

  export type ProductRimParamsUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    shapeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRimParamsCreateManyInput = {
    productId: number
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
    shapeId?: number | null
  }

  export type ProductRimParamsUpdateManyMutationInput = {
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRimParamsUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    shapeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductLensParamsCreateInput = {
    index?: number | null
    diameter?: number | null
    product: ProductCreateNestedOneWithoutLensParamsInput
  }

  export type ProductLensParamsUncheckedCreateInput = {
    productId: number
    index?: number | null
    diameter?: number | null
  }

  export type ProductLensParamsUpdateInput = {
    index?: NullableFloatFieldUpdateOperationsInput | number | null
    diameter?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutLensParamsNestedInput
  }

  export type ProductLensParamsUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    index?: NullableFloatFieldUpdateOperationsInput | number | null
    diameter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductLensParamsCreateManyInput = {
    productId: number
    index?: number | null
    diameter?: number | null
  }

  export type ProductLensParamsUpdateManyMutationInput = {
    index?: NullableFloatFieldUpdateOperationsInput | number | null
    diameter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductLensParamsUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    index?: NullableFloatFieldUpdateOperationsInput | number | null
    diameter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EnumSingularValueFilter<$PrismaModel = never> = {
    equals?: $Enums.SingularValue | EnumSingularValueFieldRefInput<$PrismaModel>
    in?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    not?: NestedEnumSingularValueFilter<$PrismaModel> | $Enums.SingularValue
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type const_CompanyNameCountOrderByAggregateInput = {
    singular?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type const_CompanyNameMaxOrderByAggregateInput = {
    singular?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type const_CompanyNameMinOrderByAggregateInput = {
    singular?: SortOrder
    date?: SortOrder
    value?: SortOrder
  }

  export type EnumSingularValueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SingularValue | EnumSingularValueFieldRefInput<$PrismaModel>
    in?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    not?: NestedEnumSingularValueWithAggregatesFilter<$PrismaModel> | $Enums.SingularValue
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSingularValueFilter<$PrismaModel>
    _max?: NestedEnumSingularValueFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeeNullableRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type const_AccountantCountOrderByAggregateInput = {
    date?: SortOrder
    employeeId?: SortOrder
  }

  export type const_AccountantAvgOrderByAggregateInput = {
    employeeId?: SortOrder
  }

  export type const_AccountantMaxOrderByAggregateInput = {
    date?: SortOrder
    employeeId?: SortOrder
  }

  export type const_AccountantMinOrderByAggregateInput = {
    date?: SortOrder
    employeeId?: SortOrder
  }

  export type const_AccountantSumOrderByAggregateInput = {
    employeeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductAppearanceListRelationFilter = {
    every?: ProductAppearanceWhereInput
    some?: ProductAppearanceWhereInput
    none?: ProductAppearanceWhereInput
  }

  export type ProductAppearanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProductRimParamsListRelationFilter = {
    every?: ProductRimParamsWhereInput
    some?: ProductRimParamsWhereInput
    none?: ProductRimParamsWhereInput
  }

  export type ProductRimParamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RimShapeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RimShapeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RimShapeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RimShapeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RimShapeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type Const_AccountantListRelationFilter = {
    every?: const_AccountantWhereInput
    some?: const_AccountantWhereInput
    none?: const_AccountantWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type const_AccountantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PartnerNullableRelationFilter = {
    is?: PartnerWhereInput | null
    isNot?: PartnerWhereInput | null
  }

  export type PartnerListRelationFilter = {
    every?: PartnerWhereInput
    some?: PartnerWhereInput
    none?: PartnerWhereInput
  }

  export type PartnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type ProductNullableRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductAppearanceNullableRelationFilter = {
    is?: ProductAppearanceWhereInput | null
    isNot?: ProductAppearanceWhereInput | null
  }

  export type ProductRimParamsNullableRelationFilter = {
    is?: ProductRimParamsWhereInput | null
    isNot?: ProductRimParamsWhereInput | null
  }

  export type ProductLensParamsNullableRelationFilter = {
    is?: ProductLensParamsWhereInput | null
    isNot?: ProductLensParamsWhereInput | null
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    isFolder?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type ColorNullableRelationFilter = {
    is?: ColorWhereInput | null
    isNot?: ColorWhereInput | null
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductAppearanceCountOrderByAggregateInput = {
    productId?: SortOrder
    colorId?: SortOrder
    weight?: SortOrder
  }

  export type ProductAppearanceAvgOrderByAggregateInput = {
    productId?: SortOrder
    colorId?: SortOrder
    weight?: SortOrder
  }

  export type ProductAppearanceMaxOrderByAggregateInput = {
    productId?: SortOrder
    colorId?: SortOrder
    weight?: SortOrder
  }

  export type ProductAppearanceMinOrderByAggregateInput = {
    productId?: SortOrder
    colorId?: SortOrder
    weight?: SortOrder
  }

  export type ProductAppearanceSumOrderByAggregateInput = {
    productId?: SortOrder
    colorId?: SortOrder
    weight?: SortOrder
  }

  export type RimShapeNullableRelationFilter = {
    is?: RimShapeWhereInput | null
    isNot?: RimShapeWhereInput | null
  }

  export type ProductRimParamsCountOrderByAggregateInput = {
    productId?: SortOrder
    bridge?: SortOrder
    temple?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shapeId?: SortOrder
  }

  export type ProductRimParamsAvgOrderByAggregateInput = {
    productId?: SortOrder
    bridge?: SortOrder
    temple?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shapeId?: SortOrder
  }

  export type ProductRimParamsMaxOrderByAggregateInput = {
    productId?: SortOrder
    bridge?: SortOrder
    temple?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shapeId?: SortOrder
  }

  export type ProductRimParamsMinOrderByAggregateInput = {
    productId?: SortOrder
    bridge?: SortOrder
    temple?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shapeId?: SortOrder
  }

  export type ProductRimParamsSumOrderByAggregateInput = {
    productId?: SortOrder
    bridge?: SortOrder
    temple?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shapeId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductLensParamsCountOrderByAggregateInput = {
    productId?: SortOrder
    index?: SortOrder
    diameter?: SortOrder
  }

  export type ProductLensParamsAvgOrderByAggregateInput = {
    productId?: SortOrder
    index?: SortOrder
    diameter?: SortOrder
  }

  export type ProductLensParamsMaxOrderByAggregateInput = {
    productId?: SortOrder
    index?: SortOrder
    diameter?: SortOrder
  }

  export type ProductLensParamsMinOrderByAggregateInput = {
    productId?: SortOrder
    index?: SortOrder
    diameter?: SortOrder
  }

  export type ProductLensParamsSumOrderByAggregateInput = {
    productId?: SortOrder
    index?: SortOrder
    diameter?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSingularValueFieldUpdateOperationsInput = {
    set?: $Enums.SingularValue
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmployeeCreateNestedOneWithoutConst_AccountantInput = {
    create?: XOR<EmployeeCreateWithoutConst_AccountantInput, EmployeeUncheckedCreateWithoutConst_AccountantInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutConst_AccountantInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneWithoutConst_AccountantNestedInput = {
    create?: XOR<EmployeeCreateWithoutConst_AccountantInput, EmployeeUncheckedCreateWithoutConst_AccountantInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutConst_AccountantInput
    upsert?: EmployeeUpsertWithoutConst_AccountantInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutConst_AccountantInput, EmployeeUpdateWithoutConst_AccountantInput>, EmployeeUncheckedUpdateWithoutConst_AccountantInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductAppearanceCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductAppearanceCreateWithoutColorInput, ProductAppearanceUncheckedCreateWithoutColorInput> | ProductAppearanceCreateWithoutColorInput[] | ProductAppearanceUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutColorInput | ProductAppearanceCreateOrConnectWithoutColorInput[]
    createMany?: ProductAppearanceCreateManyColorInputEnvelope
    connect?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
  }

  export type ProductAppearanceUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductAppearanceCreateWithoutColorInput, ProductAppearanceUncheckedCreateWithoutColorInput> | ProductAppearanceCreateWithoutColorInput[] | ProductAppearanceUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutColorInput | ProductAppearanceCreateOrConnectWithoutColorInput[]
    createMany?: ProductAppearanceCreateManyColorInputEnvelope
    connect?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductAppearanceUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductAppearanceCreateWithoutColorInput, ProductAppearanceUncheckedCreateWithoutColorInput> | ProductAppearanceCreateWithoutColorInput[] | ProductAppearanceUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutColorInput | ProductAppearanceCreateOrConnectWithoutColorInput[]
    upsert?: ProductAppearanceUpsertWithWhereUniqueWithoutColorInput | ProductAppearanceUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductAppearanceCreateManyColorInputEnvelope
    set?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    disconnect?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    delete?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    connect?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    update?: ProductAppearanceUpdateWithWhereUniqueWithoutColorInput | ProductAppearanceUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductAppearanceUpdateManyWithWhereWithoutColorInput | ProductAppearanceUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductAppearanceScalarWhereInput | ProductAppearanceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductAppearanceUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductAppearanceCreateWithoutColorInput, ProductAppearanceUncheckedCreateWithoutColorInput> | ProductAppearanceCreateWithoutColorInput[] | ProductAppearanceUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutColorInput | ProductAppearanceCreateOrConnectWithoutColorInput[]
    upsert?: ProductAppearanceUpsertWithWhereUniqueWithoutColorInput | ProductAppearanceUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductAppearanceCreateManyColorInputEnvelope
    set?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    disconnect?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    delete?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    connect?: ProductAppearanceWhereUniqueInput | ProductAppearanceWhereUniqueInput[]
    update?: ProductAppearanceUpdateWithWhereUniqueWithoutColorInput | ProductAppearanceUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductAppearanceUpdateManyWithWhereWithoutColorInput | ProductAppearanceUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductAppearanceScalarWhereInput | ProductAppearanceScalarWhereInput[]
  }

  export type ProductRimParamsCreateNestedManyWithoutShapeInput = {
    create?: XOR<ProductRimParamsCreateWithoutShapeInput, ProductRimParamsUncheckedCreateWithoutShapeInput> | ProductRimParamsCreateWithoutShapeInput[] | ProductRimParamsUncheckedCreateWithoutShapeInput[]
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutShapeInput | ProductRimParamsCreateOrConnectWithoutShapeInput[]
    createMany?: ProductRimParamsCreateManyShapeInputEnvelope
    connect?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
  }

  export type ProductRimParamsUncheckedCreateNestedManyWithoutShapeInput = {
    create?: XOR<ProductRimParamsCreateWithoutShapeInput, ProductRimParamsUncheckedCreateWithoutShapeInput> | ProductRimParamsCreateWithoutShapeInput[] | ProductRimParamsUncheckedCreateWithoutShapeInput[]
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutShapeInput | ProductRimParamsCreateOrConnectWithoutShapeInput[]
    createMany?: ProductRimParamsCreateManyShapeInputEnvelope
    connect?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
  }

  export type ProductRimParamsUpdateManyWithoutShapeNestedInput = {
    create?: XOR<ProductRimParamsCreateWithoutShapeInput, ProductRimParamsUncheckedCreateWithoutShapeInput> | ProductRimParamsCreateWithoutShapeInput[] | ProductRimParamsUncheckedCreateWithoutShapeInput[]
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutShapeInput | ProductRimParamsCreateOrConnectWithoutShapeInput[]
    upsert?: ProductRimParamsUpsertWithWhereUniqueWithoutShapeInput | ProductRimParamsUpsertWithWhereUniqueWithoutShapeInput[]
    createMany?: ProductRimParamsCreateManyShapeInputEnvelope
    set?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    disconnect?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    delete?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    connect?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    update?: ProductRimParamsUpdateWithWhereUniqueWithoutShapeInput | ProductRimParamsUpdateWithWhereUniqueWithoutShapeInput[]
    updateMany?: ProductRimParamsUpdateManyWithWhereWithoutShapeInput | ProductRimParamsUpdateManyWithWhereWithoutShapeInput[]
    deleteMany?: ProductRimParamsScalarWhereInput | ProductRimParamsScalarWhereInput[]
  }

  export type ProductRimParamsUncheckedUpdateManyWithoutShapeNestedInput = {
    create?: XOR<ProductRimParamsCreateWithoutShapeInput, ProductRimParamsUncheckedCreateWithoutShapeInput> | ProductRimParamsCreateWithoutShapeInput[] | ProductRimParamsUncheckedCreateWithoutShapeInput[]
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutShapeInput | ProductRimParamsCreateOrConnectWithoutShapeInput[]
    upsert?: ProductRimParamsUpsertWithWhereUniqueWithoutShapeInput | ProductRimParamsUpsertWithWhereUniqueWithoutShapeInput[]
    createMany?: ProductRimParamsCreateManyShapeInputEnvelope
    set?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    disconnect?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    delete?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    connect?: ProductRimParamsWhereUniqueInput | ProductRimParamsWhereUniqueInput[]
    update?: ProductRimParamsUpdateWithWhereUniqueWithoutShapeInput | ProductRimParamsUpdateWithWhereUniqueWithoutShapeInput[]
    updateMany?: ProductRimParamsUpdateManyWithWhereWithoutShapeInput | ProductRimParamsUpdateManyWithWhereWithoutShapeInput[]
    deleteMany?: ProductRimParamsScalarWhereInput | ProductRimParamsScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutChildrenInput = {
    create?: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutChildrenInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutParentInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type const_AccountantCreateNestedManyWithoutValueInput = {
    create?: XOR<const_AccountantCreateWithoutValueInput, const_AccountantUncheckedCreateWithoutValueInput> | const_AccountantCreateWithoutValueInput[] | const_AccountantUncheckedCreateWithoutValueInput[]
    connectOrCreate?: const_AccountantCreateOrConnectWithoutValueInput | const_AccountantCreateOrConnectWithoutValueInput[]
    createMany?: const_AccountantCreateManyValueInputEnvelope
    connect?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type const_AccountantUncheckedCreateNestedManyWithoutValueInput = {
    create?: XOR<const_AccountantCreateWithoutValueInput, const_AccountantUncheckedCreateWithoutValueInput> | const_AccountantCreateWithoutValueInput[] | const_AccountantUncheckedCreateWithoutValueInput[]
    connectOrCreate?: const_AccountantCreateOrConnectWithoutValueInput | const_AccountantCreateOrConnectWithoutValueInput[]
    createMany?: const_AccountantCreateManyValueInputEnvelope
    connect?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmployeeUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutChildrenInput
    upsert?: EmployeeUpsertWithoutChildrenInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutChildrenInput, EmployeeUpdateWithoutChildrenInput>, EmployeeUncheckedUpdateWithoutChildrenInput>
  }

  export type EmployeeUpdateManyWithoutParentNestedInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutParentInput | EmployeeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutParentInput | EmployeeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutParentInput | EmployeeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type const_AccountantUpdateManyWithoutValueNestedInput = {
    create?: XOR<const_AccountantCreateWithoutValueInput, const_AccountantUncheckedCreateWithoutValueInput> | const_AccountantCreateWithoutValueInput[] | const_AccountantUncheckedCreateWithoutValueInput[]
    connectOrCreate?: const_AccountantCreateOrConnectWithoutValueInput | const_AccountantCreateOrConnectWithoutValueInput[]
    upsert?: const_AccountantUpsertWithWhereUniqueWithoutValueInput | const_AccountantUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: const_AccountantCreateManyValueInputEnvelope
    set?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    disconnect?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    delete?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    connect?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    update?: const_AccountantUpdateWithWhereUniqueWithoutValueInput | const_AccountantUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: const_AccountantUpdateManyWithWhereWithoutValueInput | const_AccountantUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: const_AccountantScalarWhereInput | const_AccountantScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput> | EmployeeCreateWithoutParentInput[] | EmployeeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutParentInput | EmployeeCreateOrConnectWithoutParentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutParentInput | EmployeeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: EmployeeCreateManyParentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutParentInput | EmployeeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutParentInput | EmployeeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type const_AccountantUncheckedUpdateManyWithoutValueNestedInput = {
    create?: XOR<const_AccountantCreateWithoutValueInput, const_AccountantUncheckedCreateWithoutValueInput> | const_AccountantCreateWithoutValueInput[] | const_AccountantUncheckedCreateWithoutValueInput[]
    connectOrCreate?: const_AccountantCreateOrConnectWithoutValueInput | const_AccountantCreateOrConnectWithoutValueInput[]
    upsert?: const_AccountantUpsertWithWhereUniqueWithoutValueInput | const_AccountantUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: const_AccountantCreateManyValueInputEnvelope
    set?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    disconnect?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    delete?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    connect?: const_AccountantWhereUniqueInput | const_AccountantWhereUniqueInput[]
    update?: const_AccountantUpdateWithWhereUniqueWithoutValueInput | const_AccountantUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: const_AccountantUpdateManyWithWhereWithoutValueInput | const_AccountantUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: const_AccountantScalarWhereInput | const_AccountantScalarWhereInput[]
  }

  export type PartnerCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PartnerCreateWithoutChildrenInput, PartnerUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutChildrenInput
    connect?: PartnerWhereUniqueInput
  }

  export type PartnerCreateNestedManyWithoutParentInput = {
    create?: XOR<PartnerCreateWithoutParentInput, PartnerUncheckedCreateWithoutParentInput> | PartnerCreateWithoutParentInput[] | PartnerUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutParentInput | PartnerCreateOrConnectWithoutParentInput[]
    createMany?: PartnerCreateManyParentInputEnvelope
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
  }

  export type PartnerUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PartnerCreateWithoutParentInput, PartnerUncheckedCreateWithoutParentInput> | PartnerCreateWithoutParentInput[] | PartnerUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutParentInput | PartnerCreateOrConnectWithoutParentInput[]
    createMany?: PartnerCreateManyParentInputEnvelope
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
  }

  export type PartnerUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<PartnerCreateWithoutChildrenInput, PartnerUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PartnerCreateOrConnectWithoutChildrenInput
    upsert?: PartnerUpsertWithoutChildrenInput
    disconnect?: PartnerWhereInput | boolean
    delete?: PartnerWhereInput | boolean
    connect?: PartnerWhereUniqueInput
    update?: XOR<XOR<PartnerUpdateToOneWithWhereWithoutChildrenInput, PartnerUpdateWithoutChildrenInput>, PartnerUncheckedUpdateWithoutChildrenInput>
  }

  export type PartnerUpdateManyWithoutParentNestedInput = {
    create?: XOR<PartnerCreateWithoutParentInput, PartnerUncheckedCreateWithoutParentInput> | PartnerCreateWithoutParentInput[] | PartnerUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutParentInput | PartnerCreateOrConnectWithoutParentInput[]
    upsert?: PartnerUpsertWithWhereUniqueWithoutParentInput | PartnerUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PartnerCreateManyParentInputEnvelope
    set?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    disconnect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    delete?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    update?: PartnerUpdateWithWhereUniqueWithoutParentInput | PartnerUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PartnerUpdateManyWithWhereWithoutParentInput | PartnerUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
  }

  export type PartnerUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PartnerCreateWithoutParentInput, PartnerUncheckedCreateWithoutParentInput> | PartnerCreateWithoutParentInput[] | PartnerUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutParentInput | PartnerCreateOrConnectWithoutParentInput[]
    upsert?: PartnerUpsertWithWhereUniqueWithoutParentInput | PartnerUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PartnerCreateManyParentInputEnvelope
    set?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    disconnect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    delete?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    update?: PartnerUpdateWithWhereUniqueWithoutParentInput | PartnerUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PartnerUpdateManyWithWhereWithoutParentInput | PartnerUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ProductCreateWithoutChildrenInput, ProductUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChildrenInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutParentInput = {
    create?: XOR<ProductCreateWithoutParentInput, ProductUncheckedCreateWithoutParentInput> | ProductCreateWithoutParentInput[] | ProductUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutParentInput | ProductCreateOrConnectWithoutParentInput[]
    createMany?: ProductCreateManyParentInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductAppearanceCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductAppearanceCreateWithoutProductInput, ProductAppearanceUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutProductInput
    connect?: ProductAppearanceWhereUniqueInput
  }

  export type ProductRimParamsCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductRimParamsCreateWithoutProductInput, ProductRimParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutProductInput
    connect?: ProductRimParamsWhereUniqueInput
  }

  export type ProductLensParamsCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductLensParamsCreateWithoutProductInput, ProductLensParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductLensParamsCreateOrConnectWithoutProductInput
    connect?: ProductLensParamsWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ProductCreateWithoutParentInput, ProductUncheckedCreateWithoutParentInput> | ProductCreateWithoutParentInput[] | ProductUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutParentInput | ProductCreateOrConnectWithoutParentInput[]
    createMany?: ProductCreateManyParentInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductAppearanceUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductAppearanceCreateWithoutProductInput, ProductAppearanceUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutProductInput
    connect?: ProductAppearanceWhereUniqueInput
  }

  export type ProductRimParamsUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductRimParamsCreateWithoutProductInput, ProductRimParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutProductInput
    connect?: ProductRimParamsWhereUniqueInput
  }

  export type ProductLensParamsUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<ProductLensParamsCreateWithoutProductInput, ProductLensParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductLensParamsCreateOrConnectWithoutProductInput
    connect?: ProductLensParamsWhereUniqueInput
  }

  export type ProductUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ProductCreateWithoutChildrenInput, ProductUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChildrenInput
    upsert?: ProductUpsertWithoutChildrenInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutChildrenInput, ProductUpdateWithoutChildrenInput>, ProductUncheckedUpdateWithoutChildrenInput>
  }

  export type ProductUpdateManyWithoutParentNestedInput = {
    create?: XOR<ProductCreateWithoutParentInput, ProductUncheckedCreateWithoutParentInput> | ProductCreateWithoutParentInput[] | ProductUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutParentInput | ProductCreateOrConnectWithoutParentInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutParentInput | ProductUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ProductCreateManyParentInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutParentInput | ProductUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutParentInput | ProductUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductAppearanceUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductAppearanceCreateWithoutProductInput, ProductAppearanceUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutProductInput
    upsert?: ProductAppearanceUpsertWithoutProductInput
    disconnect?: ProductAppearanceWhereInput | boolean
    delete?: ProductAppearanceWhereInput | boolean
    connect?: ProductAppearanceWhereUniqueInput
    update?: XOR<XOR<ProductAppearanceUpdateToOneWithWhereWithoutProductInput, ProductAppearanceUpdateWithoutProductInput>, ProductAppearanceUncheckedUpdateWithoutProductInput>
  }

  export type ProductRimParamsUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductRimParamsCreateWithoutProductInput, ProductRimParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutProductInput
    upsert?: ProductRimParamsUpsertWithoutProductInput
    disconnect?: ProductRimParamsWhereInput | boolean
    delete?: ProductRimParamsWhereInput | boolean
    connect?: ProductRimParamsWhereUniqueInput
    update?: XOR<XOR<ProductRimParamsUpdateToOneWithWhereWithoutProductInput, ProductRimParamsUpdateWithoutProductInput>, ProductRimParamsUncheckedUpdateWithoutProductInput>
  }

  export type ProductLensParamsUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductLensParamsCreateWithoutProductInput, ProductLensParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductLensParamsCreateOrConnectWithoutProductInput
    upsert?: ProductLensParamsUpsertWithoutProductInput
    disconnect?: ProductLensParamsWhereInput | boolean
    delete?: ProductLensParamsWhereInput | boolean
    connect?: ProductLensParamsWhereUniqueInput
    update?: XOR<XOR<ProductLensParamsUpdateToOneWithWhereWithoutProductInput, ProductLensParamsUpdateWithoutProductInput>, ProductLensParamsUncheckedUpdateWithoutProductInput>
  }

  export type ProductUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ProductCreateWithoutParentInput, ProductUncheckedCreateWithoutParentInput> | ProductCreateWithoutParentInput[] | ProductUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutParentInput | ProductCreateOrConnectWithoutParentInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutParentInput | ProductUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ProductCreateManyParentInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutParentInput | ProductUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutParentInput | ProductUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductAppearanceUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductAppearanceCreateWithoutProductInput, ProductAppearanceUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductAppearanceCreateOrConnectWithoutProductInput
    upsert?: ProductAppearanceUpsertWithoutProductInput
    disconnect?: ProductAppearanceWhereInput | boolean
    delete?: ProductAppearanceWhereInput | boolean
    connect?: ProductAppearanceWhereUniqueInput
    update?: XOR<XOR<ProductAppearanceUpdateToOneWithWhereWithoutProductInput, ProductAppearanceUpdateWithoutProductInput>, ProductAppearanceUncheckedUpdateWithoutProductInput>
  }

  export type ProductRimParamsUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductRimParamsCreateWithoutProductInput, ProductRimParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductRimParamsCreateOrConnectWithoutProductInput
    upsert?: ProductRimParamsUpsertWithoutProductInput
    disconnect?: ProductRimParamsWhereInput | boolean
    delete?: ProductRimParamsWhereInput | boolean
    connect?: ProductRimParamsWhereUniqueInput
    update?: XOR<XOR<ProductRimParamsUpdateToOneWithWhereWithoutProductInput, ProductRimParamsUpdateWithoutProductInput>, ProductRimParamsUncheckedUpdateWithoutProductInput>
  }

  export type ProductLensParamsUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<ProductLensParamsCreateWithoutProductInput, ProductLensParamsUncheckedCreateWithoutProductInput>
    connectOrCreate?: ProductLensParamsCreateOrConnectWithoutProductInput
    upsert?: ProductLensParamsUpsertWithoutProductInput
    disconnect?: ProductLensParamsWhereInput | boolean
    delete?: ProductLensParamsWhereInput | boolean
    connect?: ProductLensParamsWhereUniqueInput
    update?: XOR<XOR<ProductLensParamsUpdateToOneWithWhereWithoutProductInput, ProductLensParamsUpdateWithoutProductInput>, ProductLensParamsUncheckedUpdateWithoutProductInput>
  }

  export type ColorCreateNestedOneWithoutProductAppearanceInput = {
    create?: XOR<ColorCreateWithoutProductAppearanceInput, ColorUncheckedCreateWithoutProductAppearanceInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductAppearanceInput
    connect?: ColorWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutAppearanceInput = {
    create?: XOR<ProductCreateWithoutAppearanceInput, ProductUncheckedCreateWithoutAppearanceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAppearanceInput
    connect?: ProductWhereUniqueInput
  }

  export type ColorUpdateOneWithoutProductAppearanceNestedInput = {
    create?: XOR<ColorCreateWithoutProductAppearanceInput, ColorUncheckedCreateWithoutProductAppearanceInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductAppearanceInput
    upsert?: ColorUpsertWithoutProductAppearanceInput
    disconnect?: ColorWhereInput | boolean
    delete?: ColorWhereInput | boolean
    connect?: ColorWhereUniqueInput
    update?: XOR<XOR<ColorUpdateToOneWithWhereWithoutProductAppearanceInput, ColorUpdateWithoutProductAppearanceInput>, ColorUncheckedUpdateWithoutProductAppearanceInput>
  }

  export type ProductUpdateOneRequiredWithoutAppearanceNestedInput = {
    create?: XOR<ProductCreateWithoutAppearanceInput, ProductUncheckedCreateWithoutAppearanceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAppearanceInput
    upsert?: ProductUpsertWithoutAppearanceInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAppearanceInput, ProductUpdateWithoutAppearanceInput>, ProductUncheckedUpdateWithoutAppearanceInput>
  }

  export type RimShapeCreateNestedOneWithoutProductRimParamsInput = {
    create?: XOR<RimShapeCreateWithoutProductRimParamsInput, RimShapeUncheckedCreateWithoutProductRimParamsInput>
    connectOrCreate?: RimShapeCreateOrConnectWithoutProductRimParamsInput
    connect?: RimShapeWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutRimParamsInput = {
    create?: XOR<ProductCreateWithoutRimParamsInput, ProductUncheckedCreateWithoutRimParamsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRimParamsInput
    connect?: ProductWhereUniqueInput
  }

  export type RimShapeUpdateOneWithoutProductRimParamsNestedInput = {
    create?: XOR<RimShapeCreateWithoutProductRimParamsInput, RimShapeUncheckedCreateWithoutProductRimParamsInput>
    connectOrCreate?: RimShapeCreateOrConnectWithoutProductRimParamsInput
    upsert?: RimShapeUpsertWithoutProductRimParamsInput
    disconnect?: RimShapeWhereInput | boolean
    delete?: RimShapeWhereInput | boolean
    connect?: RimShapeWhereUniqueInput
    update?: XOR<XOR<RimShapeUpdateToOneWithWhereWithoutProductRimParamsInput, RimShapeUpdateWithoutProductRimParamsInput>, RimShapeUncheckedUpdateWithoutProductRimParamsInput>
  }

  export type ProductUpdateOneRequiredWithoutRimParamsNestedInput = {
    create?: XOR<ProductCreateWithoutRimParamsInput, ProductUncheckedCreateWithoutRimParamsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRimParamsInput
    upsert?: ProductUpsertWithoutRimParamsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRimParamsInput, ProductUpdateWithoutRimParamsInput>, ProductUncheckedUpdateWithoutRimParamsInput>
  }

  export type ProductCreateNestedOneWithoutLensParamsInput = {
    create?: XOR<ProductCreateWithoutLensParamsInput, ProductUncheckedCreateWithoutLensParamsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLensParamsInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutLensParamsNestedInput = {
    create?: XOR<ProductCreateWithoutLensParamsInput, ProductUncheckedCreateWithoutLensParamsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLensParamsInput
    upsert?: ProductUpsertWithoutLensParamsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLensParamsInput, ProductUpdateWithoutLensParamsInput>, ProductUncheckedUpdateWithoutLensParamsInput>
  }

  export type NestedEnumSingularValueFilter<$PrismaModel = never> = {
    equals?: $Enums.SingularValue | EnumSingularValueFieldRefInput<$PrismaModel>
    in?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    not?: NestedEnumSingularValueFilter<$PrismaModel> | $Enums.SingularValue
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSingularValueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SingularValue | EnumSingularValueFieldRefInput<$PrismaModel>
    in?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    notIn?: $Enums.SingularValue[] | ListEnumSingularValueFieldRefInput<$PrismaModel>
    not?: NestedEnumSingularValueWithAggregatesFilter<$PrismaModel> | $Enums.SingularValue
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSingularValueFilter<$PrismaModel>
    _max?: NestedEnumSingularValueFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EmployeeCreateWithoutConst_AccountantInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    children?: EmployeeCreateNestedManyWithoutParentInput
  }

  export type EmployeeUncheckedCreateWithoutConst_AccountantInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
  }

  export type EmployeeCreateOrConnectWithoutConst_AccountantInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutConst_AccountantInput, EmployeeUncheckedCreateWithoutConst_AccountantInput>
  }

  export type EmployeeUpsertWithoutConst_AccountantInput = {
    update: XOR<EmployeeUpdateWithoutConst_AccountantInput, EmployeeUncheckedUpdateWithoutConst_AccountantInput>
    create: XOR<EmployeeCreateWithoutConst_AccountantInput, EmployeeUncheckedCreateWithoutConst_AccountantInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutConst_AccountantInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutConst_AccountantInput, EmployeeUncheckedUpdateWithoutConst_AccountantInput>
  }

  export type EmployeeUpdateWithoutConst_AccountantInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    children?: EmployeeUpdateManyWithoutParentNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutConst_AccountantInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProductAppearanceCreateWithoutColorInput = {
    weight?: number | null
    product: ProductCreateNestedOneWithoutAppearanceInput
  }

  export type ProductAppearanceUncheckedCreateWithoutColorInput = {
    productId: number
    weight?: number | null
  }

  export type ProductAppearanceCreateOrConnectWithoutColorInput = {
    where: ProductAppearanceWhereUniqueInput
    create: XOR<ProductAppearanceCreateWithoutColorInput, ProductAppearanceUncheckedCreateWithoutColorInput>
  }

  export type ProductAppearanceCreateManyColorInputEnvelope = {
    data: ProductAppearanceCreateManyColorInput | ProductAppearanceCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type ProductAppearanceUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductAppearanceWhereUniqueInput
    update: XOR<ProductAppearanceUpdateWithoutColorInput, ProductAppearanceUncheckedUpdateWithoutColorInput>
    create: XOR<ProductAppearanceCreateWithoutColorInput, ProductAppearanceUncheckedCreateWithoutColorInput>
  }

  export type ProductAppearanceUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductAppearanceWhereUniqueInput
    data: XOR<ProductAppearanceUpdateWithoutColorInput, ProductAppearanceUncheckedUpdateWithoutColorInput>
  }

  export type ProductAppearanceUpdateManyWithWhereWithoutColorInput = {
    where: ProductAppearanceScalarWhereInput
    data: XOR<ProductAppearanceUpdateManyMutationInput, ProductAppearanceUncheckedUpdateManyWithoutColorInput>
  }

  export type ProductAppearanceScalarWhereInput = {
    AND?: ProductAppearanceScalarWhereInput | ProductAppearanceScalarWhereInput[]
    OR?: ProductAppearanceScalarWhereInput[]
    NOT?: ProductAppearanceScalarWhereInput | ProductAppearanceScalarWhereInput[]
    productId?: IntFilter<"ProductAppearance"> | number
    colorId?: IntNullableFilter<"ProductAppearance"> | number | null
    weight?: IntNullableFilter<"ProductAppearance"> | number | null
  }

  export type ProductRimParamsCreateWithoutShapeInput = {
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
    product: ProductCreateNestedOneWithoutRimParamsInput
  }

  export type ProductRimParamsUncheckedCreateWithoutShapeInput = {
    productId: number
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
  }

  export type ProductRimParamsCreateOrConnectWithoutShapeInput = {
    where: ProductRimParamsWhereUniqueInput
    create: XOR<ProductRimParamsCreateWithoutShapeInput, ProductRimParamsUncheckedCreateWithoutShapeInput>
  }

  export type ProductRimParamsCreateManyShapeInputEnvelope = {
    data: ProductRimParamsCreateManyShapeInput | ProductRimParamsCreateManyShapeInput[]
    skipDuplicates?: boolean
  }

  export type ProductRimParamsUpsertWithWhereUniqueWithoutShapeInput = {
    where: ProductRimParamsWhereUniqueInput
    update: XOR<ProductRimParamsUpdateWithoutShapeInput, ProductRimParamsUncheckedUpdateWithoutShapeInput>
    create: XOR<ProductRimParamsCreateWithoutShapeInput, ProductRimParamsUncheckedCreateWithoutShapeInput>
  }

  export type ProductRimParamsUpdateWithWhereUniqueWithoutShapeInput = {
    where: ProductRimParamsWhereUniqueInput
    data: XOR<ProductRimParamsUpdateWithoutShapeInput, ProductRimParamsUncheckedUpdateWithoutShapeInput>
  }

  export type ProductRimParamsUpdateManyWithWhereWithoutShapeInput = {
    where: ProductRimParamsScalarWhereInput
    data: XOR<ProductRimParamsUpdateManyMutationInput, ProductRimParamsUncheckedUpdateManyWithoutShapeInput>
  }

  export type ProductRimParamsScalarWhereInput = {
    AND?: ProductRimParamsScalarWhereInput | ProductRimParamsScalarWhereInput[]
    OR?: ProductRimParamsScalarWhereInput[]
    NOT?: ProductRimParamsScalarWhereInput | ProductRimParamsScalarWhereInput[]
    productId?: IntFilter<"ProductRimParams"> | number
    bridge?: IntNullableFilter<"ProductRimParams"> | number | null
    temple?: IntNullableFilter<"ProductRimParams"> | number | null
    width?: IntNullableFilter<"ProductRimParams"> | number | null
    height?: IntNullableFilter<"ProductRimParams"> | number | null
    shapeId?: IntNullableFilter<"ProductRimParams"> | number | null
  }

  export type EmployeeCreateWithoutChildrenInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: EmployeeCreateNestedOneWithoutChildrenInput
    const_Accountant?: const_AccountantCreateNestedManyWithoutValueInput
  }

  export type EmployeeUncheckedCreateWithoutChildrenInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    const_Accountant?: const_AccountantUncheckedCreateNestedManyWithoutValueInput
  }

  export type EmployeeCreateOrConnectWithoutChildrenInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
  }

  export type EmployeeCreateWithoutParentInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeCreateNestedManyWithoutParentInput
    const_Accountant?: const_AccountantCreateNestedManyWithoutValueInput
  }

  export type EmployeeUncheckedCreateWithoutParentInput = {
    id?: number
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: EmployeeUncheckedCreateNestedManyWithoutParentInput
    const_Accountant?: const_AccountantUncheckedCreateNestedManyWithoutValueInput
  }

  export type EmployeeCreateOrConnectWithoutParentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput>
  }

  export type EmployeeCreateManyParentInputEnvelope = {
    data: EmployeeCreateManyParentInput | EmployeeCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type const_AccountantCreateWithoutValueInput = {
    date?: Date | string
  }

  export type const_AccountantUncheckedCreateWithoutValueInput = {
    date?: Date | string
  }

  export type const_AccountantCreateOrConnectWithoutValueInput = {
    where: const_AccountantWhereUniqueInput
    create: XOR<const_AccountantCreateWithoutValueInput, const_AccountantUncheckedCreateWithoutValueInput>
  }

  export type const_AccountantCreateManyValueInputEnvelope = {
    data: const_AccountantCreateManyValueInput | const_AccountantCreateManyValueInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutChildrenInput = {
    update: XOR<EmployeeUpdateWithoutChildrenInput, EmployeeUncheckedUpdateWithoutChildrenInput>
    create: XOR<EmployeeCreateWithoutChildrenInput, EmployeeUncheckedCreateWithoutChildrenInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutChildrenInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutChildrenInput, EmployeeUncheckedUpdateWithoutChildrenInput>
  }

  export type EmployeeUpdateWithoutChildrenInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: EmployeeUpdateOneWithoutChildrenNestedInput
    const_Accountant?: const_AccountantUpdateManyWithoutValueNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    const_Accountant?: const_AccountantUncheckedUpdateManyWithoutValueNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutParentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutParentInput, EmployeeUncheckedUpdateWithoutParentInput>
    create: XOR<EmployeeCreateWithoutParentInput, EmployeeUncheckedCreateWithoutParentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutParentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutParentInput, EmployeeUncheckedUpdateWithoutParentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutParentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutParentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    parentId?: IntNullableFilter<"Employee"> | number | null
    isFolder?: BoolFilter<"Employee"> | boolean
    name?: StringFilter<"Employee"> | string
    description?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type const_AccountantUpsertWithWhereUniqueWithoutValueInput = {
    where: const_AccountantWhereUniqueInput
    update: XOR<const_AccountantUpdateWithoutValueInput, const_AccountantUncheckedUpdateWithoutValueInput>
    create: XOR<const_AccountantCreateWithoutValueInput, const_AccountantUncheckedCreateWithoutValueInput>
  }

  export type const_AccountantUpdateWithWhereUniqueWithoutValueInput = {
    where: const_AccountantWhereUniqueInput
    data: XOR<const_AccountantUpdateWithoutValueInput, const_AccountantUncheckedUpdateWithoutValueInput>
  }

  export type const_AccountantUpdateManyWithWhereWithoutValueInput = {
    where: const_AccountantScalarWhereInput
    data: XOR<const_AccountantUpdateManyMutationInput, const_AccountantUncheckedUpdateManyWithoutValueInput>
  }

  export type const_AccountantScalarWhereInput = {
    AND?: const_AccountantScalarWhereInput | const_AccountantScalarWhereInput[]
    OR?: const_AccountantScalarWhereInput[]
    NOT?: const_AccountantScalarWhereInput | const_AccountantScalarWhereInput[]
    date?: DateTimeFilter<"const_Accountant"> | Date | string
    employeeId?: IntNullableFilter<"const_Accountant"> | number | null
  }

  export type PartnerCreateWithoutChildrenInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: PartnerCreateNestedOneWithoutChildrenInput
  }

  export type PartnerUncheckedCreateWithoutChildrenInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerCreateOrConnectWithoutChildrenInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutChildrenInput, PartnerUncheckedCreateWithoutChildrenInput>
  }

  export type PartnerCreateWithoutParentInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PartnerCreateNestedManyWithoutParentInput
  }

  export type PartnerUncheckedCreateWithoutParentInput = {
    id?: number
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: PartnerUncheckedCreateNestedManyWithoutParentInput
  }

  export type PartnerCreateOrConnectWithoutParentInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutParentInput, PartnerUncheckedCreateWithoutParentInput>
  }

  export type PartnerCreateManyParentInputEnvelope = {
    data: PartnerCreateManyParentInput | PartnerCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PartnerUpsertWithoutChildrenInput = {
    update: XOR<PartnerUpdateWithoutChildrenInput, PartnerUncheckedUpdateWithoutChildrenInput>
    create: XOR<PartnerCreateWithoutChildrenInput, PartnerUncheckedCreateWithoutChildrenInput>
    where?: PartnerWhereInput
  }

  export type PartnerUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PartnerWhereInput
    data: XOR<PartnerUpdateWithoutChildrenInput, PartnerUncheckedUpdateWithoutChildrenInput>
  }

  export type PartnerUpdateWithoutChildrenInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: PartnerUpdateOneWithoutChildrenNestedInput
  }

  export type PartnerUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUpsertWithWhereUniqueWithoutParentInput = {
    where: PartnerWhereUniqueInput
    update: XOR<PartnerUpdateWithoutParentInput, PartnerUncheckedUpdateWithoutParentInput>
    create: XOR<PartnerCreateWithoutParentInput, PartnerUncheckedCreateWithoutParentInput>
  }

  export type PartnerUpdateWithWhereUniqueWithoutParentInput = {
    where: PartnerWhereUniqueInput
    data: XOR<PartnerUpdateWithoutParentInput, PartnerUncheckedUpdateWithoutParentInput>
  }

  export type PartnerUpdateManyWithWhereWithoutParentInput = {
    where: PartnerScalarWhereInput
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyWithoutParentInput>
  }

  export type PartnerScalarWhereInput = {
    AND?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
    OR?: PartnerScalarWhereInput[]
    NOT?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
    id?: IntFilter<"Partner"> | number
    parentId?: IntNullableFilter<"Partner"> | number | null
    isFolder?: BoolFilter<"Partner"> | boolean
    name?: StringFilter<"Partner"> | string
    description?: StringNullableFilter<"Partner"> | string | null
    createdAt?: DateTimeFilter<"Partner"> | Date | string
    updatedAt?: DateTimeFilter<"Partner"> | Date | string
  }

  export type ProductCreateWithoutChildrenInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ProductCreateNestedOneWithoutChildrenInput
    appearance?: ProductAppearanceCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutChildrenInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appearance?: ProductAppearanceUncheckedCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsUncheckedCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutChildrenInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutChildrenInput, ProductUncheckedCreateWithoutChildrenInput>
  }

  export type ProductCreateWithoutParentInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ProductCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutParentInput = {
    id?: number
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ProductUncheckedCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceUncheckedCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsUncheckedCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutParentInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutParentInput, ProductUncheckedCreateWithoutParentInput>
  }

  export type ProductCreateManyParentInputEnvelope = {
    data: ProductCreateManyParentInput | ProductCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProductAppearanceCreateWithoutProductInput = {
    weight?: number | null
    color?: ColorCreateNestedOneWithoutProductAppearanceInput
  }

  export type ProductAppearanceUncheckedCreateWithoutProductInput = {
    colorId?: number | null
    weight?: number | null
  }

  export type ProductAppearanceCreateOrConnectWithoutProductInput = {
    where: ProductAppearanceWhereUniqueInput
    create: XOR<ProductAppearanceCreateWithoutProductInput, ProductAppearanceUncheckedCreateWithoutProductInput>
  }

  export type ProductRimParamsCreateWithoutProductInput = {
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
    shape?: RimShapeCreateNestedOneWithoutProductRimParamsInput
  }

  export type ProductRimParamsUncheckedCreateWithoutProductInput = {
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
    shapeId?: number | null
  }

  export type ProductRimParamsCreateOrConnectWithoutProductInput = {
    where: ProductRimParamsWhereUniqueInput
    create: XOR<ProductRimParamsCreateWithoutProductInput, ProductRimParamsUncheckedCreateWithoutProductInput>
  }

  export type ProductLensParamsCreateWithoutProductInput = {
    index?: number | null
    diameter?: number | null
  }

  export type ProductLensParamsUncheckedCreateWithoutProductInput = {
    index?: number | null
    diameter?: number | null
  }

  export type ProductLensParamsCreateOrConnectWithoutProductInput = {
    where: ProductLensParamsWhereUniqueInput
    create: XOR<ProductLensParamsCreateWithoutProductInput, ProductLensParamsUncheckedCreateWithoutProductInput>
  }

  export type ProductUpsertWithoutChildrenInput = {
    update: XOR<ProductUpdateWithoutChildrenInput, ProductUncheckedUpdateWithoutChildrenInput>
    create: XOR<ProductCreateWithoutChildrenInput, ProductUncheckedCreateWithoutChildrenInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutChildrenInput, ProductUncheckedUpdateWithoutChildrenInput>
  }

  export type ProductUpdateWithoutChildrenInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ProductUpdateOneWithoutChildrenNestedInput
    appearance?: ProductAppearanceUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appearance?: ProductAppearanceUncheckedUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUncheckedUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutParentInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutParentInput, ProductUncheckedUpdateWithoutParentInput>
    create: XOR<ProductCreateWithoutParentInput, ProductUncheckedCreateWithoutParentInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutParentInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutParentInput, ProductUncheckedUpdateWithoutParentInput>
  }

  export type ProductUpdateManyWithWhereWithoutParentInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutParentInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    parentId?: IntNullableFilter<"Product"> | number | null
    isFolder?: BoolFilter<"Product"> | boolean
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductAppearanceUpsertWithoutProductInput = {
    update: XOR<ProductAppearanceUpdateWithoutProductInput, ProductAppearanceUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAppearanceCreateWithoutProductInput, ProductAppearanceUncheckedCreateWithoutProductInput>
    where?: ProductAppearanceWhereInput
  }

  export type ProductAppearanceUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductAppearanceWhereInput
    data: XOR<ProductAppearanceUpdateWithoutProductInput, ProductAppearanceUncheckedUpdateWithoutProductInput>
  }

  export type ProductAppearanceUpdateWithoutProductInput = {
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    color?: ColorUpdateOneWithoutProductAppearanceNestedInput
  }

  export type ProductAppearanceUncheckedUpdateWithoutProductInput = {
    colorId?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRimParamsUpsertWithoutProductInput = {
    update: XOR<ProductRimParamsUpdateWithoutProductInput, ProductRimParamsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductRimParamsCreateWithoutProductInput, ProductRimParamsUncheckedCreateWithoutProductInput>
    where?: ProductRimParamsWhereInput
  }

  export type ProductRimParamsUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductRimParamsWhereInput
    data: XOR<ProductRimParamsUpdateWithoutProductInput, ProductRimParamsUncheckedUpdateWithoutProductInput>
  }

  export type ProductRimParamsUpdateWithoutProductInput = {
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    shape?: RimShapeUpdateOneWithoutProductRimParamsNestedInput
  }

  export type ProductRimParamsUncheckedUpdateWithoutProductInput = {
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    shapeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductLensParamsUpsertWithoutProductInput = {
    update: XOR<ProductLensParamsUpdateWithoutProductInput, ProductLensParamsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductLensParamsCreateWithoutProductInput, ProductLensParamsUncheckedCreateWithoutProductInput>
    where?: ProductLensParamsWhereInput
  }

  export type ProductLensParamsUpdateToOneWithWhereWithoutProductInput = {
    where?: ProductLensParamsWhereInput
    data: XOR<ProductLensParamsUpdateWithoutProductInput, ProductLensParamsUncheckedUpdateWithoutProductInput>
  }

  export type ProductLensParamsUpdateWithoutProductInput = {
    index?: NullableFloatFieldUpdateOperationsInput | number | null
    diameter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductLensParamsUncheckedUpdateWithoutProductInput = {
    index?: NullableFloatFieldUpdateOperationsInput | number | null
    diameter?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ColorCreateWithoutProductAppearanceInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorUncheckedCreateWithoutProductAppearanceInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorCreateOrConnectWithoutProductAppearanceInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutProductAppearanceInput, ColorUncheckedCreateWithoutProductAppearanceInput>
  }

  export type ProductCreateWithoutAppearanceInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ProductCreateNestedOneWithoutChildrenInput
    children?: ProductCreateNestedManyWithoutParentInput
    rimParams?: ProductRimParamsCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAppearanceInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ProductUncheckedCreateNestedManyWithoutParentInput
    rimParams?: ProductRimParamsUncheckedCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAppearanceInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAppearanceInput, ProductUncheckedCreateWithoutAppearanceInput>
  }

  export type ColorUpsertWithoutProductAppearanceInput = {
    update: XOR<ColorUpdateWithoutProductAppearanceInput, ColorUncheckedUpdateWithoutProductAppearanceInput>
    create: XOR<ColorCreateWithoutProductAppearanceInput, ColorUncheckedCreateWithoutProductAppearanceInput>
    where?: ColorWhereInput
  }

  export type ColorUpdateToOneWithWhereWithoutProductAppearanceInput = {
    where?: ColorWhereInput
    data: XOR<ColorUpdateWithoutProductAppearanceInput, ColorUncheckedUpdateWithoutProductAppearanceInput>
  }

  export type ColorUpdateWithoutProductAppearanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUncheckedUpdateWithoutProductAppearanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutAppearanceInput = {
    update: XOR<ProductUpdateWithoutAppearanceInput, ProductUncheckedUpdateWithoutAppearanceInput>
    create: XOR<ProductCreateWithoutAppearanceInput, ProductUncheckedCreateWithoutAppearanceInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAppearanceInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAppearanceInput, ProductUncheckedUpdateWithoutAppearanceInput>
  }

  export type ProductUpdateWithoutAppearanceInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ProductUpdateOneWithoutChildrenNestedInput
    children?: ProductUpdateManyWithoutParentNestedInput
    rimParams?: ProductRimParamsUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAppearanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ProductUncheckedUpdateManyWithoutParentNestedInput
    rimParams?: ProductRimParamsUncheckedUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUncheckedUpdateOneWithoutProductNestedInput
  }

  export type RimShapeCreateWithoutProductRimParamsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RimShapeUncheckedCreateWithoutProductRimParamsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RimShapeCreateOrConnectWithoutProductRimParamsInput = {
    where: RimShapeWhereUniqueInput
    create: XOR<RimShapeCreateWithoutProductRimParamsInput, RimShapeUncheckedCreateWithoutProductRimParamsInput>
  }

  export type ProductCreateWithoutRimParamsInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ProductCreateNestedOneWithoutChildrenInput
    children?: ProductCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRimParamsInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ProductUncheckedCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceUncheckedCreateNestedOneWithoutProductInput
    lensParams?: ProductLensParamsUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRimParamsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRimParamsInput, ProductUncheckedCreateWithoutRimParamsInput>
  }

  export type RimShapeUpsertWithoutProductRimParamsInput = {
    update: XOR<RimShapeUpdateWithoutProductRimParamsInput, RimShapeUncheckedUpdateWithoutProductRimParamsInput>
    create: XOR<RimShapeCreateWithoutProductRimParamsInput, RimShapeUncheckedCreateWithoutProductRimParamsInput>
    where?: RimShapeWhereInput
  }

  export type RimShapeUpdateToOneWithWhereWithoutProductRimParamsInput = {
    where?: RimShapeWhereInput
    data: XOR<RimShapeUpdateWithoutProductRimParamsInput, RimShapeUncheckedUpdateWithoutProductRimParamsInput>
  }

  export type RimShapeUpdateWithoutProductRimParamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RimShapeUncheckedUpdateWithoutProductRimParamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutRimParamsInput = {
    update: XOR<ProductUpdateWithoutRimParamsInput, ProductUncheckedUpdateWithoutRimParamsInput>
    create: XOR<ProductCreateWithoutRimParamsInput, ProductUncheckedCreateWithoutRimParamsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRimParamsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRimParamsInput, ProductUncheckedUpdateWithoutRimParamsInput>
  }

  export type ProductUpdateWithoutRimParamsInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ProductUpdateOneWithoutChildrenNestedInput
    children?: ProductUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRimParamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ProductUncheckedUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUncheckedUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateWithoutLensParamsInput = {
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ProductCreateNestedOneWithoutChildrenInput
    children?: ProductCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutLensParamsInput = {
    id?: number
    parentId?: number | null
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: ProductUncheckedCreateNestedManyWithoutParentInput
    appearance?: ProductAppearanceUncheckedCreateNestedOneWithoutProductInput
    rimParams?: ProductRimParamsUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutLensParamsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLensParamsInput, ProductUncheckedCreateWithoutLensParamsInput>
  }

  export type ProductUpsertWithoutLensParamsInput = {
    update: XOR<ProductUpdateWithoutLensParamsInput, ProductUncheckedUpdateWithoutLensParamsInput>
    create: XOR<ProductCreateWithoutLensParamsInput, ProductUncheckedCreateWithoutLensParamsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutLensParamsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutLensParamsInput, ProductUncheckedUpdateWithoutLensParamsInput>
  }

  export type ProductUpdateWithoutLensParamsInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ProductUpdateOneWithoutChildrenNestedInput
    children?: ProductUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutLensParamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ProductUncheckedUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUncheckedUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductAppearanceCreateManyColorInput = {
    productId: number
    weight?: number | null
  }

  export type ProductAppearanceUpdateWithoutColorInput = {
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutAppearanceNestedInput
  }

  export type ProductAppearanceUncheckedUpdateWithoutColorInput = {
    productId?: IntFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductAppearanceUncheckedUpdateManyWithoutColorInput = {
    productId?: IntFieldUpdateOperationsInput | number
    weight?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRimParamsCreateManyShapeInput = {
    productId: number
    bridge?: number | null
    temple?: number | null
    width?: number | null
    height?: number | null
  }

  export type ProductRimParamsUpdateWithoutShapeInput = {
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneRequiredWithoutRimParamsNestedInput
  }

  export type ProductRimParamsUncheckedUpdateWithoutShapeInput = {
    productId?: IntFieldUpdateOperationsInput | number
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductRimParamsUncheckedUpdateManyWithoutShapeInput = {
    productId?: IntFieldUpdateOperationsInput | number
    bridge?: NullableIntFieldUpdateOperationsInput | number | null
    temple?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmployeeCreateManyParentInput = {
    id?: number
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type const_AccountantCreateManyValueInput = {
    date?: Date | string
  }

  export type EmployeeUpdateWithoutParentInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUpdateManyWithoutParentNestedInput
    const_Accountant?: const_AccountantUpdateManyWithoutValueNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: EmployeeUncheckedUpdateManyWithoutParentNestedInput
    const_Accountant?: const_AccountantUncheckedUpdateManyWithoutValueNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type const_AccountantUpdateWithoutValueInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type const_AccountantUncheckedUpdateWithoutValueInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type const_AccountantUncheckedUpdateManyWithoutValueInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateManyParentInput = {
    id?: number
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerUpdateWithoutParentInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PartnerUpdateManyWithoutParentNestedInput
  }

  export type PartnerUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: PartnerUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PartnerUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyParentInput = {
    id?: number
    isFolder?: boolean
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutParentInput = {
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ProductUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: ProductUncheckedUpdateManyWithoutParentNestedInput
    appearance?: ProductAppearanceUncheckedUpdateOneWithoutProductNestedInput
    rimParams?: ProductRimParamsUncheckedUpdateOneWithoutProductNestedInput
    lensParams?: ProductLensParamsUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    isFolder?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ColorCountOutputTypeDefaultArgs instead
     */
    export type ColorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RimShapeCountOutputTypeDefaultArgs instead
     */
    export type RimShapeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RimShapeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeCountOutputTypeDefaultArgs instead
     */
    export type EmployeeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartnerCountOutputTypeDefaultArgs instead
     */
    export type PartnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use const_CompanyNameDefaultArgs instead
     */
    export type const_CompanyNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = const_CompanyNameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use const_AccountantDefaultArgs instead
     */
    export type const_AccountantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = const_AccountantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColorDefaultArgs instead
     */
    export type ColorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RimShapeDefaultArgs instead
     */
    export type RimShapeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RimShapeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeDefaultArgs instead
     */
    export type EmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartnerDefaultArgs instead
     */
    export type PartnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductAppearanceDefaultArgs instead
     */
    export type ProductAppearanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductAppearanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductRimParamsDefaultArgs instead
     */
    export type ProductRimParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductRimParamsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductLensParamsDefaultArgs instead
     */
    export type ProductLensParamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductLensParamsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}