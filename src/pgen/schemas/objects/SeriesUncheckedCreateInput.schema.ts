import { z } from 'zod'
import { BookUncheckedCreateNestedManyWithoutSeriesInputObjectSchema } from './BookUncheckedCreateNestedManyWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    books: z.lazy(() => BookUncheckedCreateNestedManyWithoutSeriesInputObjectSchema).optional(),
    authorId: z.number(),
    genreId: z.number().optional().nullable(),
  })
  .strict()

export const SeriesUncheckedCreateInputObjectSchema = Schema
