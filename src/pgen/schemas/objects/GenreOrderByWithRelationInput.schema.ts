import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { BookOrderByRelationAggregateInputObjectSchema } from './BookOrderByRelationAggregateInput.schema'
import { SeriesOrderByRelationAggregateInputObjectSchema } from './SeriesOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    books: z.lazy(() => BookOrderByRelationAggregateInputObjectSchema).optional(),
    series: z.lazy(() => SeriesOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const GenreOrderByWithRelationInputObjectSchema = Schema
