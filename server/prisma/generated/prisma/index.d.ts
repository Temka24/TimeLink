
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
 * Model BookingPage
 * 
 */
export type BookingPage = $Result.DefaultSelection<Prisma.$BookingPagePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingPage`: Exposes CRUD operations for the **BookingPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingPages
    * const bookingPages = await prisma.bookingPage.findMany()
    * ```
    */
  get bookingPage(): Prisma.BookingPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    User: 'User',
    BookingPage: 'BookingPage',
    Booking: 'Booking',
    Feedback: 'Feedback'
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
      modelProps: "user" | "bookingPage" | "booking" | "feedback"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      BookingPage: {
        payload: Prisma.$BookingPagePayload<ExtArgs>
        fields: Prisma.BookingPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>
          }
          findFirst: {
            args: Prisma.BookingPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>
          }
          findMany: {
            args: Prisma.BookingPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>[]
          }
          create: {
            args: Prisma.BookingPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>
          }
          createMany: {
            args: Prisma.BookingPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>[]
          }
          delete: {
            args: Prisma.BookingPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>
          }
          update: {
            args: Prisma.BookingPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>
          }
          deleteMany: {
            args: Prisma.BookingPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>[]
          }
          upsert: {
            args: Prisma.BookingPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPagePayload>
          }
          aggregate: {
            args: Prisma.BookingPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingPage>
          }
          groupBy: {
            args: Prisma.BookingPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingPageCountArgs<ExtArgs>
            result: $Utils.Optional<BookingPageCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
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
    user?: UserOmit
    bookingPage?: BookingPageOmit
    booking?: BookingOmit
    feedback?: FeedbackOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookingPages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingPages?: boolean | UserCountOutputTypeCountBookingPagesArgs
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
  export type UserCountOutputTypeCountBookingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPageWhereInput
  }


  /**
   * Count Type BookingPageCountOutputType
   */

  export type BookingPageCountOutputType = {
    bookings: number
  }

  export type BookingPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BookingPageCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BookingPageCountOutputType without action
   */
  export type BookingPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPageCountOutputType
     */
    select?: BookingPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingPageCountOutputType without action
   */
  export type BookingPageCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    createdAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
    bookingPages?: boolean | User$bookingPagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingPages?: boolean | User$bookingPagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookingPages: Prisma.$BookingPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingPages<T extends User$bookingPagesArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookingPages
   */
  export type User$bookingPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    where?: BookingPageWhereInput
    orderBy?: BookingPageOrderByWithRelationInput | BookingPageOrderByWithRelationInput[]
    cursor?: BookingPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingPageScalarFieldEnum | BookingPageScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BookingPage
   */

  export type AggregateBookingPage = {
    _count: BookingPageCountAggregateOutputType | null
    _avg: BookingPageAvgAggregateOutputType | null
    _sum: BookingPageSumAggregateOutputType | null
    _min: BookingPageMinAggregateOutputType | null
    _max: BookingPageMaxAggregateOutputType | null
  }

  export type BookingPageAvgAggregateOutputType = {
    id: number | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
    startBreakHour: number | null
    startBreakMinute: number | null
    endBreakHour: number | null
    endBreakMinute: number | null
    increment: number | null
    buffer: number | null
  }

  export type BookingPageSumAggregateOutputType = {
    id: number | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
    startBreakHour: number | null
    startBreakMinute: number | null
    endBreakHour: number | null
    endBreakMinute: number | null
    increment: number | null
    buffer: number | null
  }

  export type BookingPageMinAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    locationDescription: string | null
    eventDescription: string | null
    image: string | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
    startBreakHour: number | null
    startBreakMinute: number | null
    endBreakHour: number | null
    endBreakMinute: number | null
    increment: number | null
    buffer: number | null
  }

  export type BookingPageMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    title: string | null
    locationDescription: string | null
    eventDescription: string | null
    image: string | null
    startHour: number | null
    startMinute: number | null
    endHour: number | null
    endMinute: number | null
    startBreakHour: number | null
    startBreakMinute: number | null
    endBreakHour: number | null
    endBreakMinute: number | null
    increment: number | null
    buffer: number | null
  }

  export type BookingPageCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    durations: number
    locationDescription: number
    eventDescription: number
    image: number
    activeDays: number
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: number
    _all: number
  }


  export type BookingPageAvgAggregateInputType = {
    id?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    startBreakHour?: true
    startBreakMinute?: true
    endBreakHour?: true
    endBreakMinute?: true
    increment?: true
    buffer?: true
  }

  export type BookingPageSumAggregateInputType = {
    id?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    startBreakHour?: true
    startBreakMinute?: true
    endBreakHour?: true
    endBreakMinute?: true
    increment?: true
    buffer?: true
  }

  export type BookingPageMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    locationDescription?: true
    eventDescription?: true
    image?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    startBreakHour?: true
    startBreakMinute?: true
    endBreakHour?: true
    endBreakMinute?: true
    increment?: true
    buffer?: true
  }

  export type BookingPageMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    locationDescription?: true
    eventDescription?: true
    image?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    startBreakHour?: true
    startBreakMinute?: true
    endBreakHour?: true
    endBreakMinute?: true
    increment?: true
    buffer?: true
  }

  export type BookingPageCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    durations?: true
    locationDescription?: true
    eventDescription?: true
    image?: true
    activeDays?: true
    startHour?: true
    startMinute?: true
    endHour?: true
    endMinute?: true
    startBreakHour?: true
    startBreakMinute?: true
    endBreakHour?: true
    endBreakMinute?: true
    increment?: true
    buffer?: true
    location?: true
    _all?: true
  }

  export type BookingPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingPage to aggregate.
     */
    where?: BookingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPages to fetch.
     */
    orderBy?: BookingPageOrderByWithRelationInput | BookingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingPages
    **/
    _count?: true | BookingPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingPageMaxAggregateInputType
  }

  export type GetBookingPageAggregateType<T extends BookingPageAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingPage[P]>
      : GetScalarType<T[P], AggregateBookingPage[P]>
  }




  export type BookingPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPageWhereInput
    orderBy?: BookingPageOrderByWithAggregationInput | BookingPageOrderByWithAggregationInput[]
    by: BookingPageScalarFieldEnum[] | BookingPageScalarFieldEnum
    having?: BookingPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingPageCountAggregateInputType | true
    _avg?: BookingPageAvgAggregateInputType
    _sum?: BookingPageSumAggregateInputType
    _min?: BookingPageMinAggregateInputType
    _max?: BookingPageMaxAggregateInputType
  }

  export type BookingPageGroupByOutputType = {
    id: number
    userId: string
    title: string
    durations: JsonValue
    locationDescription: string
    eventDescription: string
    image: string | null
    activeDays: JsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonValue
    _count: BookingPageCountAggregateOutputType | null
    _avg: BookingPageAvgAggregateOutputType | null
    _sum: BookingPageSumAggregateOutputType | null
    _min: BookingPageMinAggregateOutputType | null
    _max: BookingPageMaxAggregateOutputType | null
  }

  type GetBookingPageGroupByPayload<T extends BookingPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingPageGroupByOutputType[P]>
            : GetScalarType<T[P], BookingPageGroupByOutputType[P]>
        }
      >
    >


  export type BookingPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    durations?: boolean
    locationDescription?: boolean
    eventDescription?: boolean
    image?: boolean
    activeDays?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    startBreakHour?: boolean
    startBreakMinute?: boolean
    endBreakHour?: boolean
    endBreakMinute?: boolean
    increment?: boolean
    buffer?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | BookingPage$bookingsArgs<ExtArgs>
    _count?: boolean | BookingPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPage"]>

  export type BookingPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    durations?: boolean
    locationDescription?: boolean
    eventDescription?: boolean
    image?: boolean
    activeDays?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    startBreakHour?: boolean
    startBreakMinute?: boolean
    endBreakHour?: boolean
    endBreakMinute?: boolean
    increment?: boolean
    buffer?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPage"]>

  export type BookingPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    durations?: boolean
    locationDescription?: boolean
    eventDescription?: boolean
    image?: boolean
    activeDays?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    startBreakHour?: boolean
    startBreakMinute?: boolean
    endBreakHour?: boolean
    endBreakMinute?: boolean
    increment?: boolean
    buffer?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPage"]>

  export type BookingPageSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    durations?: boolean
    locationDescription?: boolean
    eventDescription?: boolean
    image?: boolean
    activeDays?: boolean
    startHour?: boolean
    startMinute?: boolean
    endHour?: boolean
    endMinute?: boolean
    startBreakHour?: boolean
    startBreakMinute?: boolean
    endBreakHour?: boolean
    endBreakMinute?: boolean
    increment?: boolean
    buffer?: boolean
    location?: boolean
  }

  export type BookingPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "durations" | "locationDescription" | "eventDescription" | "image" | "activeDays" | "startHour" | "startMinute" | "endHour" | "endMinute" | "startBreakHour" | "startBreakMinute" | "endBreakHour" | "endBreakMinute" | "increment" | "buffer" | "location", ExtArgs["result"]["bookingPage"]>
  export type BookingPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | BookingPage$bookingsArgs<ExtArgs>
    _count?: boolean | BookingPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingPage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      title: string
      durations: Prisma.JsonValue
      locationDescription: string
      eventDescription: string
      image: string | null
      activeDays: Prisma.JsonValue
      startHour: number
      startMinute: number
      endHour: number
      endMinute: number
      startBreakHour: number
      startBreakMinute: number
      endBreakHour: number
      endBreakMinute: number
      increment: number
      buffer: number
      location: Prisma.JsonValue
    }, ExtArgs["result"]["bookingPage"]>
    composites: {}
  }

  type BookingPageGetPayload<S extends boolean | null | undefined | BookingPageDefaultArgs> = $Result.GetResult<Prisma.$BookingPagePayload, S>

  type BookingPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingPageCountAggregateInputType | true
    }

  export interface BookingPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingPage'], meta: { name: 'BookingPage' } }
    /**
     * Find zero or one BookingPage that matches the filter.
     * @param {BookingPageFindUniqueArgs} args - Arguments to find a BookingPage
     * @example
     * // Get one BookingPage
     * const bookingPage = await prisma.bookingPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingPageFindUniqueArgs>(args: SelectSubset<T, BookingPageFindUniqueArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingPageFindUniqueOrThrowArgs} args - Arguments to find a BookingPage
     * @example
     * // Get one BookingPage
     * const bookingPage = await prisma.bookingPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingPageFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageFindFirstArgs} args - Arguments to find a BookingPage
     * @example
     * // Get one BookingPage
     * const bookingPage = await prisma.bookingPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingPageFindFirstArgs>(args?: SelectSubset<T, BookingPageFindFirstArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageFindFirstOrThrowArgs} args - Arguments to find a BookingPage
     * @example
     * // Get one BookingPage
     * const bookingPage = await prisma.bookingPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingPageFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingPages
     * const bookingPages = await prisma.bookingPage.findMany()
     * 
     * // Get first 10 BookingPages
     * const bookingPages = await prisma.bookingPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingPageWithIdOnly = await prisma.bookingPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingPageFindManyArgs>(args?: SelectSubset<T, BookingPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingPage.
     * @param {BookingPageCreateArgs} args - Arguments to create a BookingPage.
     * @example
     * // Create one BookingPage
     * const BookingPage = await prisma.bookingPage.create({
     *   data: {
     *     // ... data to create a BookingPage
     *   }
     * })
     * 
     */
    create<T extends BookingPageCreateArgs>(args: SelectSubset<T, BookingPageCreateArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingPages.
     * @param {BookingPageCreateManyArgs} args - Arguments to create many BookingPages.
     * @example
     * // Create many BookingPages
     * const bookingPage = await prisma.bookingPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingPageCreateManyArgs>(args?: SelectSubset<T, BookingPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingPages and returns the data saved in the database.
     * @param {BookingPageCreateManyAndReturnArgs} args - Arguments to create many BookingPages.
     * @example
     * // Create many BookingPages
     * const bookingPage = await prisma.bookingPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingPages and only return the `id`
     * const bookingPageWithIdOnly = await prisma.bookingPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingPageCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingPage.
     * @param {BookingPageDeleteArgs} args - Arguments to delete one BookingPage.
     * @example
     * // Delete one BookingPage
     * const BookingPage = await prisma.bookingPage.delete({
     *   where: {
     *     // ... filter to delete one BookingPage
     *   }
     * })
     * 
     */
    delete<T extends BookingPageDeleteArgs>(args: SelectSubset<T, BookingPageDeleteArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingPage.
     * @param {BookingPageUpdateArgs} args - Arguments to update one BookingPage.
     * @example
     * // Update one BookingPage
     * const bookingPage = await prisma.bookingPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingPageUpdateArgs>(args: SelectSubset<T, BookingPageUpdateArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingPages.
     * @param {BookingPageDeleteManyArgs} args - Arguments to filter BookingPages to delete.
     * @example
     * // Delete a few BookingPages
     * const { count } = await prisma.bookingPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingPageDeleteManyArgs>(args?: SelectSubset<T, BookingPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingPages
     * const bookingPage = await prisma.bookingPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingPageUpdateManyArgs>(args: SelectSubset<T, BookingPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingPages and returns the data updated in the database.
     * @param {BookingPageUpdateManyAndReturnArgs} args - Arguments to update many BookingPages.
     * @example
     * // Update many BookingPages
     * const bookingPage = await prisma.bookingPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingPages and only return the `id`
     * const bookingPageWithIdOnly = await prisma.bookingPage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingPageUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingPage.
     * @param {BookingPageUpsertArgs} args - Arguments to update or create a BookingPage.
     * @example
     * // Update or create a BookingPage
     * const bookingPage = await prisma.bookingPage.upsert({
     *   create: {
     *     // ... data to create a BookingPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingPage we want to update
     *   }
     * })
     */
    upsert<T extends BookingPageUpsertArgs>(args: SelectSubset<T, BookingPageUpsertArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageCountArgs} args - Arguments to filter BookingPages to count.
     * @example
     * // Count the number of BookingPages
     * const count = await prisma.bookingPage.count({
     *   where: {
     *     // ... the filter for the BookingPages we want to count
     *   }
     * })
    **/
    count<T extends BookingPageCountArgs>(
      args?: Subset<T, BookingPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingPageAggregateArgs>(args: Subset<T, BookingPageAggregateArgs>): Prisma.PrismaPromise<GetBookingPageAggregateType<T>>

    /**
     * Group by BookingPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPageGroupByArgs} args - Group by arguments.
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
      T extends BookingPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingPageGroupByArgs['orderBy'] }
        : { orderBy?: BookingPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingPage model
   */
  readonly fields: BookingPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends BookingPage$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, BookingPage$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BookingPage model
   */
  interface BookingPageFieldRefs {
    readonly id: FieldRef<"BookingPage", 'Int'>
    readonly userId: FieldRef<"BookingPage", 'String'>
    readonly title: FieldRef<"BookingPage", 'String'>
    readonly durations: FieldRef<"BookingPage", 'Json'>
    readonly locationDescription: FieldRef<"BookingPage", 'String'>
    readonly eventDescription: FieldRef<"BookingPage", 'String'>
    readonly image: FieldRef<"BookingPage", 'String'>
    readonly activeDays: FieldRef<"BookingPage", 'Json'>
    readonly startHour: FieldRef<"BookingPage", 'Int'>
    readonly startMinute: FieldRef<"BookingPage", 'Int'>
    readonly endHour: FieldRef<"BookingPage", 'Int'>
    readonly endMinute: FieldRef<"BookingPage", 'Int'>
    readonly startBreakHour: FieldRef<"BookingPage", 'Int'>
    readonly startBreakMinute: FieldRef<"BookingPage", 'Int'>
    readonly endBreakHour: FieldRef<"BookingPage", 'Int'>
    readonly endBreakMinute: FieldRef<"BookingPage", 'Int'>
    readonly increment: FieldRef<"BookingPage", 'Int'>
    readonly buffer: FieldRef<"BookingPage", 'Int'>
    readonly location: FieldRef<"BookingPage", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * BookingPage findUnique
   */
  export type BookingPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * Filter, which BookingPage to fetch.
     */
    where: BookingPageWhereUniqueInput
  }

  /**
   * BookingPage findUniqueOrThrow
   */
  export type BookingPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * Filter, which BookingPage to fetch.
     */
    where: BookingPageWhereUniqueInput
  }

  /**
   * BookingPage findFirst
   */
  export type BookingPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * Filter, which BookingPage to fetch.
     */
    where?: BookingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPages to fetch.
     */
    orderBy?: BookingPageOrderByWithRelationInput | BookingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingPages.
     */
    cursor?: BookingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPages.
     */
    distinct?: BookingPageScalarFieldEnum | BookingPageScalarFieldEnum[]
  }

  /**
   * BookingPage findFirstOrThrow
   */
  export type BookingPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * Filter, which BookingPage to fetch.
     */
    where?: BookingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPages to fetch.
     */
    orderBy?: BookingPageOrderByWithRelationInput | BookingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingPages.
     */
    cursor?: BookingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPages.
     */
    distinct?: BookingPageScalarFieldEnum | BookingPageScalarFieldEnum[]
  }

  /**
   * BookingPage findMany
   */
  export type BookingPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * Filter, which BookingPages to fetch.
     */
    where?: BookingPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPages to fetch.
     */
    orderBy?: BookingPageOrderByWithRelationInput | BookingPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingPages.
     */
    cursor?: BookingPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPages.
     */
    skip?: number
    distinct?: BookingPageScalarFieldEnum | BookingPageScalarFieldEnum[]
  }

  /**
   * BookingPage create
   */
  export type BookingPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingPage.
     */
    data: XOR<BookingPageCreateInput, BookingPageUncheckedCreateInput>
  }

  /**
   * BookingPage createMany
   */
  export type BookingPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingPages.
     */
    data: BookingPageCreateManyInput | BookingPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingPage createManyAndReturn
   */
  export type BookingPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * The data used to create many BookingPages.
     */
    data: BookingPageCreateManyInput | BookingPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingPage update
   */
  export type BookingPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingPage.
     */
    data: XOR<BookingPageUpdateInput, BookingPageUncheckedUpdateInput>
    /**
     * Choose, which BookingPage to update.
     */
    where: BookingPageWhereUniqueInput
  }

  /**
   * BookingPage updateMany
   */
  export type BookingPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingPages.
     */
    data: XOR<BookingPageUpdateManyMutationInput, BookingPageUncheckedUpdateManyInput>
    /**
     * Filter which BookingPages to update
     */
    where?: BookingPageWhereInput
    /**
     * Limit how many BookingPages to update.
     */
    limit?: number
  }

  /**
   * BookingPage updateManyAndReturn
   */
  export type BookingPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * The data used to update BookingPages.
     */
    data: XOR<BookingPageUpdateManyMutationInput, BookingPageUncheckedUpdateManyInput>
    /**
     * Filter which BookingPages to update
     */
    where?: BookingPageWhereInput
    /**
     * Limit how many BookingPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingPage upsert
   */
  export type BookingPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingPage to update in case it exists.
     */
    where: BookingPageWhereUniqueInput
    /**
     * In case the BookingPage found by the `where` argument doesn't exist, create a new BookingPage with this data.
     */
    create: XOR<BookingPageCreateInput, BookingPageUncheckedCreateInput>
    /**
     * In case the BookingPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingPageUpdateInput, BookingPageUncheckedUpdateInput>
  }

  /**
   * BookingPage delete
   */
  export type BookingPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
    /**
     * Filter which BookingPage to delete.
     */
    where: BookingPageWhereUniqueInput
  }

  /**
   * BookingPage deleteMany
   */
  export type BookingPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingPages to delete
     */
    where?: BookingPageWhereInput
    /**
     * Limit how many BookingPages to delete.
     */
    limit?: number
  }

  /**
   * BookingPage.bookings
   */
  export type BookingPage$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * BookingPage without action
   */
  export type BookingPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPage
     */
    select?: BookingPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPage
     */
    omit?: BookingPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPageInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    bookingPageId: number | null
    duration: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    bookingPageId: number | null
    duration: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    bookingPageId: number | null
    isoString: string | null
    duration: number | null
    inviteeFirstName: string | null
    inviteeLastName: string | null
    inviteeEmail: string | null
    inviteePhone: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    bookingPageId: number | null
    isoString: string | null
    duration: number | null
    inviteeFirstName: string | null
    inviteeLastName: string | null
    inviteeEmail: string | null
    inviteePhone: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    bookingPageId: number
    isoString: number
    duration: number
    inviteeFirstName: number
    inviteeLastName: number
    inviteeEmail: number
    inviteePhone: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    bookingPageId?: true
    duration?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    bookingPageId?: true
    duration?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    bookingPageId?: true
    isoString?: true
    duration?: true
    inviteeFirstName?: true
    inviteeLastName?: true
    inviteeEmail?: true
    inviteePhone?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    bookingPageId?: true
    isoString?: true
    duration?: true
    inviteeFirstName?: true
    inviteeLastName?: true
    inviteeEmail?: true
    inviteePhone?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    bookingPageId?: true
    isoString?: true
    duration?: true
    inviteeFirstName?: true
    inviteeLastName?: true
    inviteeEmail?: true
    inviteePhone?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    bookingPageId: number
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingPageId?: boolean
    isoString?: boolean
    duration?: boolean
    inviteeFirstName?: boolean
    inviteeLastName?: boolean
    inviteeEmail?: boolean
    inviteePhone?: boolean
    createdAt?: boolean
    bookingPage?: boolean | BookingPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingPageId?: boolean
    isoString?: boolean
    duration?: boolean
    inviteeFirstName?: boolean
    inviteeLastName?: boolean
    inviteeEmail?: boolean
    inviteePhone?: boolean
    createdAt?: boolean
    bookingPage?: boolean | BookingPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingPageId?: boolean
    isoString?: boolean
    duration?: boolean
    inviteeFirstName?: boolean
    inviteeLastName?: boolean
    inviteeEmail?: boolean
    inviteePhone?: boolean
    createdAt?: boolean
    bookingPage?: boolean | BookingPageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    bookingPageId?: boolean
    isoString?: boolean
    duration?: boolean
    inviteeFirstName?: boolean
    inviteeLastName?: boolean
    inviteeEmail?: boolean
    inviteePhone?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingPageId" | "isoString" | "duration" | "inviteeFirstName" | "inviteeLastName" | "inviteeEmail" | "inviteePhone" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingPage?: boolean | BookingPageDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingPage?: boolean | BookingPageDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingPage?: boolean | BookingPageDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      bookingPage: Prisma.$BookingPagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingPageId: number
      isoString: string
      duration: number
      inviteeFirstName: string
      inviteeLastName: string
      inviteeEmail: string
      inviteePhone: string
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookingPage<T extends BookingPageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingPageDefaultArgs<ExtArgs>>): Prisma__BookingPageClient<$Result.GetResult<Prisma.$BookingPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly bookingPageId: FieldRef<"Booking", 'Int'>
    readonly isoString: FieldRef<"Booking", 'String'>
    readonly duration: FieldRef<"Booking", 'Int'>
    readonly inviteeFirstName: FieldRef<"Booking", 'String'>
    readonly inviteeLastName: FieldRef<"Booking", 'String'>
    readonly inviteeEmail: FieldRef<"Booking", 'String'>
    readonly inviteePhone: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    subject: number
    message: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    subject?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    subject: string
    message: string
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "message" | "createdAt", ExtArgs["result"]["feedback"]>

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly subject: FieldRef<"Feedback", 'String'>
    readonly message: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookingPageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    durations: 'durations',
    locationDescription: 'locationDescription',
    eventDescription: 'eventDescription',
    image: 'image',
    activeDays: 'activeDays',
    startHour: 'startHour',
    startMinute: 'startMinute',
    endHour: 'endHour',
    endMinute: 'endMinute',
    startBreakHour: 'startBreakHour',
    startBreakMinute: 'startBreakMinute',
    endBreakHour: 'endBreakHour',
    endBreakMinute: 'endBreakMinute',
    increment: 'increment',
    buffer: 'buffer',
    location: 'location'
  };

  export type BookingPageScalarFieldEnum = (typeof BookingPageScalarFieldEnum)[keyof typeof BookingPageScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    bookingPageId: 'bookingPageId',
    isoString: 'isoString',
    duration: 'duration',
    inviteeFirstName: 'inviteeFirstName',
    inviteeLastName: 'inviteeLastName',
    inviteeEmail: 'inviteeEmail',
    inviteePhone: 'inviteePhone',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookingPages?: BookingPageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bookingPages?: BookingPageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    bookingPages?: BookingPageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookingPageWhereInput = {
    AND?: BookingPageWhereInput | BookingPageWhereInput[]
    OR?: BookingPageWhereInput[]
    NOT?: BookingPageWhereInput | BookingPageWhereInput[]
    id?: IntFilter<"BookingPage"> | number
    userId?: StringFilter<"BookingPage"> | string
    title?: StringFilter<"BookingPage"> | string
    durations?: JsonFilter<"BookingPage">
    locationDescription?: StringFilter<"BookingPage"> | string
    eventDescription?: StringFilter<"BookingPage"> | string
    image?: StringNullableFilter<"BookingPage"> | string | null
    activeDays?: JsonFilter<"BookingPage">
    startHour?: IntFilter<"BookingPage"> | number
    startMinute?: IntFilter<"BookingPage"> | number
    endHour?: IntFilter<"BookingPage"> | number
    endMinute?: IntFilter<"BookingPage"> | number
    startBreakHour?: IntFilter<"BookingPage"> | number
    startBreakMinute?: IntFilter<"BookingPage"> | number
    endBreakHour?: IntFilter<"BookingPage"> | number
    endBreakMinute?: IntFilter<"BookingPage"> | number
    increment?: IntFilter<"BookingPage"> | number
    buffer?: IntFilter<"BookingPage"> | number
    location?: JsonFilter<"BookingPage">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type BookingPageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    durations?: SortOrder
    locationDescription?: SortOrder
    eventDescription?: SortOrder
    image?: SortOrderInput | SortOrder
    activeDays?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
    location?: SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type BookingPageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingPageWhereInput | BookingPageWhereInput[]
    OR?: BookingPageWhereInput[]
    NOT?: BookingPageWhereInput | BookingPageWhereInput[]
    userId?: StringFilter<"BookingPage"> | string
    title?: StringFilter<"BookingPage"> | string
    durations?: JsonFilter<"BookingPage">
    locationDescription?: StringFilter<"BookingPage"> | string
    eventDescription?: StringFilter<"BookingPage"> | string
    image?: StringNullableFilter<"BookingPage"> | string | null
    activeDays?: JsonFilter<"BookingPage">
    startHour?: IntFilter<"BookingPage"> | number
    startMinute?: IntFilter<"BookingPage"> | number
    endHour?: IntFilter<"BookingPage"> | number
    endMinute?: IntFilter<"BookingPage"> | number
    startBreakHour?: IntFilter<"BookingPage"> | number
    startBreakMinute?: IntFilter<"BookingPage"> | number
    endBreakHour?: IntFilter<"BookingPage"> | number
    endBreakMinute?: IntFilter<"BookingPage"> | number
    increment?: IntFilter<"BookingPage"> | number
    buffer?: IntFilter<"BookingPage"> | number
    location?: JsonFilter<"BookingPage">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type BookingPageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    durations?: SortOrder
    locationDescription?: SortOrder
    eventDescription?: SortOrder
    image?: SortOrderInput | SortOrder
    activeDays?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
    location?: SortOrder
    _count?: BookingPageCountOrderByAggregateInput
    _avg?: BookingPageAvgOrderByAggregateInput
    _max?: BookingPageMaxOrderByAggregateInput
    _min?: BookingPageMinOrderByAggregateInput
    _sum?: BookingPageSumOrderByAggregateInput
  }

  export type BookingPageScalarWhereWithAggregatesInput = {
    AND?: BookingPageScalarWhereWithAggregatesInput | BookingPageScalarWhereWithAggregatesInput[]
    OR?: BookingPageScalarWhereWithAggregatesInput[]
    NOT?: BookingPageScalarWhereWithAggregatesInput | BookingPageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookingPage"> | number
    userId?: StringWithAggregatesFilter<"BookingPage"> | string
    title?: StringWithAggregatesFilter<"BookingPage"> | string
    durations?: JsonWithAggregatesFilter<"BookingPage">
    locationDescription?: StringWithAggregatesFilter<"BookingPage"> | string
    eventDescription?: StringWithAggregatesFilter<"BookingPage"> | string
    image?: StringNullableWithAggregatesFilter<"BookingPage"> | string | null
    activeDays?: JsonWithAggregatesFilter<"BookingPage">
    startHour?: IntWithAggregatesFilter<"BookingPage"> | number
    startMinute?: IntWithAggregatesFilter<"BookingPage"> | number
    endHour?: IntWithAggregatesFilter<"BookingPage"> | number
    endMinute?: IntWithAggregatesFilter<"BookingPage"> | number
    startBreakHour?: IntWithAggregatesFilter<"BookingPage"> | number
    startBreakMinute?: IntWithAggregatesFilter<"BookingPage"> | number
    endBreakHour?: IntWithAggregatesFilter<"BookingPage"> | number
    endBreakMinute?: IntWithAggregatesFilter<"BookingPage"> | number
    increment?: IntWithAggregatesFilter<"BookingPage"> | number
    buffer?: IntWithAggregatesFilter<"BookingPage"> | number
    location?: JsonWithAggregatesFilter<"BookingPage">
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    bookingPageId?: IntFilter<"Booking"> | number
    isoString?: StringFilter<"Booking"> | string
    duration?: IntFilter<"Booking"> | number
    inviteeFirstName?: StringFilter<"Booking"> | string
    inviteeLastName?: StringFilter<"Booking"> | string
    inviteeEmail?: StringFilter<"Booking"> | string
    inviteePhone?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    bookingPage?: XOR<BookingPageScalarRelationFilter, BookingPageWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    isoString?: SortOrder
    duration?: SortOrder
    inviteeFirstName?: SortOrder
    inviteeLastName?: SortOrder
    inviteeEmail?: SortOrder
    inviteePhone?: SortOrder
    createdAt?: SortOrder
    bookingPage?: BookingPageOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    bookingPageId?: IntFilter<"Booking"> | number
    isoString?: StringFilter<"Booking"> | string
    duration?: IntFilter<"Booking"> | number
    inviteeFirstName?: StringFilter<"Booking"> | string
    inviteeLastName?: StringFilter<"Booking"> | string
    inviteeEmail?: StringFilter<"Booking"> | string
    inviteePhone?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    bookingPage?: XOR<BookingPageScalarRelationFilter, BookingPageWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    isoString?: SortOrder
    duration?: SortOrder
    inviteeFirstName?: SortOrder
    inviteeLastName?: SortOrder
    inviteeEmail?: SortOrder
    inviteePhone?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    bookingPageId?: IntWithAggregatesFilter<"Booking"> | number
    isoString?: StringWithAggregatesFilter<"Booking"> | string
    duration?: IntWithAggregatesFilter<"Booking"> | number
    inviteeFirstName?: StringWithAggregatesFilter<"Booking"> | string
    inviteeLastName?: StringWithAggregatesFilter<"Booking"> | string
    inviteeEmail?: StringWithAggregatesFilter<"Booking"> | string
    inviteePhone?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    subject?: StringWithAggregatesFilter<"Feedback"> | string
    message?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    bookingPages?: BookingPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
    bookingPages?: BookingPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingPages?: BookingPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingPages?: BookingPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingPageCreateInput = {
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutBookingPagesInput
    bookings?: BookingCreateNestedManyWithoutBookingPageInput
  }

  export type BookingPageUncheckedCreateInput = {
    id?: number
    userId: string
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
    bookings?: BookingUncheckedCreateNestedManyWithoutBookingPageInput
  }

  export type BookingPageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutBookingPagesNestedInput
    bookings?: BookingUpdateManyWithoutBookingPageNestedInput
  }

  export type BookingPageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    bookings?: BookingUncheckedUpdateManyWithoutBookingPageNestedInput
  }

  export type BookingPageCreateManyInput = {
    id?: number
    userId: string
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
  }

  export type BookingPageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
  }

  export type BookingPageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
  }

  export type BookingCreateInput = {
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt?: Date | string
    bookingPage: BookingPageCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    bookingPageId: number
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt?: Date | string
  }

  export type BookingUpdateInput = {
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingPage?: BookingPageUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingPageId?: IntFieldUpdateOperationsInput | number
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    bookingPageId: number
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingPageId?: IntFieldUpdateOperationsInput | number
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type BookingPageListRelationFilter = {
    every?: BookingPageWhereInput
    some?: BookingPageWhereInput
    none?: BookingPageWhereInput
  }

  export type BookingPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingPageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    durations?: SortOrder
    locationDescription?: SortOrder
    eventDescription?: SortOrder
    image?: SortOrder
    activeDays?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
    location?: SortOrder
  }

  export type BookingPageAvgOrderByAggregateInput = {
    id?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
  }

  export type BookingPageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    locationDescription?: SortOrder
    eventDescription?: SortOrder
    image?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
  }

  export type BookingPageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    locationDescription?: SortOrder
    eventDescription?: SortOrder
    image?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
  }

  export type BookingPageSumOrderByAggregateInput = {
    id?: SortOrder
    startHour?: SortOrder
    startMinute?: SortOrder
    endHour?: SortOrder
    endMinute?: SortOrder
    startBreakHour?: SortOrder
    startBreakMinute?: SortOrder
    endBreakHour?: SortOrder
    endBreakMinute?: SortOrder
    increment?: SortOrder
    buffer?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type BookingPageScalarRelationFilter = {
    is?: BookingPageWhereInput
    isNot?: BookingPageWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    isoString?: SortOrder
    duration?: SortOrder
    inviteeFirstName?: SortOrder
    inviteeLastName?: SortOrder
    inviteeEmail?: SortOrder
    inviteePhone?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    duration?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    isoString?: SortOrder
    duration?: SortOrder
    inviteeFirstName?: SortOrder
    inviteeLastName?: SortOrder
    inviteeEmail?: SortOrder
    inviteePhone?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    isoString?: SortOrder
    duration?: SortOrder
    inviteeFirstName?: SortOrder
    inviteeLastName?: SortOrder
    inviteeEmail?: SortOrder
    inviteePhone?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    bookingPageId?: SortOrder
    duration?: SortOrder
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookingPageCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingPageCreateWithoutUserInput, BookingPageUncheckedCreateWithoutUserInput> | BookingPageCreateWithoutUserInput[] | BookingPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingPageCreateOrConnectWithoutUserInput | BookingPageCreateOrConnectWithoutUserInput[]
    createMany?: BookingPageCreateManyUserInputEnvelope
    connect?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
  }

  export type BookingPageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingPageCreateWithoutUserInput, BookingPageUncheckedCreateWithoutUserInput> | BookingPageCreateWithoutUserInput[] | BookingPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingPageCreateOrConnectWithoutUserInput | BookingPageCreateOrConnectWithoutUserInput[]
    createMany?: BookingPageCreateManyUserInputEnvelope
    connect?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingPageUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingPageCreateWithoutUserInput, BookingPageUncheckedCreateWithoutUserInput> | BookingPageCreateWithoutUserInput[] | BookingPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingPageCreateOrConnectWithoutUserInput | BookingPageCreateOrConnectWithoutUserInput[]
    upsert?: BookingPageUpsertWithWhereUniqueWithoutUserInput | BookingPageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingPageCreateManyUserInputEnvelope
    set?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    disconnect?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    delete?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    connect?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    update?: BookingPageUpdateWithWhereUniqueWithoutUserInput | BookingPageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingPageUpdateManyWithWhereWithoutUserInput | BookingPageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingPageScalarWhereInput | BookingPageScalarWhereInput[]
  }

  export type BookingPageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingPageCreateWithoutUserInput, BookingPageUncheckedCreateWithoutUserInput> | BookingPageCreateWithoutUserInput[] | BookingPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingPageCreateOrConnectWithoutUserInput | BookingPageCreateOrConnectWithoutUserInput[]
    upsert?: BookingPageUpsertWithWhereUniqueWithoutUserInput | BookingPageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingPageCreateManyUserInputEnvelope
    set?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    disconnect?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    delete?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    connect?: BookingPageWhereUniqueInput | BookingPageWhereUniqueInput[]
    update?: BookingPageUpdateWithWhereUniqueWithoutUserInput | BookingPageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingPageUpdateManyWithWhereWithoutUserInput | BookingPageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingPageScalarWhereInput | BookingPageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingPagesInput = {
    create?: XOR<UserCreateWithoutBookingPagesInput, UserUncheckedCreateWithoutBookingPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingPagesInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutBookingPageInput = {
    create?: XOR<BookingCreateWithoutBookingPageInput, BookingUncheckedCreateWithoutBookingPageInput> | BookingCreateWithoutBookingPageInput[] | BookingUncheckedCreateWithoutBookingPageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBookingPageInput | BookingCreateOrConnectWithoutBookingPageInput[]
    createMany?: BookingCreateManyBookingPageInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBookingPageInput = {
    create?: XOR<BookingCreateWithoutBookingPageInput, BookingUncheckedCreateWithoutBookingPageInput> | BookingCreateWithoutBookingPageInput[] | BookingUncheckedCreateWithoutBookingPageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBookingPageInput | BookingCreateOrConnectWithoutBookingPageInput[]
    createMany?: BookingCreateManyBookingPageInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBookingPagesNestedInput = {
    create?: XOR<UserCreateWithoutBookingPagesInput, UserUncheckedCreateWithoutBookingPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingPagesInput
    upsert?: UserUpsertWithoutBookingPagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingPagesInput, UserUpdateWithoutBookingPagesInput>, UserUncheckedUpdateWithoutBookingPagesInput>
  }

  export type BookingUpdateManyWithoutBookingPageNestedInput = {
    create?: XOR<BookingCreateWithoutBookingPageInput, BookingUncheckedCreateWithoutBookingPageInput> | BookingCreateWithoutBookingPageInput[] | BookingUncheckedCreateWithoutBookingPageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBookingPageInput | BookingCreateOrConnectWithoutBookingPageInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBookingPageInput | BookingUpsertWithWhereUniqueWithoutBookingPageInput[]
    createMany?: BookingCreateManyBookingPageInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBookingPageInput | BookingUpdateWithWhereUniqueWithoutBookingPageInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBookingPageInput | BookingUpdateManyWithWhereWithoutBookingPageInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBookingPageNestedInput = {
    create?: XOR<BookingCreateWithoutBookingPageInput, BookingUncheckedCreateWithoutBookingPageInput> | BookingCreateWithoutBookingPageInput[] | BookingUncheckedCreateWithoutBookingPageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBookingPageInput | BookingCreateOrConnectWithoutBookingPageInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBookingPageInput | BookingUpsertWithWhereUniqueWithoutBookingPageInput[]
    createMany?: BookingCreateManyBookingPageInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBookingPageInput | BookingUpdateWithWhereUniqueWithoutBookingPageInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBookingPageInput | BookingUpdateManyWithWhereWithoutBookingPageInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingPageCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BookingPageCreateWithoutBookingsInput, BookingPageUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BookingPageCreateOrConnectWithoutBookingsInput
    connect?: BookingPageWhereUniqueInput
  }

  export type BookingPageUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BookingPageCreateWithoutBookingsInput, BookingPageUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BookingPageCreateOrConnectWithoutBookingsInput
    upsert?: BookingPageUpsertWithoutBookingsInput
    connect?: BookingPageWhereUniqueInput
    update?: XOR<XOR<BookingPageUpdateToOneWithWhereWithoutBookingsInput, BookingPageUpdateWithoutBookingsInput>, BookingPageUncheckedUpdateWithoutBookingsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type BookingPageCreateWithoutUserInput = {
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
    bookings?: BookingCreateNestedManyWithoutBookingPageInput
  }

  export type BookingPageUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
    bookings?: BookingUncheckedCreateNestedManyWithoutBookingPageInput
  }

  export type BookingPageCreateOrConnectWithoutUserInput = {
    where: BookingPageWhereUniqueInput
    create: XOR<BookingPageCreateWithoutUserInput, BookingPageUncheckedCreateWithoutUserInput>
  }

  export type BookingPageCreateManyUserInputEnvelope = {
    data: BookingPageCreateManyUserInput | BookingPageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingPageUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingPageWhereUniqueInput
    update: XOR<BookingPageUpdateWithoutUserInput, BookingPageUncheckedUpdateWithoutUserInput>
    create: XOR<BookingPageCreateWithoutUserInput, BookingPageUncheckedCreateWithoutUserInput>
  }

  export type BookingPageUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingPageWhereUniqueInput
    data: XOR<BookingPageUpdateWithoutUserInput, BookingPageUncheckedUpdateWithoutUserInput>
  }

  export type BookingPageUpdateManyWithWhereWithoutUserInput = {
    where: BookingPageScalarWhereInput
    data: XOR<BookingPageUpdateManyMutationInput, BookingPageUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingPageScalarWhereInput = {
    AND?: BookingPageScalarWhereInput | BookingPageScalarWhereInput[]
    OR?: BookingPageScalarWhereInput[]
    NOT?: BookingPageScalarWhereInput | BookingPageScalarWhereInput[]
    id?: IntFilter<"BookingPage"> | number
    userId?: StringFilter<"BookingPage"> | string
    title?: StringFilter<"BookingPage"> | string
    durations?: JsonFilter<"BookingPage">
    locationDescription?: StringFilter<"BookingPage"> | string
    eventDescription?: StringFilter<"BookingPage"> | string
    image?: StringNullableFilter<"BookingPage"> | string | null
    activeDays?: JsonFilter<"BookingPage">
    startHour?: IntFilter<"BookingPage"> | number
    startMinute?: IntFilter<"BookingPage"> | number
    endHour?: IntFilter<"BookingPage"> | number
    endMinute?: IntFilter<"BookingPage"> | number
    startBreakHour?: IntFilter<"BookingPage"> | number
    startBreakMinute?: IntFilter<"BookingPage"> | number
    endBreakHour?: IntFilter<"BookingPage"> | number
    endBreakMinute?: IntFilter<"BookingPage"> | number
    increment?: IntFilter<"BookingPage"> | number
    buffer?: IntFilter<"BookingPage"> | number
    location?: JsonFilter<"BookingPage">
  }

  export type UserCreateWithoutBookingPagesInput = {
    id?: string
    username?: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingPagesInput = {
    id?: string
    username?: string
    email: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingPagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingPagesInput, UserUncheckedCreateWithoutBookingPagesInput>
  }

  export type BookingCreateWithoutBookingPageInput = {
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutBookingPageInput = {
    id?: number
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutBookingPageInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBookingPageInput, BookingUncheckedCreateWithoutBookingPageInput>
  }

  export type BookingCreateManyBookingPageInputEnvelope = {
    data: BookingCreateManyBookingPageInput | BookingCreateManyBookingPageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingPagesInput = {
    update: XOR<UserUpdateWithoutBookingPagesInput, UserUncheckedUpdateWithoutBookingPagesInput>
    create: XOR<UserCreateWithoutBookingPagesInput, UserUncheckedCreateWithoutBookingPagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingPagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingPagesInput, UserUncheckedUpdateWithoutBookingPagesInput>
  }

  export type UserUpdateWithoutBookingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutBookingPageInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBookingPageInput, BookingUncheckedUpdateWithoutBookingPageInput>
    create: XOR<BookingCreateWithoutBookingPageInput, BookingUncheckedCreateWithoutBookingPageInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBookingPageInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBookingPageInput, BookingUncheckedUpdateWithoutBookingPageInput>
  }

  export type BookingUpdateManyWithWhereWithoutBookingPageInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBookingPageInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    bookingPageId?: IntFilter<"Booking"> | number
    isoString?: StringFilter<"Booking"> | string
    duration?: IntFilter<"Booking"> | number
    inviteeFirstName?: StringFilter<"Booking"> | string
    inviteeLastName?: StringFilter<"Booking"> | string
    inviteeEmail?: StringFilter<"Booking"> | string
    inviteePhone?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingPageCreateWithoutBookingsInput = {
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutBookingPagesInput
  }

  export type BookingPageUncheckedCreateWithoutBookingsInput = {
    id?: number
    userId: string
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
  }

  export type BookingPageCreateOrConnectWithoutBookingsInput = {
    where: BookingPageWhereUniqueInput
    create: XOR<BookingPageCreateWithoutBookingsInput, BookingPageUncheckedCreateWithoutBookingsInput>
  }

  export type BookingPageUpsertWithoutBookingsInput = {
    update: XOR<BookingPageUpdateWithoutBookingsInput, BookingPageUncheckedUpdateWithoutBookingsInput>
    create: XOR<BookingPageCreateWithoutBookingsInput, BookingPageUncheckedCreateWithoutBookingsInput>
    where?: BookingPageWhereInput
  }

  export type BookingPageUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BookingPageWhereInput
    data: XOR<BookingPageUpdateWithoutBookingsInput, BookingPageUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingPageUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutBookingPagesNestedInput
  }

  export type BookingPageUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
  }

  export type BookingPageCreateManyUserInput = {
    id?: number
    title: string
    durations: JsonNullValueInput | InputJsonValue
    locationDescription: string
    eventDescription?: string
    image?: string | null
    activeDays: JsonNullValueInput | InputJsonValue
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
    startBreakHour: number
    startBreakMinute: number
    endBreakHour: number
    endBreakMinute: number
    increment: number
    buffer: number
    location: JsonNullValueInput | InputJsonValue
  }

  export type BookingPageUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    bookings?: BookingUpdateManyWithoutBookingPageNestedInput
  }

  export type BookingPageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
    bookings?: BookingUncheckedUpdateManyWithoutBookingPageNestedInput
  }

  export type BookingPageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    durations?: JsonNullValueInput | InputJsonValue
    locationDescription?: StringFieldUpdateOperationsInput | string
    eventDescription?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    activeDays?: JsonNullValueInput | InputJsonValue
    startHour?: IntFieldUpdateOperationsInput | number
    startMinute?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    endMinute?: IntFieldUpdateOperationsInput | number
    startBreakHour?: IntFieldUpdateOperationsInput | number
    startBreakMinute?: IntFieldUpdateOperationsInput | number
    endBreakHour?: IntFieldUpdateOperationsInput | number
    endBreakMinute?: IntFieldUpdateOperationsInput | number
    increment?: IntFieldUpdateOperationsInput | number
    buffer?: IntFieldUpdateOperationsInput | number
    location?: JsonNullValueInput | InputJsonValue
  }

  export type BookingCreateManyBookingPageInput = {
    id?: number
    isoString: string
    duration: number
    inviteeFirstName: string
    inviteeLastName: string
    inviteeEmail: string
    inviteePhone: string
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutBookingPageInput = {
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutBookingPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutBookingPageInput = {
    id?: IntFieldUpdateOperationsInput | number
    isoString?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    inviteeFirstName?: StringFieldUpdateOperationsInput | string
    inviteeLastName?: StringFieldUpdateOperationsInput | string
    inviteeEmail?: StringFieldUpdateOperationsInput | string
    inviteePhone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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