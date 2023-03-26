import { z } from 'zod'
import { SeriesUncheckedCreateNestedManyWithoutGenreInputObjectSchema } from './SeriesUncheckedCreateNestedManyWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUncheckedCreateWithoutBooksInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    series: z.lazy(() => SeriesUncheckedCreateNestedManyWithoutGenreInputObjectSchema).optional(),
  })
  .strict()

export const GenreUncheckedCreateWithoutBooksInputObjectSchema = Schema
