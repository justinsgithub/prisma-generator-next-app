import { z } from 'zod'
import { BookUncheckedCreateNestedManyWithoutGenreInputObjectSchema } from './BookUncheckedCreateNestedManyWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUncheckedCreateWithoutSeriesInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    books: z.lazy(() => BookUncheckedCreateNestedManyWithoutGenreInputObjectSchema).optional(),
  })
  .strict()

export const GenreUncheckedCreateWithoutSeriesInputObjectSchema = Schema
