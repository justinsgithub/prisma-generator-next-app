import type { Prisma as P } from '@prisma/client'
import { PrismaApi, RequestFunction } from '../../pgen-types'

type PA<T, Null = never> = P.Prisma__BookClient<T, Null>

// prettier-ignore
interface BookFrontend {
  aggregate<A extends P.BookAggregateArgs>(args: A, func: RequestFunction<A,'aggregate','Book'>): Promise<P.GetBookAggregateType<A>>
  create<A extends P.BookCreateArgs>(args: A, func: RequestFunction<A,'create','Book'>): Promise<PA<P.BookGetPayload<A>[]>>
  delete<A extends P.BookDeleteArgs>(args: A, func: RequestFunction<A,'delete','Book'>): Promise<PA<P.BookGetPayload<A>>>
  deleteMany<A extends P.BookDeleteManyArgs>(args: A, func: RequestFunction<A,'deleteMany','Book'>): Promise<P.BatchPayload>
  findFirst<A extends P.BookFindFirstArgs>(args: A, func: RequestFunction<A,'findFirst','Book'>): Promise<PA<P.BookGetPayload<A> | null, null>>
  findFirstOrThrow<A extends P.BookFindFirstOrThrowArgs>(args: A, func: RequestFunction<A,'findFirstOrThrow','Book'>): Promise<PA<P.BookGetPayload<A> | null, null>>
  findMany<A extends P.BookFindManyArgs>(args: A, func: RequestFunction<A,'findMany','Book'>): Promise<PA<P.BookGetPayload<A>[]>>
  findUnique<A extends P.BookFindUniqueArgs>(args: A, func: RequestFunction<A,'findUnique','Book'>): Promise<PA<P.BookGetPayload<A> | null, null>>
  findUniqueOrThrow<A extends P.BookFindUniqueOrThrowArgs>(args: A, func: RequestFunction<A,'findUniqueOrThrow','Book'>): Promise<PA<P.BookGetPayload<A>>>
  groupBy<A extends P.BookGroupByArgs>(args: A, func: RequestFunction<A,'groupBy','Book'>): Promise<P.GetBookGroupByPayload<A>> // TODO: Check
  update<A extends P.BookUpdateArgs>(args: A, func: RequestFunction<A,'update','Book'>): Promise<PA<P.BookGetPayload<A>>> 
  updateMany<A extends P.BookUpdateManyArgs>(args: A, func: RequestFunction<A,'updateMany','Book'>): Promise<P.BatchPayload>
  upsert<A extends P.BookUpsertArgs>(args: A, func: RequestFunction<A,'upsert','Book'>): Promise<PA<P.BookGetPayload<A>>>
}


export const bookFrontend: BookFrontend = {
  async aggregate(args, func) {
    const url: PrismaApi<'aggregate', 'Book'> = `/api/pgen/books?op=aggregate&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async create(args, func) {
    const url: PrismaApi<'create', 'Book'> = `/api/pgen/books?op=create`
    return await func({ method: 'post', data: args, url })
  },
  async delete(args, func) {
    const url: PrismaApi<'delete', 'Book'> = `/api/pgen/books?op=delete`
    return await func({ method: 'delete', data: args, url })
  },
  async deleteMany(args, func) {
    const url: PrismaApi<'deleteMany', 'Book'> = `/api/pgen/books?op=deleteMany`
    return await func({ method: 'delete', data: args, url })
  },
  async findFirst(args, func) {
    const url: PrismaApi<'findFirst', 'Book'> = `/api/pgen/books?op=findFirst&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findFirstOrThrow(args, func) {
    const url: PrismaApi<'findFirstOrThrow', 'Book'> = `/api/pgen/books?op=findFirstOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findMany(args, func) {
    const url: PrismaApi<'findMany', 'Book'> = `/api/pgen/books?op=findMany&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUnique(args, func) {
    const url: PrismaApi<'findUnique', 'Book'> = `/api/pgen/books?op=findUnique&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUniqueOrThrow(args, func) {
    const url: PrismaApi<'findUniqueOrThrow', 'Book'> = `/api/pgen/books?op=findUniqueOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async groupBy(args, func) {
    const url: PrismaApi<'groupBy', 'Book'> = `/api/pgen/books?op=groupBy&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async update(args, func) {
    const url: PrismaApi<'update', 'Book'> = `/api/pgen/books?op=update`
    return await func({ method: 'put', data: args, url })
  },
  async updateMany(args, func) {
    const url: PrismaApi<'updateMany', 'Book'> = `/api/pgen/books?op=updateMany`
    return await func({ method: 'put', data: args, url })
  },
  async upsert(args, func) {
    const url: PrismaApi<'upsert', 'Book'> = `/api/pgen/books?op=upsert`
    return await func({ method: 'post', data: args, url })
  },
}
