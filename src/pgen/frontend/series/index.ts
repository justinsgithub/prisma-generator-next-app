import type { Prisma as P } from '@prisma/client'
import { PrismaApi, RequestFunction } from '../../pgen-types'

type PA<T, Null = never> = P.Prisma__SeriesClient<T, Null>

// prettier-ignore
interface SeriesFrontend {
  aggregate<A extends P.SeriesAggregateArgs>(args: A, func: RequestFunction<A,'aggregate','Series'>): Promise<P.GetSeriesAggregateType<A>>
  create<A extends P.SeriesCreateArgs>(args: A, func: RequestFunction<A,'create','Series'>): Promise<PA<P.SeriesGetPayload<A>[]>>
  delete<A extends P.SeriesDeleteArgs>(args: A, func: RequestFunction<A,'delete','Series'>): Promise<PA<P.SeriesGetPayload<A>>>
  deleteMany<A extends P.SeriesDeleteManyArgs>(args: A, func: RequestFunction<A,'deleteMany','Series'>): Promise<P.BatchPayload>
  findFirst<A extends P.SeriesFindFirstArgs>(args: A, func: RequestFunction<A,'findFirst','Series'>): Promise<PA<P.SeriesGetPayload<A> | null, null>>
  findFirstOrThrow<A extends P.SeriesFindFirstOrThrowArgs>(args: A, func: RequestFunction<A,'findFirstOrThrow','Series'>): Promise<PA<P.SeriesGetPayload<A> | null, null>>
  findMany<A extends P.SeriesFindManyArgs>(args: A, func: RequestFunction<A,'findMany','Series'>): Promise<PA<P.SeriesGetPayload<A>[]>>
  findUnique<A extends P.SeriesFindUniqueArgs>(args: A, func: RequestFunction<A,'findUnique','Series'>): Promise<PA<P.SeriesGetPayload<A> | null, null>>
  findUniqueOrThrow<A extends P.SeriesFindUniqueOrThrowArgs>(args: A, func: RequestFunction<A,'findUniqueOrThrow','Series'>): Promise<PA<P.SeriesGetPayload<A>>>
  groupBy<A extends P.SeriesGroupByArgs>(args: A, func: RequestFunction<A,'groupBy','Series'>): Promise<P.GetSeriesGroupByPayload<A>> // TODO: Check
  update<A extends P.SeriesUpdateArgs>(args: A, func: RequestFunction<A,'update','Series'>): Promise<PA<P.SeriesGetPayload<A>>> 
  updateMany<A extends P.SeriesUpdateManyArgs>(args: A, func: RequestFunction<A,'updateMany','Series'>): Promise<P.BatchPayload>
  upsert<A extends P.SeriesUpsertArgs>(args: A, func: RequestFunction<A,'upsert','Series'>): Promise<PA<P.SeriesGetPayload<A>>>
}


export const seriesFrontend: SeriesFrontend = {
  async aggregate(args, func) {
    const url: PrismaApi<'aggregate', 'Series'> = `/api/pgen/series?op=aggregate&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async create(args, func) {
    const url: PrismaApi<'create', 'Series'> = `/api/pgen/series?op=create`
    return await func({ method: 'post', data: args, url })
  },
  async delete(args, func) {
    const url: PrismaApi<'delete', 'Series'> = `/api/pgen/series?op=delete`
    return await func({ method: 'delete', data: args, url })
  },
  async deleteMany(args, func) {
    const url: PrismaApi<'deleteMany', 'Series'> = `/api/pgen/series?op=deleteMany`
    return await func({ method: 'delete', data: args, url })
  },
  async findFirst(args, func) {
    const url: PrismaApi<'findFirst', 'Series'> = `/api/pgen/series?op=findFirst&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findFirstOrThrow(args, func) {
    const url: PrismaApi<'findFirstOrThrow', 'Series'> = `/api/pgen/series?op=findFirstOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findMany(args, func) {
    const url: PrismaApi<'findMany', 'Series'> = `/api/pgen/series?op=findMany&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUnique(args, func) {
    const url: PrismaApi<'findUnique', 'Series'> = `/api/pgen/series?op=findUnique&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async findUniqueOrThrow(args, func) {
    const url: PrismaApi<'findUniqueOrThrow', 'Series'> = `/api/pgen/series?op=findUniqueOrThrow&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async groupBy(args, func) {
    const url: PrismaApi<'groupBy', 'Series'> = `/api/pgen/series?op=groupBy&args=${JSON.stringify(args)}`
    return await func({ method: 'get', data: args, url })
  },
  async update(args, func) {
    const url: PrismaApi<'update', 'Series'> = `/api/pgen/series?op=update`
    return await func({ method: 'put', data: args, url })
  },
  async updateMany(args, func) {
    const url: PrismaApi<'updateMany', 'Series'> = `/api/pgen/series?op=updateMany`
    return await func({ method: 'put', data: args, url })
  },
  async upsert(args, func) {
    const url: PrismaApi<'upsert', 'Series'> = `/api/pgen/series?op=upsert`
    return await func({ method: 'post', data: args, url })
  },
}

