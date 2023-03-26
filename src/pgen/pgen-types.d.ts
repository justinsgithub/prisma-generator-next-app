/* IMPORTANT: this file ***IS NOT SAFE*** to edit, will be overwritten every time "prisma generate" is ran */
import { ZodObject } from 'zod'
import type { Prisma } from '@prisma/client'

export type ModelOp =
  | 'aggregate'
  | 'create'
  | 'deleteMany'
  | 'delete'
  | 'findFirst'
  | 'findFirstOrThrow'
  | 'findMany'
  | 'findUnique'
  | 'findUniqueOrThrow'
  | 'groupBy'
  | 'updateMany'
  | 'update'
  | 'upsert'

/** 
  exclude hidden models from schema.prisma
*/
export type ModelName = Exclude<Prisma.ModelName, 'HiddenBook'>

export type ValidateOp = Exclude<ModelOp, 'findFirstOrThrow' | 'findUniqueOrThrow'>

export type ModelValidations = Record<ModelName, Record<ValidateOp, ZodType<any>>>

/*
  OPTIONS is standard HTTP method that returns 204 (No Content) with an "Allow" header containing allowed methods
  Allow: OPTIONS, PUT, POST
*/

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE' | 'PATCH'

type AllowedMethod = Exclude<HttpMethod, 'HEAD' | 'CONNECT' | 'TRACE' | 'PATCH'>

type OpMethod = Exclude<AllowedMethod, 'OPTIONS'>

type ModelFileName = 'authors' | 'series' | 'books' | 'genres'

type PrismaApiEndpoint = `/api/pgen/${ModelFileName}`

type _PrismaApiEndpoints = Record<ModelName, PrismaApiEndpoint>

interface PrismaApiEndpoints extends _PrismaApiEndpoints {
  'Author': '/api/pgen/authors',
  'Series': '/api/pgen/series',
  'Book': '/api/pgen/books',
  'Genre': '/api/pgen/genres',
}

export type PostOp = Extract<'create' | 'upsert', ModelOp>
export type GetOp = Exclude<ModelOp, PostOp | PutOp | DeleteOp>
export type PutOp = Extract<'update' | 'updateMany' | 'upsert', ModelOp>
export type DeleteOp = Extract<'delete' | 'deleteMany', ModelOp>

type PrismaApi<T extends ModelOp, M extends ModelName> = T extends GetOp ? `${PrismaApiEndpoints[M]}?op=${T}&args=${string}` : `${PrismaApiEndpoints[M]}?op=${T}`

type MethodOp = Record<
  OpMethod,
  {
    all: PostOp[] | GetOp[] | PutOp[] | DeleteOp[]
    default: PostOp | GetOp | PutOp | DeleteOp
  }
>

export interface MethodsOps extends MethodOp {
  POST: {
    all: PostOp[]
    default: PostOp
  }
  GET: {
    all: GetOp[]
    default: GetOp
  }
  PUT: {
    all: PutOp[]
    default: PutOp
  }
  DELETE: {
    all: DeleteOp[]
    default: DeleteOp
  }
}
