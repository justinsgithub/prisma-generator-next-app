import { z } from 'zod'
import { BookUncheckedCreateNestedManyWithoutSeriesInputObjectSchema } from './BookUncheckedCreateNestedManyWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUncheckedCreateWithoutGenreInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    books: z.lazy(() => BookUncheckedCreateNestedManyWithoutSeriesInputObjectSchema).optional(),
    authorId: z.number(),
  })
  .strict()

export const SeriesUncheckedCreateWithoutGenreInputObjectSchema = Schema
