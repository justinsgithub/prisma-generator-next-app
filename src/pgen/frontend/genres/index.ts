import type { Prisma as P } from '@prisma/client'
import { PrismaApi, RequestFunction } from '../../pgen-types'

type PA<T, Null = never> = P.Prisma__GenreClient<T, Null>

// prettier-ignore
interface GenreFrontend {
  aggregate<A extends P.GenreAggregateArgs>(args: A, func: RequestFunction<A,'aggregate','Genre'>): Promise<P.GetGenreAggregateType<A>>
  create<A extends P.GenreCreateArgs>(args: A, func: RequestFunction<A,'create','Genre'>): Promise<PA<P.GenreGetPayload<A>[]>>
  delete<A extends P.GenreDeleteArgs>(args: A, func: RequestFunction<A,'delete','Genre'>): Promise<PA<P.GenreGetPayload<A>>>
  deleteMany<A extends P.GenreDeleteManyArgs>(args: A, func: RequestFunction<A,'deleteMany','Genre'>): Promise<P.BatchPayload>
  findFirst<A extends P.GenreFindFirstArgs>(args: A, func: RequestFunction<A,'findFirst','Genre'>): Promise<PA<P.GenreGetPayload<A> | null, null>>
  findFirstOrThrow<A extends P.GenreFindFirstOrThrowArgs>(args: A, func: RequestFunction<A,'findFirstOrThrow','Genre'>): Promise<PA<P.GenreGetPayload<A> | null, null>>
  findMany<A extends P.GenreFindManyArgs>(args: A, func: RequestFunction<A,'findMany','Genre'>): Promise<PA<P.GenreGetPayload<A>[]>>
  findUnique<A extends P.GenreFindUniqueArgs>(args: A, func: RequestFunction<A,'findUnique','Genre'>): Promise<PA<P.GenreGetPayload<A> | null, null>>
  findUniqueOrThrow<A extends P.GenreFindUniqueOrThrowArgs>(args: A, func: RequestFunction<A,'findUniqueOrThrow','Genre'>): Promise<PA<P.GenreGetPayload<A>>>
  groupBy<A extends P.GenreGroupByArgs>(args: A, func: RequestFunction<A,'groupBy','Genre'>): Promise<P.GetGenreGroupByPayload<A>> // TODO: Check
  update<A extends P.GenreUpdateArgs>(args: A, func: RequestFunction<A,'update','Genre'>): Promise<PA<P.GenreGetPayload<A>>> 
  updateMany<A extends P.GenreUpdateManyArgs>(args: A, func: RequestFunction<A,'updateMany','Genre'>): Promise<P.BatchPayload>
  upsert<A extends P.GenreUpsertArgs>(args: A, func: RequestFunction<A,'upsert','Genre'>): Promise<PA<P.GenreGetPayload<A>>>
}


export const genreFrontend: GenreFrontend = {
  async aggregate(args, func) {
    const url: PrismaApi<'aggregate', 'Genre'> = `/api/pgen/genres?op=aggregate&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async create(args, func) {
    const url: PrismaApi<'create', 'Genre'> = `/api/pgen/genres?op=create`
    return await func({ method: 'post', data: args, url })
  },
  async delete(args, func) {
    const url: PrismaApi<'delete', 'Genre'> = `/api/pgen/genres?op=delete`
    return await func({ method: 'delete', data: args, url })
  },
  async deleteMany(args, func) {
    const url: PrismaApi<'deleteMany', 'Genre'> = `/api/pgen/genres?op=deleteMany`
    return await func({ method: 'delete', data: args, url })
  },
  async findFirst(args, func) {
    const url: PrismaApi<'findFirst', 'Genre'> = `/api/pgen/genres?op=findFirst&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findFirstOrThrow(args, func) {
    const url: PrismaApi<'findFirstOrThrow', 'Genre'> = `/api/pgen/genres?op=findFirstOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findMany(args, func) {
    const url: PrismaApi<'findMany', 'Genre'> = `/api/pgen/genres?op=findMany&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUnique(args, func) {
    const url: PrismaApi<'findUnique', 'Genre'> = `/api/pgen/genres?op=findUnique&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUniqueOrThrow(args, func) {
    const url: PrismaApi<'findUniqueOrThrow', 'Genre'> = `/api/pgen/genres?op=findUniqueOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async groupBy(args, func) {
    const url: PrismaApi<'groupBy', 'Genre'> = `/api/pgen/genres?op=groupBy&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async update(args, func) {
    const url: PrismaApi<'update', 'Genre'> = `/api/pgen/genres?op=update`
    return await func({ method: 'put', data: args, url })
  },
  async updateMany(args, func) {
    const url: PrismaApi<'updateMany', 'Genre'> = `/api/pgen/genres?op=updateMany`
    return await func({ method: 'put', data: args, url })
  },
  async upsert(args, func) {
    const url: PrismaApi<'upsert', 'Genre'> = `/api/pgen/genres?op=upsert`
    return await func({ method: 'post', data: args, url })
  },
}
