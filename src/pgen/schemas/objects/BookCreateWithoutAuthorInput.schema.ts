import { z } from 'zod'
import { GenreCreateNestedOneWithoutBooksInputObjectSchema } from './GenreCreateNestedOneWithoutBooksInput.schema'
import { SeriesCreateNestedOneWithoutBooksInputObjectSchema } from './SeriesCreateNestedOneWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateWithoutAuthorInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    published: z.date().optional(),
    genre: z.lazy(() => GenreCreateNestedOneWithoutBooksInputObjectSchema).optional(),
    series: z.lazy(() => SeriesCreateNestedOneWithoutBooksInputObjectSchema).optional(),
  })
  .strict()

export const BookCreateWithoutAuthorInputObjectSchema = Schema
