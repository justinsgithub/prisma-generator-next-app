import { z } from 'zod'
import { BookCreateNestedManyWithoutGenreInputObjectSchema } from './BookCreateNestedManyWithoutGenreInput.schema'
import { SeriesCreateNestedManyWithoutGenreInputObjectSchema } from './SeriesCreateNestedManyWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateInput> = z
  .object({
    name: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutGenreInputObjectSchema).optional(),
    series: z.lazy(() => SeriesCreateNestedManyWithoutGenreInputObjectSchema).optional(),
  })
  .strict()

export const GenreCreateInputObjectSchema = Schema
