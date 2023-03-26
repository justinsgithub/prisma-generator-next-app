import { z } from 'zod'
import { SeriesSelectObjectSchema } from './SeriesSelect.schema'
import { SeriesIncludeObjectSchema } from './SeriesInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesArgs> = z
  .object({
    select: z.lazy(() => SeriesSelectObjectSchema).optional(),
    include: z.lazy(() => SeriesIncludeObjectSchema).optional(),
  })
  .strict()

export const SeriesArgsObjectSchema = Schema
