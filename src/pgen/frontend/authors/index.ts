import type { Prisma as P } from '@prisma/client'
import { PrismaApi, RequestFunction } from '../../pgen-types'
type PC<T, Null = never> = P.Prisma__AuthorClient<T, Null>

// prettier-ignore
interface AuthorFrontend {
  aggregate<A extends P.AuthorAggregateArgs>(args: A, func: RequestFunction<A,'aggregate','Author'>): Promise<P.GetAuthorAggregateType<A>>
  create<A extends P.AuthorCreateArgs>(args: A, func: RequestFunction<A,'create','Author'>): Promise<PC<P.AuthorGetPayload<A>[]>>
  delete<A extends P.AuthorDeleteArgs>(args: A, func: RequestFunction<A,'delete','Author'>): Promise<PC<P.AuthorGetPayload<A>>>
  deleteMany<A extends P.AuthorDeleteManyArgs>(args: A, func: RequestFunction<A,'deleteMany','Author'>): Promise<P.BatchPayload>
  findFirst<A extends P.AuthorFindFirstArgs>(args: A, func: RequestFunction<A,'findFirst','Author'>): Promise<PC<P.AuthorGetPayload<A> | null, null>>
  findFirstOrThrow<A extends P.AuthorFindFirstOrThrowArgs>(args: A, func: RequestFunction<A,'findFirstOrThrow','Author'>): Promise<PC<P.AuthorGetPayload<A> | null, null>>
  findMany<A extends P.AuthorFindManyArgs>(args: A, func: RequestFunction<A,'findMany','Author'>): Promise<PC<P.AuthorGetPayload<A>[]>>
  findUnique<A extends P.AuthorFindUniqueArgs>(args: A, func: RequestFunction<A,'findUnique','Author'>): Promise<PC<P.AuthorGetPayload<A> | null, null>>
  findUniqueOrThrow<A extends P.AuthorFindUniqueOrThrowArgs>(args: A, func: RequestFunction<A,'findUniqueOrThrow','Author'>): Promise<PC<P.AuthorGetPayload<A>>>
  groupBy<A extends P.AuthorGroupByArgs>(args: A, func: RequestFunction<A,'groupBy','Author'>): Promise<P.GetAuthorGroupByPayload<A>> // TODO: Check
  update<A extends P.AuthorUpdateArgs>(args: A, func: RequestFunction<A,'update','Author'>): Promise<PC<P.AuthorGetPayload<A>>> 
  updateMany<A extends P.AuthorUpdateManyArgs>(args: A, func: RequestFunction<A,'updateMany','Author'>): Promise<P.BatchPayload>
  upsert<A extends P.AuthorUpsertArgs>(args: A, func: RequestFunction<A,'upsert','Author'>): Promise<PC<P.AuthorGetPayload<A>>>
}

export const authorFrontend: AuthorFrontend = {
  async aggregate(args, func) {
    const url: PrismaApi<'aggregate', 'Author'> = `/api/pgen/authors?op=aggregate&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async create(args, func) {
    const url: PrismaApi<'create', 'Author'> = `/api/pgen/authors?op=create`
    return await func({ method: 'post', data: args, url })
  },
  async delete(args, func) {
    const url: PrismaApi<'delete', 'Author'> = `/api/pgen/authors?op=delete`
    return await func({ method: 'delete', data: args, url })
  },
  async deleteMany(args, func) {
    const url: PrismaApi<'deleteMany', 'Author'> = `/api/pgen/authors?op=deleteMany`
    return await func({ method: 'delete', data: args, url })
  },
  async findFirst(args, func) {
    const url: PrismaApi<'findFirst', 'Author'> = `/api/pgen/authors?op=findFirst&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findFirstOrThrow(args, func) {
    const url: PrismaApi<'findFirstOrThrow', 'Author'> = `/api/pgen/authors?op=findFirstOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findMany(args, func) {
    const url: PrismaApi<'findMany', 'Author'> = `/api/pgen/authors?op=findMany&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUnique(args, func) {
    const url: PrismaApi<'findUnique', 'Author'> = `/api/pgen/authors?op=findUnique&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUniqueOrThrow(args, func) {
    const url: PrismaApi<'findUniqueOrThrow', 'Author'> = `/api/pgen/authors?op=findUniqueOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async groupBy(args, func) {
    const url: PrismaApi<'groupBy', 'Author'> = `/api/pgen/authors?op=groupBy&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async update(args, func) {
    const url: PrismaApi<'update', 'Author'> = `/api/pgen/authors?op=update`
    return await func({ method: 'put', data: args, url })
  },
  async updateMany(args, func) {
    const url: PrismaApi<'updateMany', 'Author'> = `/api/pgen/authors?op=updateMany`
    return await func({ method: 'put', data: args, url })
  },
  async upsert(args, func) {
    const url: PrismaApi<'upsert', 'Author'> = `/api/pgen/authors?op=upsert`
    return await func({ method: 'post', data: args, url })
  },
}
