import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    genreId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const SeriesCountOrderByAggregateInputObjectSchema = Schema
