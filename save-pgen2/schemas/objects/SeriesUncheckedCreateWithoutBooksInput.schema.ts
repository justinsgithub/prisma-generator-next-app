import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUncheckedCreateWithoutBooksInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    authorId: z.number(),
    genreId: z.number(),
  })
  .strict()

export const SeriesUncheckedCreateWithoutBooksInputObjectSchema = Schema
