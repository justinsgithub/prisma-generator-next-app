import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUncheckedCreateWithoutSeriesInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    published: z.date().optional(),
    authorId: z.number(),
    genreId: z.number(),
  })
  .strict()

export const BookUncheckedCreateWithoutSeriesInputObjectSchema = Schema
