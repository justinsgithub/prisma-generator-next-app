import { z } from 'zod'
import { SeriesCountOutputTypeSelectObjectSchema } from './SeriesCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => SeriesCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const SeriesCountOutputTypeArgsObjectSchema = Schema
