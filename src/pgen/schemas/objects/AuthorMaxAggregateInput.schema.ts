import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    twitter: z.literal(true).optional(),
    name: z.literal(true).optional(),
  })
  .strict()

export const AuthorMaxAggregateInputObjectSchema = Schema
