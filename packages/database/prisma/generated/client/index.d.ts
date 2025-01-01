
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WalletTransactions
 * 
 */
export type WalletTransactions = $Result.DefaultSelection<Prisma.$WalletTransactionsPayload>
/**
 * Model OnRampTransaction
 * 
 */
export type OnRampTransaction = $Result.DefaultSelection<Prisma.$OnRampTransactionPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model paytmTransactions
 * 
 */
export type paytmTransactions = $Result.DefaultSelection<Prisma.$paytmTransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const accType: {
  savings: 'savings',
  current: 'current',
  loan: 'loan'
};

export type accType = (typeof accType)[keyof typeof accType]


export const transType: {
  withdrawl: 'withdrawl',
  deposit: 'deposit',
  transfer: 'transfer'
};

export type transType = (typeof transType)[keyof typeof transType]


export const transStat: {
  Success: 'Success',
  Failed: 'Failed',
  Processing: 'Processing'
};

export type transStat = (typeof transStat)[keyof typeof transStat]


export const AuthType: {
  Google: 'Google',
  Github: 'Github'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]


export const Status: {
  Success: 'Success',
  Failed: 'Failed',
  Processing: 'Processing'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type accType = $Enums.accType

export const accType: typeof $Enums.accType

export type transType = $Enums.transType

export const transType: typeof $Enums.transType

export type transStat = $Enums.transStat

export const transStat: typeof $Enums.transStat

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.walletTransactions`: Exposes CRUD operations for the **WalletTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransactions.findMany()
    * ```
    */
  get walletTransactions(): Prisma.WalletTransactionsDelegate<ExtArgs>;

  /**
   * `prisma.onRampTransaction`: Exposes CRUD operations for the **OnRampTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnRampTransactions
    * const onRampTransactions = await prisma.onRampTransaction.findMany()
    * ```
    */
  get onRampTransaction(): Prisma.OnRampTransactionDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs>;

  /**
   * `prisma.paytmTransactions`: Exposes CRUD operations for the **paytmTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaytmTransactions
    * const paytmTransactions = await prisma.paytmTransactions.findMany()
    * ```
    */
  get paytmTransactions(): Prisma.paytmTransactionsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
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
    User: 'User',
    WalletTransactions: 'WalletTransactions',
    OnRampTransaction: 'OnRampTransaction',
    Customer: 'Customer',
    Transactions: 'Transactions',
    paytmTransactions: 'paytmTransactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "walletTransactions" | "onRampTransaction" | "customer" | "transactions" | "paytmTransactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WalletTransactions: {
        payload: Prisma.$WalletTransactionsPayload<ExtArgs>
        fields: Prisma.WalletTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>[]
          }
          delete: {
            args: Prisma.WalletTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>
          }
          update: {
            args: Prisma.WalletTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionsPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransactions>
          }
          groupBy: {
            args: Prisma.WalletTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionsCountAggregateOutputType> | number
          }
        }
      }
      OnRampTransaction: {
        payload: Prisma.$OnRampTransactionPayload<ExtArgs>
        fields: Prisma.OnRampTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnRampTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnRampTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          findFirst: {
            args: Prisma.OnRampTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnRampTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          findMany: {
            args: Prisma.OnRampTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          create: {
            args: Prisma.OnRampTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          createMany: {
            args: Prisma.OnRampTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnRampTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>[]
          }
          delete: {
            args: Prisma.OnRampTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          update: {
            args: Prisma.OnRampTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          deleteMany: {
            args: Prisma.OnRampTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnRampTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OnRampTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnRampTransactionPayload>
          }
          aggregate: {
            args: Prisma.OnRampTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnRampTransaction>
          }
          groupBy: {
            args: Prisma.OnRampTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnRampTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      paytmTransactions: {
        payload: Prisma.$paytmTransactionsPayload<ExtArgs>
        fields: Prisma.paytmTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paytmTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paytmTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>
          }
          findFirst: {
            args: Prisma.paytmTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paytmTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>
          }
          findMany: {
            args: Prisma.paytmTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>[]
          }
          create: {
            args: Prisma.paytmTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>
          }
          createMany: {
            args: Prisma.paytmTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paytmTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>[]
          }
          delete: {
            args: Prisma.paytmTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>
          }
          update: {
            args: Prisma.paytmTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.paytmTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paytmTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.paytmTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paytmTransactionsPayload>
          }
          aggregate: {
            args: Prisma.PaytmTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaytmTransactions>
          }
          groupBy: {
            args: Prisma.paytmTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaytmTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paytmTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<PaytmTransactionsCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    OnRampTransaction: number
    sentTransactions: number
    receivedTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OnRampTransaction?: boolean | UserCountOutputTypeCountOnRampTransactionArgs
    sentTransactions?: boolean | UserCountOutputTypeCountSentTransactionsArgs
    receivedTransactions?: boolean | UserCountOutputTypeCountReceivedTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOnRampTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionsWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    transaction: number
    paytm: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | CustomerCountOutputTypeCountTransactionArgs
    paytm?: boolean | CustomerCountOutputTypeCountPaytmArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaytmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paytmTransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    Balance: number | null
    bankCustomerId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    Balance: number | null
    bankCustomerId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
    Balance: number | null
    bankCustomerId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
    Balance: number | null
    bankCustomerId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    number: number
    password: number
    Balance: number
    bankCustomerId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    Balance?: true
    bankCustomerId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    Balance?: true
    bankCustomerId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    Balance?: true
    bankCustomerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    Balance?: true
    bankCustomerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    Balance?: true
    bankCustomerId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    number: string
    password: string
    Balance: number
    bankCustomerId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    Balance?: boolean
    bankCustomerId?: boolean
    OnRampTransaction?: boolean | User$OnRampTransactionArgs<ExtArgs>
    sentTransactions?: boolean | User$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | User$receivedTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    Balance?: boolean
    bankCustomerId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    Balance?: boolean
    bankCustomerId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OnRampTransaction?: boolean | User$OnRampTransactionArgs<ExtArgs>
    sentTransactions?: boolean | User$sentTransactionsArgs<ExtArgs>
    receivedTransactions?: boolean | User$receivedTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      OnRampTransaction: Prisma.$OnRampTransactionPayload<ExtArgs>[]
      sentTransactions: Prisma.$WalletTransactionsPayload<ExtArgs>[]
      receivedTransactions: Prisma.$WalletTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      number: string
      password: string
      Balance: number
      bankCustomerId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OnRampTransaction<T extends User$OnRampTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$OnRampTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findMany"> | Null>
    sentTransactions<T extends User$sentTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    receivedTransactions<T extends User$receivedTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly Balance: FieldRef<"User", 'Int'>
    readonly bankCustomerId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.OnRampTransaction
   */
  export type User$OnRampTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    where?: OnRampTransactionWhereInput
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    cursor?: OnRampTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * User.sentTransactions
   */
  export type User$sentTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    where?: WalletTransactionsWhereInput
    orderBy?: WalletTransactionsOrderByWithRelationInput | WalletTransactionsOrderByWithRelationInput[]
    cursor?: WalletTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionsScalarFieldEnum | WalletTransactionsScalarFieldEnum[]
  }

  /**
   * User.receivedTransactions
   */
  export type User$receivedTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    where?: WalletTransactionsWhereInput
    orderBy?: WalletTransactionsOrderByWithRelationInput | WalletTransactionsOrderByWithRelationInput[]
    cursor?: WalletTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionsScalarFieldEnum | WalletTransactionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransactions
   */

  export type AggregateWalletTransactions = {
    _count: WalletTransactionsCountAggregateOutputType | null
    _avg: WalletTransactionsAvgAggregateOutputType | null
    _sum: WalletTransactionsSumAggregateOutputType | null
    _min: WalletTransactionsMinAggregateOutputType | null
    _max: WalletTransactionsMaxAggregateOutputType | null
  }

  export type WalletTransactionsAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    reciverId: number | null
    amount: number | null
  }

  export type WalletTransactionsSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    reciverId: number | null
    amount: number | null
  }

  export type WalletTransactionsMinAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    senderId: number | null
    reciverId: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type WalletTransactionsMaxAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    senderId: number | null
    reciverId: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type WalletTransactionsCountAggregateOutputType = {
    id: number
    status: number
    senderId: number
    reciverId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type WalletTransactionsAvgAggregateInputType = {
    id?: true
    senderId?: true
    reciverId?: true
    amount?: true
  }

  export type WalletTransactionsSumAggregateInputType = {
    id?: true
    senderId?: true
    reciverId?: true
    amount?: true
  }

  export type WalletTransactionsMinAggregateInputType = {
    id?: true
    status?: true
    senderId?: true
    reciverId?: true
    amount?: true
    createdAt?: true
  }

  export type WalletTransactionsMaxAggregateInputType = {
    id?: true
    status?: true
    senderId?: true
    reciverId?: true
    amount?: true
    createdAt?: true
  }

  export type WalletTransactionsCountAggregateInputType = {
    id?: true
    status?: true
    senderId?: true
    reciverId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type WalletTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to aggregate.
     */
    where?: WalletTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionsOrderByWithRelationInput | WalletTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionsMaxAggregateInputType
  }

  export type GetWalletTransactionsAggregateType<T extends WalletTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransactions[P]>
      : GetScalarType<T[P], AggregateWalletTransactions[P]>
  }




  export type WalletTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionsWhereInput
    orderBy?: WalletTransactionsOrderByWithAggregationInput | WalletTransactionsOrderByWithAggregationInput[]
    by: WalletTransactionsScalarFieldEnum[] | WalletTransactionsScalarFieldEnum
    having?: WalletTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionsCountAggregateInputType | true
    _avg?: WalletTransactionsAvgAggregateInputType
    _sum?: WalletTransactionsSumAggregateInputType
    _min?: WalletTransactionsMinAggregateInputType
    _max?: WalletTransactionsMaxAggregateInputType
  }

  export type WalletTransactionsGroupByOutputType = {
    id: number
    status: $Enums.Status
    senderId: number
    reciverId: number
    amount: number
    createdAt: Date
    _count: WalletTransactionsCountAggregateOutputType | null
    _avg: WalletTransactionsAvgAggregateOutputType | null
    _sum: WalletTransactionsSumAggregateOutputType | null
    _min: WalletTransactionsMinAggregateOutputType | null
    _max: WalletTransactionsMaxAggregateOutputType | null
  }

  type GetWalletTransactionsGroupByPayload<T extends WalletTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    senderId?: boolean
    reciverId?: boolean
    amount?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransactions"]>

  export type WalletTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    senderId?: boolean
    reciverId?: boolean
    amount?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransactions"]>

  export type WalletTransactionsSelectScalar = {
    id?: boolean
    status?: boolean
    senderId?: boolean
    reciverId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type WalletTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransactions"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.Status
      senderId: number
      reciverId: number
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["walletTransactions"]>
    composites: {}
  }

  type WalletTransactionsGetPayload<S extends boolean | null | undefined | WalletTransactionsDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionsPayload, S>

  type WalletTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletTransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletTransactionsCountAggregateInputType | true
    }

  export interface WalletTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransactions'], meta: { name: 'WalletTransactions' } }
    /**
     * Find zero or one WalletTransactions that matches the filter.
     * @param {WalletTransactionsFindUniqueArgs} args - Arguments to find a WalletTransactions
     * @example
     * // Get one WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionsFindUniqueArgs>(args: SelectSubset<T, WalletTransactionsFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WalletTransactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletTransactionsFindUniqueOrThrowArgs} args - Arguments to find a WalletTransactions
     * @example
     * // Get one WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsFindFirstArgs} args - Arguments to find a WalletTransactions
     * @example
     * // Get one WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionsFindFirstArgs>(args?: SelectSubset<T, WalletTransactionsFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WalletTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsFindFirstOrThrowArgs} args - Arguments to find a WalletTransactions
     * @example
     * // Get one WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionsWithIdOnly = await prisma.walletTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionsFindManyArgs>(args?: SelectSubset<T, WalletTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WalletTransactions.
     * @param {WalletTransactionsCreateArgs} args - Arguments to create a WalletTransactions.
     * @example
     * // Create one WalletTransactions
     * const WalletTransactions = await prisma.walletTransactions.create({
     *   data: {
     *     // ... data to create a WalletTransactions
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionsCreateArgs>(args: SelectSubset<T, WalletTransactionsCreateArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionsCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionsCreateManyArgs>(args?: SelectSubset<T, WalletTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletTransactions and returns the data saved in the database.
     * @param {WalletTransactionsCreateManyAndReturnArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletTransactions and only return the `id`
     * const walletTransactionsWithIdOnly = await prisma.walletTransactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WalletTransactions.
     * @param {WalletTransactionsDeleteArgs} args - Arguments to delete one WalletTransactions.
     * @example
     * // Delete one WalletTransactions
     * const WalletTransactions = await prisma.walletTransactions.delete({
     *   where: {
     *     // ... filter to delete one WalletTransactions
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionsDeleteArgs>(args: SelectSubset<T, WalletTransactionsDeleteArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WalletTransactions.
     * @param {WalletTransactionsUpdateArgs} args - Arguments to update one WalletTransactions.
     * @example
     * // Update one WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionsUpdateArgs>(args: SelectSubset<T, WalletTransactionsUpdateArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionsDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionsDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionsUpdateManyArgs>(args: SelectSubset<T, WalletTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletTransactions.
     * @param {WalletTransactionsUpsertArgs} args - Arguments to update or create a WalletTransactions.
     * @example
     * // Update or create a WalletTransactions
     * const walletTransactions = await prisma.walletTransactions.upsert({
     *   create: {
     *     // ... data to create a WalletTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransactions we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionsUpsertArgs>(args: SelectSubset<T, WalletTransactionsUpsertArgs<ExtArgs>>): Prisma__WalletTransactionsClient<$Result.GetResult<Prisma.$WalletTransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransactions.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionsCountArgs>(
      args?: Subset<T, WalletTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletTransactionsAggregateArgs>(args: Subset<T, WalletTransactionsAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionsAggregateType<T>>

    /**
     * Group by WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionsGroupByArgs} args - Group by arguments.
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
      T extends WalletTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransactions model
   */
  readonly fields: WalletTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WalletTransactions model
   */ 
  interface WalletTransactionsFieldRefs {
    readonly id: FieldRef<"WalletTransactions", 'Int'>
    readonly status: FieldRef<"WalletTransactions", 'Status'>
    readonly senderId: FieldRef<"WalletTransactions", 'Int'>
    readonly reciverId: FieldRef<"WalletTransactions", 'Int'>
    readonly amount: FieldRef<"WalletTransactions", 'Int'>
    readonly createdAt: FieldRef<"WalletTransactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransactions findUnique
   */
  export type WalletTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where: WalletTransactionsWhereUniqueInput
  }

  /**
   * WalletTransactions findUniqueOrThrow
   */
  export type WalletTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where: WalletTransactionsWhereUniqueInput
  }

  /**
   * WalletTransactions findFirst
   */
  export type WalletTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionsOrderByWithRelationInput | WalletTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionsScalarFieldEnum | WalletTransactionsScalarFieldEnum[]
  }

  /**
   * WalletTransactions findFirstOrThrow
   */
  export type WalletTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionsOrderByWithRelationInput | WalletTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionsScalarFieldEnum | WalletTransactionsScalarFieldEnum[]
  }

  /**
   * WalletTransactions findMany
   */
  export type WalletTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionsOrderByWithRelationInput | WalletTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionsScalarFieldEnum | WalletTransactionsScalarFieldEnum[]
  }

  /**
   * WalletTransactions create
   */
  export type WalletTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransactions.
     */
    data: XOR<WalletTransactionsCreateInput, WalletTransactionsUncheckedCreateInput>
  }

  /**
   * WalletTransactions createMany
   */
  export type WalletTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionsCreateManyInput | WalletTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransactions createManyAndReturn
   */
  export type WalletTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionsCreateManyInput | WalletTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransactions update
   */
  export type WalletTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransactions.
     */
    data: XOR<WalletTransactionsUpdateInput, WalletTransactionsUncheckedUpdateInput>
    /**
     * Choose, which WalletTransactions to update.
     */
    where: WalletTransactionsWhereUniqueInput
  }

  /**
   * WalletTransactions updateMany
   */
  export type WalletTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionsUpdateManyMutationInput, WalletTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionsWhereInput
  }

  /**
   * WalletTransactions upsert
   */
  export type WalletTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransactions to update in case it exists.
     */
    where: WalletTransactionsWhereUniqueInput
    /**
     * In case the WalletTransactions found by the `where` argument doesn't exist, create a new WalletTransactions with this data.
     */
    create: XOR<WalletTransactionsCreateInput, WalletTransactionsUncheckedCreateInput>
    /**
     * In case the WalletTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionsUpdateInput, WalletTransactionsUncheckedUpdateInput>
  }

  /**
   * WalletTransactions delete
   */
  export type WalletTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
    /**
     * Filter which WalletTransactions to delete.
     */
    where: WalletTransactionsWhereUniqueInput
  }

  /**
   * WalletTransactions deleteMany
   */
  export type WalletTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionsWhereInput
  }

  /**
   * WalletTransactions without action
   */
  export type WalletTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransactions
     */
    select?: WalletTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionsInclude<ExtArgs> | null
  }


  /**
   * Model OnRampTransaction
   */

  export type AggregateOnRampTransaction = {
    _count: OnRampTransactionCountAggregateOutputType | null
    _avg: OnRampTransactionAvgAggregateOutputType | null
    _sum: OnRampTransactionSumAggregateOutputType | null
    _min: OnRampTransactionMinAggregateOutputType | null
    _max: OnRampTransactionMaxAggregateOutputType | null
  }

  export type OnRampTransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type OnRampTransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type OnRampTransactionMinAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    token: string | null
    provider: string | null
    amount: number | null
    startTime: Date | null
    userId: number | null
  }

  export type OnRampTransactionMaxAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    token: string | null
    provider: string | null
    amount: number | null
    startTime: Date | null
    userId: number | null
  }

  export type OnRampTransactionCountAggregateOutputType = {
    id: number
    status: number
    token: number
    provider: number
    amount: number
    startTime: number
    userId: number
    _all: number
  }


  export type OnRampTransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type OnRampTransactionSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type OnRampTransactionMinAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
  }

  export type OnRampTransactionMaxAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
  }

  export type OnRampTransactionCountAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    startTime?: true
    userId?: true
    _all?: true
  }

  export type OnRampTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTransaction to aggregate.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnRampTransactions
    **/
    _count?: true | OnRampTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnRampTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnRampTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnRampTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnRampTransactionMaxAggregateInputType
  }

  export type GetOnRampTransactionAggregateType<T extends OnRampTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateOnRampTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnRampTransaction[P]>
      : GetScalarType<T[P], AggregateOnRampTransaction[P]>
  }




  export type OnRampTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnRampTransactionWhereInput
    orderBy?: OnRampTransactionOrderByWithAggregationInput | OnRampTransactionOrderByWithAggregationInput[]
    by: OnRampTransactionScalarFieldEnum[] | OnRampTransactionScalarFieldEnum
    having?: OnRampTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnRampTransactionCountAggregateInputType | true
    _avg?: OnRampTransactionAvgAggregateInputType
    _sum?: OnRampTransactionSumAggregateInputType
    _min?: OnRampTransactionMinAggregateInputType
    _max?: OnRampTransactionMaxAggregateInputType
  }

  export type OnRampTransactionGroupByOutputType = {
    id: number
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date
    userId: number
    _count: OnRampTransactionCountAggregateOutputType | null
    _avg: OnRampTransactionAvgAggregateOutputType | null
    _sum: OnRampTransactionSumAggregateOutputType | null
    _min: OnRampTransactionMinAggregateOutputType | null
    _max: OnRampTransactionMaxAggregateOutputType | null
  }

  type GetOnRampTransactionGroupByPayload<T extends OnRampTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnRampTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnRampTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnRampTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], OnRampTransactionGroupByOutputType[P]>
        }
      >
    >


  export type OnRampTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransaction"]>

  export type OnRampTransactionSelectScalar = {
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    startTime?: boolean
    userId?: boolean
  }

  export type OnRampTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnRampTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnRampTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnRampTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.Status
      token: string
      provider: string
      amount: number
      startTime: Date
      userId: number
    }, ExtArgs["result"]["onRampTransaction"]>
    composites: {}
  }

  type OnRampTransactionGetPayload<S extends boolean | null | undefined | OnRampTransactionDefaultArgs> = $Result.GetResult<Prisma.$OnRampTransactionPayload, S>

  type OnRampTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OnRampTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OnRampTransactionCountAggregateInputType | true
    }

  export interface OnRampTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnRampTransaction'], meta: { name: 'OnRampTransaction' } }
    /**
     * Find zero or one OnRampTransaction that matches the filter.
     * @param {OnRampTransactionFindUniqueArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnRampTransactionFindUniqueArgs>(args: SelectSubset<T, OnRampTransactionFindUniqueArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OnRampTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OnRampTransactionFindUniqueOrThrowArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnRampTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, OnRampTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OnRampTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindFirstArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnRampTransactionFindFirstArgs>(args?: SelectSubset<T, OnRampTransactionFindFirstArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OnRampTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindFirstOrThrowArgs} args - Arguments to find a OnRampTransaction
     * @example
     * // Get one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnRampTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, OnRampTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OnRampTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransaction.findMany()
     * 
     * // Get first 10 OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnRampTransactionFindManyArgs>(args?: SelectSubset<T, OnRampTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OnRampTransaction.
     * @param {OnRampTransactionCreateArgs} args - Arguments to create a OnRampTransaction.
     * @example
     * // Create one OnRampTransaction
     * const OnRampTransaction = await prisma.onRampTransaction.create({
     *   data: {
     *     // ... data to create a OnRampTransaction
     *   }
     * })
     * 
     */
    create<T extends OnRampTransactionCreateArgs>(args: SelectSubset<T, OnRampTransactionCreateArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OnRampTransactions.
     * @param {OnRampTransactionCreateManyArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnRampTransactionCreateManyArgs>(args?: SelectSubset<T, OnRampTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnRampTransactions and returns the data saved in the database.
     * @param {OnRampTransactionCreateManyAndReturnArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnRampTransactions and only return the `id`
     * const onRampTransactionWithIdOnly = await prisma.onRampTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnRampTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, OnRampTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OnRampTransaction.
     * @param {OnRampTransactionDeleteArgs} args - Arguments to delete one OnRampTransaction.
     * @example
     * // Delete one OnRampTransaction
     * const OnRampTransaction = await prisma.onRampTransaction.delete({
     *   where: {
     *     // ... filter to delete one OnRampTransaction
     *   }
     * })
     * 
     */
    delete<T extends OnRampTransactionDeleteArgs>(args: SelectSubset<T, OnRampTransactionDeleteArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OnRampTransaction.
     * @param {OnRampTransactionUpdateArgs} args - Arguments to update one OnRampTransaction.
     * @example
     * // Update one OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnRampTransactionUpdateArgs>(args: SelectSubset<T, OnRampTransactionUpdateArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OnRampTransactions.
     * @param {OnRampTransactionDeleteManyArgs} args - Arguments to filter OnRampTransactions to delete.
     * @example
     * // Delete a few OnRampTransactions
     * const { count } = await prisma.onRampTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnRampTransactionDeleteManyArgs>(args?: SelectSubset<T, OnRampTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransaction = await prisma.onRampTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnRampTransactionUpdateManyArgs>(args: SelectSubset<T, OnRampTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OnRampTransaction.
     * @param {OnRampTransactionUpsertArgs} args - Arguments to update or create a OnRampTransaction.
     * @example
     * // Update or create a OnRampTransaction
     * const onRampTransaction = await prisma.onRampTransaction.upsert({
     *   create: {
     *     // ... data to create a OnRampTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnRampTransaction we want to update
     *   }
     * })
     */
    upsert<T extends OnRampTransactionUpsertArgs>(args: SelectSubset<T, OnRampTransactionUpsertArgs<ExtArgs>>): Prisma__OnRampTransactionClient<$Result.GetResult<Prisma.$OnRampTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionCountArgs} args - Arguments to filter OnRampTransactions to count.
     * @example
     * // Count the number of OnRampTransactions
     * const count = await prisma.onRampTransaction.count({
     *   where: {
     *     // ... the filter for the OnRampTransactions we want to count
     *   }
     * })
    **/
    count<T extends OnRampTransactionCountArgs>(
      args?: Subset<T, OnRampTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnRampTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnRampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnRampTransactionAggregateArgs>(args: Subset<T, OnRampTransactionAggregateArgs>): Prisma.PrismaPromise<GetOnRampTransactionAggregateType<T>>

    /**
     * Group by OnRampTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionGroupByArgs} args - Group by arguments.
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
      T extends OnRampTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnRampTransactionGroupByArgs['orderBy'] }
        : { orderBy?: OnRampTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OnRampTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnRampTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnRampTransaction model
   */
  readonly fields: OnRampTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnRampTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnRampTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OnRampTransaction model
   */ 
  interface OnRampTransactionFieldRefs {
    readonly id: FieldRef<"OnRampTransaction", 'Int'>
    readonly status: FieldRef<"OnRampTransaction", 'Status'>
    readonly token: FieldRef<"OnRampTransaction", 'String'>
    readonly provider: FieldRef<"OnRampTransaction", 'String'>
    readonly amount: FieldRef<"OnRampTransaction", 'Int'>
    readonly startTime: FieldRef<"OnRampTransaction", 'DateTime'>
    readonly userId: FieldRef<"OnRampTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OnRampTransaction findUnique
   */
  export type OnRampTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction findUniqueOrThrow
   */
  export type OnRampTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction findFirst
   */
  export type OnRampTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTransactions.
     */
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * OnRampTransaction findFirstOrThrow
   */
  export type OnRampTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransaction to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnRampTransactions.
     */
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * OnRampTransaction findMany
   */
  export type OnRampTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter, which OnRampTransactions to fetch.
     */
    where?: OnRampTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnRampTransactions to fetch.
     */
    orderBy?: OnRampTransactionOrderByWithRelationInput | OnRampTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnRampTransactions.
     */
    cursor?: OnRampTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnRampTransactions.
     */
    skip?: number
    distinct?: OnRampTransactionScalarFieldEnum | OnRampTransactionScalarFieldEnum[]
  }

  /**
   * OnRampTransaction create
   */
  export type OnRampTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a OnRampTransaction.
     */
    data: XOR<OnRampTransactionCreateInput, OnRampTransactionUncheckedCreateInput>
  }

  /**
   * OnRampTransaction createMany
   */
  export type OnRampTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnRampTransactions.
     */
    data: OnRampTransactionCreateManyInput | OnRampTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OnRampTransaction createManyAndReturn
   */
  export type OnRampTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OnRampTransactions.
     */
    data: OnRampTransactionCreateManyInput | OnRampTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OnRampTransaction update
   */
  export type OnRampTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a OnRampTransaction.
     */
    data: XOR<OnRampTransactionUpdateInput, OnRampTransactionUncheckedUpdateInput>
    /**
     * Choose, which OnRampTransaction to update.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction updateMany
   */
  export type OnRampTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnRampTransactions.
     */
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyInput>
    /**
     * Filter which OnRampTransactions to update
     */
    where?: OnRampTransactionWhereInput
  }

  /**
   * OnRampTransaction upsert
   */
  export type OnRampTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the OnRampTransaction to update in case it exists.
     */
    where: OnRampTransactionWhereUniqueInput
    /**
     * In case the OnRampTransaction found by the `where` argument doesn't exist, create a new OnRampTransaction with this data.
     */
    create: XOR<OnRampTransactionCreateInput, OnRampTransactionUncheckedCreateInput>
    /**
     * In case the OnRampTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnRampTransactionUpdateInput, OnRampTransactionUncheckedUpdateInput>
  }

  /**
   * OnRampTransaction delete
   */
  export type OnRampTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
    /**
     * Filter which OnRampTransaction to delete.
     */
    where: OnRampTransactionWhereUniqueInput
  }

  /**
   * OnRampTransaction deleteMany
   */
  export type OnRampTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnRampTransactions to delete
     */
    where?: OnRampTransactionWhereInput
  }

  /**
   * OnRampTransaction without action
   */
  export type OnRampTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnRampTransaction
     */
    select?: OnRampTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnRampTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customerId: number | null
    balance: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customerId: number | null
    balance: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customerId: number | null
    email: string | null
    customerName: string | null
    mobile: string | null
    accountNumber: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    accType: $Enums.accType | null
  }

  export type CustomerMaxAggregateOutputType = {
    customerId: number | null
    email: string | null
    customerName: string | null
    mobile: string | null
    accountNumber: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
    accType: $Enums.accType | null
  }

  export type CustomerCountAggregateOutputType = {
    customerId: number
    email: number
    customerName: number
    mobile: number
    accountNumber: number
    balance: number
    createdAt: number
    updatedAt: number
    accType: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customerId?: true
    balance?: true
  }

  export type CustomerSumAggregateInputType = {
    customerId?: true
    balance?: true
  }

  export type CustomerMinAggregateInputType = {
    customerId?: true
    email?: true
    customerName?: true
    mobile?: true
    accountNumber?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    accType?: true
  }

  export type CustomerMaxAggregateInputType = {
    customerId?: true
    email?: true
    customerName?: true
    mobile?: true
    accountNumber?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    accType?: true
  }

  export type CustomerCountAggregateInputType = {
    customerId?: true
    email?: true
    customerName?: true
    mobile?: true
    accountNumber?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    accType?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customerId: number
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance: number
    createdAt: Date
    updatedAt: Date
    accType: $Enums.accType
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    email?: boolean
    customerName?: boolean
    mobile?: boolean
    accountNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accType?: boolean
    transaction?: boolean | Customer$transactionArgs<ExtArgs>
    paytm?: boolean | Customer$paytmArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    email?: boolean
    customerName?: boolean
    mobile?: boolean
    accountNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accType?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customerId?: boolean
    email?: boolean
    customerName?: boolean
    mobile?: boolean
    accountNumber?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accType?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Customer$transactionArgs<ExtArgs>
    paytm?: boolean | Customer$paytmArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      transaction: Prisma.$TransactionsPayload<ExtArgs>[]
      paytm: Prisma.$paytmTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: number
      email: string
      customerName: string
      mobile: string
      accountNumber: string
      balance: number
      createdAt: Date
      updatedAt: Date
      accType: $Enums.accType
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customerId`
     * const customerWithCustomerIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends Customer$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Customer$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany"> | Null>
    paytm<T extends Customer$paytmArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paytmArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly customerId: FieldRef<"Customer", 'Int'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly customerName: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly accountNumber: FieldRef<"Customer", 'String'>
    readonly balance: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly accType: FieldRef<"Customer", 'accType'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.transaction
   */
  export type Customer$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Customer.paytm
   */
  export type Customer$paytmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    where?: paytmTransactionsWhereInput
    orderBy?: paytmTransactionsOrderByWithRelationInput | paytmTransactionsOrderByWithRelationInput[]
    cursor?: paytmTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaytmTransactionsScalarFieldEnum | PaytmTransactionsScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    execBy: number | null
    toUserId: number | null
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    execBy: number | null
    toUserId: number | null
    amount: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    transType: $Enums.transType | null
    execBy: number | null
    transStatus: $Enums.transStat | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    token: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    transType: $Enums.transType | null
    execBy: number | null
    transStatus: $Enums.transStat | null
    toUserId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    token: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    transType: number
    execBy: number
    transStatus: number
    toUserId: number
    createdAt: number
    updatedAt: number
    amount: number
    token: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    execBy?: true
    toUserId?: true
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    execBy?: true
    toUserId?: true
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    transType?: true
    execBy?: true
    transStatus?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    token?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    transType?: true
    execBy?: true
    transStatus?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    token?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    transType?: true
    execBy?: true
    transStatus?: true
    toUserId?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    token?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    transType: $Enums.transType
    execBy: number
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date
    updatedAt: Date
    amount: number
    token: string
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transType?: boolean
    execBy?: boolean
    transStatus?: boolean
    toUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    token?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transType?: boolean
    execBy?: boolean
    transStatus?: boolean
    toUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    token?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    transType?: boolean
    execBy?: boolean
    transStatus?: boolean
    toUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    token?: boolean
  }

  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transType: $Enums.transType
      execBy: number
      transStatus: $Enums.transStat
      toUserId: number
      createdAt: Date
      updatedAt: Date
      amount: number
      token: string
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
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
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Transactions model
   */ 
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly transType: FieldRef<"Transactions", 'transType'>
    readonly execBy: FieldRef<"Transactions", 'Int'>
    readonly transStatus: FieldRef<"Transactions", 'transStat'>
    readonly toUserId: FieldRef<"Transactions", 'Int'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
    readonly updatedAt: FieldRef<"Transactions", 'DateTime'>
    readonly amount: FieldRef<"Transactions", 'Int'>
    readonly token: FieldRef<"Transactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model paytmTransactions
   */

  export type AggregatePaytmTransactions = {
    _count: PaytmTransactionsCountAggregateOutputType | null
    _avg: PaytmTransactionsAvgAggregateOutputType | null
    _sum: PaytmTransactionsSumAggregateOutputType | null
    _min: PaytmTransactionsMinAggregateOutputType | null
    _max: PaytmTransactionsMaxAggregateOutputType | null
  }

  export type PaytmTransactionsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    customerId: number | null
  }

  export type PaytmTransactionsSumAggregateOutputType = {
    id: number | null
    amount: number | null
    customerId: number | null
  }

  export type PaytmTransactionsMinAggregateOutputType = {
    id: number | null
    amount: number | null
    token: string | null
    customerId: number | null
  }

  export type PaytmTransactionsMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    token: string | null
    customerId: number | null
  }

  export type PaytmTransactionsCountAggregateOutputType = {
    id: number
    amount: number
    token: number
    customerId: number
    _all: number
  }


  export type PaytmTransactionsAvgAggregateInputType = {
    id?: true
    amount?: true
    customerId?: true
  }

  export type PaytmTransactionsSumAggregateInputType = {
    id?: true
    amount?: true
    customerId?: true
  }

  export type PaytmTransactionsMinAggregateInputType = {
    id?: true
    amount?: true
    token?: true
    customerId?: true
  }

  export type PaytmTransactionsMaxAggregateInputType = {
    id?: true
    amount?: true
    token?: true
    customerId?: true
  }

  export type PaytmTransactionsCountAggregateInputType = {
    id?: true
    amount?: true
    token?: true
    customerId?: true
    _all?: true
  }

  export type PaytmTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paytmTransactions to aggregate.
     */
    where?: paytmTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paytmTransactions to fetch.
     */
    orderBy?: paytmTransactionsOrderByWithRelationInput | paytmTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paytmTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paytmTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paytmTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paytmTransactions
    **/
    _count?: true | PaytmTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaytmTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaytmTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaytmTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaytmTransactionsMaxAggregateInputType
  }

  export type GetPaytmTransactionsAggregateType<T extends PaytmTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaytmTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaytmTransactions[P]>
      : GetScalarType<T[P], AggregatePaytmTransactions[P]>
  }




  export type paytmTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paytmTransactionsWhereInput
    orderBy?: paytmTransactionsOrderByWithAggregationInput | paytmTransactionsOrderByWithAggregationInput[]
    by: PaytmTransactionsScalarFieldEnum[] | PaytmTransactionsScalarFieldEnum
    having?: paytmTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaytmTransactionsCountAggregateInputType | true
    _avg?: PaytmTransactionsAvgAggregateInputType
    _sum?: PaytmTransactionsSumAggregateInputType
    _min?: PaytmTransactionsMinAggregateInputType
    _max?: PaytmTransactionsMaxAggregateInputType
  }

  export type PaytmTransactionsGroupByOutputType = {
    id: number
    amount: number
    token: string
    customerId: number
    _count: PaytmTransactionsCountAggregateOutputType | null
    _avg: PaytmTransactionsAvgAggregateOutputType | null
    _sum: PaytmTransactionsSumAggregateOutputType | null
    _min: PaytmTransactionsMinAggregateOutputType | null
    _max: PaytmTransactionsMaxAggregateOutputType | null
  }

  type GetPaytmTransactionsGroupByPayload<T extends paytmTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaytmTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaytmTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaytmTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], PaytmTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type paytmTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    token?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paytmTransactions"]>

  export type paytmTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    token?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paytmTransactions"]>

  export type paytmTransactionsSelectScalar = {
    id?: boolean
    amount?: boolean
    token?: boolean
    customerId?: boolean
  }

  export type paytmTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type paytmTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $paytmTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paytmTransactions"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      token: string
      customerId: number
    }, ExtArgs["result"]["paytmTransactions"]>
    composites: {}
  }

  type paytmTransactionsGetPayload<S extends boolean | null | undefined | paytmTransactionsDefaultArgs> = $Result.GetResult<Prisma.$paytmTransactionsPayload, S>

  type paytmTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paytmTransactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaytmTransactionsCountAggregateInputType | true
    }

  export interface paytmTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paytmTransactions'], meta: { name: 'paytmTransactions' } }
    /**
     * Find zero or one PaytmTransactions that matches the filter.
     * @param {paytmTransactionsFindUniqueArgs} args - Arguments to find a PaytmTransactions
     * @example
     * // Get one PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paytmTransactionsFindUniqueArgs>(args: SelectSubset<T, paytmTransactionsFindUniqueArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaytmTransactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {paytmTransactionsFindUniqueOrThrowArgs} args - Arguments to find a PaytmTransactions
     * @example
     * // Get one PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paytmTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, paytmTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaytmTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paytmTransactionsFindFirstArgs} args - Arguments to find a PaytmTransactions
     * @example
     * // Get one PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paytmTransactionsFindFirstArgs>(args?: SelectSubset<T, paytmTransactionsFindFirstArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaytmTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paytmTransactionsFindFirstOrThrowArgs} args - Arguments to find a PaytmTransactions
     * @example
     * // Get one PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paytmTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, paytmTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaytmTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paytmTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.findMany()
     * 
     * // Get first 10 PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paytmTransactionsWithIdOnly = await prisma.paytmTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paytmTransactionsFindManyArgs>(args?: SelectSubset<T, paytmTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaytmTransactions.
     * @param {paytmTransactionsCreateArgs} args - Arguments to create a PaytmTransactions.
     * @example
     * // Create one PaytmTransactions
     * const PaytmTransactions = await prisma.paytmTransactions.create({
     *   data: {
     *     // ... data to create a PaytmTransactions
     *   }
     * })
     * 
     */
    create<T extends paytmTransactionsCreateArgs>(args: SelectSubset<T, paytmTransactionsCreateArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaytmTransactions.
     * @param {paytmTransactionsCreateManyArgs} args - Arguments to create many PaytmTransactions.
     * @example
     * // Create many PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paytmTransactionsCreateManyArgs>(args?: SelectSubset<T, paytmTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaytmTransactions and returns the data saved in the database.
     * @param {paytmTransactionsCreateManyAndReturnArgs} args - Arguments to create many PaytmTransactions.
     * @example
     * // Create many PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaytmTransactions and only return the `id`
     * const paytmTransactionsWithIdOnly = await prisma.paytmTransactions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paytmTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, paytmTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaytmTransactions.
     * @param {paytmTransactionsDeleteArgs} args - Arguments to delete one PaytmTransactions.
     * @example
     * // Delete one PaytmTransactions
     * const PaytmTransactions = await prisma.paytmTransactions.delete({
     *   where: {
     *     // ... filter to delete one PaytmTransactions
     *   }
     * })
     * 
     */
    delete<T extends paytmTransactionsDeleteArgs>(args: SelectSubset<T, paytmTransactionsDeleteArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaytmTransactions.
     * @param {paytmTransactionsUpdateArgs} args - Arguments to update one PaytmTransactions.
     * @example
     * // Update one PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paytmTransactionsUpdateArgs>(args: SelectSubset<T, paytmTransactionsUpdateArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaytmTransactions.
     * @param {paytmTransactionsDeleteManyArgs} args - Arguments to filter PaytmTransactions to delete.
     * @example
     * // Delete a few PaytmTransactions
     * const { count } = await prisma.paytmTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paytmTransactionsDeleteManyArgs>(args?: SelectSubset<T, paytmTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaytmTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paytmTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paytmTransactionsUpdateManyArgs>(args: SelectSubset<T, paytmTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaytmTransactions.
     * @param {paytmTransactionsUpsertArgs} args - Arguments to update or create a PaytmTransactions.
     * @example
     * // Update or create a PaytmTransactions
     * const paytmTransactions = await prisma.paytmTransactions.upsert({
     *   create: {
     *     // ... data to create a PaytmTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaytmTransactions we want to update
     *   }
     * })
     */
    upsert<T extends paytmTransactionsUpsertArgs>(args: SelectSubset<T, paytmTransactionsUpsertArgs<ExtArgs>>): Prisma__paytmTransactionsClient<$Result.GetResult<Prisma.$paytmTransactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaytmTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paytmTransactionsCountArgs} args - Arguments to filter PaytmTransactions to count.
     * @example
     * // Count the number of PaytmTransactions
     * const count = await prisma.paytmTransactions.count({
     *   where: {
     *     // ... the filter for the PaytmTransactions we want to count
     *   }
     * })
    **/
    count<T extends paytmTransactionsCountArgs>(
      args?: Subset<T, paytmTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaytmTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaytmTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaytmTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaytmTransactionsAggregateArgs>(args: Subset<T, PaytmTransactionsAggregateArgs>): Prisma.PrismaPromise<GetPaytmTransactionsAggregateType<T>>

    /**
     * Group by PaytmTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paytmTransactionsGroupByArgs} args - Group by arguments.
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
      T extends paytmTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paytmTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: paytmTransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paytmTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaytmTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paytmTransactions model
   */
  readonly fields: paytmTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paytmTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paytmTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the paytmTransactions model
   */ 
  interface paytmTransactionsFieldRefs {
    readonly id: FieldRef<"paytmTransactions", 'Int'>
    readonly amount: FieldRef<"paytmTransactions", 'Int'>
    readonly token: FieldRef<"paytmTransactions", 'String'>
    readonly customerId: FieldRef<"paytmTransactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * paytmTransactions findUnique
   */
  export type paytmTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which paytmTransactions to fetch.
     */
    where: paytmTransactionsWhereUniqueInput
  }

  /**
   * paytmTransactions findUniqueOrThrow
   */
  export type paytmTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which paytmTransactions to fetch.
     */
    where: paytmTransactionsWhereUniqueInput
  }

  /**
   * paytmTransactions findFirst
   */
  export type paytmTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which paytmTransactions to fetch.
     */
    where?: paytmTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paytmTransactions to fetch.
     */
    orderBy?: paytmTransactionsOrderByWithRelationInput | paytmTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paytmTransactions.
     */
    cursor?: paytmTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paytmTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paytmTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paytmTransactions.
     */
    distinct?: PaytmTransactionsScalarFieldEnum | PaytmTransactionsScalarFieldEnum[]
  }

  /**
   * paytmTransactions findFirstOrThrow
   */
  export type paytmTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which paytmTransactions to fetch.
     */
    where?: paytmTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paytmTransactions to fetch.
     */
    orderBy?: paytmTransactionsOrderByWithRelationInput | paytmTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paytmTransactions.
     */
    cursor?: paytmTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paytmTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paytmTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paytmTransactions.
     */
    distinct?: PaytmTransactionsScalarFieldEnum | PaytmTransactionsScalarFieldEnum[]
  }

  /**
   * paytmTransactions findMany
   */
  export type paytmTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which paytmTransactions to fetch.
     */
    where?: paytmTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paytmTransactions to fetch.
     */
    orderBy?: paytmTransactionsOrderByWithRelationInput | paytmTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paytmTransactions.
     */
    cursor?: paytmTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paytmTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paytmTransactions.
     */
    skip?: number
    distinct?: PaytmTransactionsScalarFieldEnum | PaytmTransactionsScalarFieldEnum[]
  }

  /**
   * paytmTransactions create
   */
  export type paytmTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a paytmTransactions.
     */
    data: XOR<paytmTransactionsCreateInput, paytmTransactionsUncheckedCreateInput>
  }

  /**
   * paytmTransactions createMany
   */
  export type paytmTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paytmTransactions.
     */
    data: paytmTransactionsCreateManyInput | paytmTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paytmTransactions createManyAndReturn
   */
  export type paytmTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many paytmTransactions.
     */
    data: paytmTransactionsCreateManyInput | paytmTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * paytmTransactions update
   */
  export type paytmTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a paytmTransactions.
     */
    data: XOR<paytmTransactionsUpdateInput, paytmTransactionsUncheckedUpdateInput>
    /**
     * Choose, which paytmTransactions to update.
     */
    where: paytmTransactionsWhereUniqueInput
  }

  /**
   * paytmTransactions updateMany
   */
  export type paytmTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paytmTransactions.
     */
    data: XOR<paytmTransactionsUpdateManyMutationInput, paytmTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which paytmTransactions to update
     */
    where?: paytmTransactionsWhereInput
  }

  /**
   * paytmTransactions upsert
   */
  export type paytmTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the paytmTransactions to update in case it exists.
     */
    where: paytmTransactionsWhereUniqueInput
    /**
     * In case the paytmTransactions found by the `where` argument doesn't exist, create a new paytmTransactions with this data.
     */
    create: XOR<paytmTransactionsCreateInput, paytmTransactionsUncheckedCreateInput>
    /**
     * In case the paytmTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paytmTransactionsUpdateInput, paytmTransactionsUncheckedUpdateInput>
  }

  /**
   * paytmTransactions delete
   */
  export type paytmTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
    /**
     * Filter which paytmTransactions to delete.
     */
    where: paytmTransactionsWhereUniqueInput
  }

  /**
   * paytmTransactions deleteMany
   */
  export type paytmTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paytmTransactions to delete
     */
    where?: paytmTransactionsWhereInput
  }

  /**
   * paytmTransactions without action
   */
  export type paytmTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paytmTransactions
     */
    select?: paytmTransactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paytmTransactionsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    number: 'number',
    password: 'password',
    Balance: 'Balance',
    bankCustomerId: 'bankCustomerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletTransactionsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    senderId: 'senderId',
    reciverId: 'reciverId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type WalletTransactionsScalarFieldEnum = (typeof WalletTransactionsScalarFieldEnum)[keyof typeof WalletTransactionsScalarFieldEnum]


  export const OnRampTransactionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    token: 'token',
    provider: 'provider',
    amount: 'amount',
    startTime: 'startTime',
    userId: 'userId'
  };

  export type OnRampTransactionScalarFieldEnum = (typeof OnRampTransactionScalarFieldEnum)[keyof typeof OnRampTransactionScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    customerId: 'customerId',
    email: 'email',
    customerName: 'customerName',
    mobile: 'mobile',
    accountNumber: 'accountNumber',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accType: 'accType'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    transType: 'transType',
    execBy: 'execBy',
    transStatus: 'transStatus',
    toUserId: 'toUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    token: 'token'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const PaytmTransactionsScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    token: 'token',
    customerId: 'customerId'
  };

  export type PaytmTransactionsScalarFieldEnum = (typeof PaytmTransactionsScalarFieldEnum)[keyof typeof PaytmTransactionsScalarFieldEnum]


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
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'accType'
   */
  export type EnumaccTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'accType'>
    


  /**
   * Reference to a field of type 'accType[]'
   */
  export type ListEnumaccTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'accType[]'>
    


  /**
   * Reference to a field of type 'transType'
   */
  export type EnumtransTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transType'>
    


  /**
   * Reference to a field of type 'transType[]'
   */
  export type ListEnumtransTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transType[]'>
    


  /**
   * Reference to a field of type 'transStat'
   */
  export type EnumtransStatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transStat'>
    


  /**
   * Reference to a field of type 'transStat[]'
   */
  export type ListEnumtransStatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transStat[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Balance?: IntFilter<"User"> | number
    bankCustomerId?: IntNullableFilter<"User"> | number | null
    OnRampTransaction?: OnRampTransactionListRelationFilter
    sentTransactions?: WalletTransactionsListRelationFilter
    receivedTransactions?: WalletTransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrderInput | SortOrder
    OnRampTransaction?: OnRampTransactionOrderByRelationAggregateInput
    sentTransactions?: WalletTransactionsOrderByRelationAggregateInput
    receivedTransactions?: WalletTransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    Balance?: IntFilter<"User"> | number
    bankCustomerId?: IntNullableFilter<"User"> | number | null
    OnRampTransaction?: OnRampTransactionListRelationFilter
    sentTransactions?: WalletTransactionsListRelationFilter
    receivedTransactions?: WalletTransactionsListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    Balance?: IntWithAggregatesFilter<"User"> | number
    bankCustomerId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type WalletTransactionsWhereInput = {
    AND?: WalletTransactionsWhereInput | WalletTransactionsWhereInput[]
    OR?: WalletTransactionsWhereInput[]
    NOT?: WalletTransactionsWhereInput | WalletTransactionsWhereInput[]
    id?: IntFilter<"WalletTransactions"> | number
    status?: EnumStatusFilter<"WalletTransactions"> | $Enums.Status
    senderId?: IntFilter<"WalletTransactions"> | number
    reciverId?: IntFilter<"WalletTransactions"> | number
    amount?: IntFilter<"WalletTransactions"> | number
    createdAt?: DateTimeFilter<"WalletTransactions"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type WalletTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WalletTransactionsWhereInput | WalletTransactionsWhereInput[]
    OR?: WalletTransactionsWhereInput[]
    NOT?: WalletTransactionsWhereInput | WalletTransactionsWhereInput[]
    status?: EnumStatusFilter<"WalletTransactions"> | $Enums.Status
    senderId?: IntFilter<"WalletTransactions"> | number
    reciverId?: IntFilter<"WalletTransactions"> | number
    amount?: IntFilter<"WalletTransactions"> | number
    createdAt?: DateTimeFilter<"WalletTransactions"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WalletTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: WalletTransactionsCountOrderByAggregateInput
    _avg?: WalletTransactionsAvgOrderByAggregateInput
    _max?: WalletTransactionsMaxOrderByAggregateInput
    _min?: WalletTransactionsMinOrderByAggregateInput
    _sum?: WalletTransactionsSumOrderByAggregateInput
  }

  export type WalletTransactionsScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionsScalarWhereWithAggregatesInput | WalletTransactionsScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionsScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionsScalarWhereWithAggregatesInput | WalletTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WalletTransactions"> | number
    status?: EnumStatusWithAggregatesFilter<"WalletTransactions"> | $Enums.Status
    senderId?: IntWithAggregatesFilter<"WalletTransactions"> | number
    reciverId?: IntWithAggregatesFilter<"WalletTransactions"> | number
    amount?: IntWithAggregatesFilter<"WalletTransactions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WalletTransactions"> | Date | string
  }

  export type OnRampTransactionWhereInput = {
    AND?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    OR?: OnRampTransactionWhereInput[]
    NOT?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    id?: IntFilter<"OnRampTransaction"> | number
    status?: EnumStatusFilter<"OnRampTransaction"> | $Enums.Status
    token?: StringFilter<"OnRampTransaction"> | string
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OnRampTransactionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnRampTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    OR?: OnRampTransactionWhereInput[]
    NOT?: OnRampTransactionWhereInput | OnRampTransactionWhereInput[]
    status?: EnumStatusFilter<"OnRampTransaction"> | $Enums.Status
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type OnRampTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
    _count?: OnRampTransactionCountOrderByAggregateInput
    _avg?: OnRampTransactionAvgOrderByAggregateInput
    _max?: OnRampTransactionMaxOrderByAggregateInput
    _min?: OnRampTransactionMinOrderByAggregateInput
    _sum?: OnRampTransactionSumOrderByAggregateInput
  }

  export type OnRampTransactionScalarWhereWithAggregatesInput = {
    AND?: OnRampTransactionScalarWhereWithAggregatesInput | OnRampTransactionScalarWhereWithAggregatesInput[]
    OR?: OnRampTransactionScalarWhereWithAggregatesInput[]
    NOT?: OnRampTransactionScalarWhereWithAggregatesInput | OnRampTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OnRampTransaction"> | number
    status?: EnumStatusWithAggregatesFilter<"OnRampTransaction"> | $Enums.Status
    token?: StringWithAggregatesFilter<"OnRampTransaction"> | string
    provider?: StringWithAggregatesFilter<"OnRampTransaction"> | string
    amount?: IntWithAggregatesFilter<"OnRampTransaction"> | number
    startTime?: DateTimeWithAggregatesFilter<"OnRampTransaction"> | Date | string
    userId?: IntWithAggregatesFilter<"OnRampTransaction"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerId?: IntFilter<"Customer"> | number
    email?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    accountNumber?: StringFilter<"Customer"> | string
    balance?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    accType?: EnumaccTypeFilter<"Customer"> | $Enums.accType
    transaction?: TransactionsListRelationFilter
    paytm?: PaytmTransactionsListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customerId?: SortOrder
    email?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accType?: SortOrder
    transaction?: TransactionsOrderByRelationAggregateInput
    paytm?: paytmTransactionsOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customerId?: number
    email?: string
    mobile?: string
    accountNumber?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerName?: StringFilter<"Customer"> | string
    balance?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    accType?: EnumaccTypeFilter<"Customer"> | $Enums.accType
    transaction?: TransactionsListRelationFilter
    paytm?: PaytmTransactionsListRelationFilter
  }, "customerId" | "email" | "mobile" | "accountNumber">

  export type CustomerOrderByWithAggregationInput = {
    customerId?: SortOrder
    email?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accType?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customerId?: IntWithAggregatesFilter<"Customer"> | number
    email?: StringWithAggregatesFilter<"Customer"> | string
    customerName?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringWithAggregatesFilter<"Customer"> | string
    accountNumber?: StringWithAggregatesFilter<"Customer"> | string
    balance?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    accType?: EnumaccTypeWithAggregatesFilter<"Customer"> | $Enums.accType
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    transType?: EnumtransTypeFilter<"Transactions"> | $Enums.transType
    execBy?: IntFilter<"Transactions"> | number
    transStatus?: EnumtransStatFilter<"Transactions"> | $Enums.transStat
    toUserId?: IntFilter<"Transactions"> | number
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    amount?: IntFilter<"Transactions"> | number
    token?: StringFilter<"Transactions"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    transType?: SortOrder
    execBy?: SortOrder
    transStatus?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    transType?: EnumtransTypeFilter<"Transactions"> | $Enums.transType
    execBy?: IntFilter<"Transactions"> | number
    transStatus?: EnumtransStatFilter<"Transactions"> | $Enums.transStat
    toUserId?: IntFilter<"Transactions"> | number
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    amount?: IntFilter<"Transactions"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "token">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    transType?: SortOrder
    execBy?: SortOrder
    transStatus?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    transType?: EnumtransTypeWithAggregatesFilter<"Transactions"> | $Enums.transType
    execBy?: IntWithAggregatesFilter<"Transactions"> | number
    transStatus?: EnumtransStatWithAggregatesFilter<"Transactions"> | $Enums.transStat
    toUserId?: IntWithAggregatesFilter<"Transactions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    amount?: IntWithAggregatesFilter<"Transactions"> | number
    token?: StringWithAggregatesFilter<"Transactions"> | string
  }

  export type paytmTransactionsWhereInput = {
    AND?: paytmTransactionsWhereInput | paytmTransactionsWhereInput[]
    OR?: paytmTransactionsWhereInput[]
    NOT?: paytmTransactionsWhereInput | paytmTransactionsWhereInput[]
    id?: IntFilter<"paytmTransactions"> | number
    amount?: IntFilter<"paytmTransactions"> | number
    token?: StringFilter<"paytmTransactions"> | string
    customerId?: IntFilter<"paytmTransactions"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type paytmTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type paytmTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paytmTransactionsWhereInput | paytmTransactionsWhereInput[]
    OR?: paytmTransactionsWhereInput[]
    NOT?: paytmTransactionsWhereInput | paytmTransactionsWhereInput[]
    amount?: IntFilter<"paytmTransactions"> | number
    token?: StringFilter<"paytmTransactions"> | string
    customerId?: IntFilter<"paytmTransactions"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type paytmTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    customerId?: SortOrder
    _count?: paytmTransactionsCountOrderByAggregateInput
    _avg?: paytmTransactionsAvgOrderByAggregateInput
    _max?: paytmTransactionsMaxOrderByAggregateInput
    _min?: paytmTransactionsMinOrderByAggregateInput
    _sum?: paytmTransactionsSumOrderByAggregateInput
  }

  export type paytmTransactionsScalarWhereWithAggregatesInput = {
    AND?: paytmTransactionsScalarWhereWithAggregatesInput | paytmTransactionsScalarWhereWithAggregatesInput[]
    OR?: paytmTransactionsScalarWhereWithAggregatesInput[]
    NOT?: paytmTransactionsScalarWhereWithAggregatesInput | paytmTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paytmTransactions"> | number
    amount?: IntWithAggregatesFilter<"paytmTransactions"> | number
    token?: StringWithAggregatesFilter<"paytmTransactions"> | string
    customerId?: IntWithAggregatesFilter<"paytmTransactions"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    sentTransactions?: WalletTransactionsCreateNestedManyWithoutSenderInput
    receivedTransactions?: WalletTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: WalletTransactionsUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: WalletTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: WalletTransactionsUpdateManyWithoutSenderNestedInput
    receivedTransactions?: WalletTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: WalletTransactionsUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: WalletTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WalletTransactionsCreateInput = {
    status: $Enums.Status
    amount: number
    createdAt: Date | string
    sender: UserCreateNestedOneWithoutSentTransactionsInput
    receiver: UserCreateNestedOneWithoutReceivedTransactionsInput
  }

  export type WalletTransactionsUncheckedCreateInput = {
    id?: number
    status: $Enums.Status
    senderId: number
    reciverId: number
    amount: number
    createdAt: Date | string
  }

  export type WalletTransactionsUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentTransactionsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput
  }

  export type WalletTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    senderId?: IntFieldUpdateOperationsInput | number
    reciverId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionsCreateManyInput = {
    id?: number
    status: $Enums.Status
    senderId: number
    reciverId: number
    amount: number
    createdAt: Date | string
  }

  export type WalletTransactionsUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    senderId?: IntFieldUpdateOperationsInput | number
    reciverId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionCreateInput = {
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date | string
    user: UserCreateNestedOneWithoutOnRampTransactionInput
  }

  export type OnRampTransactionUncheckedCreateInput = {
    id?: number
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date | string
    userId: number
  }

  export type OnRampTransactionUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnRampTransactionNestedInput
  }

  export type OnRampTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OnRampTransactionCreateManyInput = {
    id?: number
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date | string
    userId: number
  }

  export type OnRampTransactionUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
    transaction?: TransactionsCreateNestedManyWithoutCustomerInput
    paytm?: paytmTransactionsCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customerId?: number
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
    transaction?: TransactionsUncheckedCreateNestedManyWithoutCustomerInput
    paytm?: paytmTransactionsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    transaction?: TransactionsUpdateManyWithoutCustomerNestedInput
    paytm?: paytmTransactionsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    transaction?: TransactionsUncheckedUpdateManyWithoutCustomerNestedInput
    paytm?: paytmTransactionsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customerId?: number
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
  }

  export type CustomerUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
  }

  export type CustomerUncheckedUpdateManyInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
  }

  export type TransactionsCreateInput = {
    transType: $Enums.transType
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date | string
    updatedAt: Date | string
    amount: number
    token: string
    customer: CustomerCreateNestedOneWithoutTransactionInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    transType: $Enums.transType
    execBy: number
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date | string
    updatedAt: Date | string
    amount: number
    token: string
  }

  export type TransactionsUpdateInput = {
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    execBy?: IntFieldUpdateOperationsInput | number
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsCreateManyInput = {
    id?: number
    transType: $Enums.transType
    execBy: number
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date | string
    updatedAt: Date | string
    amount: number
    token: string
  }

  export type TransactionsUpdateManyMutationInput = {
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    execBy?: IntFieldUpdateOperationsInput | number
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type paytmTransactionsCreateInput = {
    amount: number
    token: string
    customer: CustomerCreateNestedOneWithoutPaytmInput
  }

  export type paytmTransactionsUncheckedCreateInput = {
    id?: number
    amount: number
    token: string
    customerId: number
  }

  export type paytmTransactionsUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutPaytmNestedInput
  }

  export type paytmTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type paytmTransactionsCreateManyInput = {
    id?: number
    amount: number
    token: string
    customerId: number
  }

  export type paytmTransactionsUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type paytmTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    customerId?: IntFieldUpdateOperationsInput | number
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

  export type OnRampTransactionListRelationFilter = {
    every?: OnRampTransactionWhereInput
    some?: OnRampTransactionWhereInput
    none?: OnRampTransactionWhereInput
  }

  export type WalletTransactionsListRelationFilter = {
    every?: WalletTransactionsWhereInput
    some?: WalletTransactionsWhereInput
    none?: WalletTransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OnRampTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    Balance?: SortOrder
    bankCustomerId?: SortOrder
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WalletTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
  }

  export type WalletTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    reciverId?: SortOrder
    amount?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type OnRampTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    startTime?: SortOrder
    userId?: SortOrder
  }

  export type OnRampTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type EnumaccTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeFilter<$PrismaModel> | $Enums.accType
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type PaytmTransactionsListRelationFilter = {
    every?: paytmTransactionsWhereInput
    some?: paytmTransactionsWhereInput
    none?: paytmTransactionsWhereInput
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paytmTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    customerId?: SortOrder
    email?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accType?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customerId?: SortOrder
    balance?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customerId?: SortOrder
    email?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accType?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customerId?: SortOrder
    email?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    accountNumber?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accType?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customerId?: SortOrder
    balance?: SortOrder
  }

  export type EnumaccTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeWithAggregatesFilter<$PrismaModel> | $Enums.accType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccTypeFilter<$PrismaModel>
    _max?: NestedEnumaccTypeFilter<$PrismaModel>
  }

  export type EnumtransTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.transType | EnumtransTypeFieldRefInput<$PrismaModel>
    in?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransTypeFilter<$PrismaModel> | $Enums.transType
  }

  export type EnumtransStatFilter<$PrismaModel = never> = {
    equals?: $Enums.transStat | EnumtransStatFieldRefInput<$PrismaModel>
    in?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    not?: NestedEnumtransStatFilter<$PrismaModel> | $Enums.transStat
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    transType?: SortOrder
    execBy?: SortOrder
    transStatus?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    token?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    execBy?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    transType?: SortOrder
    execBy?: SortOrder
    transStatus?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    token?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    transType?: SortOrder
    execBy?: SortOrder
    transStatus?: SortOrder
    toUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    token?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    execBy?: SortOrder
    toUserId?: SortOrder
    amount?: SortOrder
  }

  export type EnumtransTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transType | EnumtransTypeFieldRefInput<$PrismaModel>
    in?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransTypeWithAggregatesFilter<$PrismaModel> | $Enums.transType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransTypeFilter<$PrismaModel>
    _max?: NestedEnumtransTypeFilter<$PrismaModel>
  }

  export type EnumtransStatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transStat | EnumtransStatFieldRefInput<$PrismaModel>
    in?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    not?: NestedEnumtransStatWithAggregatesFilter<$PrismaModel> | $Enums.transStat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransStatFilter<$PrismaModel>
    _max?: NestedEnumtransStatFilter<$PrismaModel>
  }

  export type paytmTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    customerId?: SortOrder
  }

  export type paytmTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
  }

  export type paytmTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    customerId?: SortOrder
  }

  export type paytmTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    customerId?: SortOrder
  }

  export type paytmTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    customerId?: SortOrder
  }

  export type OnRampTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
  }

  export type WalletTransactionsCreateNestedManyWithoutSenderInput = {
    create?: XOR<WalletTransactionsCreateWithoutSenderInput, WalletTransactionsUncheckedCreateWithoutSenderInput> | WalletTransactionsCreateWithoutSenderInput[] | WalletTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutSenderInput | WalletTransactionsCreateOrConnectWithoutSenderInput[]
    createMany?: WalletTransactionsCreateManySenderInputEnvelope
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
  }

  export type WalletTransactionsCreateNestedManyWithoutReceiverInput = {
    create?: XOR<WalletTransactionsCreateWithoutReceiverInput, WalletTransactionsUncheckedCreateWithoutReceiverInput> | WalletTransactionsCreateWithoutReceiverInput[] | WalletTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutReceiverInput | WalletTransactionsCreateOrConnectWithoutReceiverInput[]
    createMany?: WalletTransactionsCreateManyReceiverInputEnvelope
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
  }

  export type OnRampTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
  }

  export type WalletTransactionsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<WalletTransactionsCreateWithoutSenderInput, WalletTransactionsUncheckedCreateWithoutSenderInput> | WalletTransactionsCreateWithoutSenderInput[] | WalletTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutSenderInput | WalletTransactionsCreateOrConnectWithoutSenderInput[]
    createMany?: WalletTransactionsCreateManySenderInputEnvelope
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
  }

  export type WalletTransactionsUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<WalletTransactionsCreateWithoutReceiverInput, WalletTransactionsUncheckedCreateWithoutReceiverInput> | WalletTransactionsCreateWithoutReceiverInput[] | WalletTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutReceiverInput | WalletTransactionsCreateOrConnectWithoutReceiverInput[]
    createMany?: WalletTransactionsCreateManyReceiverInputEnvelope
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OnRampTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTransactionUpsertWithWhereUniqueWithoutUserInput | OnRampTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    set?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    disconnect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    delete?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    update?: OnRampTransactionUpdateWithWhereUniqueWithoutUserInput | OnRampTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTransactionUpdateManyWithWhereWithoutUserInput | OnRampTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
  }

  export type WalletTransactionsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<WalletTransactionsCreateWithoutSenderInput, WalletTransactionsUncheckedCreateWithoutSenderInput> | WalletTransactionsCreateWithoutSenderInput[] | WalletTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutSenderInput | WalletTransactionsCreateOrConnectWithoutSenderInput[]
    upsert?: WalletTransactionsUpsertWithWhereUniqueWithoutSenderInput | WalletTransactionsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: WalletTransactionsCreateManySenderInputEnvelope
    set?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    disconnect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    delete?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    update?: WalletTransactionsUpdateWithWhereUniqueWithoutSenderInput | WalletTransactionsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: WalletTransactionsUpdateManyWithWhereWithoutSenderInput | WalletTransactionsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: WalletTransactionsScalarWhereInput | WalletTransactionsScalarWhereInput[]
  }

  export type WalletTransactionsUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<WalletTransactionsCreateWithoutReceiverInput, WalletTransactionsUncheckedCreateWithoutReceiverInput> | WalletTransactionsCreateWithoutReceiverInput[] | WalletTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutReceiverInput | WalletTransactionsCreateOrConnectWithoutReceiverInput[]
    upsert?: WalletTransactionsUpsertWithWhereUniqueWithoutReceiverInput | WalletTransactionsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: WalletTransactionsCreateManyReceiverInputEnvelope
    set?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    disconnect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    delete?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    update?: WalletTransactionsUpdateWithWhereUniqueWithoutReceiverInput | WalletTransactionsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: WalletTransactionsUpdateManyWithWhereWithoutReceiverInput | WalletTransactionsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: WalletTransactionsScalarWhereInput | WalletTransactionsScalarWhereInput[]
  }

  export type OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput> | OnRampTransactionCreateWithoutUserInput[] | OnRampTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OnRampTransactionCreateOrConnectWithoutUserInput | OnRampTransactionCreateOrConnectWithoutUserInput[]
    upsert?: OnRampTransactionUpsertWithWhereUniqueWithoutUserInput | OnRampTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OnRampTransactionCreateManyUserInputEnvelope
    set?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    disconnect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    delete?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    connect?: OnRampTransactionWhereUniqueInput | OnRampTransactionWhereUniqueInput[]
    update?: OnRampTransactionUpdateWithWhereUniqueWithoutUserInput | OnRampTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OnRampTransactionUpdateManyWithWhereWithoutUserInput | OnRampTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
  }

  export type WalletTransactionsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<WalletTransactionsCreateWithoutSenderInput, WalletTransactionsUncheckedCreateWithoutSenderInput> | WalletTransactionsCreateWithoutSenderInput[] | WalletTransactionsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutSenderInput | WalletTransactionsCreateOrConnectWithoutSenderInput[]
    upsert?: WalletTransactionsUpsertWithWhereUniqueWithoutSenderInput | WalletTransactionsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: WalletTransactionsCreateManySenderInputEnvelope
    set?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    disconnect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    delete?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    update?: WalletTransactionsUpdateWithWhereUniqueWithoutSenderInput | WalletTransactionsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: WalletTransactionsUpdateManyWithWhereWithoutSenderInput | WalletTransactionsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: WalletTransactionsScalarWhereInput | WalletTransactionsScalarWhereInput[]
  }

  export type WalletTransactionsUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<WalletTransactionsCreateWithoutReceiverInput, WalletTransactionsUncheckedCreateWithoutReceiverInput> | WalletTransactionsCreateWithoutReceiverInput[] | WalletTransactionsUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: WalletTransactionsCreateOrConnectWithoutReceiverInput | WalletTransactionsCreateOrConnectWithoutReceiverInput[]
    upsert?: WalletTransactionsUpsertWithWhereUniqueWithoutReceiverInput | WalletTransactionsUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: WalletTransactionsCreateManyReceiverInputEnvelope
    set?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    disconnect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    delete?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    connect?: WalletTransactionsWhereUniqueInput | WalletTransactionsWhereUniqueInput[]
    update?: WalletTransactionsUpdateWithWhereUniqueWithoutReceiverInput | WalletTransactionsUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: WalletTransactionsUpdateManyWithWhereWithoutReceiverInput | WalletTransactionsUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: WalletTransactionsScalarWhereInput | WalletTransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentTransactionsInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedTransactionsInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSentTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentTransactionsInput
    upsert?: UserUpsertWithoutSentTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentTransactionsInput, UserUpdateWithoutSentTransactionsInput>, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedTransactionsInput
    upsert?: UserUpsertWithoutReceivedTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedTransactionsInput, UserUpdateWithoutReceivedTransactionsInput>, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserCreateNestedOneWithoutOnRampTransactionInput = {
    create?: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOnRampTransactionNestedInput = {
    create?: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnRampTransactionInput
    upsert?: UserUpsertWithoutOnRampTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnRampTransactionInput, UserUpdateWithoutOnRampTransactionInput>, UserUncheckedUpdateWithoutOnRampTransactionInput>
  }

  export type TransactionsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type paytmTransactionsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<paytmTransactionsCreateWithoutCustomerInput, paytmTransactionsUncheckedCreateWithoutCustomerInput> | paytmTransactionsCreateWithoutCustomerInput[] | paytmTransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paytmTransactionsCreateOrConnectWithoutCustomerInput | paytmTransactionsCreateOrConnectWithoutCustomerInput[]
    createMany?: paytmTransactionsCreateManyCustomerInputEnvelope
    connect?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type paytmTransactionsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<paytmTransactionsCreateWithoutCustomerInput, paytmTransactionsUncheckedCreateWithoutCustomerInput> | paytmTransactionsCreateWithoutCustomerInput[] | paytmTransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paytmTransactionsCreateOrConnectWithoutCustomerInput | paytmTransactionsCreateOrConnectWithoutCustomerInput[]
    createMany?: paytmTransactionsCreateManyCustomerInputEnvelope
    connect?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
  }

  export type EnumaccTypeFieldUpdateOperationsInput = {
    set?: $Enums.accType
  }

  export type TransactionsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCustomerInput | TransactionsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCustomerInput | TransactionsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCustomerInput | TransactionsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type paytmTransactionsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<paytmTransactionsCreateWithoutCustomerInput, paytmTransactionsUncheckedCreateWithoutCustomerInput> | paytmTransactionsCreateWithoutCustomerInput[] | paytmTransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paytmTransactionsCreateOrConnectWithoutCustomerInput | paytmTransactionsCreateOrConnectWithoutCustomerInput[]
    upsert?: paytmTransactionsUpsertWithWhereUniqueWithoutCustomerInput | paytmTransactionsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: paytmTransactionsCreateManyCustomerInputEnvelope
    set?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    disconnect?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    delete?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    connect?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    update?: paytmTransactionsUpdateWithWhereUniqueWithoutCustomerInput | paytmTransactionsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: paytmTransactionsUpdateManyWithWhereWithoutCustomerInput | paytmTransactionsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: paytmTransactionsScalarWhereInput | paytmTransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput> | TransactionsCreateWithoutCustomerInput[] | TransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCustomerInput | TransactionsCreateOrConnectWithoutCustomerInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCustomerInput | TransactionsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TransactionsCreateManyCustomerInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCustomerInput | TransactionsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCustomerInput | TransactionsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type paytmTransactionsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<paytmTransactionsCreateWithoutCustomerInput, paytmTransactionsUncheckedCreateWithoutCustomerInput> | paytmTransactionsCreateWithoutCustomerInput[] | paytmTransactionsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: paytmTransactionsCreateOrConnectWithoutCustomerInput | paytmTransactionsCreateOrConnectWithoutCustomerInput[]
    upsert?: paytmTransactionsUpsertWithWhereUniqueWithoutCustomerInput | paytmTransactionsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: paytmTransactionsCreateManyCustomerInputEnvelope
    set?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    disconnect?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    delete?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    connect?: paytmTransactionsWhereUniqueInput | paytmTransactionsWhereUniqueInput[]
    update?: paytmTransactionsUpdateWithWhereUniqueWithoutCustomerInput | paytmTransactionsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: paytmTransactionsUpdateManyWithWhereWithoutCustomerInput | paytmTransactionsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: paytmTransactionsScalarWhereInput | paytmTransactionsScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CustomerCreateWithoutTransactionInput, CustomerUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransactionInput
    connect?: CustomerWhereUniqueInput
  }

  export type EnumtransTypeFieldUpdateOperationsInput = {
    set?: $Enums.transType
  }

  export type EnumtransStatFieldUpdateOperationsInput = {
    set?: $Enums.transStat
  }

  export type CustomerUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<CustomerCreateWithoutTransactionInput, CustomerUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransactionInput
    upsert?: CustomerUpsertWithoutTransactionInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTransactionInput, CustomerUpdateWithoutTransactionInput>, CustomerUncheckedUpdateWithoutTransactionInput>
  }

  export type CustomerCreateNestedOneWithoutPaytmInput = {
    create?: XOR<CustomerCreateWithoutPaytmInput, CustomerUncheckedCreateWithoutPaytmInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaytmInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutPaytmNestedInput = {
    create?: XOR<CustomerCreateWithoutPaytmInput, CustomerUncheckedCreateWithoutPaytmInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaytmInput
    upsert?: CustomerUpsertWithoutPaytmInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaytmInput, CustomerUpdateWithoutPaytmInput>, CustomerUncheckedUpdateWithoutPaytmInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedEnumaccTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeFilter<$PrismaModel> | $Enums.accType
  }

  export type NestedEnumaccTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.accType | EnumaccTypeFieldRefInput<$PrismaModel>
    in?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.accType[] | ListEnumaccTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumaccTypeWithAggregatesFilter<$PrismaModel> | $Enums.accType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumaccTypeFilter<$PrismaModel>
    _max?: NestedEnumaccTypeFilter<$PrismaModel>
  }

  export type NestedEnumtransTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.transType | EnumtransTypeFieldRefInput<$PrismaModel>
    in?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransTypeFilter<$PrismaModel> | $Enums.transType
  }

  export type NestedEnumtransStatFilter<$PrismaModel = never> = {
    equals?: $Enums.transStat | EnumtransStatFieldRefInput<$PrismaModel>
    in?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    not?: NestedEnumtransStatFilter<$PrismaModel> | $Enums.transStat
  }

  export type NestedEnumtransTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transType | EnumtransTypeFieldRefInput<$PrismaModel>
    in?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.transType[] | ListEnumtransTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtransTypeWithAggregatesFilter<$PrismaModel> | $Enums.transType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransTypeFilter<$PrismaModel>
    _max?: NestedEnumtransTypeFilter<$PrismaModel>
  }

  export type NestedEnumtransStatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transStat | EnumtransStatFieldRefInput<$PrismaModel>
    in?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    notIn?: $Enums.transStat[] | ListEnumtransStatFieldRefInput<$PrismaModel>
    not?: NestedEnumtransStatWithAggregatesFilter<$PrismaModel> | $Enums.transStat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransStatFilter<$PrismaModel>
    _max?: NestedEnumtransStatFilter<$PrismaModel>
  }

  export type OnRampTransactionCreateWithoutUserInput = {
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type OnRampTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type OnRampTransactionCreateOrConnectWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    create: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionCreateManyUserInputEnvelope = {
    data: OnRampTransactionCreateManyUserInput | OnRampTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransactionsCreateWithoutSenderInput = {
    status: $Enums.Status
    amount: number
    createdAt: Date | string
    receiver: UserCreateNestedOneWithoutReceivedTransactionsInput
  }

  export type WalletTransactionsUncheckedCreateWithoutSenderInput = {
    id?: number
    status: $Enums.Status
    reciverId: number
    amount: number
    createdAt: Date | string
  }

  export type WalletTransactionsCreateOrConnectWithoutSenderInput = {
    where: WalletTransactionsWhereUniqueInput
    create: XOR<WalletTransactionsCreateWithoutSenderInput, WalletTransactionsUncheckedCreateWithoutSenderInput>
  }

  export type WalletTransactionsCreateManySenderInputEnvelope = {
    data: WalletTransactionsCreateManySenderInput | WalletTransactionsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransactionsCreateWithoutReceiverInput = {
    status: $Enums.Status
    amount: number
    createdAt: Date | string
    sender: UserCreateNestedOneWithoutSentTransactionsInput
  }

  export type WalletTransactionsUncheckedCreateWithoutReceiverInput = {
    id?: number
    status: $Enums.Status
    senderId: number
    amount: number
    createdAt: Date | string
  }

  export type WalletTransactionsCreateOrConnectWithoutReceiverInput = {
    where: WalletTransactionsWhereUniqueInput
    create: XOR<WalletTransactionsCreateWithoutReceiverInput, WalletTransactionsUncheckedCreateWithoutReceiverInput>
  }

  export type WalletTransactionsCreateManyReceiverInputEnvelope = {
    data: WalletTransactionsCreateManyReceiverInput | WalletTransactionsCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type OnRampTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    update: XOR<OnRampTransactionUpdateWithoutUserInput, OnRampTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<OnRampTransactionCreateWithoutUserInput, OnRampTransactionUncheckedCreateWithoutUserInput>
  }

  export type OnRampTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: OnRampTransactionWhereUniqueInput
    data: XOR<OnRampTransactionUpdateWithoutUserInput, OnRampTransactionUncheckedUpdateWithoutUserInput>
  }

  export type OnRampTransactionUpdateManyWithWhereWithoutUserInput = {
    where: OnRampTransactionScalarWhereInput
    data: XOR<OnRampTransactionUpdateManyMutationInput, OnRampTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type OnRampTransactionScalarWhereInput = {
    AND?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
    OR?: OnRampTransactionScalarWhereInput[]
    NOT?: OnRampTransactionScalarWhereInput | OnRampTransactionScalarWhereInput[]
    id?: IntFilter<"OnRampTransaction"> | number
    status?: EnumStatusFilter<"OnRampTransaction"> | $Enums.Status
    token?: StringFilter<"OnRampTransaction"> | string
    provider?: StringFilter<"OnRampTransaction"> | string
    amount?: IntFilter<"OnRampTransaction"> | number
    startTime?: DateTimeFilter<"OnRampTransaction"> | Date | string
    userId?: IntFilter<"OnRampTransaction"> | number
  }

  export type WalletTransactionsUpsertWithWhereUniqueWithoutSenderInput = {
    where: WalletTransactionsWhereUniqueInput
    update: XOR<WalletTransactionsUpdateWithoutSenderInput, WalletTransactionsUncheckedUpdateWithoutSenderInput>
    create: XOR<WalletTransactionsCreateWithoutSenderInput, WalletTransactionsUncheckedCreateWithoutSenderInput>
  }

  export type WalletTransactionsUpdateWithWhereUniqueWithoutSenderInput = {
    where: WalletTransactionsWhereUniqueInput
    data: XOR<WalletTransactionsUpdateWithoutSenderInput, WalletTransactionsUncheckedUpdateWithoutSenderInput>
  }

  export type WalletTransactionsUpdateManyWithWhereWithoutSenderInput = {
    where: WalletTransactionsScalarWhereInput
    data: XOR<WalletTransactionsUpdateManyMutationInput, WalletTransactionsUncheckedUpdateManyWithoutSenderInput>
  }

  export type WalletTransactionsScalarWhereInput = {
    AND?: WalletTransactionsScalarWhereInput | WalletTransactionsScalarWhereInput[]
    OR?: WalletTransactionsScalarWhereInput[]
    NOT?: WalletTransactionsScalarWhereInput | WalletTransactionsScalarWhereInput[]
    id?: IntFilter<"WalletTransactions"> | number
    status?: EnumStatusFilter<"WalletTransactions"> | $Enums.Status
    senderId?: IntFilter<"WalletTransactions"> | number
    reciverId?: IntFilter<"WalletTransactions"> | number
    amount?: IntFilter<"WalletTransactions"> | number
    createdAt?: DateTimeFilter<"WalletTransactions"> | Date | string
  }

  export type WalletTransactionsUpsertWithWhereUniqueWithoutReceiverInput = {
    where: WalletTransactionsWhereUniqueInput
    update: XOR<WalletTransactionsUpdateWithoutReceiverInput, WalletTransactionsUncheckedUpdateWithoutReceiverInput>
    create: XOR<WalletTransactionsCreateWithoutReceiverInput, WalletTransactionsUncheckedCreateWithoutReceiverInput>
  }

  export type WalletTransactionsUpdateWithWhereUniqueWithoutReceiverInput = {
    where: WalletTransactionsWhereUniqueInput
    data: XOR<WalletTransactionsUpdateWithoutReceiverInput, WalletTransactionsUncheckedUpdateWithoutReceiverInput>
  }

  export type WalletTransactionsUpdateManyWithWhereWithoutReceiverInput = {
    where: WalletTransactionsScalarWhereInput
    data: XOR<WalletTransactionsUpdateManyMutationInput, WalletTransactionsUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutSentTransactionsInput = {
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    receivedTransactions?: WalletTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentTransactionsInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    receivedTransactions?: WalletTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
  }

  export type UserCreateWithoutReceivedTransactionsInput = {
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    OnRampTransaction?: OnRampTransactionCreateNestedManyWithoutUserInput
    sentTransactions?: WalletTransactionsCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedTransactionsInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    OnRampTransaction?: OnRampTransactionUncheckedCreateNestedManyWithoutUserInput
    sentTransactions?: WalletTransactionsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
  }

  export type UserUpsertWithoutSentTransactionsInput = {
    update: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
    create: XOR<UserCreateWithoutSentTransactionsInput, UserUncheckedCreateWithoutSentTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentTransactionsInput, UserUncheckedUpdateWithoutSentTransactionsInput>
  }

  export type UserUpdateWithoutSentTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    receivedTransactions?: WalletTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    receivedTransactions?: WalletTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedTransactionsInput = {
    update: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
    create: XOR<UserCreateWithoutReceivedTransactionsInput, UserUncheckedCreateWithoutReceivedTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedTransactionsInput, UserUncheckedUpdateWithoutReceivedTransactionsInput>
  }

  export type UserUpdateWithoutReceivedTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    OnRampTransaction?: OnRampTransactionUpdateManyWithoutUserNestedInput
    sentTransactions?: WalletTransactionsUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    OnRampTransaction?: OnRampTransactionUncheckedUpdateManyWithoutUserNestedInput
    sentTransactions?: WalletTransactionsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutOnRampTransactionInput = {
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    sentTransactions?: WalletTransactionsCreateNestedManyWithoutSenderInput
    receivedTransactions?: WalletTransactionsCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOnRampTransactionInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    Balance?: number
    bankCustomerId?: number | null
    sentTransactions?: WalletTransactionsUncheckedCreateNestedManyWithoutSenderInput
    receivedTransactions?: WalletTransactionsUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOnRampTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
  }

  export type UserUpsertWithoutOnRampTransactionInput = {
    update: XOR<UserUpdateWithoutOnRampTransactionInput, UserUncheckedUpdateWithoutOnRampTransactionInput>
    create: XOR<UserCreateWithoutOnRampTransactionInput, UserUncheckedCreateWithoutOnRampTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnRampTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnRampTransactionInput, UserUncheckedUpdateWithoutOnRampTransactionInput>
  }

  export type UserUpdateWithoutOnRampTransactionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    sentTransactions?: WalletTransactionsUpdateManyWithoutSenderNestedInput
    receivedTransactions?: WalletTransactionsUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOnRampTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    Balance?: IntFieldUpdateOperationsInput | number
    bankCustomerId?: NullableIntFieldUpdateOperationsInput | number | null
    sentTransactions?: WalletTransactionsUncheckedUpdateManyWithoutSenderNestedInput
    receivedTransactions?: WalletTransactionsUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type TransactionsCreateWithoutCustomerInput = {
    transType: $Enums.transType
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date | string
    updatedAt: Date | string
    amount: number
    token: string
  }

  export type TransactionsUncheckedCreateWithoutCustomerInput = {
    id?: number
    transType: $Enums.transType
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date | string
    updatedAt: Date | string
    amount: number
    token: string
  }

  export type TransactionsCreateOrConnectWithoutCustomerInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionsCreateManyCustomerInputEnvelope = {
    data: TransactionsCreateManyCustomerInput | TransactionsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type paytmTransactionsCreateWithoutCustomerInput = {
    amount: number
    token: string
  }

  export type paytmTransactionsUncheckedCreateWithoutCustomerInput = {
    id?: number
    amount: number
    token: string
  }

  export type paytmTransactionsCreateOrConnectWithoutCustomerInput = {
    where: paytmTransactionsWhereUniqueInput
    create: XOR<paytmTransactionsCreateWithoutCustomerInput, paytmTransactionsUncheckedCreateWithoutCustomerInput>
  }

  export type paytmTransactionsCreateManyCustomerInputEnvelope = {
    data: paytmTransactionsCreateManyCustomerInput | paytmTransactionsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutCustomerInput, TransactionsUncheckedUpdateWithoutCustomerInput>
    create: XOR<TransactionsCreateWithoutCustomerInput, TransactionsUncheckedCreateWithoutCustomerInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutCustomerInput, TransactionsUncheckedUpdateWithoutCustomerInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutCustomerInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    transType?: EnumtransTypeFilter<"Transactions"> | $Enums.transType
    execBy?: IntFilter<"Transactions"> | number
    transStatus?: EnumtransStatFilter<"Transactions"> | $Enums.transStat
    toUserId?: IntFilter<"Transactions"> | number
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    updatedAt?: DateTimeFilter<"Transactions"> | Date | string
    amount?: IntFilter<"Transactions"> | number
    token?: StringFilter<"Transactions"> | string
  }

  export type paytmTransactionsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: paytmTransactionsWhereUniqueInput
    update: XOR<paytmTransactionsUpdateWithoutCustomerInput, paytmTransactionsUncheckedUpdateWithoutCustomerInput>
    create: XOR<paytmTransactionsCreateWithoutCustomerInput, paytmTransactionsUncheckedCreateWithoutCustomerInput>
  }

  export type paytmTransactionsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: paytmTransactionsWhereUniqueInput
    data: XOR<paytmTransactionsUpdateWithoutCustomerInput, paytmTransactionsUncheckedUpdateWithoutCustomerInput>
  }

  export type paytmTransactionsUpdateManyWithWhereWithoutCustomerInput = {
    where: paytmTransactionsScalarWhereInput
    data: XOR<paytmTransactionsUpdateManyMutationInput, paytmTransactionsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type paytmTransactionsScalarWhereInput = {
    AND?: paytmTransactionsScalarWhereInput | paytmTransactionsScalarWhereInput[]
    OR?: paytmTransactionsScalarWhereInput[]
    NOT?: paytmTransactionsScalarWhereInput | paytmTransactionsScalarWhereInput[]
    id?: IntFilter<"paytmTransactions"> | number
    amount?: IntFilter<"paytmTransactions"> | number
    token?: StringFilter<"paytmTransactions"> | string
    customerId?: IntFilter<"paytmTransactions"> | number
  }

  export type CustomerCreateWithoutTransactionInput = {
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
    paytm?: paytmTransactionsCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTransactionInput = {
    customerId?: number
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
    paytm?: paytmTransactionsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTransactionInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTransactionInput, CustomerUncheckedCreateWithoutTransactionInput>
  }

  export type CustomerUpsertWithoutTransactionInput = {
    update: XOR<CustomerUpdateWithoutTransactionInput, CustomerUncheckedUpdateWithoutTransactionInput>
    create: XOR<CustomerCreateWithoutTransactionInput, CustomerUncheckedCreateWithoutTransactionInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTransactionInput, CustomerUncheckedUpdateWithoutTransactionInput>
  }

  export type CustomerUpdateWithoutTransactionInput = {
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    paytm?: paytmTransactionsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTransactionInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    paytm?: paytmTransactionsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutPaytmInput = {
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
    transaction?: TransactionsCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaytmInput = {
    customerId?: number
    email: string
    customerName: string
    mobile: string
    accountNumber: string
    balance?: number
    createdAt: Date | string
    updatedAt: Date | string
    accType?: $Enums.accType
    transaction?: TransactionsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaytmInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaytmInput, CustomerUncheckedCreateWithoutPaytmInput>
  }

  export type CustomerUpsertWithoutPaytmInput = {
    update: XOR<CustomerUpdateWithoutPaytmInput, CustomerUncheckedUpdateWithoutPaytmInput>
    create: XOR<CustomerCreateWithoutPaytmInput, CustomerUncheckedCreateWithoutPaytmInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaytmInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaytmInput, CustomerUncheckedUpdateWithoutPaytmInput>
  }

  export type CustomerUpdateWithoutPaytmInput = {
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    transaction?: TransactionsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaytmInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accType?: EnumaccTypeFieldUpdateOperationsInput | $Enums.accType
    transaction?: TransactionsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OnRampTransactionCreateManyUserInput = {
    id?: number
    status: $Enums.Status
    token: string
    provider: string
    amount: number
    startTime: Date | string
  }

  export type WalletTransactionsCreateManySenderInput = {
    id?: number
    status: $Enums.Status
    reciverId: number
    amount: number
    createdAt: Date | string
  }

  export type WalletTransactionsCreateManyReceiverInput = {
    id?: number
    status: $Enums.Status
    senderId: number
    amount: number
    createdAt: Date | string
  }

  export type OnRampTransactionUpdateWithoutUserInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnRampTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionsUpdateWithoutSenderInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedTransactionsNestedInput
  }

  export type WalletTransactionsUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    reciverId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionsUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    reciverId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionsUpdateWithoutReceiverInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentTransactionsNestedInput
  }

  export type WalletTransactionsUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    senderId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionsUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    senderId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyCustomerInput = {
    id?: number
    transType: $Enums.transType
    transStatus: $Enums.transStat
    toUserId: number
    createdAt: Date | string
    updatedAt: Date | string
    amount: number
    token: string
  }

  export type paytmTransactionsCreateManyCustomerInput = {
    id?: number
    amount: number
    token: string
  }

  export type TransactionsUpdateWithoutCustomerInput = {
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionsUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    transType?: EnumtransTypeFieldUpdateOperationsInput | $Enums.transType
    transStatus?: EnumtransStatFieldUpdateOperationsInput | $Enums.transStat
    toUserId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type paytmTransactionsUpdateWithoutCustomerInput = {
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type paytmTransactionsUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type paytmTransactionsUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
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