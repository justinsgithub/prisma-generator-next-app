import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    genreId: z.literal(true).optional(),
  })
  .strict()

export const SeriesAvgAggregateInputObjectSchema = Schema
