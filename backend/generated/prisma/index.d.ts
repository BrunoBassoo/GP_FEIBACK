
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model GroupFeedback
 * 
 */
export type GroupFeedback = $Result.DefaultSelection<Prisma.$GroupFeedbackPayload>
/**
 * Model FeedbackResponse
 * 
 */
export type FeedbackResponse = $Result.DefaultSelection<Prisma.$FeedbackResponsePayload>
/**
 * Model StudentPoints
 * 
 */
export type StudentPoints = $Result.DefaultSelection<Prisma.$StudentPointsPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model CouponRedemption
 * 
 */
export type CouponRedemption = $Result.DefaultSelection<Prisma.$CouponRedemptionPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model WorkGroup
 * 
 */
export type WorkGroup = $Result.DefaultSelection<Prisma.$WorkGroupPayload>
/**
 * Model WorkGroupMember
 * 
 */
export type WorkGroupMember = $Result.DefaultSelection<Prisma.$WorkGroupMemberPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  SUSPENDED: 'SUSPENDED',
  BANNED: 'BANNED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const FeedbackStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  COMPLETED: 'COMPLETED'
};

export type FeedbackStatus = (typeof FeedbackStatus)[keyof typeof FeedbackStatus]


export const CouponStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED',
  REDEEMED: 'REDEEMED'
};

export type CouponStatus = (typeof CouponStatus)[keyof typeof CouponStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type FeedbackStatus = $Enums.FeedbackStatus

export const FeedbackStatus: typeof $Enums.FeedbackStatus

export type CouponStatus = $Enums.CouponStatus

export const CouponStatus: typeof $Enums.CouponStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupFeedback`: Exposes CRUD operations for the **GroupFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupFeedbacks
    * const groupFeedbacks = await prisma.groupFeedback.findMany()
    * ```
    */
  get groupFeedback(): Prisma.GroupFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackResponse`: Exposes CRUD operations for the **FeedbackResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackResponses
    * const feedbackResponses = await prisma.feedbackResponse.findMany()
    * ```
    */
  get feedbackResponse(): Prisma.FeedbackResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentPoints`: Exposes CRUD operations for the **StudentPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentPoints
    * const studentPoints = await prisma.studentPoints.findMany()
    * ```
    */
  get studentPoints(): Prisma.StudentPointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couponRedemption`: Exposes CRUD operations for the **CouponRedemption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CouponRedemptions
    * const couponRedemptions = await prisma.couponRedemption.findMany()
    * ```
    */
  get couponRedemption(): Prisma.CouponRedemptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workGroup`: Exposes CRUD operations for the **WorkGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkGroups
    * const workGroups = await prisma.workGroup.findMany()
    * ```
    */
  get workGroup(): Prisma.WorkGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workGroupMember`: Exposes CRUD operations for the **WorkGroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkGroupMembers
    * const workGroupMembers = await prisma.workGroupMember.findMany()
    * ```
    */
  get workGroupMember(): Prisma.WorkGroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Student: 'Student',
    Teacher: 'Teacher',
    Admin: 'Admin',
    GroupFeedback: 'GroupFeedback',
    FeedbackResponse: 'FeedbackResponse',
    StudentPoints: 'StudentPoints',
    Coupon: 'Coupon',
    CouponRedemption: 'CouponRedemption',
    Subject: 'Subject',
    WorkGroup: 'WorkGroup',
    WorkGroupMember: 'WorkGroupMember',
    SystemConfig: 'SystemConfig'
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
      modelProps: "user" | "student" | "teacher" | "admin" | "groupFeedback" | "feedbackResponse" | "studentPoints" | "coupon" | "couponRedemption" | "subject" | "workGroup" | "workGroupMember" | "systemConfig"
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
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      GroupFeedback: {
        payload: Prisma.$GroupFeedbackPayload<ExtArgs>
        fields: Prisma.GroupFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>
          }
          findFirst: {
            args: Prisma.GroupFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>
          }
          findMany: {
            args: Prisma.GroupFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>[]
          }
          create: {
            args: Prisma.GroupFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>
          }
          createMany: {
            args: Prisma.GroupFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>[]
          }
          delete: {
            args: Prisma.GroupFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>
          }
          update: {
            args: Prisma.GroupFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.GroupFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupFeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>[]
          }
          upsert: {
            args: Prisma.GroupFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupFeedbackPayload>
          }
          aggregate: {
            args: Prisma.GroupFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupFeedback>
          }
          groupBy: {
            args: Prisma.GroupFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<GroupFeedbackCountAggregateOutputType> | number
          }
        }
      }
      FeedbackResponse: {
        payload: Prisma.$FeedbackResponsePayload<ExtArgs>
        fields: Prisma.FeedbackResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          findFirst: {
            args: Prisma.FeedbackResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          findMany: {
            args: Prisma.FeedbackResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>[]
          }
          create: {
            args: Prisma.FeedbackResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          createMany: {
            args: Prisma.FeedbackResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>[]
          }
          delete: {
            args: Prisma.FeedbackResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          update: {
            args: Prisma.FeedbackResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          deleteMany: {
            args: Prisma.FeedbackResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>[]
          }
          upsert: {
            args: Prisma.FeedbackResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          aggregate: {
            args: Prisma.FeedbackResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackResponse>
          }
          groupBy: {
            args: Prisma.FeedbackResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackResponseCountAggregateOutputType> | number
          }
        }
      }
      StudentPoints: {
        payload: Prisma.$StudentPointsPayload<ExtArgs>
        fields: Prisma.StudentPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentPointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentPointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>
          }
          findFirst: {
            args: Prisma.StudentPointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentPointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>
          }
          findMany: {
            args: Prisma.StudentPointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>[]
          }
          create: {
            args: Prisma.StudentPointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>
          }
          createMany: {
            args: Prisma.StudentPointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentPointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>[]
          }
          delete: {
            args: Prisma.StudentPointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>
          }
          update: {
            args: Prisma.StudentPointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>
          }
          deleteMany: {
            args: Prisma.StudentPointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentPointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentPointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>[]
          }
          upsert: {
            args: Prisma.StudentPointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsPayload>
          }
          aggregate: {
            args: Prisma.StudentPointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentPoints>
          }
          groupBy: {
            args: Prisma.StudentPointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentPointsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentPointsCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      CouponRedemption: {
        payload: Prisma.$CouponRedemptionPayload<ExtArgs>
        fields: Prisma.CouponRedemptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponRedemptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponRedemptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>
          }
          findFirst: {
            args: Prisma.CouponRedemptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponRedemptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>
          }
          findMany: {
            args: Prisma.CouponRedemptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>[]
          }
          create: {
            args: Prisma.CouponRedemptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>
          }
          createMany: {
            args: Prisma.CouponRedemptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponRedemptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>[]
          }
          delete: {
            args: Prisma.CouponRedemptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>
          }
          update: {
            args: Prisma.CouponRedemptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>
          }
          deleteMany: {
            args: Prisma.CouponRedemptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponRedemptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CouponRedemptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>[]
          }
          upsert: {
            args: Prisma.CouponRedemptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponRedemptionPayload>
          }
          aggregate: {
            args: Prisma.CouponRedemptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouponRedemption>
          }
          groupBy: {
            args: Prisma.CouponRedemptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponRedemptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponRedemptionCountArgs<ExtArgs>
            result: $Utils.Optional<CouponRedemptionCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      WorkGroup: {
        payload: Prisma.$WorkGroupPayload<ExtArgs>
        fields: Prisma.WorkGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>
          }
          findFirst: {
            args: Prisma.WorkGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>
          }
          findMany: {
            args: Prisma.WorkGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>[]
          }
          create: {
            args: Prisma.WorkGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>
          }
          createMany: {
            args: Prisma.WorkGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>[]
          }
          delete: {
            args: Prisma.WorkGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>
          }
          update: {
            args: Prisma.WorkGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>
          }
          deleteMany: {
            args: Prisma.WorkGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>[]
          }
          upsert: {
            args: Prisma.WorkGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupPayload>
          }
          aggregate: {
            args: Prisma.WorkGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkGroup>
          }
          groupBy: {
            args: Prisma.WorkGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkGroupCountArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupCountAggregateOutputType> | number
          }
        }
      }
      WorkGroupMember: {
        payload: Prisma.$WorkGroupMemberPayload<ExtArgs>
        fields: Prisma.WorkGroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkGroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkGroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>
          }
          findFirst: {
            args: Prisma.WorkGroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkGroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>
          }
          findMany: {
            args: Prisma.WorkGroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>[]
          }
          create: {
            args: Prisma.WorkGroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>
          }
          createMany: {
            args: Prisma.WorkGroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkGroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>[]
          }
          delete: {
            args: Prisma.WorkGroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>
          }
          update: {
            args: Prisma.WorkGroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.WorkGroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkGroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkGroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.WorkGroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkGroupMemberPayload>
          }
          aggregate: {
            args: Prisma.WorkGroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkGroupMember>
          }
          groupBy: {
            args: Prisma.WorkGroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkGroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupMemberCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    student?: StudentOmit
    teacher?: TeacherOmit
    admin?: AdminOmit
    groupFeedback?: GroupFeedbackOmit
    feedbackResponse?: FeedbackResponseOmit
    studentPoints?: StudentPointsOmit
    coupon?: CouponOmit
    couponRedemption?: CouponRedemptionOmit
    subject?: SubjectOmit
    workGroup?: WorkGroupOmit
    workGroupMember?: WorkGroupMemberOmit
    systemConfig?: SystemConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    FeedbackResponsesAsEvaluator: number
    FeedbackResponsesAsEvaluated: number
    CouponRedemptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FeedbackResponsesAsEvaluator?: boolean | UserCountOutputTypeCountFeedbackResponsesAsEvaluatorArgs
    FeedbackResponsesAsEvaluated?: boolean | UserCountOutputTypeCountFeedbackResponsesAsEvaluatedArgs
    CouponRedemptions?: boolean | UserCountOutputTypeCountCouponRedemptionsArgs
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
  export type UserCountOutputTypeCountFeedbackResponsesAsEvaluatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackResponsesAsEvaluatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCouponRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponRedemptionWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    WorkGroupMembers: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkGroupMembers?: boolean | StudentCountOutputTypeCountWorkGroupMembersArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountWorkGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkGroupMemberWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    GroupFeedbacks: number
    WorkGroups: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GroupFeedbacks?: boolean | TeacherCountOutputTypeCountGroupFeedbacksArgs
    WorkGroups?: boolean | TeacherCountOutputTypeCountWorkGroupsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountGroupFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupFeedbackWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountWorkGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkGroupWhereInput
  }


  /**
   * Count Type GroupFeedbackCountOutputType
   */

  export type GroupFeedbackCountOutputType = {
    Responses: number
  }

  export type GroupFeedbackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Responses?: boolean | GroupFeedbackCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * GroupFeedbackCountOutputType without action
   */
  export type GroupFeedbackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedbackCountOutputType
     */
    select?: GroupFeedbackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupFeedbackCountOutputType without action
   */
  export type GroupFeedbackCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackResponseWhereInput
  }


  /**
   * Count Type CouponCountOutputType
   */

  export type CouponCountOutputType = {
    Redemptions: number
  }

  export type CouponCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Redemptions?: boolean | CouponCountOutputTypeCountRedemptionsArgs
  }

  // Custom InputTypes
  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponCountOutputType
     */
    select?: CouponCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponCountOutputType without action
   */
  export type CouponCountOutputTypeCountRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponRedemptionWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    WorkGroups: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkGroups?: boolean | SubjectCountOutputTypeCountWorkGroupsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountWorkGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkGroupWhereInput
  }


  /**
   * Count Type WorkGroupCountOutputType
   */

  export type WorkGroupCountOutputType = {
    Members: number
    GroupFeedbacks: number
  }

  export type WorkGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Members?: boolean | WorkGroupCountOutputTypeCountMembersArgs
    GroupFeedbacks?: boolean | WorkGroupCountOutputTypeCountGroupFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * WorkGroupCountOutputType without action
   */
  export type WorkGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupCountOutputType
     */
    select?: WorkGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkGroupCountOutputType without action
   */
  export type WorkGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkGroupMemberWhereInput
  }

  /**
   * WorkGroupCountOutputType without action
   */
  export type WorkGroupCountOutputTypeCountGroupFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupFeedbackWhereInput
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
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    profilePicture: string | null
    lastLoginAt: Date | null
    emailVerified: boolean | null
    emailVerifiedAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    profilePicture: string | null
    lastLoginAt: Date | null
    emailVerified: boolean | null
    emailVerifiedAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phone: number
    role: number
    status: number
    profilePicture: number
    lastLoginAt: number
    emailVerified: number
    emailVerifiedAt: number
    passwordResetToken: number
    passwordResetExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    status?: true
    profilePicture?: true
    lastLoginAt?: true
    emailVerified?: true
    emailVerifiedAt?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    status?: true
    profilePicture?: true
    lastLoginAt?: true
    emailVerified?: true
    emailVerifiedAt?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    status?: true
    profilePicture?: true
    lastLoginAt?: true
    emailVerified?: true
    emailVerifiedAt?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    profilePicture: string | null
    lastLoginAt: Date | null
    emailVerified: boolean
    emailVerifiedAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePicture?: boolean
    lastLoginAt?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Student?: boolean | User$StudentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    FeedbackResponsesAsEvaluator?: boolean | User$FeedbackResponsesAsEvaluatorArgs<ExtArgs>
    FeedbackResponsesAsEvaluated?: boolean | User$FeedbackResponsesAsEvaluatedArgs<ExtArgs>
    CouponRedemptions?: boolean | User$CouponRedemptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePicture?: boolean
    lastLoginAt?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePicture?: boolean
    lastLoginAt?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    status?: boolean
    profilePicture?: boolean
    lastLoginAt?: boolean
    emailVerified?: boolean
    emailVerifiedAt?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phone" | "role" | "status" | "profilePicture" | "lastLoginAt" | "emailVerified" | "emailVerifiedAt" | "passwordResetToken" | "passwordResetExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | User$StudentArgs<ExtArgs>
    Teacher?: boolean | User$TeacherArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
    FeedbackResponsesAsEvaluator?: boolean | User$FeedbackResponsesAsEvaluatorArgs<ExtArgs>
    FeedbackResponsesAsEvaluated?: boolean | User$FeedbackResponsesAsEvaluatedArgs<ExtArgs>
    CouponRedemptions?: boolean | User$CouponRedemptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs> | null
      Teacher: Prisma.$TeacherPayload<ExtArgs> | null
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      FeedbackResponsesAsEvaluator: Prisma.$FeedbackResponsePayload<ExtArgs>[]
      FeedbackResponsesAsEvaluated: Prisma.$FeedbackResponsePayload<ExtArgs>[]
      CouponRedemptions: Prisma.$CouponRedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phone: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      profilePicture: string | null
      lastLoginAt: Date | null
      emailVerified: boolean
      emailVerifiedAt: Date | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
      createdAt: Date
      updatedAt: Date
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
    Student<T extends User$StudentArgs<ExtArgs> = {}>(args?: Subset<T, User$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Teacher<T extends User$TeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$TeacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    FeedbackResponsesAsEvaluator<T extends User$FeedbackResponsesAsEvaluatorArgs<ExtArgs> = {}>(args?: Subset<T, User$FeedbackResponsesAsEvaluatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FeedbackResponsesAsEvaluated<T extends User$FeedbackResponsesAsEvaluatedArgs<ExtArgs> = {}>(args?: Subset<T, User$FeedbackResponsesAsEvaluatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CouponRedemptions<T extends User$CouponRedemptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$CouponRedemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.Student
   */
  export type User$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.Teacher
   */
  export type User$TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.FeedbackResponsesAsEvaluator
   */
  export type User$FeedbackResponsesAsEvaluatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    where?: FeedbackResponseWhereInput
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    cursor?: FeedbackResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * User.FeedbackResponsesAsEvaluated
   */
  export type User$FeedbackResponsesAsEvaluatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    where?: FeedbackResponseWhereInput
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    cursor?: FeedbackResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * User.CouponRedemptions
   */
  export type User$CouponRedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    where?: CouponRedemptionWhereInput
    orderBy?: CouponRedemptionOrderByWithRelationInput | CouponRedemptionOrderByWithRelationInput[]
    cursor?: CouponRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponRedemptionScalarFieldEnum | CouponRedemptionScalarFieldEnum[]
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
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    totalPoints: number | null
    level: number | null
  }

  export type StudentSumAggregateOutputType = {
    totalPoints: number | null
    level: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    registerNumber: string | null
    course: string | null
    semester: string | null
    institution: string | null
    campus: string | null
    totalPoints: number | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    registerNumber: string | null
    course: string | null
    semester: string | null
    institution: string | null
    campus: string | null
    totalPoints: number | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    registerNumber: number
    course: number
    semester: number
    institution: number
    campus: number
    totalPoints: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    totalPoints?: true
    level?: true
  }

  export type StudentSumAggregateInputType = {
    totalPoints?: true
    level?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    registerNumber?: true
    course?: true
    semester?: true
    institution?: true
    campus?: true
    totalPoints?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    registerNumber?: true
    course?: true
    semester?: true
    institution?: true
    campus?: true
    totalPoints?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    registerNumber?: true
    course?: true
    semester?: true
    institution?: true
    campus?: true
    totalPoints?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    registerNumber: string
    course: string
    semester: string
    institution: string
    campus: string | null
    totalPoints: number
    level: number
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    course?: boolean
    semester?: boolean
    institution?: boolean
    campus?: boolean
    totalPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    StudentPoints?: boolean | Student$StudentPointsArgs<ExtArgs>
    WorkGroupMembers?: boolean | Student$WorkGroupMembersArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    course?: boolean
    semester?: boolean
    institution?: boolean
    campus?: boolean
    totalPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    course?: boolean
    semester?: boolean
    institution?: boolean
    campus?: boolean
    totalPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    course?: boolean
    semester?: boolean
    institution?: boolean
    campus?: boolean
    totalPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "registerNumber" | "course" | "semester" | "institution" | "campus" | "totalPoints" | "level" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    StudentPoints?: boolean | Student$StudentPointsArgs<ExtArgs>
    WorkGroupMembers?: boolean | Student$WorkGroupMembersArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      StudentPoints: Prisma.$StudentPointsPayload<ExtArgs> | null
      WorkGroupMembers: Prisma.$WorkGroupMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      registerNumber: string
      course: string
      semester: string
      institution: string
      campus: string | null
      totalPoints: number
      level: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    StudentPoints<T extends Student$StudentPointsArgs<ExtArgs> = {}>(args?: Subset<T, Student$StudentPointsArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    WorkGroupMembers<T extends Student$WorkGroupMembersArgs<ExtArgs> = {}>(args?: Subset<T, Student$WorkGroupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly registerNumber: FieldRef<"Student", 'String'>
    readonly course: FieldRef<"Student", 'String'>
    readonly semester: FieldRef<"Student", 'String'>
    readonly institution: FieldRef<"Student", 'String'>
    readonly campus: FieldRef<"Student", 'String'>
    readonly totalPoints: FieldRef<"Student", 'Int'>
    readonly level: FieldRef<"Student", 'Int'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.StudentPoints
   */
  export type Student$StudentPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    where?: StudentPointsWhereInput
  }

  /**
   * Student.WorkGroupMembers
   */
  export type Student$WorkGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    where?: WorkGroupMemberWhereInput
    orderBy?: WorkGroupMemberOrderByWithRelationInput | WorkGroupMemberOrderByWithRelationInput[]
    cursor?: WorkGroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkGroupMemberScalarFieldEnum | WorkGroupMemberScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    userId: string | null
    registerNumber: string | null
    department: string | null
    isApproved: boolean | null
    approvedAt: Date | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    registerNumber: string | null
    department: string | null
    isApproved: boolean | null
    approvedAt: Date | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    registerNumber: number
    department: number
    isApproved: number
    approvedAt: number
    approvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    registerNumber?: true
    department?: true
    isApproved?: true
    approvedAt?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    registerNumber?: true
    department?: true
    isApproved?: true
    approvedAt?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    registerNumber?: true
    department?: true
    isApproved?: true
    approvedAt?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    userId: string
    registerNumber: string
    department: string | null
    isApproved: boolean
    approvedAt: Date | null
    approvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    department?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    GroupFeedbacks?: boolean | Teacher$GroupFeedbacksArgs<ExtArgs>
    WorkGroups?: boolean | Teacher$WorkGroupsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    department?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    department?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    registerNumber?: boolean
    department?: boolean
    isApproved?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "registerNumber" | "department" | "isApproved" | "approvedAt" | "approvedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    GroupFeedbacks?: boolean | Teacher$GroupFeedbacksArgs<ExtArgs>
    WorkGroups?: boolean | Teacher$WorkGroupsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      GroupFeedbacks: Prisma.$GroupFeedbackPayload<ExtArgs>[]
      WorkGroups: Prisma.$WorkGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      registerNumber: string
      department: string | null
      isApproved: boolean
      approvedAt: Date | null
      approvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    GroupFeedbacks<T extends Teacher$GroupFeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$GroupFeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkGroups<T extends Teacher$WorkGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$WorkGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly userId: FieldRef<"Teacher", 'String'>
    readonly registerNumber: FieldRef<"Teacher", 'String'>
    readonly department: FieldRef<"Teacher", 'String'>
    readonly isApproved: FieldRef<"Teacher", 'Boolean'>
    readonly approvedAt: FieldRef<"Teacher", 'DateTime'>
    readonly approvedBy: FieldRef<"Teacher", 'String'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.GroupFeedbacks
   */
  export type Teacher$GroupFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    where?: GroupFeedbackWhereInput
    orderBy?: GroupFeedbackOrderByWithRelationInput | GroupFeedbackOrderByWithRelationInput[]
    cursor?: GroupFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupFeedbackScalarFieldEnum | GroupFeedbackScalarFieldEnum[]
  }

  /**
   * Teacher.WorkGroups
   */
  export type Teacher$WorkGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    where?: WorkGroupWhereInput
    orderBy?: WorkGroupOrderByWithRelationInput | WorkGroupOrderByWithRelationInput[]
    cursor?: WorkGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkGroupScalarFieldEnum | WorkGroupScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model GroupFeedback
   */

  export type AggregateGroupFeedback = {
    _count: GroupFeedbackCountAggregateOutputType | null
    _avg: GroupFeedbackAvgAggregateOutputType | null
    _sum: GroupFeedbackSumAggregateOutputType | null
    _min: GroupFeedbackMinAggregateOutputType | null
    _max: GroupFeedbackMaxAggregateOutputType | null
  }

  export type GroupFeedbackAvgAggregateOutputType = {
    pointsPerResponse: number | null
  }

  export type GroupFeedbackSumAggregateOutputType = {
    pointsPerResponse: number | null
  }

  export type GroupFeedbackMinAggregateOutputType = {
    id: string | null
    teacherId: string | null
    workGroupId: string | null
    title: string | null
    description: string | null
    status: $Enums.FeedbackStatus | null
    pointsPerResponse: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupFeedbackMaxAggregateOutputType = {
    id: string | null
    teacherId: string | null
    workGroupId: string | null
    title: string | null
    description: string | null
    status: $Enums.FeedbackStatus | null
    pointsPerResponse: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupFeedbackCountAggregateOutputType = {
    id: number
    teacherId: number
    workGroupId: number
    title: number
    description: number
    status: number
    pointsPerResponse: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupFeedbackAvgAggregateInputType = {
    pointsPerResponse?: true
  }

  export type GroupFeedbackSumAggregateInputType = {
    pointsPerResponse?: true
  }

  export type GroupFeedbackMinAggregateInputType = {
    id?: true
    teacherId?: true
    workGroupId?: true
    title?: true
    description?: true
    status?: true
    pointsPerResponse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupFeedbackMaxAggregateInputType = {
    id?: true
    teacherId?: true
    workGroupId?: true
    title?: true
    description?: true
    status?: true
    pointsPerResponse?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupFeedbackCountAggregateInputType = {
    id?: true
    teacherId?: true
    workGroupId?: true
    title?: true
    description?: true
    status?: true
    pointsPerResponse?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupFeedback to aggregate.
     */
    where?: GroupFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFeedbacks to fetch.
     */
    orderBy?: GroupFeedbackOrderByWithRelationInput | GroupFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupFeedbacks
    **/
    _count?: true | GroupFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupFeedbackMaxAggregateInputType
  }

  export type GetGroupFeedbackAggregateType<T extends GroupFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupFeedback[P]>
      : GetScalarType<T[P], AggregateGroupFeedback[P]>
  }




  export type GroupFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupFeedbackWhereInput
    orderBy?: GroupFeedbackOrderByWithAggregationInput | GroupFeedbackOrderByWithAggregationInput[]
    by: GroupFeedbackScalarFieldEnum[] | GroupFeedbackScalarFieldEnum
    having?: GroupFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupFeedbackCountAggregateInputType | true
    _avg?: GroupFeedbackAvgAggregateInputType
    _sum?: GroupFeedbackSumAggregateInputType
    _min?: GroupFeedbackMinAggregateInputType
    _max?: GroupFeedbackMaxAggregateInputType
  }

  export type GroupFeedbackGroupByOutputType = {
    id: string
    teacherId: string
    workGroupId: string
    title: string
    description: string | null
    status: $Enums.FeedbackStatus
    pointsPerResponse: number
    createdAt: Date
    updatedAt: Date
    _count: GroupFeedbackCountAggregateOutputType | null
    _avg: GroupFeedbackAvgAggregateOutputType | null
    _sum: GroupFeedbackSumAggregateOutputType | null
    _min: GroupFeedbackMinAggregateOutputType | null
    _max: GroupFeedbackMaxAggregateOutputType | null
  }

  type GetGroupFeedbackGroupByPayload<T extends GroupFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], GroupFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type GroupFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    workGroupId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    pointsPerResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    Responses?: boolean | GroupFeedback$ResponsesArgs<ExtArgs>
    _count?: boolean | GroupFeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupFeedback"]>

  export type GroupFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    workGroupId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    pointsPerResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupFeedback"]>

  export type GroupFeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    workGroupId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    pointsPerResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupFeedback"]>

  export type GroupFeedbackSelectScalar = {
    id?: boolean
    teacherId?: boolean
    workGroupId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    pointsPerResponse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "workGroupId" | "title" | "description" | "status" | "pointsPerResponse" | "createdAt" | "updatedAt", ExtArgs["result"]["groupFeedback"]>
  export type GroupFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    Responses?: boolean | GroupFeedback$ResponsesArgs<ExtArgs>
    _count?: boolean | GroupFeedbackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
  }
  export type GroupFeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
  }

  export type $GroupFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupFeedback"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      workGroup: Prisma.$WorkGroupPayload<ExtArgs>
      Responses: Prisma.$FeedbackResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teacherId: string
      workGroupId: string
      title: string
      description: string | null
      status: $Enums.FeedbackStatus
      pointsPerResponse: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupFeedback"]>
    composites: {}
  }

  type GroupFeedbackGetPayload<S extends boolean | null | undefined | GroupFeedbackDefaultArgs> = $Result.GetResult<Prisma.$GroupFeedbackPayload, S>

  type GroupFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupFeedbackCountAggregateInputType | true
    }

  export interface GroupFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupFeedback'], meta: { name: 'GroupFeedback' } }
    /**
     * Find zero or one GroupFeedback that matches the filter.
     * @param {GroupFeedbackFindUniqueArgs} args - Arguments to find a GroupFeedback
     * @example
     * // Get one GroupFeedback
     * const groupFeedback = await prisma.groupFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFeedbackFindUniqueArgs>(args: SelectSubset<T, GroupFeedbackFindUniqueArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFeedbackFindUniqueOrThrowArgs} args - Arguments to find a GroupFeedback
     * @example
     * // Get one GroupFeedback
     * const groupFeedback = await prisma.groupFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackFindFirstArgs} args - Arguments to find a GroupFeedback
     * @example
     * // Get one GroupFeedback
     * const groupFeedback = await prisma.groupFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFeedbackFindFirstArgs>(args?: SelectSubset<T, GroupFeedbackFindFirstArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackFindFirstOrThrowArgs} args - Arguments to find a GroupFeedback
     * @example
     * // Get one GroupFeedback
     * const groupFeedback = await prisma.groupFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupFeedbacks
     * const groupFeedbacks = await prisma.groupFeedback.findMany()
     * 
     * // Get first 10 GroupFeedbacks
     * const groupFeedbacks = await prisma.groupFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupFeedbackWithIdOnly = await prisma.groupFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFeedbackFindManyArgs>(args?: SelectSubset<T, GroupFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupFeedback.
     * @param {GroupFeedbackCreateArgs} args - Arguments to create a GroupFeedback.
     * @example
     * // Create one GroupFeedback
     * const GroupFeedback = await prisma.groupFeedback.create({
     *   data: {
     *     // ... data to create a GroupFeedback
     *   }
     * })
     * 
     */
    create<T extends GroupFeedbackCreateArgs>(args: SelectSubset<T, GroupFeedbackCreateArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupFeedbacks.
     * @param {GroupFeedbackCreateManyArgs} args - Arguments to create many GroupFeedbacks.
     * @example
     * // Create many GroupFeedbacks
     * const groupFeedback = await prisma.groupFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupFeedbackCreateManyArgs>(args?: SelectSubset<T, GroupFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupFeedbacks and returns the data saved in the database.
     * @param {GroupFeedbackCreateManyAndReturnArgs} args - Arguments to create many GroupFeedbacks.
     * @example
     * // Create many GroupFeedbacks
     * const groupFeedback = await prisma.groupFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupFeedbacks and only return the `id`
     * const groupFeedbackWithIdOnly = await prisma.groupFeedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupFeedback.
     * @param {GroupFeedbackDeleteArgs} args - Arguments to delete one GroupFeedback.
     * @example
     * // Delete one GroupFeedback
     * const GroupFeedback = await prisma.groupFeedback.delete({
     *   where: {
     *     // ... filter to delete one GroupFeedback
     *   }
     * })
     * 
     */
    delete<T extends GroupFeedbackDeleteArgs>(args: SelectSubset<T, GroupFeedbackDeleteArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupFeedback.
     * @param {GroupFeedbackUpdateArgs} args - Arguments to update one GroupFeedback.
     * @example
     * // Update one GroupFeedback
     * const groupFeedback = await prisma.groupFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupFeedbackUpdateArgs>(args: SelectSubset<T, GroupFeedbackUpdateArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupFeedbacks.
     * @param {GroupFeedbackDeleteManyArgs} args - Arguments to filter GroupFeedbacks to delete.
     * @example
     * // Delete a few GroupFeedbacks
     * const { count } = await prisma.groupFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupFeedbackDeleteManyArgs>(args?: SelectSubset<T, GroupFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupFeedbacks
     * const groupFeedback = await prisma.groupFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupFeedbackUpdateManyArgs>(args: SelectSubset<T, GroupFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupFeedbacks and returns the data updated in the database.
     * @param {GroupFeedbackUpdateManyAndReturnArgs} args - Arguments to update many GroupFeedbacks.
     * @example
     * // Update many GroupFeedbacks
     * const groupFeedback = await prisma.groupFeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupFeedbacks and only return the `id`
     * const groupFeedbackWithIdOnly = await prisma.groupFeedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupFeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupFeedback.
     * @param {GroupFeedbackUpsertArgs} args - Arguments to update or create a GroupFeedback.
     * @example
     * // Update or create a GroupFeedback
     * const groupFeedback = await prisma.groupFeedback.upsert({
     *   create: {
     *     // ... data to create a GroupFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupFeedback we want to update
     *   }
     * })
     */
    upsert<T extends GroupFeedbackUpsertArgs>(args: SelectSubset<T, GroupFeedbackUpsertArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackCountArgs} args - Arguments to filter GroupFeedbacks to count.
     * @example
     * // Count the number of GroupFeedbacks
     * const count = await prisma.groupFeedback.count({
     *   where: {
     *     // ... the filter for the GroupFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends GroupFeedbackCountArgs>(
      args?: Subset<T, GroupFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupFeedbackAggregateArgs>(args: Subset<T, GroupFeedbackAggregateArgs>): Prisma.PrismaPromise<GetGroupFeedbackAggregateType<T>>

    /**
     * Group by GroupFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFeedbackGroupByArgs} args - Group by arguments.
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
      T extends GroupFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: GroupFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupFeedback model
   */
  readonly fields: GroupFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workGroup<T extends WorkGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkGroupDefaultArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Responses<T extends GroupFeedback$ResponsesArgs<ExtArgs> = {}>(args?: Subset<T, GroupFeedback$ResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GroupFeedback model
   */
  interface GroupFeedbackFieldRefs {
    readonly id: FieldRef<"GroupFeedback", 'String'>
    readonly teacherId: FieldRef<"GroupFeedback", 'String'>
    readonly workGroupId: FieldRef<"GroupFeedback", 'String'>
    readonly title: FieldRef<"GroupFeedback", 'String'>
    readonly description: FieldRef<"GroupFeedback", 'String'>
    readonly status: FieldRef<"GroupFeedback", 'FeedbackStatus'>
    readonly pointsPerResponse: FieldRef<"GroupFeedback", 'Int'>
    readonly createdAt: FieldRef<"GroupFeedback", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupFeedback findUnique
   */
  export type GroupFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which GroupFeedback to fetch.
     */
    where: GroupFeedbackWhereUniqueInput
  }

  /**
   * GroupFeedback findUniqueOrThrow
   */
  export type GroupFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which GroupFeedback to fetch.
     */
    where: GroupFeedbackWhereUniqueInput
  }

  /**
   * GroupFeedback findFirst
   */
  export type GroupFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which GroupFeedback to fetch.
     */
    where?: GroupFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFeedbacks to fetch.
     */
    orderBy?: GroupFeedbackOrderByWithRelationInput | GroupFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupFeedbacks.
     */
    cursor?: GroupFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupFeedbacks.
     */
    distinct?: GroupFeedbackScalarFieldEnum | GroupFeedbackScalarFieldEnum[]
  }

  /**
   * GroupFeedback findFirstOrThrow
   */
  export type GroupFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which GroupFeedback to fetch.
     */
    where?: GroupFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFeedbacks to fetch.
     */
    orderBy?: GroupFeedbackOrderByWithRelationInput | GroupFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupFeedbacks.
     */
    cursor?: GroupFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupFeedbacks.
     */
    distinct?: GroupFeedbackScalarFieldEnum | GroupFeedbackScalarFieldEnum[]
  }

  /**
   * GroupFeedback findMany
   */
  export type GroupFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which GroupFeedbacks to fetch.
     */
    where?: GroupFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupFeedbacks to fetch.
     */
    orderBy?: GroupFeedbackOrderByWithRelationInput | GroupFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupFeedbacks.
     */
    cursor?: GroupFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupFeedbacks.
     */
    skip?: number
    distinct?: GroupFeedbackScalarFieldEnum | GroupFeedbackScalarFieldEnum[]
  }

  /**
   * GroupFeedback create
   */
  export type GroupFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupFeedback.
     */
    data: XOR<GroupFeedbackCreateInput, GroupFeedbackUncheckedCreateInput>
  }

  /**
   * GroupFeedback createMany
   */
  export type GroupFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupFeedbacks.
     */
    data: GroupFeedbackCreateManyInput | GroupFeedbackCreateManyInput[]
  }

  /**
   * GroupFeedback createManyAndReturn
   */
  export type GroupFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many GroupFeedbacks.
     */
    data: GroupFeedbackCreateManyInput | GroupFeedbackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupFeedback update
   */
  export type GroupFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupFeedback.
     */
    data: XOR<GroupFeedbackUpdateInput, GroupFeedbackUncheckedUpdateInput>
    /**
     * Choose, which GroupFeedback to update.
     */
    where: GroupFeedbackWhereUniqueInput
  }

  /**
   * GroupFeedback updateMany
   */
  export type GroupFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupFeedbacks.
     */
    data: XOR<GroupFeedbackUpdateManyMutationInput, GroupFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which GroupFeedbacks to update
     */
    where?: GroupFeedbackWhereInput
    /**
     * Limit how many GroupFeedbacks to update.
     */
    limit?: number
  }

  /**
   * GroupFeedback updateManyAndReturn
   */
  export type GroupFeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * The data used to update GroupFeedbacks.
     */
    data: XOR<GroupFeedbackUpdateManyMutationInput, GroupFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which GroupFeedbacks to update
     */
    where?: GroupFeedbackWhereInput
    /**
     * Limit how many GroupFeedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupFeedback upsert
   */
  export type GroupFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupFeedback to update in case it exists.
     */
    where: GroupFeedbackWhereUniqueInput
    /**
     * In case the GroupFeedback found by the `where` argument doesn't exist, create a new GroupFeedback with this data.
     */
    create: XOR<GroupFeedbackCreateInput, GroupFeedbackUncheckedCreateInput>
    /**
     * In case the GroupFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupFeedbackUpdateInput, GroupFeedbackUncheckedUpdateInput>
  }

  /**
   * GroupFeedback delete
   */
  export type GroupFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    /**
     * Filter which GroupFeedback to delete.
     */
    where: GroupFeedbackWhereUniqueInput
  }

  /**
   * GroupFeedback deleteMany
   */
  export type GroupFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupFeedbacks to delete
     */
    where?: GroupFeedbackWhereInput
    /**
     * Limit how many GroupFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * GroupFeedback.Responses
   */
  export type GroupFeedback$ResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    where?: FeedbackResponseWhereInput
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    cursor?: FeedbackResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * GroupFeedback without action
   */
  export type GroupFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model FeedbackResponse
   */

  export type AggregateFeedbackResponse = {
    _count: FeedbackResponseCountAggregateOutputType | null
    _avg: FeedbackResponseAvgAggregateOutputType | null
    _sum: FeedbackResponseSumAggregateOutputType | null
    _min: FeedbackResponseMinAggregateOutputType | null
    _max: FeedbackResponseMaxAggregateOutputType | null
  }

  export type FeedbackResponseAvgAggregateOutputType = {
    rating: number | null
    pointsAwarded: number | null
  }

  export type FeedbackResponseSumAggregateOutputType = {
    rating: number | null
    pointsAwarded: number | null
  }

  export type FeedbackResponseMinAggregateOutputType = {
    id: string | null
    groupFeedbackId: string | null
    evaluatorId: string | null
    evaluatedId: string | null
    rating: number | null
    justification: string | null
    pointsAwarded: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackResponseMaxAggregateOutputType = {
    id: string | null
    groupFeedbackId: string | null
    evaluatorId: string | null
    evaluatedId: string | null
    rating: number | null
    justification: string | null
    pointsAwarded: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackResponseCountAggregateOutputType = {
    id: number
    groupFeedbackId: number
    evaluatorId: number
    evaluatedId: number
    rating: number
    justification: number
    pointsAwarded: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeedbackResponseAvgAggregateInputType = {
    rating?: true
    pointsAwarded?: true
  }

  export type FeedbackResponseSumAggregateInputType = {
    rating?: true
    pointsAwarded?: true
  }

  export type FeedbackResponseMinAggregateInputType = {
    id?: true
    groupFeedbackId?: true
    evaluatorId?: true
    evaluatedId?: true
    rating?: true
    justification?: true
    pointsAwarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackResponseMaxAggregateInputType = {
    id?: true
    groupFeedbackId?: true
    evaluatorId?: true
    evaluatedId?: true
    rating?: true
    justification?: true
    pointsAwarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackResponseCountAggregateInputType = {
    id?: true
    groupFeedbackId?: true
    evaluatorId?: true
    evaluatedId?: true
    rating?: true
    justification?: true
    pointsAwarded?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeedbackResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackResponse to aggregate.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackResponses
    **/
    _count?: true | FeedbackResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackResponseMaxAggregateInputType
  }

  export type GetFeedbackResponseAggregateType<T extends FeedbackResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackResponse[P]>
      : GetScalarType<T[P], AggregateFeedbackResponse[P]>
  }




  export type FeedbackResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackResponseWhereInput
    orderBy?: FeedbackResponseOrderByWithAggregationInput | FeedbackResponseOrderByWithAggregationInput[]
    by: FeedbackResponseScalarFieldEnum[] | FeedbackResponseScalarFieldEnum
    having?: FeedbackResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackResponseCountAggregateInputType | true
    _avg?: FeedbackResponseAvgAggregateInputType
    _sum?: FeedbackResponseSumAggregateInputType
    _min?: FeedbackResponseMinAggregateInputType
    _max?: FeedbackResponseMaxAggregateInputType
  }

  export type FeedbackResponseGroupByOutputType = {
    id: string
    groupFeedbackId: string
    evaluatorId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded: number
    createdAt: Date
    updatedAt: Date
    _count: FeedbackResponseCountAggregateOutputType | null
    _avg: FeedbackResponseAvgAggregateOutputType | null
    _sum: FeedbackResponseSumAggregateOutputType | null
    _min: FeedbackResponseMinAggregateOutputType | null
    _max: FeedbackResponseMaxAggregateOutputType | null
  }

  type GetFeedbackResponseGroupByPayload<T extends FeedbackResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackResponseGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupFeedbackId?: boolean
    evaluatorId?: boolean
    evaluatedId?: boolean
    rating?: boolean
    justification?: boolean
    pointsAwarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupFeedback?: boolean | GroupFeedbackDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
    evaluated?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackResponse"]>

  export type FeedbackResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupFeedbackId?: boolean
    evaluatorId?: boolean
    evaluatedId?: boolean
    rating?: boolean
    justification?: boolean
    pointsAwarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupFeedback?: boolean | GroupFeedbackDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
    evaluated?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackResponse"]>

  export type FeedbackResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupFeedbackId?: boolean
    evaluatorId?: boolean
    evaluatedId?: boolean
    rating?: boolean
    justification?: boolean
    pointsAwarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groupFeedback?: boolean | GroupFeedbackDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
    evaluated?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackResponse"]>

  export type FeedbackResponseSelectScalar = {
    id?: boolean
    groupFeedbackId?: boolean
    evaluatorId?: boolean
    evaluatedId?: boolean
    rating?: boolean
    justification?: boolean
    pointsAwarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedbackResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupFeedbackId" | "evaluatorId" | "evaluatedId" | "rating" | "justification" | "pointsAwarded" | "createdAt" | "updatedAt", ExtArgs["result"]["feedbackResponse"]>
  export type FeedbackResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupFeedback?: boolean | GroupFeedbackDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
    evaluated?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupFeedback?: boolean | GroupFeedbackDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
    evaluated?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupFeedback?: boolean | GroupFeedbackDefaultArgs<ExtArgs>
    evaluator?: boolean | UserDefaultArgs<ExtArgs>
    evaluated?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedbackResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackResponse"
    objects: {
      groupFeedback: Prisma.$GroupFeedbackPayload<ExtArgs>
      evaluator: Prisma.$UserPayload<ExtArgs>
      evaluated: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupFeedbackId: string
      evaluatorId: string
      evaluatedId: string
      rating: number
      justification: string
      pointsAwarded: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feedbackResponse"]>
    composites: {}
  }

  type FeedbackResponseGetPayload<S extends boolean | null | undefined | FeedbackResponseDefaultArgs> = $Result.GetResult<Prisma.$FeedbackResponsePayload, S>

  type FeedbackResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackResponseCountAggregateInputType | true
    }

  export interface FeedbackResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackResponse'], meta: { name: 'FeedbackResponse' } }
    /**
     * Find zero or one FeedbackResponse that matches the filter.
     * @param {FeedbackResponseFindUniqueArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackResponseFindUniqueArgs>(args: SelectSubset<T, FeedbackResponseFindUniqueArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackResponseFindUniqueOrThrowArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseFindFirstArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackResponseFindFirstArgs>(args?: SelectSubset<T, FeedbackResponseFindFirstArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseFindFirstOrThrowArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackResponses
     * const feedbackResponses = await prisma.feedbackResponse.findMany()
     * 
     * // Get first 10 FeedbackResponses
     * const feedbackResponses = await prisma.feedbackResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackResponseWithIdOnly = await prisma.feedbackResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackResponseFindManyArgs>(args?: SelectSubset<T, FeedbackResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackResponse.
     * @param {FeedbackResponseCreateArgs} args - Arguments to create a FeedbackResponse.
     * @example
     * // Create one FeedbackResponse
     * const FeedbackResponse = await prisma.feedbackResponse.create({
     *   data: {
     *     // ... data to create a FeedbackResponse
     *   }
     * })
     * 
     */
    create<T extends FeedbackResponseCreateArgs>(args: SelectSubset<T, FeedbackResponseCreateArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackResponses.
     * @param {FeedbackResponseCreateManyArgs} args - Arguments to create many FeedbackResponses.
     * @example
     * // Create many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackResponseCreateManyArgs>(args?: SelectSubset<T, FeedbackResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackResponses and returns the data saved in the database.
     * @param {FeedbackResponseCreateManyAndReturnArgs} args - Arguments to create many FeedbackResponses.
     * @example
     * // Create many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackResponses and only return the `id`
     * const feedbackResponseWithIdOnly = await prisma.feedbackResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackResponse.
     * @param {FeedbackResponseDeleteArgs} args - Arguments to delete one FeedbackResponse.
     * @example
     * // Delete one FeedbackResponse
     * const FeedbackResponse = await prisma.feedbackResponse.delete({
     *   where: {
     *     // ... filter to delete one FeedbackResponse
     *   }
     * })
     * 
     */
    delete<T extends FeedbackResponseDeleteArgs>(args: SelectSubset<T, FeedbackResponseDeleteArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackResponse.
     * @param {FeedbackResponseUpdateArgs} args - Arguments to update one FeedbackResponse.
     * @example
     * // Update one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackResponseUpdateArgs>(args: SelectSubset<T, FeedbackResponseUpdateArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackResponses.
     * @param {FeedbackResponseDeleteManyArgs} args - Arguments to filter FeedbackResponses to delete.
     * @example
     * // Delete a few FeedbackResponses
     * const { count } = await prisma.feedbackResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackResponseDeleteManyArgs>(args?: SelectSubset<T, FeedbackResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackResponseUpdateManyArgs>(args: SelectSubset<T, FeedbackResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackResponses and returns the data updated in the database.
     * @param {FeedbackResponseUpdateManyAndReturnArgs} args - Arguments to update many FeedbackResponses.
     * @example
     * // Update many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackResponses and only return the `id`
     * const feedbackResponseWithIdOnly = await prisma.feedbackResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackResponse.
     * @param {FeedbackResponseUpsertArgs} args - Arguments to update or create a FeedbackResponse.
     * @example
     * // Update or create a FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.upsert({
     *   create: {
     *     // ... data to create a FeedbackResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackResponse we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackResponseUpsertArgs>(args: SelectSubset<T, FeedbackResponseUpsertArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseCountArgs} args - Arguments to filter FeedbackResponses to count.
     * @example
     * // Count the number of FeedbackResponses
     * const count = await prisma.feedbackResponse.count({
     *   where: {
     *     // ... the filter for the FeedbackResponses we want to count
     *   }
     * })
    **/
    count<T extends FeedbackResponseCountArgs>(
      args?: Subset<T, FeedbackResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackResponseAggregateArgs>(args: Subset<T, FeedbackResponseAggregateArgs>): Prisma.PrismaPromise<GetFeedbackResponseAggregateType<T>>

    /**
     * Group by FeedbackResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseGroupByArgs} args - Group by arguments.
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
      T extends FeedbackResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackResponseGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackResponse model
   */
  readonly fields: FeedbackResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupFeedback<T extends GroupFeedbackDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupFeedbackDefaultArgs<ExtArgs>>): Prisma__GroupFeedbackClient<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluated<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FeedbackResponse model
   */
  interface FeedbackResponseFieldRefs {
    readonly id: FieldRef<"FeedbackResponse", 'String'>
    readonly groupFeedbackId: FieldRef<"FeedbackResponse", 'String'>
    readonly evaluatorId: FieldRef<"FeedbackResponse", 'String'>
    readonly evaluatedId: FieldRef<"FeedbackResponse", 'String'>
    readonly rating: FieldRef<"FeedbackResponse", 'Int'>
    readonly justification: FieldRef<"FeedbackResponse", 'String'>
    readonly pointsAwarded: FieldRef<"FeedbackResponse", 'Int'>
    readonly createdAt: FieldRef<"FeedbackResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"FeedbackResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackResponse findUnique
   */
  export type FeedbackResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse findUniqueOrThrow
   */
  export type FeedbackResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse findFirst
   */
  export type FeedbackResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackResponses.
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackResponses.
     */
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * FeedbackResponse findFirstOrThrow
   */
  export type FeedbackResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackResponses.
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackResponses.
     */
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * FeedbackResponse findMany
   */
  export type FeedbackResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponses to fetch.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackResponses.
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * FeedbackResponse create
   */
  export type FeedbackResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedbackResponse.
     */
    data: XOR<FeedbackResponseCreateInput, FeedbackResponseUncheckedCreateInput>
  }

  /**
   * FeedbackResponse createMany
   */
  export type FeedbackResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackResponses.
     */
    data: FeedbackResponseCreateManyInput | FeedbackResponseCreateManyInput[]
  }

  /**
   * FeedbackResponse createManyAndReturn
   */
  export type FeedbackResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackResponses.
     */
    data: FeedbackResponseCreateManyInput | FeedbackResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedbackResponse update
   */
  export type FeedbackResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedbackResponse.
     */
    data: XOR<FeedbackResponseUpdateInput, FeedbackResponseUncheckedUpdateInput>
    /**
     * Choose, which FeedbackResponse to update.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse updateMany
   */
  export type FeedbackResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackResponses.
     */
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackResponses to update
     */
    where?: FeedbackResponseWhereInput
    /**
     * Limit how many FeedbackResponses to update.
     */
    limit?: number
  }

  /**
   * FeedbackResponse updateManyAndReturn
   */
  export type FeedbackResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackResponses.
     */
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackResponses to update
     */
    where?: FeedbackResponseWhereInput
    /**
     * Limit how many FeedbackResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedbackResponse upsert
   */
  export type FeedbackResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedbackResponse to update in case it exists.
     */
    where: FeedbackResponseWhereUniqueInput
    /**
     * In case the FeedbackResponse found by the `where` argument doesn't exist, create a new FeedbackResponse with this data.
     */
    create: XOR<FeedbackResponseCreateInput, FeedbackResponseUncheckedCreateInput>
    /**
     * In case the FeedbackResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackResponseUpdateInput, FeedbackResponseUncheckedUpdateInput>
  }

  /**
   * FeedbackResponse delete
   */
  export type FeedbackResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter which FeedbackResponse to delete.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse deleteMany
   */
  export type FeedbackResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackResponses to delete
     */
    where?: FeedbackResponseWhereInput
    /**
     * Limit how many FeedbackResponses to delete.
     */
    limit?: number
  }

  /**
   * FeedbackResponse without action
   */
  export type FeedbackResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
  }


  /**
   * Model StudentPoints
   */

  export type AggregateStudentPoints = {
    _count: StudentPointsCountAggregateOutputType | null
    _avg: StudentPointsAvgAggregateOutputType | null
    _sum: StudentPointsSumAggregateOutputType | null
    _min: StudentPointsMinAggregateOutputType | null
    _max: StudentPointsMaxAggregateOutputType | null
  }

  export type StudentPointsAvgAggregateOutputType = {
    totalPoints: number | null
    availablePoints: number | null
    spentPoints: number | null
    level: number | null
  }

  export type StudentPointsSumAggregateOutputType = {
    totalPoints: number | null
    availablePoints: number | null
    spentPoints: number | null
    level: number | null
  }

  export type StudentPointsMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    totalPoints: number | null
    availablePoints: number | null
    spentPoints: number | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentPointsMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    totalPoints: number | null
    availablePoints: number | null
    spentPoints: number | null
    level: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentPointsCountAggregateOutputType = {
    id: number
    studentId: number
    totalPoints: number
    availablePoints: number
    spentPoints: number
    level: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentPointsAvgAggregateInputType = {
    totalPoints?: true
    availablePoints?: true
    spentPoints?: true
    level?: true
  }

  export type StudentPointsSumAggregateInputType = {
    totalPoints?: true
    availablePoints?: true
    spentPoints?: true
    level?: true
  }

  export type StudentPointsMinAggregateInputType = {
    id?: true
    studentId?: true
    totalPoints?: true
    availablePoints?: true
    spentPoints?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentPointsMaxAggregateInputType = {
    id?: true
    studentId?: true
    totalPoints?: true
    availablePoints?: true
    spentPoints?: true
    level?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentPointsCountAggregateInputType = {
    id?: true
    studentId?: true
    totalPoints?: true
    availablePoints?: true
    spentPoints?: true
    level?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentPointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPoints to aggregate.
     */
    where?: StudentPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPoints to fetch.
     */
    orderBy?: StudentPointsOrderByWithRelationInput | StudentPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentPoints
    **/
    _count?: true | StudentPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentPointsMaxAggregateInputType
  }

  export type GetStudentPointsAggregateType<T extends StudentPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentPoints[P]>
      : GetScalarType<T[P], AggregateStudentPoints[P]>
  }




  export type StudentPointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPointsWhereInput
    orderBy?: StudentPointsOrderByWithAggregationInput | StudentPointsOrderByWithAggregationInput[]
    by: StudentPointsScalarFieldEnum[] | StudentPointsScalarFieldEnum
    having?: StudentPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentPointsCountAggregateInputType | true
    _avg?: StudentPointsAvgAggregateInputType
    _sum?: StudentPointsSumAggregateInputType
    _min?: StudentPointsMinAggregateInputType
    _max?: StudentPointsMaxAggregateInputType
  }

  export type StudentPointsGroupByOutputType = {
    id: string
    studentId: string
    totalPoints: number
    availablePoints: number
    spentPoints: number
    level: number
    createdAt: Date
    updatedAt: Date
    _count: StudentPointsCountAggregateOutputType | null
    _avg: StudentPointsAvgAggregateOutputType | null
    _sum: StudentPointsSumAggregateOutputType | null
    _min: StudentPointsMinAggregateOutputType | null
    _max: StudentPointsMaxAggregateOutputType | null
  }

  type GetStudentPointsGroupByPayload<T extends StudentPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentPointsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentPointsGroupByOutputType[P]>
        }
      >
    >


  export type StudentPointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    totalPoints?: boolean
    availablePoints?: boolean
    spentPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPoints"]>

  export type StudentPointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    totalPoints?: boolean
    availablePoints?: boolean
    spentPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPoints"]>

  export type StudentPointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    totalPoints?: boolean
    availablePoints?: boolean
    spentPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPoints"]>

  export type StudentPointsSelectScalar = {
    id?: boolean
    studentId?: boolean
    totalPoints?: boolean
    availablePoints?: boolean
    spentPoints?: boolean
    level?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentPointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "totalPoints" | "availablePoints" | "spentPoints" | "level" | "createdAt" | "updatedAt", ExtArgs["result"]["studentPoints"]>
  export type StudentPointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentPointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentPointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentPointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentPoints"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      totalPoints: number
      availablePoints: number
      spentPoints: number
      level: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentPoints"]>
    composites: {}
  }

  type StudentPointsGetPayload<S extends boolean | null | undefined | StudentPointsDefaultArgs> = $Result.GetResult<Prisma.$StudentPointsPayload, S>

  type StudentPointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentPointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentPointsCountAggregateInputType | true
    }

  export interface StudentPointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentPoints'], meta: { name: 'StudentPoints' } }
    /**
     * Find zero or one StudentPoints that matches the filter.
     * @param {StudentPointsFindUniqueArgs} args - Arguments to find a StudentPoints
     * @example
     * // Get one StudentPoints
     * const studentPoints = await prisma.studentPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentPointsFindUniqueArgs>(args: SelectSubset<T, StudentPointsFindUniqueArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentPoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentPointsFindUniqueOrThrowArgs} args - Arguments to find a StudentPoints
     * @example
     * // Get one StudentPoints
     * const studentPoints = await prisma.studentPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentPointsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentPointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsFindFirstArgs} args - Arguments to find a StudentPoints
     * @example
     * // Get one StudentPoints
     * const studentPoints = await prisma.studentPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentPointsFindFirstArgs>(args?: SelectSubset<T, StudentPointsFindFirstArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsFindFirstOrThrowArgs} args - Arguments to find a StudentPoints
     * @example
     * // Get one StudentPoints
     * const studentPoints = await prisma.studentPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentPointsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentPointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentPoints
     * const studentPoints = await prisma.studentPoints.findMany()
     * 
     * // Get first 10 StudentPoints
     * const studentPoints = await prisma.studentPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentPointsWithIdOnly = await prisma.studentPoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentPointsFindManyArgs>(args?: SelectSubset<T, StudentPointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentPoints.
     * @param {StudentPointsCreateArgs} args - Arguments to create a StudentPoints.
     * @example
     * // Create one StudentPoints
     * const StudentPoints = await prisma.studentPoints.create({
     *   data: {
     *     // ... data to create a StudentPoints
     *   }
     * })
     * 
     */
    create<T extends StudentPointsCreateArgs>(args: SelectSubset<T, StudentPointsCreateArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentPoints.
     * @param {StudentPointsCreateManyArgs} args - Arguments to create many StudentPoints.
     * @example
     * // Create many StudentPoints
     * const studentPoints = await prisma.studentPoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentPointsCreateManyArgs>(args?: SelectSubset<T, StudentPointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentPoints and returns the data saved in the database.
     * @param {StudentPointsCreateManyAndReturnArgs} args - Arguments to create many StudentPoints.
     * @example
     * // Create many StudentPoints
     * const studentPoints = await prisma.studentPoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentPoints and only return the `id`
     * const studentPointsWithIdOnly = await prisma.studentPoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentPointsCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentPointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentPoints.
     * @param {StudentPointsDeleteArgs} args - Arguments to delete one StudentPoints.
     * @example
     * // Delete one StudentPoints
     * const StudentPoints = await prisma.studentPoints.delete({
     *   where: {
     *     // ... filter to delete one StudentPoints
     *   }
     * })
     * 
     */
    delete<T extends StudentPointsDeleteArgs>(args: SelectSubset<T, StudentPointsDeleteArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentPoints.
     * @param {StudentPointsUpdateArgs} args - Arguments to update one StudentPoints.
     * @example
     * // Update one StudentPoints
     * const studentPoints = await prisma.studentPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentPointsUpdateArgs>(args: SelectSubset<T, StudentPointsUpdateArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentPoints.
     * @param {StudentPointsDeleteManyArgs} args - Arguments to filter StudentPoints to delete.
     * @example
     * // Delete a few StudentPoints
     * const { count } = await prisma.studentPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentPointsDeleteManyArgs>(args?: SelectSubset<T, StudentPointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentPoints
     * const studentPoints = await prisma.studentPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentPointsUpdateManyArgs>(args: SelectSubset<T, StudentPointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentPoints and returns the data updated in the database.
     * @param {StudentPointsUpdateManyAndReturnArgs} args - Arguments to update many StudentPoints.
     * @example
     * // Update many StudentPoints
     * const studentPoints = await prisma.studentPoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentPoints and only return the `id`
     * const studentPointsWithIdOnly = await prisma.studentPoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentPointsUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentPointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentPoints.
     * @param {StudentPointsUpsertArgs} args - Arguments to update or create a StudentPoints.
     * @example
     * // Update or create a StudentPoints
     * const studentPoints = await prisma.studentPoints.upsert({
     *   create: {
     *     // ... data to create a StudentPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentPoints we want to update
     *   }
     * })
     */
    upsert<T extends StudentPointsUpsertArgs>(args: SelectSubset<T, StudentPointsUpsertArgs<ExtArgs>>): Prisma__StudentPointsClient<$Result.GetResult<Prisma.$StudentPointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsCountArgs} args - Arguments to filter StudentPoints to count.
     * @example
     * // Count the number of StudentPoints
     * const count = await prisma.studentPoints.count({
     *   where: {
     *     // ... the filter for the StudentPoints we want to count
     *   }
     * })
    **/
    count<T extends StudentPointsCountArgs>(
      args?: Subset<T, StudentPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentPointsAggregateArgs>(args: Subset<T, StudentPointsAggregateArgs>): Prisma.PrismaPromise<GetStudentPointsAggregateType<T>>

    /**
     * Group by StudentPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsGroupByArgs} args - Group by arguments.
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
      T extends StudentPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentPointsGroupByArgs['orderBy'] }
        : { orderBy?: StudentPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentPoints model
   */
  readonly fields: StudentPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentPointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentPoints model
   */
  interface StudentPointsFieldRefs {
    readonly id: FieldRef<"StudentPoints", 'String'>
    readonly studentId: FieldRef<"StudentPoints", 'String'>
    readonly totalPoints: FieldRef<"StudentPoints", 'Int'>
    readonly availablePoints: FieldRef<"StudentPoints", 'Int'>
    readonly spentPoints: FieldRef<"StudentPoints", 'Int'>
    readonly level: FieldRef<"StudentPoints", 'Int'>
    readonly createdAt: FieldRef<"StudentPoints", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentPoints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentPoints findUnique
   */
  export type StudentPointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * Filter, which StudentPoints to fetch.
     */
    where: StudentPointsWhereUniqueInput
  }

  /**
   * StudentPoints findUniqueOrThrow
   */
  export type StudentPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * Filter, which StudentPoints to fetch.
     */
    where: StudentPointsWhereUniqueInput
  }

  /**
   * StudentPoints findFirst
   */
  export type StudentPointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * Filter, which StudentPoints to fetch.
     */
    where?: StudentPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPoints to fetch.
     */
    orderBy?: StudentPointsOrderByWithRelationInput | StudentPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPoints.
     */
    cursor?: StudentPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPoints.
     */
    distinct?: StudentPointsScalarFieldEnum | StudentPointsScalarFieldEnum[]
  }

  /**
   * StudentPoints findFirstOrThrow
   */
  export type StudentPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * Filter, which StudentPoints to fetch.
     */
    where?: StudentPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPoints to fetch.
     */
    orderBy?: StudentPointsOrderByWithRelationInput | StudentPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPoints.
     */
    cursor?: StudentPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPoints.
     */
    distinct?: StudentPointsScalarFieldEnum | StudentPointsScalarFieldEnum[]
  }

  /**
   * StudentPoints findMany
   */
  export type StudentPointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * Filter, which StudentPoints to fetch.
     */
    where?: StudentPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPoints to fetch.
     */
    orderBy?: StudentPointsOrderByWithRelationInput | StudentPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentPoints.
     */
    cursor?: StudentPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPoints.
     */
    skip?: number
    distinct?: StudentPointsScalarFieldEnum | StudentPointsScalarFieldEnum[]
  }

  /**
   * StudentPoints create
   */
  export type StudentPointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentPoints.
     */
    data: XOR<StudentPointsCreateInput, StudentPointsUncheckedCreateInput>
  }

  /**
   * StudentPoints createMany
   */
  export type StudentPointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentPoints.
     */
    data: StudentPointsCreateManyInput | StudentPointsCreateManyInput[]
  }

  /**
   * StudentPoints createManyAndReturn
   */
  export type StudentPointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * The data used to create many StudentPoints.
     */
    data: StudentPointsCreateManyInput | StudentPointsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentPoints update
   */
  export type StudentPointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentPoints.
     */
    data: XOR<StudentPointsUpdateInput, StudentPointsUncheckedUpdateInput>
    /**
     * Choose, which StudentPoints to update.
     */
    where: StudentPointsWhereUniqueInput
  }

  /**
   * StudentPoints updateMany
   */
  export type StudentPointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentPoints.
     */
    data: XOR<StudentPointsUpdateManyMutationInput, StudentPointsUncheckedUpdateManyInput>
    /**
     * Filter which StudentPoints to update
     */
    where?: StudentPointsWhereInput
    /**
     * Limit how many StudentPoints to update.
     */
    limit?: number
  }

  /**
   * StudentPoints updateManyAndReturn
   */
  export type StudentPointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * The data used to update StudentPoints.
     */
    data: XOR<StudentPointsUpdateManyMutationInput, StudentPointsUncheckedUpdateManyInput>
    /**
     * Filter which StudentPoints to update
     */
    where?: StudentPointsWhereInput
    /**
     * Limit how many StudentPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentPoints upsert
   */
  export type StudentPointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentPoints to update in case it exists.
     */
    where: StudentPointsWhereUniqueInput
    /**
     * In case the StudentPoints found by the `where` argument doesn't exist, create a new StudentPoints with this data.
     */
    create: XOR<StudentPointsCreateInput, StudentPointsUncheckedCreateInput>
    /**
     * In case the StudentPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentPointsUpdateInput, StudentPointsUncheckedUpdateInput>
  }

  /**
   * StudentPoints delete
   */
  export type StudentPointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
    /**
     * Filter which StudentPoints to delete.
     */
    where: StudentPointsWhereUniqueInput
  }

  /**
   * StudentPoints deleteMany
   */
  export type StudentPointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPoints to delete
     */
    where?: StudentPointsWhereInput
    /**
     * Limit how many StudentPoints to delete.
     */
    limit?: number
  }

  /**
   * StudentPoints without action
   */
  export type StudentPointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPoints
     */
    select?: StudentPointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentPoints
     */
    omit?: StudentPointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    pointsCost: number | null
    maxRedemptions: number | null
    currentRedemptions: number | null
  }

  export type CouponSumAggregateOutputType = {
    pointsCost: number | null
    maxRedemptions: number | null
    currentRedemptions: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    partnerName: string | null
    discount: string | null
    pointsCost: number | null
    image: string | null
    status: $Enums.CouponStatus | null
    maxRedemptions: number | null
    currentRedemptions: number | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    partnerName: string | null
    discount: string | null
    pointsCost: number | null
    image: string | null
    status: $Enums.CouponStatus | null
    maxRedemptions: number | null
    currentRedemptions: number | null
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    name: number
    description: number
    partnerName: number
    discount: number
    pointsCost: number
    image: number
    status: number
    maxRedemptions: number
    currentRedemptions: number
    validFrom: number
    validUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    pointsCost?: true
    maxRedemptions?: true
    currentRedemptions?: true
  }

  export type CouponSumAggregateInputType = {
    pointsCost?: true
    maxRedemptions?: true
    currentRedemptions?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    partnerName?: true
    discount?: true
    pointsCost?: true
    image?: true
    status?: true
    maxRedemptions?: true
    currentRedemptions?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    partnerName?: true
    discount?: true
    pointsCost?: true
    image?: true
    status?: true
    maxRedemptions?: true
    currentRedemptions?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    partnerName?: true
    discount?: true
    pointsCost?: true
    image?: true
    status?: true
    maxRedemptions?: true
    currentRedemptions?: true
    validFrom?: true
    validUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    name: string
    description: string
    partnerName: string
    discount: string
    pointsCost: number
    image: string | null
    status: $Enums.CouponStatus
    maxRedemptions: number | null
    currentRedemptions: number
    validFrom: Date | null
    validUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partnerName?: boolean
    discount?: boolean
    pointsCost?: boolean
    image?: boolean
    status?: boolean
    maxRedemptions?: boolean
    currentRedemptions?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Redemptions?: boolean | Coupon$RedemptionsArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partnerName?: boolean
    discount?: boolean
    pointsCost?: boolean
    image?: boolean
    status?: boolean
    maxRedemptions?: boolean
    currentRedemptions?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partnerName?: boolean
    discount?: boolean
    pointsCost?: boolean
    image?: boolean
    status?: boolean
    maxRedemptions?: boolean
    currentRedemptions?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    partnerName?: boolean
    discount?: boolean
    pointsCost?: boolean
    image?: boolean
    status?: boolean
    maxRedemptions?: boolean
    currentRedemptions?: boolean
    validFrom?: boolean
    validUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "partnerName" | "discount" | "pointsCost" | "image" | "status" | "maxRedemptions" | "currentRedemptions" | "validFrom" | "validUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Redemptions?: boolean | Coupon$RedemptionsArgs<ExtArgs>
    _count?: boolean | CouponCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CouponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      Redemptions: Prisma.$CouponRedemptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      partnerName: string
      discount: string
      pointsCost: number
      image: string | null
      status: $Enums.CouponStatus
      maxRedemptions: number | null
      currentRedemptions: number
      validFrom: Date | null
      validUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {CouponUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.updateManyAndReturn({
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
    updateManyAndReturn<T extends CouponUpdateManyAndReturnArgs>(args: SelectSubset<T, CouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Redemptions<T extends Coupon$RedemptionsArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$RedemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly name: FieldRef<"Coupon", 'String'>
    readonly description: FieldRef<"Coupon", 'String'>
    readonly partnerName: FieldRef<"Coupon", 'String'>
    readonly discount: FieldRef<"Coupon", 'String'>
    readonly pointsCost: FieldRef<"Coupon", 'Int'>
    readonly image: FieldRef<"Coupon", 'String'>
    readonly status: FieldRef<"Coupon", 'CouponStatus'>
    readonly maxRedemptions: FieldRef<"Coupon", 'Int'>
    readonly currentRedemptions: FieldRef<"Coupon", 'Int'>
    readonly validFrom: FieldRef<"Coupon", 'DateTime'>
    readonly validUntil: FieldRef<"Coupon", 'DateTime'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon updateManyAndReturn
   */
  export type CouponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon.Redemptions
   */
  export type Coupon$RedemptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    where?: CouponRedemptionWhereInput
    orderBy?: CouponRedemptionOrderByWithRelationInput | CouponRedemptionOrderByWithRelationInput[]
    cursor?: CouponRedemptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponRedemptionScalarFieldEnum | CouponRedemptionScalarFieldEnum[]
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model CouponRedemption
   */

  export type AggregateCouponRedemption = {
    _count: CouponRedemptionCountAggregateOutputType | null
    _avg: CouponRedemptionAvgAggregateOutputType | null
    _sum: CouponRedemptionSumAggregateOutputType | null
    _min: CouponRedemptionMinAggregateOutputType | null
    _max: CouponRedemptionMaxAggregateOutputType | null
  }

  export type CouponRedemptionAvgAggregateOutputType = {
    pointsSpent: number | null
  }

  export type CouponRedemptionSumAggregateOutputType = {
    pointsSpent: number | null
  }

  export type CouponRedemptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    couponId: string | null
    pointsSpent: number | null
    status: string | null
    redeemedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponRedemptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    couponId: string | null
    pointsSpent: number | null
    status: string | null
    redeemedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponRedemptionCountAggregateOutputType = {
    id: number
    userId: number
    couponId: number
    pointsSpent: number
    status: number
    redeemedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponRedemptionAvgAggregateInputType = {
    pointsSpent?: true
  }

  export type CouponRedemptionSumAggregateInputType = {
    pointsSpent?: true
  }

  export type CouponRedemptionMinAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponRedemptionMaxAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponRedemptionCountAggregateInputType = {
    id?: true
    userId?: true
    couponId?: true
    pointsSpent?: true
    status?: true
    redeemedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponRedemptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponRedemption to aggregate.
     */
    where?: CouponRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponRedemptions to fetch.
     */
    orderBy?: CouponRedemptionOrderByWithRelationInput | CouponRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CouponRedemptions
    **/
    _count?: true | CouponRedemptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponRedemptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponRedemptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponRedemptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponRedemptionMaxAggregateInputType
  }

  export type GetCouponRedemptionAggregateType<T extends CouponRedemptionAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponRedemption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponRedemption[P]>
      : GetScalarType<T[P], AggregateCouponRedemption[P]>
  }




  export type CouponRedemptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponRedemptionWhereInput
    orderBy?: CouponRedemptionOrderByWithAggregationInput | CouponRedemptionOrderByWithAggregationInput[]
    by: CouponRedemptionScalarFieldEnum[] | CouponRedemptionScalarFieldEnum
    having?: CouponRedemptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponRedemptionCountAggregateInputType | true
    _avg?: CouponRedemptionAvgAggregateInputType
    _sum?: CouponRedemptionSumAggregateInputType
    _min?: CouponRedemptionMinAggregateInputType
    _max?: CouponRedemptionMaxAggregateInputType
  }

  export type CouponRedemptionGroupByOutputType = {
    id: string
    userId: string
    couponId: string
    pointsSpent: number
    status: string
    redeemedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CouponRedemptionCountAggregateOutputType | null
    _avg: CouponRedemptionAvgAggregateOutputType | null
    _sum: CouponRedemptionSumAggregateOutputType | null
    _min: CouponRedemptionMinAggregateOutputType | null
    _max: CouponRedemptionMaxAggregateOutputType | null
  }

  type GetCouponRedemptionGroupByPayload<T extends CouponRedemptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponRedemptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponRedemptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponRedemptionGroupByOutputType[P]>
            : GetScalarType<T[P], CouponRedemptionGroupByOutputType[P]>
        }
      >
    >


  export type CouponRedemptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    couponId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponRedemption"]>

  export type CouponRedemptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    couponId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponRedemption"]>

  export type CouponRedemptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    couponId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponRedemption"]>

  export type CouponRedemptionSelectScalar = {
    id?: boolean
    userId?: boolean
    couponId?: boolean
    pointsSpent?: boolean
    status?: boolean
    redeemedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponRedemptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "couponId" | "pointsSpent" | "status" | "redeemedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["couponRedemption"]>
  export type CouponRedemptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }
  export type CouponRedemptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }
  export type CouponRedemptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coupon?: boolean | CouponDefaultArgs<ExtArgs>
  }

  export type $CouponRedemptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CouponRedemption"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coupon: Prisma.$CouponPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      couponId: string
      pointsSpent: number
      status: string
      redeemedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["couponRedemption"]>
    composites: {}
  }

  type CouponRedemptionGetPayload<S extends boolean | null | undefined | CouponRedemptionDefaultArgs> = $Result.GetResult<Prisma.$CouponRedemptionPayload, S>

  type CouponRedemptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponRedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponRedemptionCountAggregateInputType | true
    }

  export interface CouponRedemptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CouponRedemption'], meta: { name: 'CouponRedemption' } }
    /**
     * Find zero or one CouponRedemption that matches the filter.
     * @param {CouponRedemptionFindUniqueArgs} args - Arguments to find a CouponRedemption
     * @example
     * // Get one CouponRedemption
     * const couponRedemption = await prisma.couponRedemption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponRedemptionFindUniqueArgs>(args: SelectSubset<T, CouponRedemptionFindUniqueArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CouponRedemption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponRedemptionFindUniqueOrThrowArgs} args - Arguments to find a CouponRedemption
     * @example
     * // Get one CouponRedemption
     * const couponRedemption = await prisma.couponRedemption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponRedemptionFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CouponRedemption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionFindFirstArgs} args - Arguments to find a CouponRedemption
     * @example
     * // Get one CouponRedemption
     * const couponRedemption = await prisma.couponRedemption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponRedemptionFindFirstArgs>(args?: SelectSubset<T, CouponRedemptionFindFirstArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CouponRedemption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionFindFirstOrThrowArgs} args - Arguments to find a CouponRedemption
     * @example
     * // Get one CouponRedemption
     * const couponRedemption = await prisma.couponRedemption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponRedemptionFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CouponRedemptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CouponRedemptions
     * const couponRedemptions = await prisma.couponRedemption.findMany()
     * 
     * // Get first 10 CouponRedemptions
     * const couponRedemptions = await prisma.couponRedemption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponRedemptionWithIdOnly = await prisma.couponRedemption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponRedemptionFindManyArgs>(args?: SelectSubset<T, CouponRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CouponRedemption.
     * @param {CouponRedemptionCreateArgs} args - Arguments to create a CouponRedemption.
     * @example
     * // Create one CouponRedemption
     * const CouponRedemption = await prisma.couponRedemption.create({
     *   data: {
     *     // ... data to create a CouponRedemption
     *   }
     * })
     * 
     */
    create<T extends CouponRedemptionCreateArgs>(args: SelectSubset<T, CouponRedemptionCreateArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CouponRedemptions.
     * @param {CouponRedemptionCreateManyArgs} args - Arguments to create many CouponRedemptions.
     * @example
     * // Create many CouponRedemptions
     * const couponRedemption = await prisma.couponRedemption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponRedemptionCreateManyArgs>(args?: SelectSubset<T, CouponRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CouponRedemptions and returns the data saved in the database.
     * @param {CouponRedemptionCreateManyAndReturnArgs} args - Arguments to create many CouponRedemptions.
     * @example
     * // Create many CouponRedemptions
     * const couponRedemption = await prisma.couponRedemption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CouponRedemptions and only return the `id`
     * const couponRedemptionWithIdOnly = await prisma.couponRedemption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponRedemptionCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponRedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CouponRedemption.
     * @param {CouponRedemptionDeleteArgs} args - Arguments to delete one CouponRedemption.
     * @example
     * // Delete one CouponRedemption
     * const CouponRedemption = await prisma.couponRedemption.delete({
     *   where: {
     *     // ... filter to delete one CouponRedemption
     *   }
     * })
     * 
     */
    delete<T extends CouponRedemptionDeleteArgs>(args: SelectSubset<T, CouponRedemptionDeleteArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CouponRedemption.
     * @param {CouponRedemptionUpdateArgs} args - Arguments to update one CouponRedemption.
     * @example
     * // Update one CouponRedemption
     * const couponRedemption = await prisma.couponRedemption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponRedemptionUpdateArgs>(args: SelectSubset<T, CouponRedemptionUpdateArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CouponRedemptions.
     * @param {CouponRedemptionDeleteManyArgs} args - Arguments to filter CouponRedemptions to delete.
     * @example
     * // Delete a few CouponRedemptions
     * const { count } = await prisma.couponRedemption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponRedemptionDeleteManyArgs>(args?: SelectSubset<T, CouponRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CouponRedemptions
     * const couponRedemption = await prisma.couponRedemption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponRedemptionUpdateManyArgs>(args: SelectSubset<T, CouponRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CouponRedemptions and returns the data updated in the database.
     * @param {CouponRedemptionUpdateManyAndReturnArgs} args - Arguments to update many CouponRedemptions.
     * @example
     * // Update many CouponRedemptions
     * const couponRedemption = await prisma.couponRedemption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CouponRedemptions and only return the `id`
     * const couponRedemptionWithIdOnly = await prisma.couponRedemption.updateManyAndReturn({
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
    updateManyAndReturn<T extends CouponRedemptionUpdateManyAndReturnArgs>(args: SelectSubset<T, CouponRedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CouponRedemption.
     * @param {CouponRedemptionUpsertArgs} args - Arguments to update or create a CouponRedemption.
     * @example
     * // Update or create a CouponRedemption
     * const couponRedemption = await prisma.couponRedemption.upsert({
     *   create: {
     *     // ... data to create a CouponRedemption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CouponRedemption we want to update
     *   }
     * })
     */
    upsert<T extends CouponRedemptionUpsertArgs>(args: SelectSubset<T, CouponRedemptionUpsertArgs<ExtArgs>>): Prisma__CouponRedemptionClient<$Result.GetResult<Prisma.$CouponRedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CouponRedemptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionCountArgs} args - Arguments to filter CouponRedemptions to count.
     * @example
     * // Count the number of CouponRedemptions
     * const count = await prisma.couponRedemption.count({
     *   where: {
     *     // ... the filter for the CouponRedemptions we want to count
     *   }
     * })
    **/
    count<T extends CouponRedemptionCountArgs>(
      args?: Subset<T, CouponRedemptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponRedemptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CouponRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponRedemptionAggregateArgs>(args: Subset<T, CouponRedemptionAggregateArgs>): Prisma.PrismaPromise<GetCouponRedemptionAggregateType<T>>

    /**
     * Group by CouponRedemption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponRedemptionGroupByArgs} args - Group by arguments.
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
      T extends CouponRedemptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponRedemptionGroupByArgs['orderBy'] }
        : { orderBy?: CouponRedemptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CouponRedemption model
   */
  readonly fields: CouponRedemptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CouponRedemption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponRedemptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coupon<T extends CouponDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CouponDefaultArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CouponRedemption model
   */
  interface CouponRedemptionFieldRefs {
    readonly id: FieldRef<"CouponRedemption", 'String'>
    readonly userId: FieldRef<"CouponRedemption", 'String'>
    readonly couponId: FieldRef<"CouponRedemption", 'String'>
    readonly pointsSpent: FieldRef<"CouponRedemption", 'Int'>
    readonly status: FieldRef<"CouponRedemption", 'String'>
    readonly redeemedAt: FieldRef<"CouponRedemption", 'DateTime'>
    readonly expiresAt: FieldRef<"CouponRedemption", 'DateTime'>
    readonly createdAt: FieldRef<"CouponRedemption", 'DateTime'>
    readonly updatedAt: FieldRef<"CouponRedemption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CouponRedemption findUnique
   */
  export type CouponRedemptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which CouponRedemption to fetch.
     */
    where: CouponRedemptionWhereUniqueInput
  }

  /**
   * CouponRedemption findUniqueOrThrow
   */
  export type CouponRedemptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which CouponRedemption to fetch.
     */
    where: CouponRedemptionWhereUniqueInput
  }

  /**
   * CouponRedemption findFirst
   */
  export type CouponRedemptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which CouponRedemption to fetch.
     */
    where?: CouponRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponRedemptions to fetch.
     */
    orderBy?: CouponRedemptionOrderByWithRelationInput | CouponRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponRedemptions.
     */
    cursor?: CouponRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponRedemptions.
     */
    distinct?: CouponRedemptionScalarFieldEnum | CouponRedemptionScalarFieldEnum[]
  }

  /**
   * CouponRedemption findFirstOrThrow
   */
  export type CouponRedemptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which CouponRedemption to fetch.
     */
    where?: CouponRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponRedemptions to fetch.
     */
    orderBy?: CouponRedemptionOrderByWithRelationInput | CouponRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CouponRedemptions.
     */
    cursor?: CouponRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponRedemptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CouponRedemptions.
     */
    distinct?: CouponRedemptionScalarFieldEnum | CouponRedemptionScalarFieldEnum[]
  }

  /**
   * CouponRedemption findMany
   */
  export type CouponRedemptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * Filter, which CouponRedemptions to fetch.
     */
    where?: CouponRedemptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CouponRedemptions to fetch.
     */
    orderBy?: CouponRedemptionOrderByWithRelationInput | CouponRedemptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CouponRedemptions.
     */
    cursor?: CouponRedemptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CouponRedemptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CouponRedemptions.
     */
    skip?: number
    distinct?: CouponRedemptionScalarFieldEnum | CouponRedemptionScalarFieldEnum[]
  }

  /**
   * CouponRedemption create
   */
  export type CouponRedemptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to create a CouponRedemption.
     */
    data: XOR<CouponRedemptionCreateInput, CouponRedemptionUncheckedCreateInput>
  }

  /**
   * CouponRedemption createMany
   */
  export type CouponRedemptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CouponRedemptions.
     */
    data: CouponRedemptionCreateManyInput | CouponRedemptionCreateManyInput[]
  }

  /**
   * CouponRedemption createManyAndReturn
   */
  export type CouponRedemptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * The data used to create many CouponRedemptions.
     */
    data: CouponRedemptionCreateManyInput | CouponRedemptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CouponRedemption update
   */
  export type CouponRedemptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * The data needed to update a CouponRedemption.
     */
    data: XOR<CouponRedemptionUpdateInput, CouponRedemptionUncheckedUpdateInput>
    /**
     * Choose, which CouponRedemption to update.
     */
    where: CouponRedemptionWhereUniqueInput
  }

  /**
   * CouponRedemption updateMany
   */
  export type CouponRedemptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CouponRedemptions.
     */
    data: XOR<CouponRedemptionUpdateManyMutationInput, CouponRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which CouponRedemptions to update
     */
    where?: CouponRedemptionWhereInput
    /**
     * Limit how many CouponRedemptions to update.
     */
    limit?: number
  }

  /**
   * CouponRedemption updateManyAndReturn
   */
  export type CouponRedemptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * The data used to update CouponRedemptions.
     */
    data: XOR<CouponRedemptionUpdateManyMutationInput, CouponRedemptionUncheckedUpdateManyInput>
    /**
     * Filter which CouponRedemptions to update
     */
    where?: CouponRedemptionWhereInput
    /**
     * Limit how many CouponRedemptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CouponRedemption upsert
   */
  export type CouponRedemptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * The filter to search for the CouponRedemption to update in case it exists.
     */
    where: CouponRedemptionWhereUniqueInput
    /**
     * In case the CouponRedemption found by the `where` argument doesn't exist, create a new CouponRedemption with this data.
     */
    create: XOR<CouponRedemptionCreateInput, CouponRedemptionUncheckedCreateInput>
    /**
     * In case the CouponRedemption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponRedemptionUpdateInput, CouponRedemptionUncheckedUpdateInput>
  }

  /**
   * CouponRedemption delete
   */
  export type CouponRedemptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
    /**
     * Filter which CouponRedemption to delete.
     */
    where: CouponRedemptionWhereUniqueInput
  }

  /**
   * CouponRedemption deleteMany
   */
  export type CouponRedemptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CouponRedemptions to delete
     */
    where?: CouponRedemptionWhereInput
    /**
     * Limit how many CouponRedemptions to delete.
     */
    limit?: number
  }

  /**
   * CouponRedemption without action
   */
  export type CouponRedemptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponRedemption
     */
    select?: CouponRedemptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CouponRedemption
     */
    omit?: CouponRedemptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponRedemptionInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    code: number
    description: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    code: string
    description: string | null
    department: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    WorkGroups?: boolean | Subject$WorkGroupsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "description" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkGroups?: boolean | Subject$WorkGroupsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      WorkGroups: Prisma.$WorkGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      description: string | null
      department: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WorkGroups<T extends Subject$WorkGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$WorkGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly code: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly department: FieldRef<"Subject", 'String'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.WorkGroups
   */
  export type Subject$WorkGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    where?: WorkGroupWhereInput
    orderBy?: WorkGroupOrderByWithRelationInput | WorkGroupOrderByWithRelationInput[]
    cursor?: WorkGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkGroupScalarFieldEnum | WorkGroupScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model WorkGroup
   */

  export type AggregateWorkGroup = {
    _count: WorkGroupCountAggregateOutputType | null
    _avg: WorkGroupAvgAggregateOutputType | null
    _sum: WorkGroupSumAggregateOutputType | null
    _min: WorkGroupMinAggregateOutputType | null
    _max: WorkGroupMaxAggregateOutputType | null
  }

  export type WorkGroupAvgAggregateOutputType = {
    maxMembers: number | null
  }

  export type WorkGroupSumAggregateOutputType = {
    maxMembers: number | null
  }

  export type WorkGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    subjectId: string | null
    teacherId: string | null
    maxMembers: number | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subjectId: string | null
    teacherId: string | null
    maxMembers: number | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkGroupCountAggregateOutputType = {
    id: number
    name: number
    subjectId: number
    teacherId: number
    maxMembers: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkGroupAvgAggregateInputType = {
    maxMembers?: true
  }

  export type WorkGroupSumAggregateInputType = {
    maxMembers?: true
  }

  export type WorkGroupMinAggregateInputType = {
    id?: true
    name?: true
    subjectId?: true
    teacherId?: true
    maxMembers?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkGroupMaxAggregateInputType = {
    id?: true
    name?: true
    subjectId?: true
    teacherId?: true
    maxMembers?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkGroupCountAggregateInputType = {
    id?: true
    name?: true
    subjectId?: true
    teacherId?: true
    maxMembers?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkGroup to aggregate.
     */
    where?: WorkGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroups to fetch.
     */
    orderBy?: WorkGroupOrderByWithRelationInput | WorkGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkGroups
    **/
    _count?: true | WorkGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkGroupMaxAggregateInputType
  }

  export type GetWorkGroupAggregateType<T extends WorkGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkGroup[P]>
      : GetScalarType<T[P], AggregateWorkGroup[P]>
  }




  export type WorkGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkGroupWhereInput
    orderBy?: WorkGroupOrderByWithAggregationInput | WorkGroupOrderByWithAggregationInput[]
    by: WorkGroupScalarFieldEnum[] | WorkGroupScalarFieldEnum
    having?: WorkGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkGroupCountAggregateInputType | true
    _avg?: WorkGroupAvgAggregateInputType
    _sum?: WorkGroupSumAggregateInputType
    _min?: WorkGroupMinAggregateInputType
    _max?: WorkGroupMaxAggregateInputType
  }

  export type WorkGroupGroupByOutputType = {
    id: string
    name: string
    subjectId: string
    teacherId: string
    maxMembers: number
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkGroupCountAggregateOutputType | null
    _avg: WorkGroupAvgAggregateOutputType | null
    _sum: WorkGroupSumAggregateOutputType | null
    _min: WorkGroupMinAggregateOutputType | null
    _max: WorkGroupMaxAggregateOutputType | null
  }

  type GetWorkGroupGroupByPayload<T extends WorkGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupGroupByOutputType[P]>
        }
      >
    >


  export type WorkGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subjectId?: boolean
    teacherId?: boolean
    maxMembers?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Members?: boolean | WorkGroup$MembersArgs<ExtArgs>
    GroupFeedbacks?: boolean | WorkGroup$GroupFeedbacksArgs<ExtArgs>
    _count?: boolean | WorkGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workGroup"]>

  export type WorkGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subjectId?: boolean
    teacherId?: boolean
    maxMembers?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workGroup"]>

  export type WorkGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subjectId?: boolean
    teacherId?: boolean
    maxMembers?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workGroup"]>

  export type WorkGroupSelectScalar = {
    id?: boolean
    name?: boolean
    subjectId?: boolean
    teacherId?: boolean
    maxMembers?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subjectId" | "teacherId" | "maxMembers" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["workGroup"]>
  export type WorkGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    Members?: boolean | WorkGroup$MembersArgs<ExtArgs>
    GroupFeedbacks?: boolean | WorkGroup$GroupFeedbacksArgs<ExtArgs>
    _count?: boolean | WorkGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type WorkGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $WorkGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkGroup"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$TeacherPayload<ExtArgs>
      Members: Prisma.$WorkGroupMemberPayload<ExtArgs>[]
      GroupFeedbacks: Prisma.$GroupFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subjectId: string
      teacherId: string
      maxMembers: number
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workGroup"]>
    composites: {}
  }

  type WorkGroupGetPayload<S extends boolean | null | undefined | WorkGroupDefaultArgs> = $Result.GetResult<Prisma.$WorkGroupPayload, S>

  type WorkGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkGroupCountAggregateInputType | true
    }

  export interface WorkGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkGroup'], meta: { name: 'WorkGroup' } }
    /**
     * Find zero or one WorkGroup that matches the filter.
     * @param {WorkGroupFindUniqueArgs} args - Arguments to find a WorkGroup
     * @example
     * // Get one WorkGroup
     * const workGroup = await prisma.workGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkGroupFindUniqueArgs>(args: SelectSubset<T, WorkGroupFindUniqueArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkGroupFindUniqueOrThrowArgs} args - Arguments to find a WorkGroup
     * @example
     * // Get one WorkGroup
     * const workGroup = await prisma.workGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupFindFirstArgs} args - Arguments to find a WorkGroup
     * @example
     * // Get one WorkGroup
     * const workGroup = await prisma.workGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkGroupFindFirstArgs>(args?: SelectSubset<T, WorkGroupFindFirstArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupFindFirstOrThrowArgs} args - Arguments to find a WorkGroup
     * @example
     * // Get one WorkGroup
     * const workGroup = await prisma.workGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkGroups
     * const workGroups = await prisma.workGroup.findMany()
     * 
     * // Get first 10 WorkGroups
     * const workGroups = await prisma.workGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workGroupWithIdOnly = await prisma.workGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkGroupFindManyArgs>(args?: SelectSubset<T, WorkGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkGroup.
     * @param {WorkGroupCreateArgs} args - Arguments to create a WorkGroup.
     * @example
     * // Create one WorkGroup
     * const WorkGroup = await prisma.workGroup.create({
     *   data: {
     *     // ... data to create a WorkGroup
     *   }
     * })
     * 
     */
    create<T extends WorkGroupCreateArgs>(args: SelectSubset<T, WorkGroupCreateArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkGroups.
     * @param {WorkGroupCreateManyArgs} args - Arguments to create many WorkGroups.
     * @example
     * // Create many WorkGroups
     * const workGroup = await prisma.workGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkGroupCreateManyArgs>(args?: SelectSubset<T, WorkGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkGroups and returns the data saved in the database.
     * @param {WorkGroupCreateManyAndReturnArgs} args - Arguments to create many WorkGroups.
     * @example
     * // Create many WorkGroups
     * const workGroup = await prisma.workGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkGroups and only return the `id`
     * const workGroupWithIdOnly = await prisma.workGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkGroup.
     * @param {WorkGroupDeleteArgs} args - Arguments to delete one WorkGroup.
     * @example
     * // Delete one WorkGroup
     * const WorkGroup = await prisma.workGroup.delete({
     *   where: {
     *     // ... filter to delete one WorkGroup
     *   }
     * })
     * 
     */
    delete<T extends WorkGroupDeleteArgs>(args: SelectSubset<T, WorkGroupDeleteArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkGroup.
     * @param {WorkGroupUpdateArgs} args - Arguments to update one WorkGroup.
     * @example
     * // Update one WorkGroup
     * const workGroup = await prisma.workGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkGroupUpdateArgs>(args: SelectSubset<T, WorkGroupUpdateArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkGroups.
     * @param {WorkGroupDeleteManyArgs} args - Arguments to filter WorkGroups to delete.
     * @example
     * // Delete a few WorkGroups
     * const { count } = await prisma.workGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkGroupDeleteManyArgs>(args?: SelectSubset<T, WorkGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkGroups
     * const workGroup = await prisma.workGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkGroupUpdateManyArgs>(args: SelectSubset<T, WorkGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkGroups and returns the data updated in the database.
     * @param {WorkGroupUpdateManyAndReturnArgs} args - Arguments to update many WorkGroups.
     * @example
     * // Update many WorkGroups
     * const workGroup = await prisma.workGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkGroups and only return the `id`
     * const workGroupWithIdOnly = await prisma.workGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkGroup.
     * @param {WorkGroupUpsertArgs} args - Arguments to update or create a WorkGroup.
     * @example
     * // Update or create a WorkGroup
     * const workGroup = await prisma.workGroup.upsert({
     *   create: {
     *     // ... data to create a WorkGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkGroup we want to update
     *   }
     * })
     */
    upsert<T extends WorkGroupUpsertArgs>(args: SelectSubset<T, WorkGroupUpsertArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupCountArgs} args - Arguments to filter WorkGroups to count.
     * @example
     * // Count the number of WorkGroups
     * const count = await prisma.workGroup.count({
     *   where: {
     *     // ... the filter for the WorkGroups we want to count
     *   }
     * })
    **/
    count<T extends WorkGroupCountArgs>(
      args?: Subset<T, WorkGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkGroupAggregateArgs>(args: Subset<T, WorkGroupAggregateArgs>): Prisma.PrismaPromise<GetWorkGroupAggregateType<T>>

    /**
     * Group by WorkGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupGroupByArgs} args - Group by arguments.
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
      T extends WorkGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkGroup model
   */
  readonly fields: WorkGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Members<T extends WorkGroup$MembersArgs<ExtArgs> = {}>(args?: Subset<T, WorkGroup$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    GroupFeedbacks<T extends WorkGroup$GroupFeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, WorkGroup$GroupFeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkGroup model
   */
  interface WorkGroupFieldRefs {
    readonly id: FieldRef<"WorkGroup", 'String'>
    readonly name: FieldRef<"WorkGroup", 'String'>
    readonly subjectId: FieldRef<"WorkGroup", 'String'>
    readonly teacherId: FieldRef<"WorkGroup", 'String'>
    readonly maxMembers: FieldRef<"WorkGroup", 'Int'>
    readonly description: FieldRef<"WorkGroup", 'String'>
    readonly isActive: FieldRef<"WorkGroup", 'Boolean'>
    readonly createdAt: FieldRef<"WorkGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkGroup findUnique
   */
  export type WorkGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroup to fetch.
     */
    where: WorkGroupWhereUniqueInput
  }

  /**
   * WorkGroup findUniqueOrThrow
   */
  export type WorkGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroup to fetch.
     */
    where: WorkGroupWhereUniqueInput
  }

  /**
   * WorkGroup findFirst
   */
  export type WorkGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroup to fetch.
     */
    where?: WorkGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroups to fetch.
     */
    orderBy?: WorkGroupOrderByWithRelationInput | WorkGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkGroups.
     */
    cursor?: WorkGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkGroups.
     */
    distinct?: WorkGroupScalarFieldEnum | WorkGroupScalarFieldEnum[]
  }

  /**
   * WorkGroup findFirstOrThrow
   */
  export type WorkGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroup to fetch.
     */
    where?: WorkGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroups to fetch.
     */
    orderBy?: WorkGroupOrderByWithRelationInput | WorkGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkGroups.
     */
    cursor?: WorkGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkGroups.
     */
    distinct?: WorkGroupScalarFieldEnum | WorkGroupScalarFieldEnum[]
  }

  /**
   * WorkGroup findMany
   */
  export type WorkGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroups to fetch.
     */
    where?: WorkGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroups to fetch.
     */
    orderBy?: WorkGroupOrderByWithRelationInput | WorkGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkGroups.
     */
    cursor?: WorkGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroups.
     */
    skip?: number
    distinct?: WorkGroupScalarFieldEnum | WorkGroupScalarFieldEnum[]
  }

  /**
   * WorkGroup create
   */
  export type WorkGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkGroup.
     */
    data: XOR<WorkGroupCreateInput, WorkGroupUncheckedCreateInput>
  }

  /**
   * WorkGroup createMany
   */
  export type WorkGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkGroups.
     */
    data: WorkGroupCreateManyInput | WorkGroupCreateManyInput[]
  }

  /**
   * WorkGroup createManyAndReturn
   */
  export type WorkGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * The data used to create many WorkGroups.
     */
    data: WorkGroupCreateManyInput | WorkGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkGroup update
   */
  export type WorkGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkGroup.
     */
    data: XOR<WorkGroupUpdateInput, WorkGroupUncheckedUpdateInput>
    /**
     * Choose, which WorkGroup to update.
     */
    where: WorkGroupWhereUniqueInput
  }

  /**
   * WorkGroup updateMany
   */
  export type WorkGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkGroups.
     */
    data: XOR<WorkGroupUpdateManyMutationInput, WorkGroupUncheckedUpdateManyInput>
    /**
     * Filter which WorkGroups to update
     */
    where?: WorkGroupWhereInput
    /**
     * Limit how many WorkGroups to update.
     */
    limit?: number
  }

  /**
   * WorkGroup updateManyAndReturn
   */
  export type WorkGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * The data used to update WorkGroups.
     */
    data: XOR<WorkGroupUpdateManyMutationInput, WorkGroupUncheckedUpdateManyInput>
    /**
     * Filter which WorkGroups to update
     */
    where?: WorkGroupWhereInput
    /**
     * Limit how many WorkGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkGroup upsert
   */
  export type WorkGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkGroup to update in case it exists.
     */
    where: WorkGroupWhereUniqueInput
    /**
     * In case the WorkGroup found by the `where` argument doesn't exist, create a new WorkGroup with this data.
     */
    create: XOR<WorkGroupCreateInput, WorkGroupUncheckedCreateInput>
    /**
     * In case the WorkGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkGroupUpdateInput, WorkGroupUncheckedUpdateInput>
  }

  /**
   * WorkGroup delete
   */
  export type WorkGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
    /**
     * Filter which WorkGroup to delete.
     */
    where: WorkGroupWhereUniqueInput
  }

  /**
   * WorkGroup deleteMany
   */
  export type WorkGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkGroups to delete
     */
    where?: WorkGroupWhereInput
    /**
     * Limit how many WorkGroups to delete.
     */
    limit?: number
  }

  /**
   * WorkGroup.Members
   */
  export type WorkGroup$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    where?: WorkGroupMemberWhereInput
    orderBy?: WorkGroupMemberOrderByWithRelationInput | WorkGroupMemberOrderByWithRelationInput[]
    cursor?: WorkGroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkGroupMemberScalarFieldEnum | WorkGroupMemberScalarFieldEnum[]
  }

  /**
   * WorkGroup.GroupFeedbacks
   */
  export type WorkGroup$GroupFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupFeedback
     */
    select?: GroupFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupFeedback
     */
    omit?: GroupFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupFeedbackInclude<ExtArgs> | null
    where?: GroupFeedbackWhereInput
    orderBy?: GroupFeedbackOrderByWithRelationInput | GroupFeedbackOrderByWithRelationInput[]
    cursor?: GroupFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupFeedbackScalarFieldEnum | GroupFeedbackScalarFieldEnum[]
  }

  /**
   * WorkGroup without action
   */
  export type WorkGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroup
     */
    select?: WorkGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroup
     */
    omit?: WorkGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupInclude<ExtArgs> | null
  }


  /**
   * Model WorkGroupMember
   */

  export type AggregateWorkGroupMember = {
    _count: WorkGroupMemberCountAggregateOutputType | null
    _min: WorkGroupMemberMinAggregateOutputType | null
    _max: WorkGroupMemberMaxAggregateOutputType | null
  }

  export type WorkGroupMemberMinAggregateOutputType = {
    id: string | null
    workGroupId: string | null
    studentId: string | null
    role: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkGroupMemberMaxAggregateOutputType = {
    id: string | null
    workGroupId: string | null
    studentId: string | null
    role: string | null
    joinedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkGroupMemberCountAggregateOutputType = {
    id: number
    workGroupId: number
    studentId: number
    role: number
    joinedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkGroupMemberMinAggregateInputType = {
    id?: true
    workGroupId?: true
    studentId?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkGroupMemberMaxAggregateInputType = {
    id?: true
    workGroupId?: true
    studentId?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkGroupMemberCountAggregateInputType = {
    id?: true
    workGroupId?: true
    studentId?: true
    role?: true
    joinedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkGroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkGroupMember to aggregate.
     */
    where?: WorkGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroupMembers to fetch.
     */
    orderBy?: WorkGroupMemberOrderByWithRelationInput | WorkGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkGroupMembers
    **/
    _count?: true | WorkGroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkGroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkGroupMemberMaxAggregateInputType
  }

  export type GetWorkGroupMemberAggregateType<T extends WorkGroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkGroupMember[P]>
      : GetScalarType<T[P], AggregateWorkGroupMember[P]>
  }




  export type WorkGroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkGroupMemberWhereInput
    orderBy?: WorkGroupMemberOrderByWithAggregationInput | WorkGroupMemberOrderByWithAggregationInput[]
    by: WorkGroupMemberScalarFieldEnum[] | WorkGroupMemberScalarFieldEnum
    having?: WorkGroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkGroupMemberCountAggregateInputType | true
    _min?: WorkGroupMemberMinAggregateInputType
    _max?: WorkGroupMemberMaxAggregateInputType
  }

  export type WorkGroupMemberGroupByOutputType = {
    id: string
    workGroupId: string
    studentId: string
    role: string
    joinedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: WorkGroupMemberCountAggregateOutputType | null
    _min: WorkGroupMemberMinAggregateOutputType | null
    _max: WorkGroupMemberMaxAggregateOutputType | null
  }

  type GetWorkGroupMemberGroupByPayload<T extends WorkGroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorkGroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workGroupId?: boolean
    studentId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workGroupMember"]>

  export type WorkGroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workGroupId?: boolean
    studentId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workGroupMember"]>

  export type WorkGroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workGroupId?: boolean
    studentId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workGroupMember"]>

  export type WorkGroupMemberSelectScalar = {
    id?: boolean
    workGroupId?: boolean
    studentId?: boolean
    role?: boolean
    joinedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkGroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workGroupId" | "studentId" | "role" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["workGroupMember"]>
  export type WorkGroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type WorkGroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type WorkGroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workGroup?: boolean | WorkGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $WorkGroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkGroupMember"
    objects: {
      workGroup: Prisma.$WorkGroupPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workGroupId: string
      studentId: string
      role: string
      joinedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workGroupMember"]>
    composites: {}
  }

  type WorkGroupMemberGetPayload<S extends boolean | null | undefined | WorkGroupMemberDefaultArgs> = $Result.GetResult<Prisma.$WorkGroupMemberPayload, S>

  type WorkGroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkGroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkGroupMemberCountAggregateInputType | true
    }

  export interface WorkGroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkGroupMember'], meta: { name: 'WorkGroupMember' } }
    /**
     * Find zero or one WorkGroupMember that matches the filter.
     * @param {WorkGroupMemberFindUniqueArgs} args - Arguments to find a WorkGroupMember
     * @example
     * // Get one WorkGroupMember
     * const workGroupMember = await prisma.workGroupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkGroupMemberFindUniqueArgs>(args: SelectSubset<T, WorkGroupMemberFindUniqueArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkGroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkGroupMemberFindUniqueOrThrowArgs} args - Arguments to find a WorkGroupMember
     * @example
     * // Get one WorkGroupMember
     * const workGroupMember = await prisma.workGroupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkGroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkGroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkGroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberFindFirstArgs} args - Arguments to find a WorkGroupMember
     * @example
     * // Get one WorkGroupMember
     * const workGroupMember = await prisma.workGroupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkGroupMemberFindFirstArgs>(args?: SelectSubset<T, WorkGroupMemberFindFirstArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkGroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberFindFirstOrThrowArgs} args - Arguments to find a WorkGroupMember
     * @example
     * // Get one WorkGroupMember
     * const workGroupMember = await prisma.workGroupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkGroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkGroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkGroupMembers
     * const workGroupMembers = await prisma.workGroupMember.findMany()
     * 
     * // Get first 10 WorkGroupMembers
     * const workGroupMembers = await prisma.workGroupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workGroupMemberWithIdOnly = await prisma.workGroupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkGroupMemberFindManyArgs>(args?: SelectSubset<T, WorkGroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkGroupMember.
     * @param {WorkGroupMemberCreateArgs} args - Arguments to create a WorkGroupMember.
     * @example
     * // Create one WorkGroupMember
     * const WorkGroupMember = await prisma.workGroupMember.create({
     *   data: {
     *     // ... data to create a WorkGroupMember
     *   }
     * })
     * 
     */
    create<T extends WorkGroupMemberCreateArgs>(args: SelectSubset<T, WorkGroupMemberCreateArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkGroupMembers.
     * @param {WorkGroupMemberCreateManyArgs} args - Arguments to create many WorkGroupMembers.
     * @example
     * // Create many WorkGroupMembers
     * const workGroupMember = await prisma.workGroupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkGroupMemberCreateManyArgs>(args?: SelectSubset<T, WorkGroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkGroupMembers and returns the data saved in the database.
     * @param {WorkGroupMemberCreateManyAndReturnArgs} args - Arguments to create many WorkGroupMembers.
     * @example
     * // Create many WorkGroupMembers
     * const workGroupMember = await prisma.workGroupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkGroupMembers and only return the `id`
     * const workGroupMemberWithIdOnly = await prisma.workGroupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkGroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkGroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkGroupMember.
     * @param {WorkGroupMemberDeleteArgs} args - Arguments to delete one WorkGroupMember.
     * @example
     * // Delete one WorkGroupMember
     * const WorkGroupMember = await prisma.workGroupMember.delete({
     *   where: {
     *     // ... filter to delete one WorkGroupMember
     *   }
     * })
     * 
     */
    delete<T extends WorkGroupMemberDeleteArgs>(args: SelectSubset<T, WorkGroupMemberDeleteArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkGroupMember.
     * @param {WorkGroupMemberUpdateArgs} args - Arguments to update one WorkGroupMember.
     * @example
     * // Update one WorkGroupMember
     * const workGroupMember = await prisma.workGroupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkGroupMemberUpdateArgs>(args: SelectSubset<T, WorkGroupMemberUpdateArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkGroupMembers.
     * @param {WorkGroupMemberDeleteManyArgs} args - Arguments to filter WorkGroupMembers to delete.
     * @example
     * // Delete a few WorkGroupMembers
     * const { count } = await prisma.workGroupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkGroupMemberDeleteManyArgs>(args?: SelectSubset<T, WorkGroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkGroupMembers
     * const workGroupMember = await prisma.workGroupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkGroupMemberUpdateManyArgs>(args: SelectSubset<T, WorkGroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkGroupMembers and returns the data updated in the database.
     * @param {WorkGroupMemberUpdateManyAndReturnArgs} args - Arguments to update many WorkGroupMembers.
     * @example
     * // Update many WorkGroupMembers
     * const workGroupMember = await prisma.workGroupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkGroupMembers and only return the `id`
     * const workGroupMemberWithIdOnly = await prisma.workGroupMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkGroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkGroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkGroupMember.
     * @param {WorkGroupMemberUpsertArgs} args - Arguments to update or create a WorkGroupMember.
     * @example
     * // Update or create a WorkGroupMember
     * const workGroupMember = await prisma.workGroupMember.upsert({
     *   create: {
     *     // ... data to create a WorkGroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkGroupMember we want to update
     *   }
     * })
     */
    upsert<T extends WorkGroupMemberUpsertArgs>(args: SelectSubset<T, WorkGroupMemberUpsertArgs<ExtArgs>>): Prisma__WorkGroupMemberClient<$Result.GetResult<Prisma.$WorkGroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberCountArgs} args - Arguments to filter WorkGroupMembers to count.
     * @example
     * // Count the number of WorkGroupMembers
     * const count = await prisma.workGroupMember.count({
     *   where: {
     *     // ... the filter for the WorkGroupMembers we want to count
     *   }
     * })
    **/
    count<T extends WorkGroupMemberCountArgs>(
      args?: Subset<T, WorkGroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkGroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkGroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkGroupMemberAggregateArgs>(args: Subset<T, WorkGroupMemberAggregateArgs>): Prisma.PrismaPromise<GetWorkGroupMemberAggregateType<T>>

    /**
     * Group by WorkGroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupMemberGroupByArgs} args - Group by arguments.
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
      T extends WorkGroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkGroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkGroupMember model
   */
  readonly fields: WorkGroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkGroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkGroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workGroup<T extends WorkGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkGroupDefaultArgs<ExtArgs>>): Prisma__WorkGroupClient<$Result.GetResult<Prisma.$WorkGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkGroupMember model
   */
  interface WorkGroupMemberFieldRefs {
    readonly id: FieldRef<"WorkGroupMember", 'String'>
    readonly workGroupId: FieldRef<"WorkGroupMember", 'String'>
    readonly studentId: FieldRef<"WorkGroupMember", 'String'>
    readonly role: FieldRef<"WorkGroupMember", 'String'>
    readonly joinedAt: FieldRef<"WorkGroupMember", 'DateTime'>
    readonly createdAt: FieldRef<"WorkGroupMember", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkGroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkGroupMember findUnique
   */
  export type WorkGroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroupMember to fetch.
     */
    where: WorkGroupMemberWhereUniqueInput
  }

  /**
   * WorkGroupMember findUniqueOrThrow
   */
  export type WorkGroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroupMember to fetch.
     */
    where: WorkGroupMemberWhereUniqueInput
  }

  /**
   * WorkGroupMember findFirst
   */
  export type WorkGroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroupMember to fetch.
     */
    where?: WorkGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroupMembers to fetch.
     */
    orderBy?: WorkGroupMemberOrderByWithRelationInput | WorkGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkGroupMembers.
     */
    cursor?: WorkGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkGroupMembers.
     */
    distinct?: WorkGroupMemberScalarFieldEnum | WorkGroupMemberScalarFieldEnum[]
  }

  /**
   * WorkGroupMember findFirstOrThrow
   */
  export type WorkGroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroupMember to fetch.
     */
    where?: WorkGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroupMembers to fetch.
     */
    orderBy?: WorkGroupMemberOrderByWithRelationInput | WorkGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkGroupMembers.
     */
    cursor?: WorkGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkGroupMembers.
     */
    distinct?: WorkGroupMemberScalarFieldEnum | WorkGroupMemberScalarFieldEnum[]
  }

  /**
   * WorkGroupMember findMany
   */
  export type WorkGroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkGroupMembers to fetch.
     */
    where?: WorkGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkGroupMembers to fetch.
     */
    orderBy?: WorkGroupMemberOrderByWithRelationInput | WorkGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkGroupMembers.
     */
    cursor?: WorkGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkGroupMembers.
     */
    skip?: number
    distinct?: WorkGroupMemberScalarFieldEnum | WorkGroupMemberScalarFieldEnum[]
  }

  /**
   * WorkGroupMember create
   */
  export type WorkGroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkGroupMember.
     */
    data: XOR<WorkGroupMemberCreateInput, WorkGroupMemberUncheckedCreateInput>
  }

  /**
   * WorkGroupMember createMany
   */
  export type WorkGroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkGroupMembers.
     */
    data: WorkGroupMemberCreateManyInput | WorkGroupMemberCreateManyInput[]
  }

  /**
   * WorkGroupMember createManyAndReturn
   */
  export type WorkGroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many WorkGroupMembers.
     */
    data: WorkGroupMemberCreateManyInput | WorkGroupMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkGroupMember update
   */
  export type WorkGroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkGroupMember.
     */
    data: XOR<WorkGroupMemberUpdateInput, WorkGroupMemberUncheckedUpdateInput>
    /**
     * Choose, which WorkGroupMember to update.
     */
    where: WorkGroupMemberWhereUniqueInput
  }

  /**
   * WorkGroupMember updateMany
   */
  export type WorkGroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkGroupMembers.
     */
    data: XOR<WorkGroupMemberUpdateManyMutationInput, WorkGroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkGroupMembers to update
     */
    where?: WorkGroupMemberWhereInput
    /**
     * Limit how many WorkGroupMembers to update.
     */
    limit?: number
  }

  /**
   * WorkGroupMember updateManyAndReturn
   */
  export type WorkGroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update WorkGroupMembers.
     */
    data: XOR<WorkGroupMemberUpdateManyMutationInput, WorkGroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkGroupMembers to update
     */
    where?: WorkGroupMemberWhereInput
    /**
     * Limit how many WorkGroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkGroupMember upsert
   */
  export type WorkGroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkGroupMember to update in case it exists.
     */
    where: WorkGroupMemberWhereUniqueInput
    /**
     * In case the WorkGroupMember found by the `where` argument doesn't exist, create a new WorkGroupMember with this data.
     */
    create: XOR<WorkGroupMemberCreateInput, WorkGroupMemberUncheckedCreateInput>
    /**
     * In case the WorkGroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkGroupMemberUpdateInput, WorkGroupMemberUncheckedUpdateInput>
  }

  /**
   * WorkGroupMember delete
   */
  export type WorkGroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
    /**
     * Filter which WorkGroupMember to delete.
     */
    where: WorkGroupMemberWhereUniqueInput
  }

  /**
   * WorkGroupMember deleteMany
   */
  export type WorkGroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkGroupMembers to delete
     */
    where?: WorkGroupMemberWhereInput
    /**
     * Limit how many WorkGroupMembers to delete.
     */
    limit?: number
  }

  /**
   * WorkGroupMember without action
   */
  export type WorkGroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkGroupMember
     */
    select?: WorkGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkGroupMember
     */
    omit?: WorkGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkGroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: string | null
    category: string | null
    description: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: string | null
    category: string | null
    description: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    type: number
    category: number
    description: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    category?: true
    description?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    category?: true
    description?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    category?: true
    description?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    type: string
    category: string | null
    description: string | null
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "type" | "category" | "description" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      type: string
      category: string | null
      description: string | null
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
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
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly value: FieldRef<"SystemConfig", 'String'>
    readonly type: FieldRef<"SystemConfig", 'String'>
    readonly category: FieldRef<"SystemConfig", 'String'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly isPublic: FieldRef<"SystemConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    status: 'status',
    profilePicture: 'profilePicture',
    lastLoginAt: 'lastLoginAt',
    emailVerified: 'emailVerified',
    emailVerifiedAt: 'emailVerifiedAt',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    registerNumber: 'registerNumber',
    course: 'course',
    semester: 'semester',
    institution: 'institution',
    campus: 'campus',
    totalPoints: 'totalPoints',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    registerNumber: 'registerNumber',
    department: 'department',
    isApproved: 'isApproved',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const GroupFeedbackScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    workGroupId: 'workGroupId',
    title: 'title',
    description: 'description',
    status: 'status',
    pointsPerResponse: 'pointsPerResponse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupFeedbackScalarFieldEnum = (typeof GroupFeedbackScalarFieldEnum)[keyof typeof GroupFeedbackScalarFieldEnum]


  export const FeedbackResponseScalarFieldEnum: {
    id: 'id',
    groupFeedbackId: 'groupFeedbackId',
    evaluatorId: 'evaluatorId',
    evaluatedId: 'evaluatedId',
    rating: 'rating',
    justification: 'justification',
    pointsAwarded: 'pointsAwarded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeedbackResponseScalarFieldEnum = (typeof FeedbackResponseScalarFieldEnum)[keyof typeof FeedbackResponseScalarFieldEnum]


  export const StudentPointsScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    totalPoints: 'totalPoints',
    availablePoints: 'availablePoints',
    spentPoints: 'spentPoints',
    level: 'level',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentPointsScalarFieldEnum = (typeof StudentPointsScalarFieldEnum)[keyof typeof StudentPointsScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    partnerName: 'partnerName',
    discount: 'discount',
    pointsCost: 'pointsCost',
    image: 'image',
    status: 'status',
    maxRedemptions: 'maxRedemptions',
    currentRedemptions: 'currentRedemptions',
    validFrom: 'validFrom',
    validUntil: 'validUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const CouponRedemptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    couponId: 'couponId',
    pointsSpent: 'pointsSpent',
    status: 'status',
    redeemedAt: 'redeemedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponRedemptionScalarFieldEnum = (typeof CouponRedemptionScalarFieldEnum)[keyof typeof CouponRedemptionScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const WorkGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    maxMembers: 'maxMembers',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkGroupScalarFieldEnum = (typeof WorkGroupScalarFieldEnum)[keyof typeof WorkGroupScalarFieldEnum]


  export const WorkGroupMemberScalarFieldEnum: {
    id: 'id',
    workGroupId: 'workGroupId',
    studentId: 'studentId',
    role: 'role',
    joinedAt: 'joinedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkGroupMemberScalarFieldEnum = (typeof WorkGroupMemberScalarFieldEnum)[keyof typeof WorkGroupMemberScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type',
    category: 'category',
    description: 'description',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'FeedbackStatus'
   */
  export type EnumFeedbackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackStatus'>
    


  /**
   * Reference to a field of type 'CouponStatus'
   */
  export type EnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    profilePicture?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    FeedbackResponsesAsEvaluator?: FeedbackResponseListRelationFilter
    FeedbackResponsesAsEvaluated?: FeedbackResponseListRelationFilter
    CouponRedemptions?: CouponRedemptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Student?: StudentOrderByWithRelationInput
    Teacher?: TeacherOrderByWithRelationInput
    Admin?: AdminOrderByWithRelationInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseOrderByRelationAggregateInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseOrderByRelationAggregateInput
    CouponRedemptions?: CouponRedemptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    profilePicture?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    Teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    FeedbackResponsesAsEvaluator?: FeedbackResponseListRelationFilter
    FeedbackResponsesAsEvaluated?: FeedbackResponseListRelationFilter
    CouponRedemptions?: CouponRedemptionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    registerNumber?: StringFilter<"Student"> | string
    course?: StringFilter<"Student"> | string
    semester?: StringFilter<"Student"> | string
    institution?: StringFilter<"Student"> | string
    campus?: StringNullableFilter<"Student"> | string | null
    totalPoints?: IntFilter<"Student"> | number
    level?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    StudentPoints?: XOR<StudentPointsNullableScalarRelationFilter, StudentPointsWhereInput> | null
    WorkGroupMembers?: WorkGroupMemberListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    course?: SortOrder
    semester?: SortOrder
    institution?: SortOrder
    campus?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    StudentPoints?: StudentPointsOrderByWithRelationInput
    WorkGroupMembers?: WorkGroupMemberOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    registerNumber?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    course?: StringFilter<"Student"> | string
    semester?: StringFilter<"Student"> | string
    institution?: StringFilter<"Student"> | string
    campus?: StringNullableFilter<"Student"> | string | null
    totalPoints?: IntFilter<"Student"> | number
    level?: IntFilter<"Student"> | number
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    StudentPoints?: XOR<StudentPointsNullableScalarRelationFilter, StudentPointsWhereInput> | null
    WorkGroupMembers?: WorkGroupMemberListRelationFilter
  }, "id" | "userId" | "registerNumber">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    course?: SortOrder
    semester?: SortOrder
    institution?: SortOrder
    campus?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
    registerNumber?: StringWithAggregatesFilter<"Student"> | string
    course?: StringWithAggregatesFilter<"Student"> | string
    semester?: StringWithAggregatesFilter<"Student"> | string
    institution?: StringWithAggregatesFilter<"Student"> | string
    campus?: StringNullableWithAggregatesFilter<"Student"> | string | null
    totalPoints?: IntWithAggregatesFilter<"Student"> | number
    level?: IntWithAggregatesFilter<"Student"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    userId?: StringFilter<"Teacher"> | string
    registerNumber?: StringFilter<"Teacher"> | string
    department?: StringNullableFilter<"Teacher"> | string | null
    isApproved?: BoolFilter<"Teacher"> | boolean
    approvedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    approvedBy?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    GroupFeedbacks?: GroupFeedbackListRelationFilter
    WorkGroups?: WorkGroupListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    department?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    GroupFeedbacks?: GroupFeedbackOrderByRelationAggregateInput
    WorkGroups?: WorkGroupOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    registerNumber?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    department?: StringNullableFilter<"Teacher"> | string | null
    isApproved?: BoolFilter<"Teacher"> | boolean
    approvedAt?: DateTimeNullableFilter<"Teacher"> | Date | string | null
    approvedBy?: StringNullableFilter<"Teacher"> | string | null
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    GroupFeedbacks?: GroupFeedbackListRelationFilter
    WorkGroups?: WorkGroupListRelationFilter
  }, "id" | "userId" | "registerNumber">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    department?: SortOrderInput | SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    userId?: StringWithAggregatesFilter<"Teacher"> | string
    registerNumber?: StringWithAggregatesFilter<"Teacher"> | string
    department?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    isApproved?: BoolWithAggregatesFilter<"Teacher"> | boolean
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Teacher"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type GroupFeedbackWhereInput = {
    AND?: GroupFeedbackWhereInput | GroupFeedbackWhereInput[]
    OR?: GroupFeedbackWhereInput[]
    NOT?: GroupFeedbackWhereInput | GroupFeedbackWhereInput[]
    id?: StringFilter<"GroupFeedback"> | string
    teacherId?: StringFilter<"GroupFeedback"> | string
    workGroupId?: StringFilter<"GroupFeedback"> | string
    title?: StringFilter<"GroupFeedback"> | string
    description?: StringNullableFilter<"GroupFeedback"> | string | null
    status?: EnumFeedbackStatusFilter<"GroupFeedback"> | $Enums.FeedbackStatus
    pointsPerResponse?: IntFilter<"GroupFeedback"> | number
    createdAt?: DateTimeFilter<"GroupFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"GroupFeedback"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    workGroup?: XOR<WorkGroupScalarRelationFilter, WorkGroupWhereInput>
    Responses?: FeedbackResponseListRelationFilter
  }

  export type GroupFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    workGroupId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    pointsPerResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    workGroup?: WorkGroupOrderByWithRelationInput
    Responses?: FeedbackResponseOrderByRelationAggregateInput
  }

  export type GroupFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupFeedbackWhereInput | GroupFeedbackWhereInput[]
    OR?: GroupFeedbackWhereInput[]
    NOT?: GroupFeedbackWhereInput | GroupFeedbackWhereInput[]
    teacherId?: StringFilter<"GroupFeedback"> | string
    workGroupId?: StringFilter<"GroupFeedback"> | string
    title?: StringFilter<"GroupFeedback"> | string
    description?: StringNullableFilter<"GroupFeedback"> | string | null
    status?: EnumFeedbackStatusFilter<"GroupFeedback"> | $Enums.FeedbackStatus
    pointsPerResponse?: IntFilter<"GroupFeedback"> | number
    createdAt?: DateTimeFilter<"GroupFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"GroupFeedback"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    workGroup?: XOR<WorkGroupScalarRelationFilter, WorkGroupWhereInput>
    Responses?: FeedbackResponseListRelationFilter
  }, "id">

  export type GroupFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    workGroupId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    pointsPerResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupFeedbackCountOrderByAggregateInput
    _avg?: GroupFeedbackAvgOrderByAggregateInput
    _max?: GroupFeedbackMaxOrderByAggregateInput
    _min?: GroupFeedbackMinOrderByAggregateInput
    _sum?: GroupFeedbackSumOrderByAggregateInput
  }

  export type GroupFeedbackScalarWhereWithAggregatesInput = {
    AND?: GroupFeedbackScalarWhereWithAggregatesInput | GroupFeedbackScalarWhereWithAggregatesInput[]
    OR?: GroupFeedbackScalarWhereWithAggregatesInput[]
    NOT?: GroupFeedbackScalarWhereWithAggregatesInput | GroupFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupFeedback"> | string
    teacherId?: StringWithAggregatesFilter<"GroupFeedback"> | string
    workGroupId?: StringWithAggregatesFilter<"GroupFeedback"> | string
    title?: StringWithAggregatesFilter<"GroupFeedback"> | string
    description?: StringNullableWithAggregatesFilter<"GroupFeedback"> | string | null
    status?: EnumFeedbackStatusWithAggregatesFilter<"GroupFeedback"> | $Enums.FeedbackStatus
    pointsPerResponse?: IntWithAggregatesFilter<"GroupFeedback"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GroupFeedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupFeedback"> | Date | string
  }

  export type FeedbackResponseWhereInput = {
    AND?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    OR?: FeedbackResponseWhereInput[]
    NOT?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    id?: StringFilter<"FeedbackResponse"> | string
    groupFeedbackId?: StringFilter<"FeedbackResponse"> | string
    evaluatorId?: StringFilter<"FeedbackResponse"> | string
    evaluatedId?: StringFilter<"FeedbackResponse"> | string
    rating?: IntFilter<"FeedbackResponse"> | number
    justification?: StringFilter<"FeedbackResponse"> | string
    pointsAwarded?: IntFilter<"FeedbackResponse"> | number
    createdAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    groupFeedback?: XOR<GroupFeedbackScalarRelationFilter, GroupFeedbackWhereInput>
    evaluator?: XOR<UserScalarRelationFilter, UserWhereInput>
    evaluated?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedbackResponseOrderByWithRelationInput = {
    id?: SortOrder
    groupFeedbackId?: SortOrder
    evaluatorId?: SortOrder
    evaluatedId?: SortOrder
    rating?: SortOrder
    justification?: SortOrder
    pointsAwarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groupFeedback?: GroupFeedbackOrderByWithRelationInput
    evaluator?: UserOrderByWithRelationInput
    evaluated?: UserOrderByWithRelationInput
  }

  export type FeedbackResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupFeedbackId_evaluatorId_evaluatedId?: FeedbackResponseGroupFeedbackIdEvaluatorIdEvaluatedIdCompoundUniqueInput
    AND?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    OR?: FeedbackResponseWhereInput[]
    NOT?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    groupFeedbackId?: StringFilter<"FeedbackResponse"> | string
    evaluatorId?: StringFilter<"FeedbackResponse"> | string
    evaluatedId?: StringFilter<"FeedbackResponse"> | string
    rating?: IntFilter<"FeedbackResponse"> | number
    justification?: StringFilter<"FeedbackResponse"> | string
    pointsAwarded?: IntFilter<"FeedbackResponse"> | number
    createdAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    groupFeedback?: XOR<GroupFeedbackScalarRelationFilter, GroupFeedbackWhereInput>
    evaluator?: XOR<UserScalarRelationFilter, UserWhereInput>
    evaluated?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "groupFeedbackId_evaluatorId_evaluatedId">

  export type FeedbackResponseOrderByWithAggregationInput = {
    id?: SortOrder
    groupFeedbackId?: SortOrder
    evaluatorId?: SortOrder
    evaluatedId?: SortOrder
    rating?: SortOrder
    justification?: SortOrder
    pointsAwarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeedbackResponseCountOrderByAggregateInput
    _avg?: FeedbackResponseAvgOrderByAggregateInput
    _max?: FeedbackResponseMaxOrderByAggregateInput
    _min?: FeedbackResponseMinOrderByAggregateInput
    _sum?: FeedbackResponseSumOrderByAggregateInput
  }

  export type FeedbackResponseScalarWhereWithAggregatesInput = {
    AND?: FeedbackResponseScalarWhereWithAggregatesInput | FeedbackResponseScalarWhereWithAggregatesInput[]
    OR?: FeedbackResponseScalarWhereWithAggregatesInput[]
    NOT?: FeedbackResponseScalarWhereWithAggregatesInput | FeedbackResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    groupFeedbackId?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    evaluatorId?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    evaluatedId?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    rating?: IntWithAggregatesFilter<"FeedbackResponse"> | number
    justification?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    pointsAwarded?: IntWithAggregatesFilter<"FeedbackResponse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FeedbackResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeedbackResponse"> | Date | string
  }

  export type StudentPointsWhereInput = {
    AND?: StudentPointsWhereInput | StudentPointsWhereInput[]
    OR?: StudentPointsWhereInput[]
    NOT?: StudentPointsWhereInput | StudentPointsWhereInput[]
    id?: StringFilter<"StudentPoints"> | string
    studentId?: StringFilter<"StudentPoints"> | string
    totalPoints?: IntFilter<"StudentPoints"> | number
    availablePoints?: IntFilter<"StudentPoints"> | number
    spentPoints?: IntFilter<"StudentPoints"> | number
    level?: IntFilter<"StudentPoints"> | number
    createdAt?: DateTimeFilter<"StudentPoints"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPoints"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type StudentPointsOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type StudentPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: StudentPointsWhereInput | StudentPointsWhereInput[]
    OR?: StudentPointsWhereInput[]
    NOT?: StudentPointsWhereInput | StudentPointsWhereInput[]
    totalPoints?: IntFilter<"StudentPoints"> | number
    availablePoints?: IntFilter<"StudentPoints"> | number
    spentPoints?: IntFilter<"StudentPoints"> | number
    level?: IntFilter<"StudentPoints"> | number
    createdAt?: DateTimeFilter<"StudentPoints"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPoints"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "studentId">

  export type StudentPointsOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentPointsCountOrderByAggregateInput
    _avg?: StudentPointsAvgOrderByAggregateInput
    _max?: StudentPointsMaxOrderByAggregateInput
    _min?: StudentPointsMinOrderByAggregateInput
    _sum?: StudentPointsSumOrderByAggregateInput
  }

  export type StudentPointsScalarWhereWithAggregatesInput = {
    AND?: StudentPointsScalarWhereWithAggregatesInput | StudentPointsScalarWhereWithAggregatesInput[]
    OR?: StudentPointsScalarWhereWithAggregatesInput[]
    NOT?: StudentPointsScalarWhereWithAggregatesInput | StudentPointsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentPoints"> | string
    studentId?: StringWithAggregatesFilter<"StudentPoints"> | string
    totalPoints?: IntWithAggregatesFilter<"StudentPoints"> | number
    availablePoints?: IntWithAggregatesFilter<"StudentPoints"> | number
    spentPoints?: IntWithAggregatesFilter<"StudentPoints"> | number
    level?: IntWithAggregatesFilter<"StudentPoints"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudentPoints"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentPoints"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    name?: StringFilter<"Coupon"> | string
    description?: StringFilter<"Coupon"> | string
    partnerName?: StringFilter<"Coupon"> | string
    discount?: StringFilter<"Coupon"> | string
    pointsCost?: IntFilter<"Coupon"> | number
    image?: StringNullableFilter<"Coupon"> | string | null
    status?: EnumCouponStatusFilter<"Coupon"> | $Enums.CouponStatus
    maxRedemptions?: IntNullableFilter<"Coupon"> | number | null
    currentRedemptions?: IntFilter<"Coupon"> | number
    validFrom?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    validUntil?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    Redemptions?: CouponRedemptionListRelationFilter
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partnerName?: SortOrder
    discount?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    maxRedemptions?: SortOrderInput | SortOrder
    currentRedemptions?: SortOrder
    validFrom?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Redemptions?: CouponRedemptionOrderByRelationAggregateInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    name?: StringFilter<"Coupon"> | string
    description?: StringFilter<"Coupon"> | string
    partnerName?: StringFilter<"Coupon"> | string
    discount?: StringFilter<"Coupon"> | string
    pointsCost?: IntFilter<"Coupon"> | number
    image?: StringNullableFilter<"Coupon"> | string | null
    status?: EnumCouponStatusFilter<"Coupon"> | $Enums.CouponStatus
    maxRedemptions?: IntNullableFilter<"Coupon"> | number | null
    currentRedemptions?: IntFilter<"Coupon"> | number
    validFrom?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    validUntil?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    Redemptions?: CouponRedemptionListRelationFilter
  }, "id">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partnerName?: SortOrder
    discount?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    maxRedemptions?: SortOrderInput | SortOrder
    currentRedemptions?: SortOrder
    validFrom?: SortOrderInput | SortOrder
    validUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    name?: StringWithAggregatesFilter<"Coupon"> | string
    description?: StringWithAggregatesFilter<"Coupon"> | string
    partnerName?: StringWithAggregatesFilter<"Coupon"> | string
    discount?: StringWithAggregatesFilter<"Coupon"> | string
    pointsCost?: IntWithAggregatesFilter<"Coupon"> | number
    image?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    status?: EnumCouponStatusWithAggregatesFilter<"Coupon"> | $Enums.CouponStatus
    maxRedemptions?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    currentRedemptions?: IntWithAggregatesFilter<"Coupon"> | number
    validFrom?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    validUntil?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type CouponRedemptionWhereInput = {
    AND?: CouponRedemptionWhereInput | CouponRedemptionWhereInput[]
    OR?: CouponRedemptionWhereInput[]
    NOT?: CouponRedemptionWhereInput | CouponRedemptionWhereInput[]
    id?: StringFilter<"CouponRedemption"> | string
    userId?: StringFilter<"CouponRedemption"> | string
    couponId?: StringFilter<"CouponRedemption"> | string
    pointsSpent?: IntFilter<"CouponRedemption"> | number
    status?: StringFilter<"CouponRedemption"> | string
    redeemedAt?: DateTimeNullableFilter<"CouponRedemption"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"CouponRedemption"> | Date | string | null
    createdAt?: DateTimeFilter<"CouponRedemption"> | Date | string
    updatedAt?: DateTimeFilter<"CouponRedemption"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coupon?: XOR<CouponScalarRelationFilter, CouponWhereInput>
  }

  export type CouponRedemptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    coupon?: CouponOrderByWithRelationInput
  }

  export type CouponRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CouponRedemptionWhereInput | CouponRedemptionWhereInput[]
    OR?: CouponRedemptionWhereInput[]
    NOT?: CouponRedemptionWhereInput | CouponRedemptionWhereInput[]
    userId?: StringFilter<"CouponRedemption"> | string
    couponId?: StringFilter<"CouponRedemption"> | string
    pointsSpent?: IntFilter<"CouponRedemption"> | number
    status?: StringFilter<"CouponRedemption"> | string
    redeemedAt?: DateTimeNullableFilter<"CouponRedemption"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"CouponRedemption"> | Date | string | null
    createdAt?: DateTimeFilter<"CouponRedemption"> | Date | string
    updatedAt?: DateTimeFilter<"CouponRedemption"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coupon?: XOR<CouponScalarRelationFilter, CouponWhereInput>
  }, "id">

  export type CouponRedemptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponRedemptionCountOrderByAggregateInput
    _avg?: CouponRedemptionAvgOrderByAggregateInput
    _max?: CouponRedemptionMaxOrderByAggregateInput
    _min?: CouponRedemptionMinOrderByAggregateInput
    _sum?: CouponRedemptionSumOrderByAggregateInput
  }

  export type CouponRedemptionScalarWhereWithAggregatesInput = {
    AND?: CouponRedemptionScalarWhereWithAggregatesInput | CouponRedemptionScalarWhereWithAggregatesInput[]
    OR?: CouponRedemptionScalarWhereWithAggregatesInput[]
    NOT?: CouponRedemptionScalarWhereWithAggregatesInput | CouponRedemptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CouponRedemption"> | string
    userId?: StringWithAggregatesFilter<"CouponRedemption"> | string
    couponId?: StringWithAggregatesFilter<"CouponRedemption"> | string
    pointsSpent?: IntWithAggregatesFilter<"CouponRedemption"> | number
    status?: StringWithAggregatesFilter<"CouponRedemption"> | string
    redeemedAt?: DateTimeNullableWithAggregatesFilter<"CouponRedemption"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"CouponRedemption"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CouponRedemption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CouponRedemption"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    code?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    department?: StringNullableFilter<"Subject"> | string | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    WorkGroups?: WorkGroupListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkGroups?: WorkGroupOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    department?: StringNullableFilter<"Subject"> | string | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    WorkGroups?: WorkGroupListRelationFilter
  }, "id" | "code">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    code?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    department?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type WorkGroupWhereInput = {
    AND?: WorkGroupWhereInput | WorkGroupWhereInput[]
    OR?: WorkGroupWhereInput[]
    NOT?: WorkGroupWhereInput | WorkGroupWhereInput[]
    id?: StringFilter<"WorkGroup"> | string
    name?: StringFilter<"WorkGroup"> | string
    subjectId?: StringFilter<"WorkGroup"> | string
    teacherId?: StringFilter<"WorkGroup"> | string
    maxMembers?: IntFilter<"WorkGroup"> | number
    description?: StringNullableFilter<"WorkGroup"> | string | null
    isActive?: BoolFilter<"WorkGroup"> | boolean
    createdAt?: DateTimeFilter<"WorkGroup"> | Date | string
    updatedAt?: DateTimeFilter<"WorkGroup"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Members?: WorkGroupMemberListRelationFilter
    GroupFeedbacks?: GroupFeedbackListRelationFilter
  }

  export type WorkGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    maxMembers?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
    Members?: WorkGroupMemberOrderByRelationAggregateInput
    GroupFeedbacks?: GroupFeedbackOrderByRelationAggregateInput
  }

  export type WorkGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkGroupWhereInput | WorkGroupWhereInput[]
    OR?: WorkGroupWhereInput[]
    NOT?: WorkGroupWhereInput | WorkGroupWhereInput[]
    name?: StringFilter<"WorkGroup"> | string
    subjectId?: StringFilter<"WorkGroup"> | string
    teacherId?: StringFilter<"WorkGroup"> | string
    maxMembers?: IntFilter<"WorkGroup"> | number
    description?: StringNullableFilter<"WorkGroup"> | string | null
    isActive?: BoolFilter<"WorkGroup"> | boolean
    createdAt?: DateTimeFilter<"WorkGroup"> | Date | string
    updatedAt?: DateTimeFilter<"WorkGroup"> | Date | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    Members?: WorkGroupMemberListRelationFilter
    GroupFeedbacks?: GroupFeedbackListRelationFilter
  }, "id">

  export type WorkGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    maxMembers?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkGroupCountOrderByAggregateInput
    _avg?: WorkGroupAvgOrderByAggregateInput
    _max?: WorkGroupMaxOrderByAggregateInput
    _min?: WorkGroupMinOrderByAggregateInput
    _sum?: WorkGroupSumOrderByAggregateInput
  }

  export type WorkGroupScalarWhereWithAggregatesInput = {
    AND?: WorkGroupScalarWhereWithAggregatesInput | WorkGroupScalarWhereWithAggregatesInput[]
    OR?: WorkGroupScalarWhereWithAggregatesInput[]
    NOT?: WorkGroupScalarWhereWithAggregatesInput | WorkGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkGroup"> | string
    name?: StringWithAggregatesFilter<"WorkGroup"> | string
    subjectId?: StringWithAggregatesFilter<"WorkGroup"> | string
    teacherId?: StringWithAggregatesFilter<"WorkGroup"> | string
    maxMembers?: IntWithAggregatesFilter<"WorkGroup"> | number
    description?: StringNullableWithAggregatesFilter<"WorkGroup"> | string | null
    isActive?: BoolWithAggregatesFilter<"WorkGroup"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkGroup"> | Date | string
  }

  export type WorkGroupMemberWhereInput = {
    AND?: WorkGroupMemberWhereInput | WorkGroupMemberWhereInput[]
    OR?: WorkGroupMemberWhereInput[]
    NOT?: WorkGroupMemberWhereInput | WorkGroupMemberWhereInput[]
    id?: StringFilter<"WorkGroupMember"> | string
    workGroupId?: StringFilter<"WorkGroupMember"> | string
    studentId?: StringFilter<"WorkGroupMember"> | string
    role?: StringFilter<"WorkGroupMember"> | string
    joinedAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    createdAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    workGroup?: XOR<WorkGroupScalarRelationFilter, WorkGroupWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type WorkGroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    workGroupId?: SortOrder
    studentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workGroup?: WorkGroupOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type WorkGroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workGroupId_studentId?: WorkGroupMemberWorkGroupIdStudentIdCompoundUniqueInput
    AND?: WorkGroupMemberWhereInput | WorkGroupMemberWhereInput[]
    OR?: WorkGroupMemberWhereInput[]
    NOT?: WorkGroupMemberWhereInput | WorkGroupMemberWhereInput[]
    workGroupId?: StringFilter<"WorkGroupMember"> | string
    studentId?: StringFilter<"WorkGroupMember"> | string
    role?: StringFilter<"WorkGroupMember"> | string
    joinedAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    createdAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    workGroup?: XOR<WorkGroupScalarRelationFilter, WorkGroupWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id" | "workGroupId_studentId">

  export type WorkGroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    workGroupId?: SortOrder
    studentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkGroupMemberCountOrderByAggregateInput
    _max?: WorkGroupMemberMaxOrderByAggregateInput
    _min?: WorkGroupMemberMinOrderByAggregateInput
  }

  export type WorkGroupMemberScalarWhereWithAggregatesInput = {
    AND?: WorkGroupMemberScalarWhereWithAggregatesInput | WorkGroupMemberScalarWhereWithAggregatesInput[]
    OR?: WorkGroupMemberScalarWhereWithAggregatesInput[]
    NOT?: WorkGroupMemberScalarWhereWithAggregatesInput | WorkGroupMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkGroupMember"> | string
    workGroupId?: StringWithAggregatesFilter<"WorkGroupMember"> | string
    studentId?: StringWithAggregatesFilter<"WorkGroupMember"> | string
    role?: StringWithAggregatesFilter<"WorkGroupMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"WorkGroupMember"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkGroupMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkGroupMember"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    key?: StringFilter<"SystemConfig"> | string
    value?: StringFilter<"SystemConfig"> | string
    type?: StringFilter<"SystemConfig"> | string
    category?: StringNullableFilter<"SystemConfig"> | string | null
    description?: StringNullableFilter<"SystemConfig"> | string | null
    isPublic?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    value?: StringFilter<"SystemConfig"> | string
    type?: StringFilter<"SystemConfig"> | string
    category?: StringNullableFilter<"SystemConfig"> | string | null
    description?: StringNullableFilter<"SystemConfig"> | string | null
    isPublic?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    value?: StringWithAggregatesFilter<"SystemConfig"> | string
    type?: StringWithAggregatesFilter<"SystemConfig"> | string
    category?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    isPublic?: BoolWithAggregatesFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    StudentPoints?: StudentPointsCreateNestedOneWithoutStudentInput
    WorkGroupMembers?: WorkGroupMemberCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    StudentPoints?: StudentPointsUncheckedCreateNestedOneWithoutStudentInput
    WorkGroupMembers?: WorkGroupMemberUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    StudentPoints?: StudentPointsUpdateOneWithoutStudentNestedInput
    WorkGroupMembers?: WorkGroupMemberUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StudentPoints?: StudentPointsUncheckedUpdateOneWithoutStudentNestedInput
    WorkGroupMembers?: WorkGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    id?: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutTeacherInput
    WorkGroups?: WorkGroupCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    userId: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutTeacherInput
    WorkGroups?: WorkGroupUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutTeacherNestedInput
    WorkGroups?: WorkGroupUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutTeacherNestedInput
    WorkGroups?: WorkGroupUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    userId: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupFeedbackCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutGroupFeedbacksInput
    workGroup: WorkGroupCreateNestedOneWithoutGroupFeedbacksInput
    Responses?: FeedbackResponseCreateNestedManyWithoutGroupFeedbackInput
  }

  export type GroupFeedbackUncheckedCreateInput = {
    id?: string
    teacherId: string
    workGroupId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Responses?: FeedbackResponseUncheckedCreateNestedManyWithoutGroupFeedbackInput
  }

  export type GroupFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupFeedbacksNestedInput
    workGroup?: WorkGroupUpdateOneRequiredWithoutGroupFeedbacksNestedInput
    Responses?: FeedbackResponseUpdateManyWithoutGroupFeedbackNestedInput
  }

  export type GroupFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Responses?: FeedbackResponseUncheckedUpdateManyWithoutGroupFeedbackNestedInput
  }

  export type GroupFeedbackCreateManyInput = {
    id?: string
    teacherId: string
    workGroupId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseCreateInput = {
    id?: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupFeedback: GroupFeedbackCreateNestedOneWithoutResponsesInput
    evaluator: UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatorInput
    evaluated: UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatedInput
  }

  export type FeedbackResponseUncheckedCreateInput = {
    id?: string
    groupFeedbackId: string
    evaluatorId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupFeedback?: GroupFeedbackUpdateOneRequiredWithoutResponsesNestedInput
    evaluator?: UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatorNestedInput
    evaluated?: UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatedNestedInput
  }

  export type FeedbackResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupFeedbackId?: StringFieldUpdateOperationsInput | string
    evaluatorId?: StringFieldUpdateOperationsInput | string
    evaluatedId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseCreateManyInput = {
    id?: string
    groupFeedbackId: string
    evaluatorId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupFeedbackId?: StringFieldUpdateOperationsInput | string
    evaluatorId?: StringFieldUpdateOperationsInput | string
    evaluatedId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsCreateInput = {
    id?: string
    totalPoints?: number
    availablePoints?: number
    spentPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentPointsInput
  }

  export type StudentPointsUncheckedCreateInput = {
    id?: string
    studentId: string
    totalPoints?: number
    availablePoints?: number
    spentPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPointsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    availablePoints?: IntFieldUpdateOperationsInput | number
    spentPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentPointsNestedInput
  }

  export type StudentPointsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    availablePoints?: IntFieldUpdateOperationsInput | number
    spentPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsCreateManyInput = {
    id?: string
    studentId: string
    totalPoints?: number
    availablePoints?: number
    spentPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPointsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    availablePoints?: IntFieldUpdateOperationsInput | number
    spentPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    availablePoints?: IntFieldUpdateOperationsInput | number
    spentPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    name: string
    description: string
    partnerName: string
    discount: string
    pointsCost: number
    image?: string | null
    status?: $Enums.CouponStatus
    maxRedemptions?: number | null
    currentRedemptions?: number
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Redemptions?: CouponRedemptionCreateNestedManyWithoutCouponInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    partnerName: string
    discount: string
    pointsCost: number
    image?: string | null
    status?: $Enums.CouponStatus
    maxRedemptions?: number | null
    currentRedemptions?: number
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Redemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    maxRedemptions?: NullableIntFieldUpdateOperationsInput | number | null
    currentRedemptions?: IntFieldUpdateOperationsInput | number
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Redemptions?: CouponRedemptionUpdateManyWithoutCouponNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    maxRedemptions?: NullableIntFieldUpdateOperationsInput | number | null
    currentRedemptions?: IntFieldUpdateOperationsInput | number
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Redemptions?: CouponRedemptionUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type CouponCreateManyInput = {
    id?: string
    name: string
    description: string
    partnerName: string
    discount: string
    pointsCost: number
    image?: string | null
    status?: $Enums.CouponStatus
    maxRedemptions?: number | null
    currentRedemptions?: number
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    maxRedemptions?: NullableIntFieldUpdateOperationsInput | number | null
    currentRedemptions?: IntFieldUpdateOperationsInput | number
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    maxRedemptions?: NullableIntFieldUpdateOperationsInput | number | null
    currentRedemptions?: IntFieldUpdateOperationsInput | number
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionCreateInput = {
    id?: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCouponRedemptionsInput
    coupon: CouponCreateNestedOneWithoutRedemptionsInput
  }

  export type CouponRedemptionUncheckedCreateInput = {
    id?: string
    userId: string
    couponId: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponRedemptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCouponRedemptionsNestedInput
    coupon?: CouponUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type CouponRedemptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionCreateManyInput = {
    id?: string
    userId: string
    couponId: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponRedemptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkGroups?: WorkGroupCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkGroups?: WorkGroupUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkGroups?: WorkGroupUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkGroups?: WorkGroupUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupCreateInput = {
    id?: string
    name: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutWorkGroupsInput
    teacher: TeacherCreateNestedOneWithoutWorkGroupsInput
    Members?: WorkGroupMemberCreateNestedManyWithoutWorkGroupInput
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupUncheckedCreateInput = {
    id?: string
    name: string
    subjectId: string
    teacherId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: WorkGroupMemberUncheckedCreateNestedManyWithoutWorkGroupInput
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutWorkGroupsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutWorkGroupsNestedInput
    Members?: WorkGroupMemberUpdateManyWithoutWorkGroupNestedInput
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupNestedInput
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupCreateManyInput = {
    id?: string
    name: string
    subjectId: string
    teacherId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    workGroup: WorkGroupCreateNestedOneWithoutMembersInput
    student: StudentCreateNestedOneWithoutWorkGroupMembersInput
  }

  export type WorkGroupMemberUncheckedCreateInput = {
    id?: string
    workGroupId: string
    studentId: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workGroup?: WorkGroupUpdateOneRequiredWithoutMembersNestedInput
    student?: StudentUpdateOneRequiredWithoutWorkGroupMembersNestedInput
  }

  export type WorkGroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberCreateManyInput = {
    id?: string
    workGroupId: string
    studentId: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    id?: string
    key: string
    value: string
    type?: string
    category?: string | null
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    type?: string
    category?: string | null
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    type?: string
    category?: string | null
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type FeedbackResponseListRelationFilter = {
    every?: FeedbackResponseWhereInput
    some?: FeedbackResponseWhereInput
    none?: FeedbackResponseWhereInput
  }

  export type CouponRedemptionListRelationFilter = {
    every?: CouponRedemptionWhereInput
    some?: CouponRedemptionWhereInput
    none?: CouponRedemptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeedbackResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponRedemptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePicture?: SortOrder
    lastLoginAt?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePicture?: SortOrder
    lastLoginAt?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    profilePicture?: SortOrder
    lastLoginAt?: SortOrder
    emailVerified?: SortOrder
    emailVerifiedAt?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentPointsNullableScalarRelationFilter = {
    is?: StudentPointsWhereInput | null
    isNot?: StudentPointsWhereInput | null
  }

  export type WorkGroupMemberListRelationFilter = {
    every?: WorkGroupMemberWhereInput
    some?: WorkGroupMemberWhereInput
    none?: WorkGroupMemberWhereInput
  }

  export type WorkGroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    course?: SortOrder
    semester?: SortOrder
    institution?: SortOrder
    campus?: SortOrder
    totalPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    level?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    course?: SortOrder
    semester?: SortOrder
    institution?: SortOrder
    campus?: SortOrder
    totalPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    course?: SortOrder
    semester?: SortOrder
    institution?: SortOrder
    campus?: SortOrder
    totalPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type GroupFeedbackListRelationFilter = {
    every?: GroupFeedbackWhereInput
    some?: GroupFeedbackWhereInput
    none?: GroupFeedbackWhereInput
  }

  export type WorkGroupListRelationFilter = {
    every?: WorkGroupWhereInput
    some?: WorkGroupWhereInput
    none?: WorkGroupWhereInput
  }

  export type GroupFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    department?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    department?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    registerNumber?: SortOrder
    department?: SortOrder
    isApproved?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFeedbackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[]
    notIn?: $Enums.FeedbackStatus[]
    not?: NestedEnumFeedbackStatusFilter<$PrismaModel> | $Enums.FeedbackStatus
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type WorkGroupScalarRelationFilter = {
    is?: WorkGroupWhereInput
    isNot?: WorkGroupWhereInput
  }

  export type GroupFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    workGroupId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    pointsPerResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupFeedbackAvgOrderByAggregateInput = {
    pointsPerResponse?: SortOrder
  }

  export type GroupFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    workGroupId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    pointsPerResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    workGroupId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    pointsPerResponse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupFeedbackSumOrderByAggregateInput = {
    pointsPerResponse?: SortOrder
  }

  export type EnumFeedbackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[]
    notIn?: $Enums.FeedbackStatus[]
    not?: NestedEnumFeedbackStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackStatusFilter<$PrismaModel>
    _max?: NestedEnumFeedbackStatusFilter<$PrismaModel>
  }

  export type GroupFeedbackScalarRelationFilter = {
    is?: GroupFeedbackWhereInput
    isNot?: GroupFeedbackWhereInput
  }

  export type FeedbackResponseGroupFeedbackIdEvaluatorIdEvaluatedIdCompoundUniqueInput = {
    groupFeedbackId: string
    evaluatorId: string
    evaluatedId: string
  }

  export type FeedbackResponseCountOrderByAggregateInput = {
    id?: SortOrder
    groupFeedbackId?: SortOrder
    evaluatorId?: SortOrder
    evaluatedId?: SortOrder
    rating?: SortOrder
    justification?: SortOrder
    pointsAwarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackResponseAvgOrderByAggregateInput = {
    rating?: SortOrder
    pointsAwarded?: SortOrder
  }

  export type FeedbackResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    groupFeedbackId?: SortOrder
    evaluatorId?: SortOrder
    evaluatedId?: SortOrder
    rating?: SortOrder
    justification?: SortOrder
    pointsAwarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackResponseMinOrderByAggregateInput = {
    id?: SortOrder
    groupFeedbackId?: SortOrder
    evaluatorId?: SortOrder
    evaluatedId?: SortOrder
    rating?: SortOrder
    justification?: SortOrder
    pointsAwarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackResponseSumOrderByAggregateInput = {
    rating?: SortOrder
    pointsAwarded?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentPointsCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPointsAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
  }

  export type StudentPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPointsMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPointsSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    availablePoints?: SortOrder
    spentPoints?: SortOrder
    level?: SortOrder
  }

  export type EnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[]
    notIn?: $Enums.CouponStatus[]
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partnerName?: SortOrder
    discount?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrder
    status?: SortOrder
    maxRedemptions?: SortOrder
    currentRedemptions?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    pointsCost?: SortOrder
    maxRedemptions?: SortOrder
    currentRedemptions?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partnerName?: SortOrder
    discount?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrder
    status?: SortOrder
    maxRedemptions?: SortOrder
    currentRedemptions?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partnerName?: SortOrder
    discount?: SortOrder
    pointsCost?: SortOrder
    image?: SortOrder
    status?: SortOrder
    maxRedemptions?: SortOrder
    currentRedemptions?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    pointsCost?: SortOrder
    maxRedemptions?: SortOrder
    currentRedemptions?: SortOrder
  }

  export type EnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[]
    notIn?: $Enums.CouponStatus[]
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type CouponScalarRelationFilter = {
    is?: CouponWhereInput
    isNot?: CouponWhereInput
  }

  export type CouponRedemptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponRedemptionAvgOrderByAggregateInput = {
    pointsSpent?: SortOrder
  }

  export type CouponRedemptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponRedemptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    couponId?: SortOrder
    pointsSpent?: SortOrder
    status?: SortOrder
    redeemedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponRedemptionSumOrderByAggregateInput = {
    pointsSpent?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type WorkGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    maxMembers?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkGroupAvgOrderByAggregateInput = {
    maxMembers?: SortOrder
  }

  export type WorkGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    maxMembers?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    maxMembers?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkGroupSumOrderByAggregateInput = {
    maxMembers?: SortOrder
  }

  export type WorkGroupMemberWorkGroupIdStudentIdCompoundUniqueInput = {
    workGroupId: string
    studentId: string
  }

  export type WorkGroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    workGroupId?: SortOrder
    studentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkGroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    workGroupId?: SortOrder
    studentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkGroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    workGroupId?: SortOrder
    studentId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type FeedbackResponseCreateNestedManyWithoutEvaluatorInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatorInput, FeedbackResponseUncheckedCreateWithoutEvaluatorInput> | FeedbackResponseCreateWithoutEvaluatorInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatorInput | FeedbackResponseCreateOrConnectWithoutEvaluatorInput[]
    createMany?: FeedbackResponseCreateManyEvaluatorInputEnvelope
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
  }

  export type FeedbackResponseCreateNestedManyWithoutEvaluatedInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatedInput, FeedbackResponseUncheckedCreateWithoutEvaluatedInput> | FeedbackResponseCreateWithoutEvaluatedInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatedInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatedInput | FeedbackResponseCreateOrConnectWithoutEvaluatedInput[]
    createMany?: FeedbackResponseCreateManyEvaluatedInputEnvelope
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
  }

  export type CouponRedemptionCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponRedemptionCreateWithoutUserInput, CouponRedemptionUncheckedCreateWithoutUserInput> | CouponRedemptionCreateWithoutUserInput[] | CouponRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutUserInput | CouponRedemptionCreateOrConnectWithoutUserInput[]
    createMany?: CouponRedemptionCreateManyUserInputEnvelope
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatorInput, FeedbackResponseUncheckedCreateWithoutEvaluatorInput> | FeedbackResponseCreateWithoutEvaluatorInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatorInput | FeedbackResponseCreateOrConnectWithoutEvaluatorInput[]
    createMany?: FeedbackResponseCreateManyEvaluatorInputEnvelope
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
  }

  export type FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatedInput, FeedbackResponseUncheckedCreateWithoutEvaluatedInput> | FeedbackResponseCreateWithoutEvaluatedInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatedInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatedInput | FeedbackResponseCreateOrConnectWithoutEvaluatedInput[]
    createMany?: FeedbackResponseCreateManyEvaluatedInputEnvelope
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
  }

  export type CouponRedemptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CouponRedemptionCreateWithoutUserInput, CouponRedemptionUncheckedCreateWithoutUserInput> | CouponRedemptionCreateWithoutUserInput[] | CouponRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutUserInput | CouponRedemptionCreateOrConnectWithoutUserInput[]
    createMany?: CouponRedemptionCreateManyUserInputEnvelope
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackResponseUpdateManyWithoutEvaluatorNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatorInput, FeedbackResponseUncheckedCreateWithoutEvaluatorInput> | FeedbackResponseCreateWithoutEvaluatorInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatorInput | FeedbackResponseCreateOrConnectWithoutEvaluatorInput[]
    upsert?: FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatorInput | FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatorInput[]
    createMany?: FeedbackResponseCreateManyEvaluatorInputEnvelope
    set?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    disconnect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    delete?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    update?: FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatorInput | FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatorInput[]
    updateMany?: FeedbackResponseUpdateManyWithWhereWithoutEvaluatorInput | FeedbackResponseUpdateManyWithWhereWithoutEvaluatorInput[]
    deleteMany?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
  }

  export type FeedbackResponseUpdateManyWithoutEvaluatedNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatedInput, FeedbackResponseUncheckedCreateWithoutEvaluatedInput> | FeedbackResponseCreateWithoutEvaluatedInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatedInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatedInput | FeedbackResponseCreateOrConnectWithoutEvaluatedInput[]
    upsert?: FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatedInput | FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatedInput[]
    createMany?: FeedbackResponseCreateManyEvaluatedInputEnvelope
    set?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    disconnect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    delete?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    update?: FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatedInput | FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatedInput[]
    updateMany?: FeedbackResponseUpdateManyWithWhereWithoutEvaluatedInput | FeedbackResponseUpdateManyWithWhereWithoutEvaluatedInput[]
    deleteMany?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
  }

  export type CouponRedemptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponRedemptionCreateWithoutUserInput, CouponRedemptionUncheckedCreateWithoutUserInput> | CouponRedemptionCreateWithoutUserInput[] | CouponRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutUserInput | CouponRedemptionCreateOrConnectWithoutUserInput[]
    upsert?: CouponRedemptionUpsertWithWhereUniqueWithoutUserInput | CouponRedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponRedemptionCreateManyUserInputEnvelope
    set?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    disconnect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    delete?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    update?: CouponRedemptionUpdateWithWhereUniqueWithoutUserInput | CouponRedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponRedemptionUpdateManyWithWhereWithoutUserInput | CouponRedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponRedemptionScalarWhereInput | CouponRedemptionScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatorInput, FeedbackResponseUncheckedCreateWithoutEvaluatorInput> | FeedbackResponseCreateWithoutEvaluatorInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatorInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatorInput | FeedbackResponseCreateOrConnectWithoutEvaluatorInput[]
    upsert?: FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatorInput | FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatorInput[]
    createMany?: FeedbackResponseCreateManyEvaluatorInputEnvelope
    set?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    disconnect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    delete?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    update?: FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatorInput | FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatorInput[]
    updateMany?: FeedbackResponseUpdateManyWithWhereWithoutEvaluatorInput | FeedbackResponseUpdateManyWithWhereWithoutEvaluatorInput[]
    deleteMany?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
  }

  export type FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutEvaluatedInput, FeedbackResponseUncheckedCreateWithoutEvaluatedInput> | FeedbackResponseCreateWithoutEvaluatedInput[] | FeedbackResponseUncheckedCreateWithoutEvaluatedInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutEvaluatedInput | FeedbackResponseCreateOrConnectWithoutEvaluatedInput[]
    upsert?: FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatedInput | FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatedInput[]
    createMany?: FeedbackResponseCreateManyEvaluatedInputEnvelope
    set?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    disconnect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    delete?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    update?: FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatedInput | FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatedInput[]
    updateMany?: FeedbackResponseUpdateManyWithWhereWithoutEvaluatedInput | FeedbackResponseUpdateManyWithWhereWithoutEvaluatedInput[]
    deleteMany?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
  }

  export type CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CouponRedemptionCreateWithoutUserInput, CouponRedemptionUncheckedCreateWithoutUserInput> | CouponRedemptionCreateWithoutUserInput[] | CouponRedemptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutUserInput | CouponRedemptionCreateOrConnectWithoutUserInput[]
    upsert?: CouponRedemptionUpsertWithWhereUniqueWithoutUserInput | CouponRedemptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CouponRedemptionCreateManyUserInputEnvelope
    set?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    disconnect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    delete?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    update?: CouponRedemptionUpdateWithWhereUniqueWithoutUserInput | CouponRedemptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CouponRedemptionUpdateManyWithWhereWithoutUserInput | CouponRedemptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CouponRedemptionScalarWhereInput | CouponRedemptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type StudentPointsCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentPointsCreateWithoutStudentInput, StudentPointsUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentPointsCreateOrConnectWithoutStudentInput
    connect?: StudentPointsWhereUniqueInput
  }

  export type WorkGroupMemberCreateNestedManyWithoutStudentInput = {
    create?: XOR<WorkGroupMemberCreateWithoutStudentInput, WorkGroupMemberUncheckedCreateWithoutStudentInput> | WorkGroupMemberCreateWithoutStudentInput[] | WorkGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutStudentInput | WorkGroupMemberCreateOrConnectWithoutStudentInput[]
    createMany?: WorkGroupMemberCreateManyStudentInputEnvelope
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
  }

  export type StudentPointsUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<StudentPointsCreateWithoutStudentInput, StudentPointsUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentPointsCreateOrConnectWithoutStudentInput
    connect?: StudentPointsWhereUniqueInput
  }

  export type WorkGroupMemberUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<WorkGroupMemberCreateWithoutStudentInput, WorkGroupMemberUncheckedCreateWithoutStudentInput> | WorkGroupMemberCreateWithoutStudentInput[] | WorkGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutStudentInput | WorkGroupMemberCreateOrConnectWithoutStudentInput[]
    createMany?: WorkGroupMemberCreateManyStudentInputEnvelope
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type StudentPointsUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentPointsCreateWithoutStudentInput, StudentPointsUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentPointsCreateOrConnectWithoutStudentInput
    upsert?: StudentPointsUpsertWithoutStudentInput
    disconnect?: StudentPointsWhereInput | boolean
    delete?: StudentPointsWhereInput | boolean
    connect?: StudentPointsWhereUniqueInput
    update?: XOR<XOR<StudentPointsUpdateToOneWithWhereWithoutStudentInput, StudentPointsUpdateWithoutStudentInput>, StudentPointsUncheckedUpdateWithoutStudentInput>
  }

  export type WorkGroupMemberUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WorkGroupMemberCreateWithoutStudentInput, WorkGroupMemberUncheckedCreateWithoutStudentInput> | WorkGroupMemberCreateWithoutStudentInput[] | WorkGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutStudentInput | WorkGroupMemberCreateOrConnectWithoutStudentInput[]
    upsert?: WorkGroupMemberUpsertWithWhereUniqueWithoutStudentInput | WorkGroupMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WorkGroupMemberCreateManyStudentInputEnvelope
    set?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    disconnect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    delete?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    update?: WorkGroupMemberUpdateWithWhereUniqueWithoutStudentInput | WorkGroupMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WorkGroupMemberUpdateManyWithWhereWithoutStudentInput | WorkGroupMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WorkGroupMemberScalarWhereInput | WorkGroupMemberScalarWhereInput[]
  }

  export type StudentPointsUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<StudentPointsCreateWithoutStudentInput, StudentPointsUncheckedCreateWithoutStudentInput>
    connectOrCreate?: StudentPointsCreateOrConnectWithoutStudentInput
    upsert?: StudentPointsUpsertWithoutStudentInput
    disconnect?: StudentPointsWhereInput | boolean
    delete?: StudentPointsWhereInput | boolean
    connect?: StudentPointsWhereUniqueInput
    update?: XOR<XOR<StudentPointsUpdateToOneWithWhereWithoutStudentInput, StudentPointsUpdateWithoutStudentInput>, StudentPointsUncheckedUpdateWithoutStudentInput>
  }

  export type WorkGroupMemberUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<WorkGroupMemberCreateWithoutStudentInput, WorkGroupMemberUncheckedCreateWithoutStudentInput> | WorkGroupMemberCreateWithoutStudentInput[] | WorkGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutStudentInput | WorkGroupMemberCreateOrConnectWithoutStudentInput[]
    upsert?: WorkGroupMemberUpsertWithWhereUniqueWithoutStudentInput | WorkGroupMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: WorkGroupMemberCreateManyStudentInputEnvelope
    set?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    disconnect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    delete?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    update?: WorkGroupMemberUpdateWithWhereUniqueWithoutStudentInput | WorkGroupMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: WorkGroupMemberUpdateManyWithWhereWithoutStudentInput | WorkGroupMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: WorkGroupMemberScalarWhereInput | WorkGroupMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type GroupFeedbackCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GroupFeedbackCreateWithoutTeacherInput, GroupFeedbackUncheckedCreateWithoutTeacherInput> | GroupFeedbackCreateWithoutTeacherInput[] | GroupFeedbackUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutTeacherInput | GroupFeedbackCreateOrConnectWithoutTeacherInput[]
    createMany?: GroupFeedbackCreateManyTeacherInputEnvelope
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
  }

  export type WorkGroupCreateNestedManyWithoutTeacherInput = {
    create?: XOR<WorkGroupCreateWithoutTeacherInput, WorkGroupUncheckedCreateWithoutTeacherInput> | WorkGroupCreateWithoutTeacherInput[] | WorkGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutTeacherInput | WorkGroupCreateOrConnectWithoutTeacherInput[]
    createMany?: WorkGroupCreateManyTeacherInputEnvelope
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
  }

  export type GroupFeedbackUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GroupFeedbackCreateWithoutTeacherInput, GroupFeedbackUncheckedCreateWithoutTeacherInput> | GroupFeedbackCreateWithoutTeacherInput[] | GroupFeedbackUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutTeacherInput | GroupFeedbackCreateOrConnectWithoutTeacherInput[]
    createMany?: GroupFeedbackCreateManyTeacherInputEnvelope
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
  }

  export type WorkGroupUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<WorkGroupCreateWithoutTeacherInput, WorkGroupUncheckedCreateWithoutTeacherInput> | WorkGroupCreateWithoutTeacherInput[] | WorkGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutTeacherInput | WorkGroupCreateOrConnectWithoutTeacherInput[]
    createMany?: WorkGroupCreateManyTeacherInputEnvelope
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type GroupFeedbackUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GroupFeedbackCreateWithoutTeacherInput, GroupFeedbackUncheckedCreateWithoutTeacherInput> | GroupFeedbackCreateWithoutTeacherInput[] | GroupFeedbackUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutTeacherInput | GroupFeedbackCreateOrConnectWithoutTeacherInput[]
    upsert?: GroupFeedbackUpsertWithWhereUniqueWithoutTeacherInput | GroupFeedbackUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GroupFeedbackCreateManyTeacherInputEnvelope
    set?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    disconnect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    delete?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    update?: GroupFeedbackUpdateWithWhereUniqueWithoutTeacherInput | GroupFeedbackUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GroupFeedbackUpdateManyWithWhereWithoutTeacherInput | GroupFeedbackUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GroupFeedbackScalarWhereInput | GroupFeedbackScalarWhereInput[]
  }

  export type WorkGroupUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<WorkGroupCreateWithoutTeacherInput, WorkGroupUncheckedCreateWithoutTeacherInput> | WorkGroupCreateWithoutTeacherInput[] | WorkGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutTeacherInput | WorkGroupCreateOrConnectWithoutTeacherInput[]
    upsert?: WorkGroupUpsertWithWhereUniqueWithoutTeacherInput | WorkGroupUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: WorkGroupCreateManyTeacherInputEnvelope
    set?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    disconnect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    delete?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    update?: WorkGroupUpdateWithWhereUniqueWithoutTeacherInput | WorkGroupUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: WorkGroupUpdateManyWithWhereWithoutTeacherInput | WorkGroupUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: WorkGroupScalarWhereInput | WorkGroupScalarWhereInput[]
  }

  export type GroupFeedbackUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GroupFeedbackCreateWithoutTeacherInput, GroupFeedbackUncheckedCreateWithoutTeacherInput> | GroupFeedbackCreateWithoutTeacherInput[] | GroupFeedbackUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutTeacherInput | GroupFeedbackCreateOrConnectWithoutTeacherInput[]
    upsert?: GroupFeedbackUpsertWithWhereUniqueWithoutTeacherInput | GroupFeedbackUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GroupFeedbackCreateManyTeacherInputEnvelope
    set?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    disconnect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    delete?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    update?: GroupFeedbackUpdateWithWhereUniqueWithoutTeacherInput | GroupFeedbackUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GroupFeedbackUpdateManyWithWhereWithoutTeacherInput | GroupFeedbackUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GroupFeedbackScalarWhereInput | GroupFeedbackScalarWhereInput[]
  }

  export type WorkGroupUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<WorkGroupCreateWithoutTeacherInput, WorkGroupUncheckedCreateWithoutTeacherInput> | WorkGroupCreateWithoutTeacherInput[] | WorkGroupUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutTeacherInput | WorkGroupCreateOrConnectWithoutTeacherInput[]
    upsert?: WorkGroupUpsertWithWhereUniqueWithoutTeacherInput | WorkGroupUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: WorkGroupCreateManyTeacherInputEnvelope
    set?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    disconnect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    delete?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    update?: WorkGroupUpdateWithWhereUniqueWithoutTeacherInput | WorkGroupUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: WorkGroupUpdateManyWithWhereWithoutTeacherInput | WorkGroupUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: WorkGroupScalarWhereInput | WorkGroupScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type TeacherCreateNestedOneWithoutGroupFeedbacksInput = {
    create?: XOR<TeacherCreateWithoutGroupFeedbacksInput, TeacherUncheckedCreateWithoutGroupFeedbacksInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutGroupFeedbacksInput
    connect?: TeacherWhereUniqueInput
  }

  export type WorkGroupCreateNestedOneWithoutGroupFeedbacksInput = {
    create?: XOR<WorkGroupCreateWithoutGroupFeedbacksInput, WorkGroupUncheckedCreateWithoutGroupFeedbacksInput>
    connectOrCreate?: WorkGroupCreateOrConnectWithoutGroupFeedbacksInput
    connect?: WorkGroupWhereUniqueInput
  }

  export type FeedbackResponseCreateNestedManyWithoutGroupFeedbackInput = {
    create?: XOR<FeedbackResponseCreateWithoutGroupFeedbackInput, FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput> | FeedbackResponseCreateWithoutGroupFeedbackInput[] | FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput | FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput[]
    createMany?: FeedbackResponseCreateManyGroupFeedbackInputEnvelope
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
  }

  export type FeedbackResponseUncheckedCreateNestedManyWithoutGroupFeedbackInput = {
    create?: XOR<FeedbackResponseCreateWithoutGroupFeedbackInput, FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput> | FeedbackResponseCreateWithoutGroupFeedbackInput[] | FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput | FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput[]
    createMany?: FeedbackResponseCreateManyGroupFeedbackInputEnvelope
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
  }

  export type EnumFeedbackStatusFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackStatus
  }

  export type TeacherUpdateOneRequiredWithoutGroupFeedbacksNestedInput = {
    create?: XOR<TeacherCreateWithoutGroupFeedbacksInput, TeacherUncheckedCreateWithoutGroupFeedbacksInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutGroupFeedbacksInput
    upsert?: TeacherUpsertWithoutGroupFeedbacksInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutGroupFeedbacksInput, TeacherUpdateWithoutGroupFeedbacksInput>, TeacherUncheckedUpdateWithoutGroupFeedbacksInput>
  }

  export type WorkGroupUpdateOneRequiredWithoutGroupFeedbacksNestedInput = {
    create?: XOR<WorkGroupCreateWithoutGroupFeedbacksInput, WorkGroupUncheckedCreateWithoutGroupFeedbacksInput>
    connectOrCreate?: WorkGroupCreateOrConnectWithoutGroupFeedbacksInput
    upsert?: WorkGroupUpsertWithoutGroupFeedbacksInput
    connect?: WorkGroupWhereUniqueInput
    update?: XOR<XOR<WorkGroupUpdateToOneWithWhereWithoutGroupFeedbacksInput, WorkGroupUpdateWithoutGroupFeedbacksInput>, WorkGroupUncheckedUpdateWithoutGroupFeedbacksInput>
  }

  export type FeedbackResponseUpdateManyWithoutGroupFeedbackNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutGroupFeedbackInput, FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput> | FeedbackResponseCreateWithoutGroupFeedbackInput[] | FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput | FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput[]
    upsert?: FeedbackResponseUpsertWithWhereUniqueWithoutGroupFeedbackInput | FeedbackResponseUpsertWithWhereUniqueWithoutGroupFeedbackInput[]
    createMany?: FeedbackResponseCreateManyGroupFeedbackInputEnvelope
    set?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    disconnect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    delete?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    update?: FeedbackResponseUpdateWithWhereUniqueWithoutGroupFeedbackInput | FeedbackResponseUpdateWithWhereUniqueWithoutGroupFeedbackInput[]
    updateMany?: FeedbackResponseUpdateManyWithWhereWithoutGroupFeedbackInput | FeedbackResponseUpdateManyWithWhereWithoutGroupFeedbackInput[]
    deleteMany?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
  }

  export type FeedbackResponseUncheckedUpdateManyWithoutGroupFeedbackNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutGroupFeedbackInput, FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput> | FeedbackResponseCreateWithoutGroupFeedbackInput[] | FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput[]
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput | FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput[]
    upsert?: FeedbackResponseUpsertWithWhereUniqueWithoutGroupFeedbackInput | FeedbackResponseUpsertWithWhereUniqueWithoutGroupFeedbackInput[]
    createMany?: FeedbackResponseCreateManyGroupFeedbackInputEnvelope
    set?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    disconnect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    delete?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    connect?: FeedbackResponseWhereUniqueInput | FeedbackResponseWhereUniqueInput[]
    update?: FeedbackResponseUpdateWithWhereUniqueWithoutGroupFeedbackInput | FeedbackResponseUpdateWithWhereUniqueWithoutGroupFeedbackInput[]
    updateMany?: FeedbackResponseUpdateManyWithWhereWithoutGroupFeedbackInput | FeedbackResponseUpdateManyWithWhereWithoutGroupFeedbackInput[]
    deleteMany?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
  }

  export type GroupFeedbackCreateNestedOneWithoutResponsesInput = {
    create?: XOR<GroupFeedbackCreateWithoutResponsesInput, GroupFeedbackUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutResponsesInput
    connect?: GroupFeedbackWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatorInput = {
    create?: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatorInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackResponsesAsEvaluatorInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatedInput = {
    create?: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatedInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackResponsesAsEvaluatedInput
    connect?: UserWhereUniqueInput
  }

  export type GroupFeedbackUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<GroupFeedbackCreateWithoutResponsesInput, GroupFeedbackUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutResponsesInput
    upsert?: GroupFeedbackUpsertWithoutResponsesInput
    connect?: GroupFeedbackWhereUniqueInput
    update?: XOR<XOR<GroupFeedbackUpdateToOneWithWhereWithoutResponsesInput, GroupFeedbackUpdateWithoutResponsesInput>, GroupFeedbackUncheckedUpdateWithoutResponsesInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatorNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatorInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackResponsesAsEvaluatorInput
    upsert?: UserUpsertWithoutFeedbackResponsesAsEvaluatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackResponsesAsEvaluatorInput, UserUpdateWithoutFeedbackResponsesAsEvaluatorInput>, UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatorInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatedNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatedInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackResponsesAsEvaluatedInput
    upsert?: UserUpsertWithoutFeedbackResponsesAsEvaluatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackResponsesAsEvaluatedInput, UserUpdateWithoutFeedbackResponsesAsEvaluatedInput>, UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatedInput>
  }

  export type StudentCreateNestedOneWithoutStudentPointsInput = {
    create?: XOR<StudentCreateWithoutStudentPointsInput, StudentUncheckedCreateWithoutStudentPointsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentPointsInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutStudentPointsNestedInput = {
    create?: XOR<StudentCreateWithoutStudentPointsInput, StudentUncheckedCreateWithoutStudentPointsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentPointsInput
    upsert?: StudentUpsertWithoutStudentPointsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentPointsInput, StudentUpdateWithoutStudentPointsInput>, StudentUncheckedUpdateWithoutStudentPointsInput>
  }

  export type CouponRedemptionCreateNestedManyWithoutCouponInput = {
    create?: XOR<CouponRedemptionCreateWithoutCouponInput, CouponRedemptionUncheckedCreateWithoutCouponInput> | CouponRedemptionCreateWithoutCouponInput[] | CouponRedemptionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutCouponInput | CouponRedemptionCreateOrConnectWithoutCouponInput[]
    createMany?: CouponRedemptionCreateManyCouponInputEnvelope
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
  }

  export type CouponRedemptionUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<CouponRedemptionCreateWithoutCouponInput, CouponRedemptionUncheckedCreateWithoutCouponInput> | CouponRedemptionCreateWithoutCouponInput[] | CouponRedemptionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutCouponInput | CouponRedemptionCreateOrConnectWithoutCouponInput[]
    createMany?: CouponRedemptionCreateManyCouponInputEnvelope
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
  }

  export type EnumCouponStatusFieldUpdateOperationsInput = {
    set?: $Enums.CouponStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CouponRedemptionUpdateManyWithoutCouponNestedInput = {
    create?: XOR<CouponRedemptionCreateWithoutCouponInput, CouponRedemptionUncheckedCreateWithoutCouponInput> | CouponRedemptionCreateWithoutCouponInput[] | CouponRedemptionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutCouponInput | CouponRedemptionCreateOrConnectWithoutCouponInput[]
    upsert?: CouponRedemptionUpsertWithWhereUniqueWithoutCouponInput | CouponRedemptionUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: CouponRedemptionCreateManyCouponInputEnvelope
    set?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    disconnect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    delete?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    update?: CouponRedemptionUpdateWithWhereUniqueWithoutCouponInput | CouponRedemptionUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: CouponRedemptionUpdateManyWithWhereWithoutCouponInput | CouponRedemptionUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: CouponRedemptionScalarWhereInput | CouponRedemptionScalarWhereInput[]
  }

  export type CouponRedemptionUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<CouponRedemptionCreateWithoutCouponInput, CouponRedemptionUncheckedCreateWithoutCouponInput> | CouponRedemptionCreateWithoutCouponInput[] | CouponRedemptionUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: CouponRedemptionCreateOrConnectWithoutCouponInput | CouponRedemptionCreateOrConnectWithoutCouponInput[]
    upsert?: CouponRedemptionUpsertWithWhereUniqueWithoutCouponInput | CouponRedemptionUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: CouponRedemptionCreateManyCouponInputEnvelope
    set?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    disconnect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    delete?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    connect?: CouponRedemptionWhereUniqueInput | CouponRedemptionWhereUniqueInput[]
    update?: CouponRedemptionUpdateWithWhereUniqueWithoutCouponInput | CouponRedemptionUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: CouponRedemptionUpdateManyWithWhereWithoutCouponInput | CouponRedemptionUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: CouponRedemptionScalarWhereInput | CouponRedemptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCouponRedemptionsInput = {
    create?: XOR<UserCreateWithoutCouponRedemptionsInput, UserUncheckedCreateWithoutCouponRedemptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponRedemptionsInput
    connect?: UserWhereUniqueInput
  }

  export type CouponCreateNestedOneWithoutRedemptionsInput = {
    create?: XOR<CouponCreateWithoutRedemptionsInput, CouponUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: CouponCreateOrConnectWithoutRedemptionsInput
    connect?: CouponWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCouponRedemptionsNestedInput = {
    create?: XOR<UserCreateWithoutCouponRedemptionsInput, UserUncheckedCreateWithoutCouponRedemptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCouponRedemptionsInput
    upsert?: UserUpsertWithoutCouponRedemptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCouponRedemptionsInput, UserUpdateWithoutCouponRedemptionsInput>, UserUncheckedUpdateWithoutCouponRedemptionsInput>
  }

  export type CouponUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: XOR<CouponCreateWithoutRedemptionsInput, CouponUncheckedCreateWithoutRedemptionsInput>
    connectOrCreate?: CouponCreateOrConnectWithoutRedemptionsInput
    upsert?: CouponUpsertWithoutRedemptionsInput
    connect?: CouponWhereUniqueInput
    update?: XOR<XOR<CouponUpdateToOneWithWhereWithoutRedemptionsInput, CouponUpdateWithoutRedemptionsInput>, CouponUncheckedUpdateWithoutRedemptionsInput>
  }

  export type WorkGroupCreateNestedManyWithoutSubjectInput = {
    create?: XOR<WorkGroupCreateWithoutSubjectInput, WorkGroupUncheckedCreateWithoutSubjectInput> | WorkGroupCreateWithoutSubjectInput[] | WorkGroupUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutSubjectInput | WorkGroupCreateOrConnectWithoutSubjectInput[]
    createMany?: WorkGroupCreateManySubjectInputEnvelope
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
  }

  export type WorkGroupUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<WorkGroupCreateWithoutSubjectInput, WorkGroupUncheckedCreateWithoutSubjectInput> | WorkGroupCreateWithoutSubjectInput[] | WorkGroupUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutSubjectInput | WorkGroupCreateOrConnectWithoutSubjectInput[]
    createMany?: WorkGroupCreateManySubjectInputEnvelope
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
  }

  export type WorkGroupUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<WorkGroupCreateWithoutSubjectInput, WorkGroupUncheckedCreateWithoutSubjectInput> | WorkGroupCreateWithoutSubjectInput[] | WorkGroupUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutSubjectInput | WorkGroupCreateOrConnectWithoutSubjectInput[]
    upsert?: WorkGroupUpsertWithWhereUniqueWithoutSubjectInput | WorkGroupUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: WorkGroupCreateManySubjectInputEnvelope
    set?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    disconnect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    delete?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    update?: WorkGroupUpdateWithWhereUniqueWithoutSubjectInput | WorkGroupUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: WorkGroupUpdateManyWithWhereWithoutSubjectInput | WorkGroupUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: WorkGroupScalarWhereInput | WorkGroupScalarWhereInput[]
  }

  export type WorkGroupUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<WorkGroupCreateWithoutSubjectInput, WorkGroupUncheckedCreateWithoutSubjectInput> | WorkGroupCreateWithoutSubjectInput[] | WorkGroupUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: WorkGroupCreateOrConnectWithoutSubjectInput | WorkGroupCreateOrConnectWithoutSubjectInput[]
    upsert?: WorkGroupUpsertWithWhereUniqueWithoutSubjectInput | WorkGroupUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: WorkGroupCreateManySubjectInputEnvelope
    set?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    disconnect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    delete?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    connect?: WorkGroupWhereUniqueInput | WorkGroupWhereUniqueInput[]
    update?: WorkGroupUpdateWithWhereUniqueWithoutSubjectInput | WorkGroupUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: WorkGroupUpdateManyWithWhereWithoutSubjectInput | WorkGroupUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: WorkGroupScalarWhereInput | WorkGroupScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutWorkGroupsInput = {
    create?: XOR<SubjectCreateWithoutWorkGroupsInput, SubjectUncheckedCreateWithoutWorkGroupsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutWorkGroupsInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutWorkGroupsInput = {
    create?: XOR<TeacherCreateWithoutWorkGroupsInput, TeacherUncheckedCreateWithoutWorkGroupsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutWorkGroupsInput
    connect?: TeacherWhereUniqueInput
  }

  export type WorkGroupMemberCreateNestedManyWithoutWorkGroupInput = {
    create?: XOR<WorkGroupMemberCreateWithoutWorkGroupInput, WorkGroupMemberUncheckedCreateWithoutWorkGroupInput> | WorkGroupMemberCreateWithoutWorkGroupInput[] | WorkGroupMemberUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutWorkGroupInput | WorkGroupMemberCreateOrConnectWithoutWorkGroupInput[]
    createMany?: WorkGroupMemberCreateManyWorkGroupInputEnvelope
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
  }

  export type GroupFeedbackCreateNestedManyWithoutWorkGroupInput = {
    create?: XOR<GroupFeedbackCreateWithoutWorkGroupInput, GroupFeedbackUncheckedCreateWithoutWorkGroupInput> | GroupFeedbackCreateWithoutWorkGroupInput[] | GroupFeedbackUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutWorkGroupInput | GroupFeedbackCreateOrConnectWithoutWorkGroupInput[]
    createMany?: GroupFeedbackCreateManyWorkGroupInputEnvelope
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
  }

  export type WorkGroupMemberUncheckedCreateNestedManyWithoutWorkGroupInput = {
    create?: XOR<WorkGroupMemberCreateWithoutWorkGroupInput, WorkGroupMemberUncheckedCreateWithoutWorkGroupInput> | WorkGroupMemberCreateWithoutWorkGroupInput[] | WorkGroupMemberUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutWorkGroupInput | WorkGroupMemberCreateOrConnectWithoutWorkGroupInput[]
    createMany?: WorkGroupMemberCreateManyWorkGroupInputEnvelope
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
  }

  export type GroupFeedbackUncheckedCreateNestedManyWithoutWorkGroupInput = {
    create?: XOR<GroupFeedbackCreateWithoutWorkGroupInput, GroupFeedbackUncheckedCreateWithoutWorkGroupInput> | GroupFeedbackCreateWithoutWorkGroupInput[] | GroupFeedbackUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutWorkGroupInput | GroupFeedbackCreateOrConnectWithoutWorkGroupInput[]
    createMany?: GroupFeedbackCreateManyWorkGroupInputEnvelope
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
  }

  export type SubjectUpdateOneRequiredWithoutWorkGroupsNestedInput = {
    create?: XOR<SubjectCreateWithoutWorkGroupsInput, SubjectUncheckedCreateWithoutWorkGroupsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutWorkGroupsInput
    upsert?: SubjectUpsertWithoutWorkGroupsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutWorkGroupsInput, SubjectUpdateWithoutWorkGroupsInput>, SubjectUncheckedUpdateWithoutWorkGroupsInput>
  }

  export type TeacherUpdateOneRequiredWithoutWorkGroupsNestedInput = {
    create?: XOR<TeacherCreateWithoutWorkGroupsInput, TeacherUncheckedCreateWithoutWorkGroupsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutWorkGroupsInput
    upsert?: TeacherUpsertWithoutWorkGroupsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutWorkGroupsInput, TeacherUpdateWithoutWorkGroupsInput>, TeacherUncheckedUpdateWithoutWorkGroupsInput>
  }

  export type WorkGroupMemberUpdateManyWithoutWorkGroupNestedInput = {
    create?: XOR<WorkGroupMemberCreateWithoutWorkGroupInput, WorkGroupMemberUncheckedCreateWithoutWorkGroupInput> | WorkGroupMemberCreateWithoutWorkGroupInput[] | WorkGroupMemberUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutWorkGroupInput | WorkGroupMemberCreateOrConnectWithoutWorkGroupInput[]
    upsert?: WorkGroupMemberUpsertWithWhereUniqueWithoutWorkGroupInput | WorkGroupMemberUpsertWithWhereUniqueWithoutWorkGroupInput[]
    createMany?: WorkGroupMemberCreateManyWorkGroupInputEnvelope
    set?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    disconnect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    delete?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    update?: WorkGroupMemberUpdateWithWhereUniqueWithoutWorkGroupInput | WorkGroupMemberUpdateWithWhereUniqueWithoutWorkGroupInput[]
    updateMany?: WorkGroupMemberUpdateManyWithWhereWithoutWorkGroupInput | WorkGroupMemberUpdateManyWithWhereWithoutWorkGroupInput[]
    deleteMany?: WorkGroupMemberScalarWhereInput | WorkGroupMemberScalarWhereInput[]
  }

  export type GroupFeedbackUpdateManyWithoutWorkGroupNestedInput = {
    create?: XOR<GroupFeedbackCreateWithoutWorkGroupInput, GroupFeedbackUncheckedCreateWithoutWorkGroupInput> | GroupFeedbackCreateWithoutWorkGroupInput[] | GroupFeedbackUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutWorkGroupInput | GroupFeedbackCreateOrConnectWithoutWorkGroupInput[]
    upsert?: GroupFeedbackUpsertWithWhereUniqueWithoutWorkGroupInput | GroupFeedbackUpsertWithWhereUniqueWithoutWorkGroupInput[]
    createMany?: GroupFeedbackCreateManyWorkGroupInputEnvelope
    set?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    disconnect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    delete?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    update?: GroupFeedbackUpdateWithWhereUniqueWithoutWorkGroupInput | GroupFeedbackUpdateWithWhereUniqueWithoutWorkGroupInput[]
    updateMany?: GroupFeedbackUpdateManyWithWhereWithoutWorkGroupInput | GroupFeedbackUpdateManyWithWhereWithoutWorkGroupInput[]
    deleteMany?: GroupFeedbackScalarWhereInput | GroupFeedbackScalarWhereInput[]
  }

  export type WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupNestedInput = {
    create?: XOR<WorkGroupMemberCreateWithoutWorkGroupInput, WorkGroupMemberUncheckedCreateWithoutWorkGroupInput> | WorkGroupMemberCreateWithoutWorkGroupInput[] | WorkGroupMemberUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: WorkGroupMemberCreateOrConnectWithoutWorkGroupInput | WorkGroupMemberCreateOrConnectWithoutWorkGroupInput[]
    upsert?: WorkGroupMemberUpsertWithWhereUniqueWithoutWorkGroupInput | WorkGroupMemberUpsertWithWhereUniqueWithoutWorkGroupInput[]
    createMany?: WorkGroupMemberCreateManyWorkGroupInputEnvelope
    set?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    disconnect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    delete?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    connect?: WorkGroupMemberWhereUniqueInput | WorkGroupMemberWhereUniqueInput[]
    update?: WorkGroupMemberUpdateWithWhereUniqueWithoutWorkGroupInput | WorkGroupMemberUpdateWithWhereUniqueWithoutWorkGroupInput[]
    updateMany?: WorkGroupMemberUpdateManyWithWhereWithoutWorkGroupInput | WorkGroupMemberUpdateManyWithWhereWithoutWorkGroupInput[]
    deleteMany?: WorkGroupMemberScalarWhereInput | WorkGroupMemberScalarWhereInput[]
  }

  export type GroupFeedbackUncheckedUpdateManyWithoutWorkGroupNestedInput = {
    create?: XOR<GroupFeedbackCreateWithoutWorkGroupInput, GroupFeedbackUncheckedCreateWithoutWorkGroupInput> | GroupFeedbackCreateWithoutWorkGroupInput[] | GroupFeedbackUncheckedCreateWithoutWorkGroupInput[]
    connectOrCreate?: GroupFeedbackCreateOrConnectWithoutWorkGroupInput | GroupFeedbackCreateOrConnectWithoutWorkGroupInput[]
    upsert?: GroupFeedbackUpsertWithWhereUniqueWithoutWorkGroupInput | GroupFeedbackUpsertWithWhereUniqueWithoutWorkGroupInput[]
    createMany?: GroupFeedbackCreateManyWorkGroupInputEnvelope
    set?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    disconnect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    delete?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    connect?: GroupFeedbackWhereUniqueInput | GroupFeedbackWhereUniqueInput[]
    update?: GroupFeedbackUpdateWithWhereUniqueWithoutWorkGroupInput | GroupFeedbackUpdateWithWhereUniqueWithoutWorkGroupInput[]
    updateMany?: GroupFeedbackUpdateManyWithWhereWithoutWorkGroupInput | GroupFeedbackUpdateManyWithWhereWithoutWorkGroupInput[]
    deleteMany?: GroupFeedbackScalarWhereInput | GroupFeedbackScalarWhereInput[]
  }

  export type WorkGroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<WorkGroupCreateWithoutMembersInput, WorkGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkGroupCreateOrConnectWithoutMembersInput
    connect?: WorkGroupWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutWorkGroupMembersInput = {
    create?: XOR<StudentCreateWithoutWorkGroupMembersInput, StudentUncheckedCreateWithoutWorkGroupMembersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutWorkGroupMembersInput
    connect?: StudentWhereUniqueInput
  }

  export type WorkGroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<WorkGroupCreateWithoutMembersInput, WorkGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkGroupCreateOrConnectWithoutMembersInput
    upsert?: WorkGroupUpsertWithoutMembersInput
    connect?: WorkGroupWhereUniqueInput
    update?: XOR<XOR<WorkGroupUpdateToOneWithWhereWithoutMembersInput, WorkGroupUpdateWithoutMembersInput>, WorkGroupUncheckedUpdateWithoutMembersInput>
  }

  export type StudentUpdateOneRequiredWithoutWorkGroupMembersNestedInput = {
    create?: XOR<StudentCreateWithoutWorkGroupMembersInput, StudentUncheckedCreateWithoutWorkGroupMembersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutWorkGroupMembersInput
    upsert?: StudentUpsertWithoutWorkGroupMembersInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutWorkGroupMembersInput, StudentUpdateWithoutWorkGroupMembersInput>, StudentUncheckedUpdateWithoutWorkGroupMembersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFeedbackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[]
    notIn?: $Enums.FeedbackStatus[]
    not?: NestedEnumFeedbackStatusFilter<$PrismaModel> | $Enums.FeedbackStatus
  }

  export type NestedEnumFeedbackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[]
    notIn?: $Enums.FeedbackStatus[]
    not?: NestedEnumFeedbackStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackStatusFilter<$PrismaModel>
    _max?: NestedEnumFeedbackStatusFilter<$PrismaModel>
  }

  export type NestedEnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[]
    notIn?: $Enums.CouponStatus[]
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[]
    notIn?: $Enums.CouponStatus[]
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    StudentPoints?: StudentPointsCreateNestedOneWithoutStudentInput
    WorkGroupMembers?: WorkGroupMemberCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    StudentPoints?: StudentPointsUncheckedCreateNestedOneWithoutStudentInput
    WorkGroupMembers?: WorkGroupMemberUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type TeacherCreateWithoutUserInput = {
    id?: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutTeacherInput
    WorkGroups?: WorkGroupCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutTeacherInput
    WorkGroups?: WorkGroupUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type FeedbackResponseCreateWithoutEvaluatorInput = {
    id?: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupFeedback: GroupFeedbackCreateNestedOneWithoutResponsesInput
    evaluated: UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatedInput
  }

  export type FeedbackResponseUncheckedCreateWithoutEvaluatorInput = {
    id?: string
    groupFeedbackId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseCreateOrConnectWithoutEvaluatorInput = {
    where: FeedbackResponseWhereUniqueInput
    create: XOR<FeedbackResponseCreateWithoutEvaluatorInput, FeedbackResponseUncheckedCreateWithoutEvaluatorInput>
  }

  export type FeedbackResponseCreateManyEvaluatorInputEnvelope = {
    data: FeedbackResponseCreateManyEvaluatorInput | FeedbackResponseCreateManyEvaluatorInput[]
  }

  export type FeedbackResponseCreateWithoutEvaluatedInput = {
    id?: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupFeedback: GroupFeedbackCreateNestedOneWithoutResponsesInput
    evaluator: UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatorInput
  }

  export type FeedbackResponseUncheckedCreateWithoutEvaluatedInput = {
    id?: string
    groupFeedbackId: string
    evaluatorId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseCreateOrConnectWithoutEvaluatedInput = {
    where: FeedbackResponseWhereUniqueInput
    create: XOR<FeedbackResponseCreateWithoutEvaluatedInput, FeedbackResponseUncheckedCreateWithoutEvaluatedInput>
  }

  export type FeedbackResponseCreateManyEvaluatedInputEnvelope = {
    data: FeedbackResponseCreateManyEvaluatedInput | FeedbackResponseCreateManyEvaluatedInput[]
  }

  export type CouponRedemptionCreateWithoutUserInput = {
    id?: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coupon: CouponCreateNestedOneWithoutRedemptionsInput
  }

  export type CouponRedemptionUncheckedCreateWithoutUserInput = {
    id?: string
    couponId: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponRedemptionCreateOrConnectWithoutUserInput = {
    where: CouponRedemptionWhereUniqueInput
    create: XOR<CouponRedemptionCreateWithoutUserInput, CouponRedemptionUncheckedCreateWithoutUserInput>
  }

  export type CouponRedemptionCreateManyUserInputEnvelope = {
    data: CouponRedemptionCreateManyUserInput | CouponRedemptionCreateManyUserInput[]
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StudentPoints?: StudentPointsUpdateOneWithoutStudentNestedInput
    WorkGroupMembers?: WorkGroupMemberUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StudentPoints?: StudentPointsUncheckedUpdateOneWithoutStudentNestedInput
    WorkGroupMembers?: WorkGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutTeacherNestedInput
    WorkGroups?: WorkGroupUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutTeacherNestedInput
    WorkGroups?: WorkGroupUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatorInput = {
    where: FeedbackResponseWhereUniqueInput
    update: XOR<FeedbackResponseUpdateWithoutEvaluatorInput, FeedbackResponseUncheckedUpdateWithoutEvaluatorInput>
    create: XOR<FeedbackResponseCreateWithoutEvaluatorInput, FeedbackResponseUncheckedCreateWithoutEvaluatorInput>
  }

  export type FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatorInput = {
    where: FeedbackResponseWhereUniqueInput
    data: XOR<FeedbackResponseUpdateWithoutEvaluatorInput, FeedbackResponseUncheckedUpdateWithoutEvaluatorInput>
  }

  export type FeedbackResponseUpdateManyWithWhereWithoutEvaluatorInput = {
    where: FeedbackResponseScalarWhereInput
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyWithoutEvaluatorInput>
  }

  export type FeedbackResponseScalarWhereInput = {
    AND?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
    OR?: FeedbackResponseScalarWhereInput[]
    NOT?: FeedbackResponseScalarWhereInput | FeedbackResponseScalarWhereInput[]
    id?: StringFilter<"FeedbackResponse"> | string
    groupFeedbackId?: StringFilter<"FeedbackResponse"> | string
    evaluatorId?: StringFilter<"FeedbackResponse"> | string
    evaluatedId?: StringFilter<"FeedbackResponse"> | string
    rating?: IntFilter<"FeedbackResponse"> | number
    justification?: StringFilter<"FeedbackResponse"> | string
    pointsAwarded?: IntFilter<"FeedbackResponse"> | number
    createdAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
  }

  export type FeedbackResponseUpsertWithWhereUniqueWithoutEvaluatedInput = {
    where: FeedbackResponseWhereUniqueInput
    update: XOR<FeedbackResponseUpdateWithoutEvaluatedInput, FeedbackResponseUncheckedUpdateWithoutEvaluatedInput>
    create: XOR<FeedbackResponseCreateWithoutEvaluatedInput, FeedbackResponseUncheckedCreateWithoutEvaluatedInput>
  }

  export type FeedbackResponseUpdateWithWhereUniqueWithoutEvaluatedInput = {
    where: FeedbackResponseWhereUniqueInput
    data: XOR<FeedbackResponseUpdateWithoutEvaluatedInput, FeedbackResponseUncheckedUpdateWithoutEvaluatedInput>
  }

  export type FeedbackResponseUpdateManyWithWhereWithoutEvaluatedInput = {
    where: FeedbackResponseScalarWhereInput
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyWithoutEvaluatedInput>
  }

  export type CouponRedemptionUpsertWithWhereUniqueWithoutUserInput = {
    where: CouponRedemptionWhereUniqueInput
    update: XOR<CouponRedemptionUpdateWithoutUserInput, CouponRedemptionUncheckedUpdateWithoutUserInput>
    create: XOR<CouponRedemptionCreateWithoutUserInput, CouponRedemptionUncheckedCreateWithoutUserInput>
  }

  export type CouponRedemptionUpdateWithWhereUniqueWithoutUserInput = {
    where: CouponRedemptionWhereUniqueInput
    data: XOR<CouponRedemptionUpdateWithoutUserInput, CouponRedemptionUncheckedUpdateWithoutUserInput>
  }

  export type CouponRedemptionUpdateManyWithWhereWithoutUserInput = {
    where: CouponRedemptionScalarWhereInput
    data: XOR<CouponRedemptionUpdateManyMutationInput, CouponRedemptionUncheckedUpdateManyWithoutUserInput>
  }

  export type CouponRedemptionScalarWhereInput = {
    AND?: CouponRedemptionScalarWhereInput | CouponRedemptionScalarWhereInput[]
    OR?: CouponRedemptionScalarWhereInput[]
    NOT?: CouponRedemptionScalarWhereInput | CouponRedemptionScalarWhereInput[]
    id?: StringFilter<"CouponRedemption"> | string
    userId?: StringFilter<"CouponRedemption"> | string
    couponId?: StringFilter<"CouponRedemption"> | string
    pointsSpent?: IntFilter<"CouponRedemption"> | number
    status?: StringFilter<"CouponRedemption"> | string
    redeemedAt?: DateTimeNullableFilter<"CouponRedemption"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"CouponRedemption"> | Date | string | null
    createdAt?: DateTimeFilter<"CouponRedemption"> | Date | string
    updatedAt?: DateTimeFilter<"CouponRedemption"> | Date | string
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type StudentPointsCreateWithoutStudentInput = {
    id?: string
    totalPoints?: number
    availablePoints?: number
    spentPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPointsUncheckedCreateWithoutStudentInput = {
    id?: string
    totalPoints?: number
    availablePoints?: number
    spentPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPointsCreateOrConnectWithoutStudentInput = {
    where: StudentPointsWhereUniqueInput
    create: XOR<StudentPointsCreateWithoutStudentInput, StudentPointsUncheckedCreateWithoutStudentInput>
  }

  export type WorkGroupMemberCreateWithoutStudentInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    workGroup: WorkGroupCreateNestedOneWithoutMembersInput
  }

  export type WorkGroupMemberUncheckedCreateWithoutStudentInput = {
    id?: string
    workGroupId: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupMemberCreateOrConnectWithoutStudentInput = {
    where: WorkGroupMemberWhereUniqueInput
    create: XOR<WorkGroupMemberCreateWithoutStudentInput, WorkGroupMemberUncheckedCreateWithoutStudentInput>
  }

  export type WorkGroupMemberCreateManyStudentInputEnvelope = {
    data: WorkGroupMemberCreateManyStudentInput | WorkGroupMemberCreateManyStudentInput[]
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentPointsUpsertWithoutStudentInput = {
    update: XOR<StudentPointsUpdateWithoutStudentInput, StudentPointsUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentPointsCreateWithoutStudentInput, StudentPointsUncheckedCreateWithoutStudentInput>
    where?: StudentPointsWhereInput
  }

  export type StudentPointsUpdateToOneWithWhereWithoutStudentInput = {
    where?: StudentPointsWhereInput
    data: XOR<StudentPointsUpdateWithoutStudentInput, StudentPointsUncheckedUpdateWithoutStudentInput>
  }

  export type StudentPointsUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    availablePoints?: IntFieldUpdateOperationsInput | number
    spentPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPoints?: IntFieldUpdateOperationsInput | number
    availablePoints?: IntFieldUpdateOperationsInput | number
    spentPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberUpsertWithWhereUniqueWithoutStudentInput = {
    where: WorkGroupMemberWhereUniqueInput
    update: XOR<WorkGroupMemberUpdateWithoutStudentInput, WorkGroupMemberUncheckedUpdateWithoutStudentInput>
    create: XOR<WorkGroupMemberCreateWithoutStudentInput, WorkGroupMemberUncheckedCreateWithoutStudentInput>
  }

  export type WorkGroupMemberUpdateWithWhereUniqueWithoutStudentInput = {
    where: WorkGroupMemberWhereUniqueInput
    data: XOR<WorkGroupMemberUpdateWithoutStudentInput, WorkGroupMemberUncheckedUpdateWithoutStudentInput>
  }

  export type WorkGroupMemberUpdateManyWithWhereWithoutStudentInput = {
    where: WorkGroupMemberScalarWhereInput
    data: XOR<WorkGroupMemberUpdateManyMutationInput, WorkGroupMemberUncheckedUpdateManyWithoutStudentInput>
  }

  export type WorkGroupMemberScalarWhereInput = {
    AND?: WorkGroupMemberScalarWhereInput | WorkGroupMemberScalarWhereInput[]
    OR?: WorkGroupMemberScalarWhereInput[]
    NOT?: WorkGroupMemberScalarWhereInput | WorkGroupMemberScalarWhereInput[]
    id?: StringFilter<"WorkGroupMember"> | string
    workGroupId?: StringFilter<"WorkGroupMember"> | string
    studentId?: StringFilter<"WorkGroupMember"> | string
    role?: StringFilter<"WorkGroupMember"> | string
    joinedAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    createdAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
    updatedAt?: DateTimeFilter<"WorkGroupMember"> | Date | string
  }

  export type UserCreateWithoutTeacherInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type GroupFeedbackCreateWithoutTeacherInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workGroup: WorkGroupCreateNestedOneWithoutGroupFeedbacksInput
    Responses?: FeedbackResponseCreateNestedManyWithoutGroupFeedbackInput
  }

  export type GroupFeedbackUncheckedCreateWithoutTeacherInput = {
    id?: string
    workGroupId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Responses?: FeedbackResponseUncheckedCreateNestedManyWithoutGroupFeedbackInput
  }

  export type GroupFeedbackCreateOrConnectWithoutTeacherInput = {
    where: GroupFeedbackWhereUniqueInput
    create: XOR<GroupFeedbackCreateWithoutTeacherInput, GroupFeedbackUncheckedCreateWithoutTeacherInput>
  }

  export type GroupFeedbackCreateManyTeacherInputEnvelope = {
    data: GroupFeedbackCreateManyTeacherInput | GroupFeedbackCreateManyTeacherInput[]
  }

  export type WorkGroupCreateWithoutTeacherInput = {
    id?: string
    name: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutWorkGroupsInput
    Members?: WorkGroupMemberCreateNestedManyWithoutWorkGroupInput
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    subjectId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: WorkGroupMemberUncheckedCreateNestedManyWithoutWorkGroupInput
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupCreateOrConnectWithoutTeacherInput = {
    where: WorkGroupWhereUniqueInput
    create: XOR<WorkGroupCreateWithoutTeacherInput, WorkGroupUncheckedCreateWithoutTeacherInput>
  }

  export type WorkGroupCreateManyTeacherInputEnvelope = {
    data: WorkGroupCreateManyTeacherInput | WorkGroupCreateManyTeacherInput[]
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupFeedbackUpsertWithWhereUniqueWithoutTeacherInput = {
    where: GroupFeedbackWhereUniqueInput
    update: XOR<GroupFeedbackUpdateWithoutTeacherInput, GroupFeedbackUncheckedUpdateWithoutTeacherInput>
    create: XOR<GroupFeedbackCreateWithoutTeacherInput, GroupFeedbackUncheckedCreateWithoutTeacherInput>
  }

  export type GroupFeedbackUpdateWithWhereUniqueWithoutTeacherInput = {
    where: GroupFeedbackWhereUniqueInput
    data: XOR<GroupFeedbackUpdateWithoutTeacherInput, GroupFeedbackUncheckedUpdateWithoutTeacherInput>
  }

  export type GroupFeedbackUpdateManyWithWhereWithoutTeacherInput = {
    where: GroupFeedbackScalarWhereInput
    data: XOR<GroupFeedbackUpdateManyMutationInput, GroupFeedbackUncheckedUpdateManyWithoutTeacherInput>
  }

  export type GroupFeedbackScalarWhereInput = {
    AND?: GroupFeedbackScalarWhereInput | GroupFeedbackScalarWhereInput[]
    OR?: GroupFeedbackScalarWhereInput[]
    NOT?: GroupFeedbackScalarWhereInput | GroupFeedbackScalarWhereInput[]
    id?: StringFilter<"GroupFeedback"> | string
    teacherId?: StringFilter<"GroupFeedback"> | string
    workGroupId?: StringFilter<"GroupFeedback"> | string
    title?: StringFilter<"GroupFeedback"> | string
    description?: StringNullableFilter<"GroupFeedback"> | string | null
    status?: EnumFeedbackStatusFilter<"GroupFeedback"> | $Enums.FeedbackStatus
    pointsPerResponse?: IntFilter<"GroupFeedback"> | number
    createdAt?: DateTimeFilter<"GroupFeedback"> | Date | string
    updatedAt?: DateTimeFilter<"GroupFeedback"> | Date | string
  }

  export type WorkGroupUpsertWithWhereUniqueWithoutTeacherInput = {
    where: WorkGroupWhereUniqueInput
    update: XOR<WorkGroupUpdateWithoutTeacherInput, WorkGroupUncheckedUpdateWithoutTeacherInput>
    create: XOR<WorkGroupCreateWithoutTeacherInput, WorkGroupUncheckedCreateWithoutTeacherInput>
  }

  export type WorkGroupUpdateWithWhereUniqueWithoutTeacherInput = {
    where: WorkGroupWhereUniqueInput
    data: XOR<WorkGroupUpdateWithoutTeacherInput, WorkGroupUncheckedUpdateWithoutTeacherInput>
  }

  export type WorkGroupUpdateManyWithWhereWithoutTeacherInput = {
    where: WorkGroupScalarWhereInput
    data: XOR<WorkGroupUpdateManyMutationInput, WorkGroupUncheckedUpdateManyWithoutTeacherInput>
  }

  export type WorkGroupScalarWhereInput = {
    AND?: WorkGroupScalarWhereInput | WorkGroupScalarWhereInput[]
    OR?: WorkGroupScalarWhereInput[]
    NOT?: WorkGroupScalarWhereInput | WorkGroupScalarWhereInput[]
    id?: StringFilter<"WorkGroup"> | string
    name?: StringFilter<"WorkGroup"> | string
    subjectId?: StringFilter<"WorkGroup"> | string
    teacherId?: StringFilter<"WorkGroup"> | string
    maxMembers?: IntFilter<"WorkGroup"> | number
    description?: StringNullableFilter<"WorkGroup"> | string | null
    isActive?: BoolFilter<"WorkGroup"> | boolean
    createdAt?: DateTimeFilter<"WorkGroup"> | Date | string
    updatedAt?: DateTimeFilter<"WorkGroup"> | Date | string
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeacherCreateWithoutGroupFeedbacksInput = {
    id?: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    WorkGroups?: WorkGroupCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutGroupFeedbacksInput = {
    id?: string
    userId: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkGroups?: WorkGroupUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutGroupFeedbacksInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutGroupFeedbacksInput, TeacherUncheckedCreateWithoutGroupFeedbacksInput>
  }

  export type WorkGroupCreateWithoutGroupFeedbacksInput = {
    id?: string
    name: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutWorkGroupsInput
    teacher: TeacherCreateNestedOneWithoutWorkGroupsInput
    Members?: WorkGroupMemberCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupUncheckedCreateWithoutGroupFeedbacksInput = {
    id?: string
    name: string
    subjectId: string
    teacherId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: WorkGroupMemberUncheckedCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupCreateOrConnectWithoutGroupFeedbacksInput = {
    where: WorkGroupWhereUniqueInput
    create: XOR<WorkGroupCreateWithoutGroupFeedbacksInput, WorkGroupUncheckedCreateWithoutGroupFeedbacksInput>
  }

  export type FeedbackResponseCreateWithoutGroupFeedbackInput = {
    id?: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluator: UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatorInput
    evaluated: UserCreateNestedOneWithoutFeedbackResponsesAsEvaluatedInput
  }

  export type FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput = {
    id?: string
    evaluatorId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseCreateOrConnectWithoutGroupFeedbackInput = {
    where: FeedbackResponseWhereUniqueInput
    create: XOR<FeedbackResponseCreateWithoutGroupFeedbackInput, FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput>
  }

  export type FeedbackResponseCreateManyGroupFeedbackInputEnvelope = {
    data: FeedbackResponseCreateManyGroupFeedbackInput | FeedbackResponseCreateManyGroupFeedbackInput[]
  }

  export type TeacherUpsertWithoutGroupFeedbacksInput = {
    update: XOR<TeacherUpdateWithoutGroupFeedbacksInput, TeacherUncheckedUpdateWithoutGroupFeedbacksInput>
    create: XOR<TeacherCreateWithoutGroupFeedbacksInput, TeacherUncheckedCreateWithoutGroupFeedbacksInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutGroupFeedbacksInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutGroupFeedbacksInput, TeacherUncheckedUpdateWithoutGroupFeedbacksInput>
  }

  export type TeacherUpdateWithoutGroupFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    WorkGroups?: WorkGroupUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutGroupFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkGroups?: WorkGroupUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type WorkGroupUpsertWithoutGroupFeedbacksInput = {
    update: XOR<WorkGroupUpdateWithoutGroupFeedbacksInput, WorkGroupUncheckedUpdateWithoutGroupFeedbacksInput>
    create: XOR<WorkGroupCreateWithoutGroupFeedbacksInput, WorkGroupUncheckedCreateWithoutGroupFeedbacksInput>
    where?: WorkGroupWhereInput
  }

  export type WorkGroupUpdateToOneWithWhereWithoutGroupFeedbacksInput = {
    where?: WorkGroupWhereInput
    data: XOR<WorkGroupUpdateWithoutGroupFeedbacksInput, WorkGroupUncheckedUpdateWithoutGroupFeedbacksInput>
  }

  export type WorkGroupUpdateWithoutGroupFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutWorkGroupsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutWorkGroupsNestedInput
    Members?: WorkGroupMemberUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateWithoutGroupFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupNestedInput
  }

  export type FeedbackResponseUpsertWithWhereUniqueWithoutGroupFeedbackInput = {
    where: FeedbackResponseWhereUniqueInput
    update: XOR<FeedbackResponseUpdateWithoutGroupFeedbackInput, FeedbackResponseUncheckedUpdateWithoutGroupFeedbackInput>
    create: XOR<FeedbackResponseCreateWithoutGroupFeedbackInput, FeedbackResponseUncheckedCreateWithoutGroupFeedbackInput>
  }

  export type FeedbackResponseUpdateWithWhereUniqueWithoutGroupFeedbackInput = {
    where: FeedbackResponseWhereUniqueInput
    data: XOR<FeedbackResponseUpdateWithoutGroupFeedbackInput, FeedbackResponseUncheckedUpdateWithoutGroupFeedbackInput>
  }

  export type FeedbackResponseUpdateManyWithWhereWithoutGroupFeedbackInput = {
    where: FeedbackResponseScalarWhereInput
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyWithoutGroupFeedbackInput>
  }

  export type GroupFeedbackCreateWithoutResponsesInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutGroupFeedbacksInput
    workGroup: WorkGroupCreateNestedOneWithoutGroupFeedbacksInput
  }

  export type GroupFeedbackUncheckedCreateWithoutResponsesInput = {
    id?: string
    teacherId: string
    workGroupId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupFeedbackCreateOrConnectWithoutResponsesInput = {
    where: GroupFeedbackWhereUniqueInput
    create: XOR<GroupFeedbackCreateWithoutResponsesInput, GroupFeedbackUncheckedCreateWithoutResponsesInput>
  }

  export type UserCreateWithoutFeedbackResponsesAsEvaluatorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput
    CouponRedemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackResponsesAsEvaluatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatorInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatorInput>
  }

  export type UserCreateWithoutFeedbackResponsesAsEvaluatedInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseCreateNestedManyWithoutEvaluatorInput
    CouponRedemptions?: CouponRedemptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatedInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput
    CouponRedemptions?: CouponRedemptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackResponsesAsEvaluatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatedInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatedInput>
  }

  export type GroupFeedbackUpsertWithoutResponsesInput = {
    update: XOR<GroupFeedbackUpdateWithoutResponsesInput, GroupFeedbackUncheckedUpdateWithoutResponsesInput>
    create: XOR<GroupFeedbackCreateWithoutResponsesInput, GroupFeedbackUncheckedCreateWithoutResponsesInput>
    where?: GroupFeedbackWhereInput
  }

  export type GroupFeedbackUpdateToOneWithWhereWithoutResponsesInput = {
    where?: GroupFeedbackWhereInput
    data: XOR<GroupFeedbackUpdateWithoutResponsesInput, GroupFeedbackUncheckedUpdateWithoutResponsesInput>
  }

  export type GroupFeedbackUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupFeedbacksNestedInput
    workGroup?: WorkGroupUpdateOneRequiredWithoutGroupFeedbacksNestedInput
  }

  export type GroupFeedbackUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutFeedbackResponsesAsEvaluatorInput = {
    update: XOR<UserUpdateWithoutFeedbackResponsesAsEvaluatorInput, UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatorInput>
    create: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatorInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackResponsesAsEvaluatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackResponsesAsEvaluatorInput, UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatorInput>
  }

  export type UserUpdateWithoutFeedbackResponsesAsEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput
    CouponRedemptions?: CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFeedbackResponsesAsEvaluatedInput = {
    update: XOR<UserUpdateWithoutFeedbackResponsesAsEvaluatedInput, UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatedInput>
    create: XOR<UserCreateWithoutFeedbackResponsesAsEvaluatedInput, UserUncheckedCreateWithoutFeedbackResponsesAsEvaluatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackResponsesAsEvaluatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackResponsesAsEvaluatedInput, UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatedInput>
  }

  export type UserUpdateWithoutFeedbackResponsesAsEvaluatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUpdateManyWithoutEvaluatorNestedInput
    CouponRedemptions?: CouponRedemptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackResponsesAsEvaluatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput
    CouponRedemptions?: CouponRedemptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudentCreateWithoutStudentPointsInput = {
    id?: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    WorkGroupMembers?: WorkGroupMemberCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentPointsInput = {
    id?: string
    userId: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkGroupMembers?: WorkGroupMemberUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentPointsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentPointsInput, StudentUncheckedCreateWithoutStudentPointsInput>
  }

  export type StudentUpsertWithoutStudentPointsInput = {
    update: XOR<StudentUpdateWithoutStudentPointsInput, StudentUncheckedUpdateWithoutStudentPointsInput>
    create: XOR<StudentCreateWithoutStudentPointsInput, StudentUncheckedCreateWithoutStudentPointsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentPointsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentPointsInput, StudentUncheckedUpdateWithoutStudentPointsInput>
  }

  export type StudentUpdateWithoutStudentPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    WorkGroupMembers?: WorkGroupMemberUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkGroupMembers?: WorkGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CouponRedemptionCreateWithoutCouponInput = {
    id?: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCouponRedemptionsInput
  }

  export type CouponRedemptionUncheckedCreateWithoutCouponInput = {
    id?: string
    userId: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponRedemptionCreateOrConnectWithoutCouponInput = {
    where: CouponRedemptionWhereUniqueInput
    create: XOR<CouponRedemptionCreateWithoutCouponInput, CouponRedemptionUncheckedCreateWithoutCouponInput>
  }

  export type CouponRedemptionCreateManyCouponInputEnvelope = {
    data: CouponRedemptionCreateManyCouponInput | CouponRedemptionCreateManyCouponInput[]
  }

  export type CouponRedemptionUpsertWithWhereUniqueWithoutCouponInput = {
    where: CouponRedemptionWhereUniqueInput
    update: XOR<CouponRedemptionUpdateWithoutCouponInput, CouponRedemptionUncheckedUpdateWithoutCouponInput>
    create: XOR<CouponRedemptionCreateWithoutCouponInput, CouponRedemptionUncheckedCreateWithoutCouponInput>
  }

  export type CouponRedemptionUpdateWithWhereUniqueWithoutCouponInput = {
    where: CouponRedemptionWhereUniqueInput
    data: XOR<CouponRedemptionUpdateWithoutCouponInput, CouponRedemptionUncheckedUpdateWithoutCouponInput>
  }

  export type CouponRedemptionUpdateManyWithWhereWithoutCouponInput = {
    where: CouponRedemptionScalarWhereInput
    data: XOR<CouponRedemptionUpdateManyMutationInput, CouponRedemptionUncheckedUpdateManyWithoutCouponInput>
  }

  export type UserCreateWithoutCouponRedemptionsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
    Teacher?: TeacherCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseCreateNestedManyWithoutEvaluatedInput
  }

  export type UserUncheckedCreateWithoutCouponRedemptionsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    profilePicture?: string | null
    lastLoginAt?: Date | string | null
    emailVerified?: boolean
    emailVerifiedAt?: Date | string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
    Teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatorInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedCreateNestedManyWithoutEvaluatedInput
  }

  export type UserCreateOrConnectWithoutCouponRedemptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCouponRedemptionsInput, UserUncheckedCreateWithoutCouponRedemptionsInput>
  }

  export type CouponCreateWithoutRedemptionsInput = {
    id?: string
    name: string
    description: string
    partnerName: string
    discount: string
    pointsCost: number
    image?: string | null
    status?: $Enums.CouponStatus
    maxRedemptions?: number | null
    currentRedemptions?: number
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutRedemptionsInput = {
    id?: string
    name: string
    description: string
    partnerName: string
    discount: string
    pointsCost: number
    image?: string | null
    status?: $Enums.CouponStatus
    maxRedemptions?: number | null
    currentRedemptions?: number
    validFrom?: Date | string | null
    validUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutRedemptionsInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutRedemptionsInput, CouponUncheckedCreateWithoutRedemptionsInput>
  }

  export type UserUpsertWithoutCouponRedemptionsInput = {
    update: XOR<UserUpdateWithoutCouponRedemptionsInput, UserUncheckedUpdateWithoutCouponRedemptionsInput>
    create: XOR<UserCreateWithoutCouponRedemptionsInput, UserUncheckedCreateWithoutCouponRedemptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCouponRedemptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCouponRedemptionsInput, UserUncheckedUpdateWithoutCouponRedemptionsInput>
  }

  export type UserUpdateWithoutCouponRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUpdateManyWithoutEvaluatedNestedInput
  }

  export type UserUncheckedUpdateWithoutCouponRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    Teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    FeedbackResponsesAsEvaluator?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatorNestedInput
    FeedbackResponsesAsEvaluated?: FeedbackResponseUncheckedUpdateManyWithoutEvaluatedNestedInput
  }

  export type CouponUpsertWithoutRedemptionsInput = {
    update: XOR<CouponUpdateWithoutRedemptionsInput, CouponUncheckedUpdateWithoutRedemptionsInput>
    create: XOR<CouponCreateWithoutRedemptionsInput, CouponUncheckedCreateWithoutRedemptionsInput>
    where?: CouponWhereInput
  }

  export type CouponUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: CouponWhereInput
    data: XOR<CouponUpdateWithoutRedemptionsInput, CouponUncheckedUpdateWithoutRedemptionsInput>
  }

  export type CouponUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    maxRedemptions?: NullableIntFieldUpdateOperationsInput | number | null
    currentRedemptions?: IntFieldUpdateOperationsInput | number
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutRedemptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partnerName?: StringFieldUpdateOperationsInput | string
    discount?: StringFieldUpdateOperationsInput | string
    pointsCost?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    maxRedemptions?: NullableIntFieldUpdateOperationsInput | number | null
    currentRedemptions?: IntFieldUpdateOperationsInput | number
    validFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    validUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupCreateWithoutSubjectInput = {
    id?: string
    name: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutWorkGroupsInput
    Members?: WorkGroupMemberCreateNestedManyWithoutWorkGroupInput
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupUncheckedCreateWithoutSubjectInput = {
    id?: string
    name: string
    teacherId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Members?: WorkGroupMemberUncheckedCreateNestedManyWithoutWorkGroupInput
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupCreateOrConnectWithoutSubjectInput = {
    where: WorkGroupWhereUniqueInput
    create: XOR<WorkGroupCreateWithoutSubjectInput, WorkGroupUncheckedCreateWithoutSubjectInput>
  }

  export type WorkGroupCreateManySubjectInputEnvelope = {
    data: WorkGroupCreateManySubjectInput | WorkGroupCreateManySubjectInput[]
  }

  export type WorkGroupUpsertWithWhereUniqueWithoutSubjectInput = {
    where: WorkGroupWhereUniqueInput
    update: XOR<WorkGroupUpdateWithoutSubjectInput, WorkGroupUncheckedUpdateWithoutSubjectInput>
    create: XOR<WorkGroupCreateWithoutSubjectInput, WorkGroupUncheckedCreateWithoutSubjectInput>
  }

  export type WorkGroupUpdateWithWhereUniqueWithoutSubjectInput = {
    where: WorkGroupWhereUniqueInput
    data: XOR<WorkGroupUpdateWithoutSubjectInput, WorkGroupUncheckedUpdateWithoutSubjectInput>
  }

  export type WorkGroupUpdateManyWithWhereWithoutSubjectInput = {
    where: WorkGroupScalarWhereInput
    data: XOR<WorkGroupUpdateManyMutationInput, WorkGroupUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SubjectCreateWithoutWorkGroupsInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUncheckedCreateWithoutWorkGroupsInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectCreateOrConnectWithoutWorkGroupsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutWorkGroupsInput, SubjectUncheckedCreateWithoutWorkGroupsInput>
  }

  export type TeacherCreateWithoutWorkGroupsInput = {
    id?: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutWorkGroupsInput = {
    id?: string
    userId: string
    registerNumber: string
    department?: string | null
    isApproved?: boolean
    approvedAt?: Date | string | null
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutWorkGroupsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutWorkGroupsInput, TeacherUncheckedCreateWithoutWorkGroupsInput>
  }

  export type WorkGroupMemberCreateWithoutWorkGroupInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutWorkGroupMembersInput
  }

  export type WorkGroupMemberUncheckedCreateWithoutWorkGroupInput = {
    id?: string
    studentId: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupMemberCreateOrConnectWithoutWorkGroupInput = {
    where: WorkGroupMemberWhereUniqueInput
    create: XOR<WorkGroupMemberCreateWithoutWorkGroupInput, WorkGroupMemberUncheckedCreateWithoutWorkGroupInput>
  }

  export type WorkGroupMemberCreateManyWorkGroupInputEnvelope = {
    data: WorkGroupMemberCreateManyWorkGroupInput | WorkGroupMemberCreateManyWorkGroupInput[]
  }

  export type GroupFeedbackCreateWithoutWorkGroupInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutGroupFeedbacksInput
    Responses?: FeedbackResponseCreateNestedManyWithoutGroupFeedbackInput
  }

  export type GroupFeedbackUncheckedCreateWithoutWorkGroupInput = {
    id?: string
    teacherId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Responses?: FeedbackResponseUncheckedCreateNestedManyWithoutGroupFeedbackInput
  }

  export type GroupFeedbackCreateOrConnectWithoutWorkGroupInput = {
    where: GroupFeedbackWhereUniqueInput
    create: XOR<GroupFeedbackCreateWithoutWorkGroupInput, GroupFeedbackUncheckedCreateWithoutWorkGroupInput>
  }

  export type GroupFeedbackCreateManyWorkGroupInputEnvelope = {
    data: GroupFeedbackCreateManyWorkGroupInput | GroupFeedbackCreateManyWorkGroupInput[]
  }

  export type SubjectUpsertWithoutWorkGroupsInput = {
    update: XOR<SubjectUpdateWithoutWorkGroupsInput, SubjectUncheckedUpdateWithoutWorkGroupsInput>
    create: XOR<SubjectCreateWithoutWorkGroupsInput, SubjectUncheckedCreateWithoutWorkGroupsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutWorkGroupsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutWorkGroupsInput, SubjectUncheckedUpdateWithoutWorkGroupsInput>
  }

  export type SubjectUpdateWithoutWorkGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateWithoutWorkGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUpsertWithoutWorkGroupsInput = {
    update: XOR<TeacherUpdateWithoutWorkGroupsInput, TeacherUncheckedUpdateWithoutWorkGroupsInput>
    create: XOR<TeacherCreateWithoutWorkGroupsInput, TeacherUncheckedCreateWithoutWorkGroupsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutWorkGroupsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutWorkGroupsInput, TeacherUncheckedUpdateWithoutWorkGroupsInput>
  }

  export type TeacherUpdateWithoutWorkGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutWorkGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type WorkGroupMemberUpsertWithWhereUniqueWithoutWorkGroupInput = {
    where: WorkGroupMemberWhereUniqueInput
    update: XOR<WorkGroupMemberUpdateWithoutWorkGroupInput, WorkGroupMemberUncheckedUpdateWithoutWorkGroupInput>
    create: XOR<WorkGroupMemberCreateWithoutWorkGroupInput, WorkGroupMemberUncheckedCreateWithoutWorkGroupInput>
  }

  export type WorkGroupMemberUpdateWithWhereUniqueWithoutWorkGroupInput = {
    where: WorkGroupMemberWhereUniqueInput
    data: XOR<WorkGroupMemberUpdateWithoutWorkGroupInput, WorkGroupMemberUncheckedUpdateWithoutWorkGroupInput>
  }

  export type WorkGroupMemberUpdateManyWithWhereWithoutWorkGroupInput = {
    where: WorkGroupMemberScalarWhereInput
    data: XOR<WorkGroupMemberUpdateManyMutationInput, WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupInput>
  }

  export type GroupFeedbackUpsertWithWhereUniqueWithoutWorkGroupInput = {
    where: GroupFeedbackWhereUniqueInput
    update: XOR<GroupFeedbackUpdateWithoutWorkGroupInput, GroupFeedbackUncheckedUpdateWithoutWorkGroupInput>
    create: XOR<GroupFeedbackCreateWithoutWorkGroupInput, GroupFeedbackUncheckedCreateWithoutWorkGroupInput>
  }

  export type GroupFeedbackUpdateWithWhereUniqueWithoutWorkGroupInput = {
    where: GroupFeedbackWhereUniqueInput
    data: XOR<GroupFeedbackUpdateWithoutWorkGroupInput, GroupFeedbackUncheckedUpdateWithoutWorkGroupInput>
  }

  export type GroupFeedbackUpdateManyWithWhereWithoutWorkGroupInput = {
    where: GroupFeedbackScalarWhereInput
    data: XOR<GroupFeedbackUpdateManyMutationInput, GroupFeedbackUncheckedUpdateManyWithoutWorkGroupInput>
  }

  export type WorkGroupCreateWithoutMembersInput = {
    id?: string
    name: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutWorkGroupsInput
    teacher: TeacherCreateNestedOneWithoutWorkGroupsInput
    GroupFeedbacks?: GroupFeedbackCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    subjectId: string
    teacherId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedCreateNestedManyWithoutWorkGroupInput
  }

  export type WorkGroupCreateOrConnectWithoutMembersInput = {
    where: WorkGroupWhereUniqueInput
    create: XOR<WorkGroupCreateWithoutMembersInput, WorkGroupUncheckedCreateWithoutMembersInput>
  }

  export type StudentCreateWithoutWorkGroupMembersInput = {
    id?: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutStudentInput
    StudentPoints?: StudentPointsCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutWorkGroupMembersInput = {
    id?: string
    userId: string
    registerNumber: string
    course: string
    semester: string
    institution?: string
    campus?: string | null
    totalPoints?: number
    level?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    StudentPoints?: StudentPointsUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutWorkGroupMembersInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutWorkGroupMembersInput, StudentUncheckedCreateWithoutWorkGroupMembersInput>
  }

  export type WorkGroupUpsertWithoutMembersInput = {
    update: XOR<WorkGroupUpdateWithoutMembersInput, WorkGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<WorkGroupCreateWithoutMembersInput, WorkGroupUncheckedCreateWithoutMembersInput>
    where?: WorkGroupWhereInput
  }

  export type WorkGroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: WorkGroupWhereInput
    data: XOR<WorkGroupUpdateWithoutMembersInput, WorkGroupUncheckedUpdateWithoutMembersInput>
  }

  export type WorkGroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutWorkGroupsNestedInput
    teacher?: TeacherUpdateOneRequiredWithoutWorkGroupsNestedInput
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutWorkGroupNestedInput
  }

  export type StudentUpsertWithoutWorkGroupMembersInput = {
    update: XOR<StudentUpdateWithoutWorkGroupMembersInput, StudentUncheckedUpdateWithoutWorkGroupMembersInput>
    create: XOR<StudentCreateWithoutWorkGroupMembersInput, StudentUncheckedCreateWithoutWorkGroupMembersInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutWorkGroupMembersInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutWorkGroupMembersInput, StudentUncheckedUpdateWithoutWorkGroupMembersInput>
  }

  export type StudentUpdateWithoutWorkGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    StudentPoints?: StudentPointsUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutWorkGroupMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    registerNumber?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    campus?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    StudentPoints?: StudentPointsUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type FeedbackResponseCreateManyEvaluatorInput = {
    id?: string
    groupFeedbackId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseCreateManyEvaluatedInput = {
    id?: string
    groupFeedbackId: string
    evaluatorId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponRedemptionCreateManyUserInput = {
    id?: string
    couponId: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseUpdateWithoutEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupFeedback?: GroupFeedbackUpdateOneRequiredWithoutResponsesNestedInput
    evaluated?: UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatedNestedInput
  }

  export type FeedbackResponseUncheckedUpdateWithoutEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupFeedbackId?: StringFieldUpdateOperationsInput | string
    evaluatedId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUncheckedUpdateManyWithoutEvaluatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupFeedbackId?: StringFieldUpdateOperationsInput | string
    evaluatedId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUpdateWithoutEvaluatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupFeedback?: GroupFeedbackUpdateOneRequiredWithoutResponsesNestedInput
    evaluator?: UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatorNestedInput
  }

  export type FeedbackResponseUncheckedUpdateWithoutEvaluatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupFeedbackId?: StringFieldUpdateOperationsInput | string
    evaluatorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUncheckedUpdateManyWithoutEvaluatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupFeedbackId?: StringFieldUpdateOperationsInput | string
    evaluatorId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupon?: CouponUpdateOneRequiredWithoutRedemptionsNestedInput
  }

  export type CouponRedemptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    couponId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberCreateManyStudentInput = {
    id?: string
    workGroupId: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupMemberUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workGroup?: WorkGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type WorkGroupMemberUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupFeedbackCreateManyTeacherInput = {
    id?: string
    workGroupId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupCreateManyTeacherInput = {
    id?: string
    name: string
    subjectId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupFeedbackUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workGroup?: WorkGroupUpdateOneRequiredWithoutGroupFeedbacksNestedInput
    Responses?: FeedbackResponseUpdateManyWithoutGroupFeedbackNestedInput
  }

  export type GroupFeedbackUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Responses?: FeedbackResponseUncheckedUpdateManyWithoutGroupFeedbackNestedInput
  }

  export type GroupFeedbackUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    workGroupId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutWorkGroupsNestedInput
    Members?: WorkGroupMemberUpdateManyWithoutWorkGroupNestedInput
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupNestedInput
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subjectId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseCreateManyGroupFeedbackInput = {
    id?: string
    evaluatorId: string
    evaluatedId: string
    rating: number
    justification: string
    pointsAwarded?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackResponseUpdateWithoutGroupFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluator?: UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatorNestedInput
    evaluated?: UserUpdateOneRequiredWithoutFeedbackResponsesAsEvaluatedNestedInput
  }

  export type FeedbackResponseUncheckedUpdateWithoutGroupFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluatorId?: StringFieldUpdateOperationsInput | string
    evaluatedId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUncheckedUpdateManyWithoutGroupFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    evaluatorId?: StringFieldUpdateOperationsInput | string
    evaluatedId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    justification?: StringFieldUpdateOperationsInput | string
    pointsAwarded?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionCreateManyCouponInput = {
    id?: string
    userId: string
    pointsSpent: number
    status?: string
    redeemedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponRedemptionUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCouponRedemptionsNestedInput
  }

  export type CouponRedemptionUncheckedUpdateWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponRedemptionUncheckedUpdateManyWithoutCouponInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    redeemedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupCreateManySubjectInput = {
    id?: string
    name: string
    teacherId: string
    maxMembers: number
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutWorkGroupsNestedInput
    Members?: WorkGroupMemberUpdateManyWithoutWorkGroupNestedInput
    GroupFeedbacks?: GroupFeedbackUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Members?: WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupNestedInput
    GroupFeedbacks?: GroupFeedbackUncheckedUpdateManyWithoutWorkGroupNestedInput
  }

  export type WorkGroupUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    maxMembers?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberCreateManyWorkGroupInput = {
    id?: string
    studentId: string
    role?: string
    joinedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupFeedbackCreateManyWorkGroupInput = {
    id?: string
    teacherId: string
    title: string
    description?: string | null
    status?: $Enums.FeedbackStatus
    pointsPerResponse?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkGroupMemberUpdateWithoutWorkGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutWorkGroupMembersNestedInput
  }

  export type WorkGroupMemberUncheckedUpdateWithoutWorkGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkGroupMemberUncheckedUpdateManyWithoutWorkGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupFeedbackUpdateWithoutWorkGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutGroupFeedbacksNestedInput
    Responses?: FeedbackResponseUpdateManyWithoutGroupFeedbackNestedInput
  }

  export type GroupFeedbackUncheckedUpdateWithoutWorkGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Responses?: FeedbackResponseUncheckedUpdateManyWithoutGroupFeedbackNestedInput
  }

  export type GroupFeedbackUncheckedUpdateManyWithoutWorkGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    pointsPerResponse?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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