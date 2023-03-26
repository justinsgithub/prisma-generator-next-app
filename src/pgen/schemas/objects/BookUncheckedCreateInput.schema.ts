import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    published: z.date().optional(),
    authorId: z.number(),
    genreId: z.number().optional().nullable(),
    seriesId: z.number().optional().nullable(),
  })
  .strict()

export const BookUncheckedCreateInputObjectSchema = Schema
