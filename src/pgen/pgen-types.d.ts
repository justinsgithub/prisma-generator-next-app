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

type ModelFileName = 'users' | 'posts' | 'books' | 'maps'

type PrismaApiEndpoint = `/api/pgen/${ModelFileName}`
/*
modelApi = 
*/

type ModelEndpoint = Record<ModelName, Record<'endpoint', PrismaApiEndpoint>>

interface ModelsEndpoints extends ModelEndpoint {
  'Us': {
    endpoint: `api/pgen/users`
  }
  '': {
    endpoint: `api/pgen/users`
  }
  User: {
    endpoint: `api/pgen/users`
  }
  User: {
    endpoint: `api/pgen/users`
  }
}

type ModelNameRec<T extends ModelName> = Record<T>

const blah: ModelNameRec<'Map'> = { User: 'User' }

const blah2: ModelNameRec<'User'> = { User: 'User' }

type ModelRec<T extends ModelName> = T extends 'User' ? Record<T, Record> : ''

/* interface ModelApi implements ModelRec { */
/*   'User': {} */
/*   'Book': { } */
/*   'Post': { } */
/*   'Map': { } */
/* } */

export type PostOp = Extract<'create' | 'upsert', ModelOp>
export type GetOp = Exclude<ModelOp, PostOp | PutOp | DeleteOp>
export type PutOp = Extract<'update' | 'updateMany' | 'upsert', ModelOp>
export type DeleteOp = Extract<'delete' | 'deleteMany', ModelOp>

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
