
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shortner
 * 
 */
export type Shortner = $Result.DefaultSelection<Prisma.$ShortnerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shortners
 * const shortners = await prisma.shortner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Shortners
   * const shortners = await prisma.shortner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shortner`: Exposes CRUD operations for the **Shortner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shortners
    * const shortners = await prisma.shortner.findMany()
    * ```
    */
  get shortner(): Prisma.ShortnerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Shortner: 'Shortner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shortner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shortner: {
        payload: Prisma.$ShortnerPayload<ExtArgs>
        fields: Prisma.ShortnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShortnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShortnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>
          }
          findFirst: {
            args: Prisma.ShortnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShortnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>
          }
          findMany: {
            args: Prisma.ShortnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>[]
          }
          create: {
            args: Prisma.ShortnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>
          }
          createMany: {
            args: Prisma.ShortnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShortnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>[]
          }
          delete: {
            args: Prisma.ShortnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>
          }
          update: {
            args: Prisma.ShortnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>
          }
          deleteMany: {
            args: Prisma.ShortnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShortnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShortnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>[]
          }
          upsert: {
            args: Prisma.ShortnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShortnerPayload>
          }
          aggregate: {
            args: Prisma.ShortnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShortner>
          }
          groupBy: {
            args: Prisma.ShortnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShortnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShortnerCountArgs<ExtArgs>
            result: $Utils.Optional<ShortnerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    shortner?: ShortnerOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Shortner
   */

  export type AggregateShortner = {
    _count: ShortnerCountAggregateOutputType | null
    _avg: ShortnerAvgAggregateOutputType | null
    _sum: ShortnerSumAggregateOutputType | null
    _min: ShortnerMinAggregateOutputType | null
    _max: ShortnerMaxAggregateOutputType | null
  }

  export type ShortnerAvgAggregateOutputType = {
    id: number | null
  }

  export type ShortnerSumAggregateOutputType = {
    id: number | null
  }

  export type ShortnerMinAggregateOutputType = {
    id: number | null
    longUrl: string | null
    shortUrl: string | null
  }

  export type ShortnerMaxAggregateOutputType = {
    id: number | null
    longUrl: string | null
    shortUrl: string | null
  }

  export type ShortnerCountAggregateOutputType = {
    id: number
    longUrl: number
    shortUrl: number
    _all: number
  }


  export type ShortnerAvgAggregateInputType = {
    id?: true
  }

  export type ShortnerSumAggregateInputType = {
    id?: true
  }

  export type ShortnerMinAggregateInputType = {
    id?: true
    longUrl?: true
    shortUrl?: true
  }

  export type ShortnerMaxAggregateInputType = {
    id?: true
    longUrl?: true
    shortUrl?: true
  }

  export type ShortnerCountAggregateInputType = {
    id?: true
    longUrl?: true
    shortUrl?: true
    _all?: true
  }

  export type ShortnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shortner to aggregate.
     */
    where?: ShortnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shortners to fetch.
     */
    orderBy?: ShortnerOrderByWithRelationInput | ShortnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShortnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shortners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shortners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shortners
    **/
    _count?: true | ShortnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShortnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShortnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShortnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShortnerMaxAggregateInputType
  }

  export type GetShortnerAggregateType<T extends ShortnerAggregateArgs> = {
        [P in keyof T & keyof AggregateShortner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShortner[P]>
      : GetScalarType<T[P], AggregateShortner[P]>
  }




  export type ShortnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShortnerWhereInput
    orderBy?: ShortnerOrderByWithAggregationInput | ShortnerOrderByWithAggregationInput[]
    by: ShortnerScalarFieldEnum[] | ShortnerScalarFieldEnum
    having?: ShortnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShortnerCountAggregateInputType | true
    _avg?: ShortnerAvgAggregateInputType
    _sum?: ShortnerSumAggregateInputType
    _min?: ShortnerMinAggregateInputType
    _max?: ShortnerMaxAggregateInputType
  }

  export type ShortnerGroupByOutputType = {
    id: number
    longUrl: string
    shortUrl: string
    _count: ShortnerCountAggregateOutputType | null
    _avg: ShortnerAvgAggregateOutputType | null
    _sum: ShortnerSumAggregateOutputType | null
    _min: ShortnerMinAggregateOutputType | null
    _max: ShortnerMaxAggregateOutputType | null
  }

  type GetShortnerGroupByPayload<T extends ShortnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShortnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShortnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShortnerGroupByOutputType[P]>
            : GetScalarType<T[P], ShortnerGroupByOutputType[P]>
        }
      >
    >


  export type ShortnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    longUrl?: boolean
    shortUrl?: boolean
  }, ExtArgs["result"]["shortner"]>

  export type ShortnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    longUrl?: boolean
    shortUrl?: boolean
  }, ExtArgs["result"]["shortner"]>

  export type ShortnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    longUrl?: boolean
    shortUrl?: boolean
  }, ExtArgs["result"]["shortner"]>

  export type ShortnerSelectScalar = {
    id?: boolean
    longUrl?: boolean
    shortUrl?: boolean
  }

  export type ShortnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "longUrl" | "shortUrl", ExtArgs["result"]["shortner"]>

  export type $ShortnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shortner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      longUrl: string
      shortUrl: string
    }, ExtArgs["result"]["shortner"]>
    composites: {}
  }

  type ShortnerGetPayload<S extends boolean | null | undefined | ShortnerDefaultArgs> = $Result.GetResult<Prisma.$ShortnerPayload, S>

  type ShortnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShortnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShortnerCountAggregateInputType | true
    }

  export interface ShortnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shortner'], meta: { name: 'Shortner' } }
    /**
     * Find zero or one Shortner that matches the filter.
     * @param {ShortnerFindUniqueArgs} args - Arguments to find a Shortner
     * @example
     * // Get one Shortner
     * const shortner = await prisma.shortner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShortnerFindUniqueArgs>(args: SelectSubset<T, ShortnerFindUniqueArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shortner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShortnerFindUniqueOrThrowArgs} args - Arguments to find a Shortner
     * @example
     * // Get one Shortner
     * const shortner = await prisma.shortner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShortnerFindUniqueOrThrowArgs>(args: SelectSubset<T, ShortnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shortner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerFindFirstArgs} args - Arguments to find a Shortner
     * @example
     * // Get one Shortner
     * const shortner = await prisma.shortner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShortnerFindFirstArgs>(args?: SelectSubset<T, ShortnerFindFirstArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shortner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerFindFirstOrThrowArgs} args - Arguments to find a Shortner
     * @example
     * // Get one Shortner
     * const shortner = await prisma.shortner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShortnerFindFirstOrThrowArgs>(args?: SelectSubset<T, ShortnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shortners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shortners
     * const shortners = await prisma.shortner.findMany()
     * 
     * // Get first 10 Shortners
     * const shortners = await prisma.shortner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shortnerWithIdOnly = await prisma.shortner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShortnerFindManyArgs>(args?: SelectSubset<T, ShortnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shortner.
     * @param {ShortnerCreateArgs} args - Arguments to create a Shortner.
     * @example
     * // Create one Shortner
     * const Shortner = await prisma.shortner.create({
     *   data: {
     *     // ... data to create a Shortner
     *   }
     * })
     * 
     */
    create<T extends ShortnerCreateArgs>(args: SelectSubset<T, ShortnerCreateArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shortners.
     * @param {ShortnerCreateManyArgs} args - Arguments to create many Shortners.
     * @example
     * // Create many Shortners
     * const shortner = await prisma.shortner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShortnerCreateManyArgs>(args?: SelectSubset<T, ShortnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shortners and returns the data saved in the database.
     * @param {ShortnerCreateManyAndReturnArgs} args - Arguments to create many Shortners.
     * @example
     * // Create many Shortners
     * const shortner = await prisma.shortner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shortners and only return the `id`
     * const shortnerWithIdOnly = await prisma.shortner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShortnerCreateManyAndReturnArgs>(args?: SelectSubset<T, ShortnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shortner.
     * @param {ShortnerDeleteArgs} args - Arguments to delete one Shortner.
     * @example
     * // Delete one Shortner
     * const Shortner = await prisma.shortner.delete({
     *   where: {
     *     // ... filter to delete one Shortner
     *   }
     * })
     * 
     */
    delete<T extends ShortnerDeleteArgs>(args: SelectSubset<T, ShortnerDeleteArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shortner.
     * @param {ShortnerUpdateArgs} args - Arguments to update one Shortner.
     * @example
     * // Update one Shortner
     * const shortner = await prisma.shortner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShortnerUpdateArgs>(args: SelectSubset<T, ShortnerUpdateArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shortners.
     * @param {ShortnerDeleteManyArgs} args - Arguments to filter Shortners to delete.
     * @example
     * // Delete a few Shortners
     * const { count } = await prisma.shortner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShortnerDeleteManyArgs>(args?: SelectSubset<T, ShortnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shortners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shortners
     * const shortner = await prisma.shortner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShortnerUpdateManyArgs>(args: SelectSubset<T, ShortnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shortners and returns the data updated in the database.
     * @param {ShortnerUpdateManyAndReturnArgs} args - Arguments to update many Shortners.
     * @example
     * // Update many Shortners
     * const shortner = await prisma.shortner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shortners and only return the `id`
     * const shortnerWithIdOnly = await prisma.shortner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShortnerUpdateManyAndReturnArgs>(args: SelectSubset<T, ShortnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shortner.
     * @param {ShortnerUpsertArgs} args - Arguments to update or create a Shortner.
     * @example
     * // Update or create a Shortner
     * const shortner = await prisma.shortner.upsert({
     *   create: {
     *     // ... data to create a Shortner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shortner we want to update
     *   }
     * })
     */
    upsert<T extends ShortnerUpsertArgs>(args: SelectSubset<T, ShortnerUpsertArgs<ExtArgs>>): Prisma__ShortnerClient<$Result.GetResult<Prisma.$ShortnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shortners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerCountArgs} args - Arguments to filter Shortners to count.
     * @example
     * // Count the number of Shortners
     * const count = await prisma.shortner.count({
     *   where: {
     *     // ... the filter for the Shortners we want to count
     *   }
     * })
    **/
    count<T extends ShortnerCountArgs>(
      args?: Subset<T, ShortnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShortnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shortner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShortnerAggregateArgs>(args: Subset<T, ShortnerAggregateArgs>): Prisma.PrismaPromise<GetShortnerAggregateType<T>>

    /**
     * Group by Shortner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShortnerGroupByArgs} args - Group by arguments.
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
      T extends ShortnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShortnerGroupByArgs['orderBy'] }
        : { orderBy?: ShortnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShortnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShortnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shortner model
   */
  readonly fields: ShortnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shortner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShortnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shortner model
   */
  interface ShortnerFieldRefs {
    readonly id: FieldRef<"Shortner", 'Int'>
    readonly longUrl: FieldRef<"Shortner", 'String'>
    readonly shortUrl: FieldRef<"Shortner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shortner findUnique
   */
  export type ShortnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * Filter, which Shortner to fetch.
     */
    where: ShortnerWhereUniqueInput
  }

  /**
   * Shortner findUniqueOrThrow
   */
  export type ShortnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * Filter, which Shortner to fetch.
     */
    where: ShortnerWhereUniqueInput
  }

  /**
   * Shortner findFirst
   */
  export type ShortnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * Filter, which Shortner to fetch.
     */
    where?: ShortnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shortners to fetch.
     */
    orderBy?: ShortnerOrderByWithRelationInput | ShortnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shortners.
     */
    cursor?: ShortnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shortners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shortners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shortners.
     */
    distinct?: ShortnerScalarFieldEnum | ShortnerScalarFieldEnum[]
  }

  /**
   * Shortner findFirstOrThrow
   */
  export type ShortnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * Filter, which Shortner to fetch.
     */
    where?: ShortnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shortners to fetch.
     */
    orderBy?: ShortnerOrderByWithRelationInput | ShortnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shortners.
     */
    cursor?: ShortnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shortners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shortners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shortners.
     */
    distinct?: ShortnerScalarFieldEnum | ShortnerScalarFieldEnum[]
  }

  /**
   * Shortner findMany
   */
  export type ShortnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * Filter, which Shortners to fetch.
     */
    where?: ShortnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shortners to fetch.
     */
    orderBy?: ShortnerOrderByWithRelationInput | ShortnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shortners.
     */
    cursor?: ShortnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shortners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shortners.
     */
    skip?: number
    distinct?: ShortnerScalarFieldEnum | ShortnerScalarFieldEnum[]
  }

  /**
   * Shortner create
   */
  export type ShortnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * The data needed to create a Shortner.
     */
    data: XOR<ShortnerCreateInput, ShortnerUncheckedCreateInput>
  }

  /**
   * Shortner createMany
   */
  export type ShortnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shortners.
     */
    data: ShortnerCreateManyInput | ShortnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shortner createManyAndReturn
   */
  export type ShortnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * The data used to create many Shortners.
     */
    data: ShortnerCreateManyInput | ShortnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shortner update
   */
  export type ShortnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * The data needed to update a Shortner.
     */
    data: XOR<ShortnerUpdateInput, ShortnerUncheckedUpdateInput>
    /**
     * Choose, which Shortner to update.
     */
    where: ShortnerWhereUniqueInput
  }

  /**
   * Shortner updateMany
   */
  export type ShortnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shortners.
     */
    data: XOR<ShortnerUpdateManyMutationInput, ShortnerUncheckedUpdateManyInput>
    /**
     * Filter which Shortners to update
     */
    where?: ShortnerWhereInput
    /**
     * Limit how many Shortners to update.
     */
    limit?: number
  }

  /**
   * Shortner updateManyAndReturn
   */
  export type ShortnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * The data used to update Shortners.
     */
    data: XOR<ShortnerUpdateManyMutationInput, ShortnerUncheckedUpdateManyInput>
    /**
     * Filter which Shortners to update
     */
    where?: ShortnerWhereInput
    /**
     * Limit how many Shortners to update.
     */
    limit?: number
  }

  /**
   * Shortner upsert
   */
  export type ShortnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * The filter to search for the Shortner to update in case it exists.
     */
    where: ShortnerWhereUniqueInput
    /**
     * In case the Shortner found by the `where` argument doesn't exist, create a new Shortner with this data.
     */
    create: XOR<ShortnerCreateInput, ShortnerUncheckedCreateInput>
    /**
     * In case the Shortner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShortnerUpdateInput, ShortnerUncheckedUpdateInput>
  }

  /**
   * Shortner delete
   */
  export type ShortnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
    /**
     * Filter which Shortner to delete.
     */
    where: ShortnerWhereUniqueInput
  }

  /**
   * Shortner deleteMany
   */
  export type ShortnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shortners to delete
     */
    where?: ShortnerWhereInput
    /**
     * Limit how many Shortners to delete.
     */
    limit?: number
  }

  /**
   * Shortner without action
   */
  export type ShortnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shortner
     */
    select?: ShortnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shortner
     */
    omit?: ShortnerOmit<ExtArgs> | null
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


  export const ShortnerScalarFieldEnum: {
    id: 'id',
    longUrl: 'longUrl',
    shortUrl: 'shortUrl'
  };

  export type ShortnerScalarFieldEnum = (typeof ShortnerScalarFieldEnum)[keyof typeof ShortnerScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type ShortnerWhereInput = {
    AND?: ShortnerWhereInput | ShortnerWhereInput[]
    OR?: ShortnerWhereInput[]
    NOT?: ShortnerWhereInput | ShortnerWhereInput[]
    id?: IntFilter<"Shortner"> | number
    longUrl?: StringFilter<"Shortner"> | string
    shortUrl?: StringFilter<"Shortner"> | string
  }

  export type ShortnerOrderByWithRelationInput = {
    id?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
  }

  export type ShortnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShortnerWhereInput | ShortnerWhereInput[]
    OR?: ShortnerWhereInput[]
    NOT?: ShortnerWhereInput | ShortnerWhereInput[]
    longUrl?: StringFilter<"Shortner"> | string
    shortUrl?: StringFilter<"Shortner"> | string
  }, "id">

  export type ShortnerOrderByWithAggregationInput = {
    id?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
    _count?: ShortnerCountOrderByAggregateInput
    _avg?: ShortnerAvgOrderByAggregateInput
    _max?: ShortnerMaxOrderByAggregateInput
    _min?: ShortnerMinOrderByAggregateInput
    _sum?: ShortnerSumOrderByAggregateInput
  }

  export type ShortnerScalarWhereWithAggregatesInput = {
    AND?: ShortnerScalarWhereWithAggregatesInput | ShortnerScalarWhereWithAggregatesInput[]
    OR?: ShortnerScalarWhereWithAggregatesInput[]
    NOT?: ShortnerScalarWhereWithAggregatesInput | ShortnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shortner"> | number
    longUrl?: StringWithAggregatesFilter<"Shortner"> | string
    shortUrl?: StringWithAggregatesFilter<"Shortner"> | string
  }

  export type ShortnerCreateInput = {
    longUrl: string
    shortUrl: string
  }

  export type ShortnerUncheckedCreateInput = {
    id?: number
    longUrl: string
    shortUrl: string
  }

  export type ShortnerUpdateInput = {
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ShortnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ShortnerCreateManyInput = {
    id?: number
    longUrl: string
    shortUrl: string
  }

  export type ShortnerUpdateManyMutationInput = {
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ShortnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    longUrl?: StringFieldUpdateOperationsInput | string
    shortUrl?: StringFieldUpdateOperationsInput | string
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

  export type ShortnerCountOrderByAggregateInput = {
    id?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
  }

  export type ShortnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShortnerMaxOrderByAggregateInput = {
    id?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
  }

  export type ShortnerMinOrderByAggregateInput = {
    id?: SortOrder
    longUrl?: SortOrder
    shortUrl?: SortOrder
  }

  export type ShortnerSumOrderByAggregateInput = {
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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