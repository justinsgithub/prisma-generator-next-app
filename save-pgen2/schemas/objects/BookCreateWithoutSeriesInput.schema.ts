import { z } from 'zod'
import { AuthorCreateNestedOneWithoutBooksInputObjectSchema } from './AuthorCreateNestedOneWithoutBooksInput.schema'
import { GenreCreateNestedOneWithoutBooksInputObjectSchema } from './GenreCreateNestedOneWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateWithoutSeriesInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    published: z.date().optional(),
    author: z.lazy(() => AuthorCreateNestedOneWithoutBooksInputObjectSchema),
    genre: z.lazy(() => GenreCreateNestedOneWithoutBooksInputObjectSchema),
  })
  .strict()

export const BookCreateWithoutSeriesInputObjectSchema = Schema
