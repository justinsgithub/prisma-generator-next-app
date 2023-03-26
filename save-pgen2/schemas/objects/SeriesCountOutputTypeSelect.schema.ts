import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCountOutputTypeSelect> = z
  .object({
    books: z.boolean().optional(),
  })
  .strict()

export const SeriesCountOutputTypeSelectObjectSchema = Schema
