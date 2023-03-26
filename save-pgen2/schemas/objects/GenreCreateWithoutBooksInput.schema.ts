import { z } from 'zod'
import { SeriesCreateNestedManyWithoutGenreInputObjectSchema } from './SeriesCreateNestedManyWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateWithoutBooksInput> = z
  .object({
    name: z.string(),
    series: z.lazy(() => SeriesCreateNestedManyWithoutGenreInputObjectSchema).optional(),
  })
  .strict()

export const GenreCreateWithoutBooksInputObjectSchema = Schema
