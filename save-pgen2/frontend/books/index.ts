import type { Book, Prisma } from '@prisma/client'
import { z } from 'zod'
import { BookFindFirstSchema } from '../../schemas'
import { prisma } from '@/pgen'
import axios from 'axios'
import { PrismaApiEndpoint } from '../../pgen-types'

type Args = z.infer<typeof BookFindFirstSchema>

type BookPayload<A extends Args> = Prisma.BookGetPayload<A>

type BookData<A extends Args> = Prisma.Prisma__BookClient<BookPayload<A> | null, null>

type BookResponse<A extends Args> = Awaited<BookData<A>>


async function bookFindFirst<A extends Args>(args: A): Promise<BookResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = BookFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(bookArgs)}`)
  const data: BookResponse<A> = response.data
  return data
}

async function bookFindMany<A extends Args>(args: A): Promise<BookResponse<A>> {
  const url: PrismaApiEndpoint = '/api/pgen/posts'
  const bookArgs = BookFindFirstSchema.parse(args)
  const response = await axios.get(url + `?args=${JSON.stringify(args)}`)
  const data: BookResponse<A> = response.data
  return data
}

const book = await bookFindFirst({include: {"author": true}})
