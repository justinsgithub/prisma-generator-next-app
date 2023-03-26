import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MapSelect> = z
  .object({
    key: z.boolean().optional(),
    value: z.boolean().optional(),
  })
  .strict()

export const MapSelectObjectSchema = Schema
