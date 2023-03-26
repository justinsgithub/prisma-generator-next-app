import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    title: z.literal(true).optional(),
    published: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    genreId: z.literal(true).optional(),
    seriesId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const BookCountAggregateInputObjectSchema = Schema
