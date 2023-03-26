import type { Prisma } from '@prisma/client'
import { z } from 'zod'
import {
  UserUpsertSchema,
  UserGroupBySchema,
  UserFindManySchema,
  UserFindFirstSchema,
  UserCreateOneSchema,
  UserDeleteOneSchema,
  UserDeleteManySchema,
  UserAggregateSchema,
  UserUpdateOneSchema,
} from '../../schemas'
import { prisma } from '@/pgen'
import axios from 'axios'
import { PrismaApiEndpoint } from '../../pgen-types'

type Args = z.infer<typeof UserFindFirstSchema>
type CArgs = z.infer<typeof UserCreateOneSchema>

type UserResponse<A extends Args> = Awaited<Prisma.Prisma__UserClient<Prisma.UserGetPayload<A> | null, null>>
type CUserResponse<A extends Args> = Awaited<Prisma.Prisma__UserClient<Prisma.UserGetPayload<A>>>


export async function userFindFirst<A extends Args>(args: A): Promise<UserResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = UserFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: UserResponse<A> = response.data
  return data
}

export async function userCreate<A extends CArgs>(args: A): Promise<CUserResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = UserFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: CUserResponse<A> = response.data
  return data
}

export async function userFindMany<A extends CArgs>(args: A): Promise<UserResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = UserFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: UserResponse<A> = response.data
  return data
}

const user = await userFindFirst({ where: { name: 'justin' }, include: { books: true } })

const cuser = await userCreate({ data: { name: 'justin', email: 'blah' }, include: { books: true } })
