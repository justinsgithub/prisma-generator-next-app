import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    genreId: z.literal(true).optional(),
    seriesId: z.literal(true).optional(),
  })
  .strict()

export const BookAvgAggregateInputObjectSchema = Schema
