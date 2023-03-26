import { z } from 'zod'
import { BookUncheckedCreateNestedManyWithoutGenreInputObjectSchema } from './BookUncheckedCreateNestedManyWithoutGenreInput.schema'
import { SeriesUncheckedCreateNestedManyWithoutGenreInputObjectSchema } from './SeriesUncheckedCreateNestedManyWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    books: z.lazy(() => BookUncheckedCreateNestedManyWithoutGenreInputObjectSchema).optional(),
    series: z.lazy(() => SeriesUncheckedCreateNestedManyWithoutGenreInputObjectSchema).optional(),
  })
  .strict()

export const GenreUncheckedCreateInputObjectSchema = Schema
