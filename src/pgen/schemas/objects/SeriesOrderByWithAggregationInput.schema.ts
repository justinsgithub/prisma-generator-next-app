import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SeriesCountOrderByAggregateInputObjectSchema } from './SeriesCountOrderByAggregateInput.schema'
import { SeriesAvgOrderByAggregateInputObjectSchema } from './SeriesAvgOrderByAggregateInput.schema'
import { SeriesMaxOrderByAggregateInputObjectSchema } from './SeriesMaxOrderByAggregateInput.schema'
import { SeriesMinOrderByAggregateInputObjectSchema } from './SeriesMinOrderByAggregateInput.schema'
import { SeriesSumOrderByAggregateInputObjectSchema } from './SeriesSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    genreId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SeriesCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => SeriesAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SeriesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SeriesMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => SeriesSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const SeriesOrderByWithAggregationInputObjectSchema = Schema
