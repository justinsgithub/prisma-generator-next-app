import { z } from 'zod'
import { BookCreateNestedManyWithoutSeriesInputObjectSchema } from './BookCreateNestedManyWithoutSeriesInput.schema'
import { AuthorCreateNestedOneWithoutSeriesInputObjectSchema } from './AuthorCreateNestedOneWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateWithoutGenreInput> = z
  .object({
    title: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutSeriesInputObjectSchema).optional(),
    Author: z.lazy(() => AuthorCreateNestedOneWithoutSeriesInputObjectSchema),
  })
  .strict()

export const SeriesCreateWithoutGenreInputObjectSchema = Schema
