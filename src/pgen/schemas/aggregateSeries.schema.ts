import { z } from 'zod'
import { SeriesOrderByWithRelationInputObjectSchema } from './objects/SeriesOrderByWithRelationInput.schema'
import { SeriesWhereInputObjectSchema } from './objects/SeriesWhereInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './objects/SeriesWhereUniqueInput.schema'
import { SeriesCountAggregateInputObjectSchema } from './objects/SeriesCountAggregateInput.schema'
import { SeriesMinAggregateInputObjectSchema } from './objects/SeriesMinAggregateInput.schema'
import { SeriesMaxAggregateInputObjectSchema } from './objects/SeriesMaxAggregateInput.schema'
import { SeriesAvgAggregateInputObjectSchema } from './objects/SeriesAvgAggregateInput.schema'
import { SeriesSumAggregateInputObjectSchema } from './objects/SeriesSumAggregateInput.schema'

export const SeriesAggregateSchema = z.object({
  orderBy: z.union([SeriesOrderByWithRelationInputObjectSchema, SeriesOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: SeriesWhereInputObjectSchema.optional(),
  cursor: SeriesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), SeriesCountAggregateInputObjectSchema]).optional(),
  _min: SeriesMinAggregateInputObjectSchema.optional(),
  _max: SeriesMaxAggregateInputObjectSchema.optional(),
  _avg: SeriesAvgAggregateInputObjectSchema.optional(),
  _sum: SeriesSumAggregateInputObjectSchema.optional(),
})
