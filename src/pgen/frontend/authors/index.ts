import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import {
  AuthorUpsertSchema,
  AuthorGroupBySchema,
  AuthorFindManySchema,
  AuthorFindFirstSchema,
  AuthorCreateOneSchema,
  AuthorDeleteOneSchema,
  AuthorDeleteManySchema,
  AuthorAggregateSchema,
  AuthorUpdateOneSchema,
} from '../../schemas'
import { prisma } from '@/pgen'
import axios from 'axios'
import { PrismaApiEndpoint } from '../../pgen-types'

type Args = z.infer<typeof AuthorFindFirstSchema>
type CArgs = z.infer<typeof AuthorCreateOneSchema>

type AuthorResponse<A extends Args> = Awaited<Prisma.Prisma__AuthorClient<Prisma.AuthorGetPayload<A> | null, null>>
type CAuthorResponse<A extends Args> = Awaited<Prisma.Prisma__AuthorClient<Prisma.AuthorGetPayload<A>>>


export async function authorFindFirst<A extends Args>(args: A): Promise<AuthorResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = AuthorFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: AuthorResponse<A> = response.data
  return data
}

export async function authorCreate<A extends CArgs>(args: A): Promise<CAuthorResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = AuthorFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: CAuthorResponse<A> = response.data
  return data
}

export async function authorFindMany<A extends CArgs>(args: A): Promise<AuthorResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = AuthorFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: AuthorResponse<A> = response.data
  return data
}

const author = await authorFindFirst({ where: { name: 'justin' }, include: { books: true } })

const cauthor = await authorCreate({ data: { name: 'justin', email: 'blah' }, include: { books: true } })
