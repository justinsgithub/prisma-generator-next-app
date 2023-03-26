import { z } from 'zod'
import { SeriesWhereInputObjectSchema } from './SeriesWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesRelationFilter> = z
  .object({
    is: z
      .lazy(() => SeriesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SeriesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const SeriesRelationFilterObjectSchema = Schema
