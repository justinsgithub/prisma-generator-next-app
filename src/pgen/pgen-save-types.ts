/* IMPORTANT: this file ***IS NOT SAFE*** to edit, will be overwritten every time "prisma generate" is ran */
import { ZodObject } from 'zod'
import type {Prisma} from '@prisma/client'

/*
  OPTIONS is standard HTTP method that returns 204 (No Content) with an "Allow" header containing allowed methods
  Allow: OPTIONS, PUT, POST
*/

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'CONNECT' | 'TRACE' | 'PATCH'

export type AllowedMethod = Exclude<HttpMethod, 'HEAD' | 'CONNECT' | 'TRACE' | 'PATCH'>

export type OpMethod = Exclude<AllowedMethod, 'OPTIONS'>


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
    exclude hidden models from prisma schema
*/
export type ModelName = Exclude<Prisma.ModelName, 'Note'>

export type ValidateOp = Exclude<ModelOp, 'findFirstOrThrow' | 'findUniqueOrThrow'>

export type ModelValidations = Record<ModelName, Record<ValidateOp, ZodObject<any>>>

export type PostOp = Extract<'create' | 'upsert', ModelOp>
export type GetOp = Exclude<ModelOp, PostOp | PutOp | DeleteOp>
export type PutOp = Extract<'update' | 'updateMany' | 'upsert', ModelOp>
export type DeleteOp = Extract<'delete' | 'deleteMany', ModelOp>

export type ModelFormattedNames = 'authors' | 'books' | 'series' | 'genres'

type PrismaEndpoint = Record<ModelName, `/api/pgen/${ModelFormattedNames}`>

interface ModelEndpoints extends PrismaEndpoint {
  'Author': '/api/pgen/authors'
  'Book': '/api/pgen/books'
  'Series': '/api/pgen/series'
  'Genre': '/api/pgen/genres'
}

export type PrismaApiOp<OP extends ModelOp, M extends ModelName> = `${ModelEndpoints[M]}?op=${OP}`

export type PrismaApi<OP extends ModelOp, M extends ModelName> = OP extends GetOp ? `${PrismaApiOp<OP, M>}&args=${string}` : PrismaApiOp<OP, M>

type RequestMethod<OP extends ModelOp> = OP extends 'upsert' ? 'post' | 'put' : OP extends GetOp ? 'get' : OP extends PutOp ? 'put' : OP extends DeleteOp ? 'delete' : 'post'

export type ReqFuncParams<A, OP extends ModelOp, M extends ModelName> = {
  data: A
  method: RequestMethod<OP>
  url: PrismaApi<OP, M>
}

export type RequestFunction<A, OP extends ModelOp, M extends ModelName> = (params: ReqFuncParams<A,OP,M>) => any

type OpMethodsType = Record<
  OpMethod,
  {
    all: PostOp[] | GetOp[] | PutOp[] | DeleteOp[]
    default: PostOp | GetOp | PutOp | DeleteOp
  }
>

export interface OpMethods extends OpMethodsType {
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
