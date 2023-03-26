import { z } from 'zod'
import { AuthorCreateNestedOneWithoutBooksInputObjectSchema } from './AuthorCreateNestedOneWithoutBooksInput.schema'
import { GenreCreateNestedOneWithoutBooksInputObjectSchema } from './GenreCreateNestedOneWithoutBooksInput.schema'
import { SeriesCreateNestedOneWithoutBooksInputObjectSchema } from './SeriesCreateNestedOneWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    published: z.date().optional(),
    author: z.lazy(() => AuthorCreateNestedOneWithoutBooksInputObjectSchema),
    genre: z.lazy(() => GenreCreateNestedOneWithoutBooksInputObjectSchema),
    series: z.lazy(() => SeriesCreateNestedOneWithoutBooksInputObjectSchema).optional(),
  })
  .strict()

export const BookCreateInputObjectSchema = Schema
