import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCountOutputTypeSelect> = z
  .object({
    books: z.boolean().optional(),
    series: z.boolean().optional(),
  })
  .strict()

export const GenreCountOutputTypeSelectObjectSchema = Schema
