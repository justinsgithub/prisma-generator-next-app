import type { Prisma as P } from '@prisma/client'
import { prisma } from '@/pgen/db'
import axios from 'axios'
import { z } from 'zod'
import { PrismaApi } from '../../pgen-types'
import {
  AuthorFindFirstSchema,
  AuthorFindManySchema,
  AuthorUpsertSchema,
  AuthorGroupBySchema,
  AuthorAggregateSchema,
  AuthorCreateOneSchema,
  AuthorDeleteOneSchema,
  AuthorUpdateOneSchema,
  AuthorDeleteManySchema,
  AuthorFindUniqueSchema,
  AuthorUpdateManySchema,
} from '../../schemas'
import {
  AuthorFindFirstSchemaT,
  AuthorFindManySchemaT,
  AuthorUpsertSchemaT,
  AuthorGroupBySchemaT,
  AuthorAggregateSchemaT,
  AuthorCreateOneSchemaT,
  AuthorDeleteOneSchemaT,
  AuthorUpdateOneSchemaT,
  AuthorDeleteManySchemaT,
  AuthorFindUniqueSchemaT,
  AuthorUpdateManySchemaT,
} from '../../schemas/schema-types'

type PA<T, Null = never> = P.Prisma__AuthorClient<T, Null>

/* const blah = prisma.author.aggregate */
/* const blah = prisma.author.create */
/* const blah = prisma.author.delete */
/* const blah = prisma.author.deleteMany */
/* const blah = prisma.author.findFirst */
/* const blah = prisma.author.findFirstOrThrow */
/* const blah = prisma.author.findMany */
/* const blah = prisma.author.findUnique */
/* const blah = prisma.author.findUniqueOrThrow */
/* const blah = prisma.author.groupBy */
/* const blah = prisma.author.update */
/* const blah = prisma.author.updateMany */
/* const blah = prisma.author.upsert */

// prettier-ignore
interface AuthorFrontend {
  aggregate<A extends AuthorAggregateSchemaT>(args: A): Promise<P.GetAuthorAggregateType<A>>
  create<A extends AuthorCreateOneSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A>[]>>
  delete<A extends AuthorDeleteOneSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A>>>
  deleteMany<A extends AuthorDeleteManySchemaT>(args: A): Promise<P.BatchPayload>
  findFirst<A extends AuthorFindFirstSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A> | null, null>>
  findFirstOrThrow<A extends AuthorFindFirstSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A> | null, null>>
  findMany<A extends AuthorFindManySchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A>[]>>
  findUnique<A extends AuthorFindUniqueSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A> | null, null>>
  findUniqueOrThrow<A extends AuthorFindUniqueSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A>>>
  groupBy<A extends AuthorGroupBySchemaT>(args: A): Promise<P.GetAuthorGroupByPayload<A>> // TODO: Check
  update<A extends AuthorUpdateOneSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A>>> 
  updateMany<A extends AuthorUpdateManySchemaT>(args: A): Promise<P.BatchPayload>
  upsert<A extends AuthorUpsertSchemaT>(args: A): Promise<PA<P.AuthorGetPayload<A>>>
}

export const authorFrontend: AuthorFrontend = {
  async aggregate(_args) {
    const args = AuthorAggregateSchema.parse(_args)
    const url: PrismaApi<'aggregate', 'Author'> = `/api/pgen/authors?op=aggregate&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async create(_args) {
    const args = AuthorCreateOneSchema.parse(_args)
    const url: PrismaApi<'create', 'Author'> = `/api/pgen/authors?op=create`
    const response = await axios.post(url, args)
    return response.data
  },
  async delete(_args) {
    const args = AuthorDeleteOneSchema.parse(_args)
    const url: PrismaApi<'delete', 'Author'> = `/api/pgen/authors?op=delete`
    const response = await axios.delete(url, {data: args})
    return response.data
  },
  async deleteMany(_args) {
    const args = AuthorDeleteManySchema.parse(_args)
    const url: PrismaApi<'deleteMany', 'Author'> = `/api/pgen/authors?op=deleteMany`
    const response = await axios.delete(url, {data: args})
    return response.data
  },
  async findFirst(_args) {
    const args = AuthorFindFirstSchema.parse(_args)
    const url: PrismaApi<'findFirst', 'Author'> = `/api/pgen/authors?op=findFirst&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async findFirstOrThrow(_args) {
    const args = AuthorFindFirstSchema.parse(_args)
    const url: PrismaApi<'findFirstOrThrow', 'Author'> = `/api/pgen/authors?op=findFirstOrThrow&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async findMany(_args) {
    const args = AuthorFindManySchema.parse(_args)
    const url: PrismaApi<'findMany', 'Author'> = `/api/pgen/authors?op=findMany&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async findUnique(_args) {
    const args = AuthorFindUniqueSchema.parse(_args)
    const url: PrismaApi<'findUnique', 'Author'> = `/api/pgen/authors?op=findUnique&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async findUniqueOrThrow(_args) {
    const args = AuthorFindUniqueSchema.parse(_args)
    const url: PrismaApi<'findUniqueOrThrow', 'Author'> = `/api/pgen/authors?op=findUniqueOrThrow&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async groupBy(_args) {
    const args = AuthorGroupBySchema.parse(_args)
    const url: PrismaApi<'groupBy', 'Author'> = `/api/pgen/authors?op=groupBy&args=${JSON.stringify(args)}`
    const response = await axios.get(url)
    return response.data
  },
  async update(_args) {
    const args = AuthorUpdateOneSchema.parse(_args)
    const url: PrismaApi<'update', 'Author'> = `/api/pgen/authors?op=update`
    const response = await axios.put(url, args)
    return response.data
  },
  async updateMany(_args) {
    const args = AuthorUpdateManySchema.parse(_args)
    const url: PrismaApi<'updateMany', 'Author'> = `/api/pgen/authors?op=updateMany`
    const response = await axios.put(url, args)
    return response.data
  },
  async upsert(_args) {
    const args = AuthorUpdateManySchema.parse(_args)
    const url: PrismaApi<'upsert', 'Author'> = `/api/pgen/authors?op=upsert`
    const response = await axios.put(url, args)
    return response.data
  },
}

/* export async function authorFindUnique<A extends MArgs>(args: A): Promise<MAuthorResponse<A>> { */
/*   const url: PrismaApiEndpoint = '/api/pgen/authors' */
/*   const authorArgs = AuthorFindManySchema.parse(args) */
/*   const response = await axios.get(url + `?op=findMany&args=${JSON.stringify(authorArgs)}`) */
/*   const data: MAuthorResponse<A> = response.data */
/*   return data */
/* } */

/* const author = await authorFrontend.authorFindFirst({ where: { name: 'justin' }, include: { books: true } }) */
/* const authors = await authorFrontend.authorFindMany({ where: { name: 'justin' }, include: { books: true } }) */
/* const author = await authorFindFirst({ where: { name: 'justin' }, include: { books: true } }) */
/* const authors = await authorFindMany({}) */
/* const authors = await authorFindFirst({ where: { name: 'justin' }, include: { books: true } }) */
/* const cauthor = await authorCreate({ data: { name: 'justin', email: 'blah' }, include: { authors: true } }) */
