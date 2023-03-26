import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
  })
  .strict()

export const AuthorSumAggregateInputObjectSchema = Schema
