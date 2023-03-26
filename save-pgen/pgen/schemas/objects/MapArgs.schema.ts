import { z } from 'zod'
import { MapSelectObjectSchema } from './MapSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.MapArgs> = z
  .object({
    select: z.lazy(() => MapSelectObjectSchema).optional(),
  })
  .strict()

export const MapArgsObjectSchema = Schema
