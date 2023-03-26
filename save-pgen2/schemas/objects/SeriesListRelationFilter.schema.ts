import { z } from 'zod'
import { SeriesWhereInputObjectSchema } from './SeriesWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesListRelationFilter> = z
  .object({
    every: z.lazy(() => SeriesWhereInputObjectSchema).optional(),
    some: z.lazy(() => SeriesWhereInputObjectSchema).optional(),
    none: z.lazy(() => SeriesWhereInputObjectSchema).optional(),
  })
  .strict()

export const SeriesListRelationFilterObjectSchema = Schema
