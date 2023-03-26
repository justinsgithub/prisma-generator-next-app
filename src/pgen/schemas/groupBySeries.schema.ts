import { z } from 'zod'
import { SeriesWhereInputObjectSchema } from './objects/SeriesWhereInput.schema'
import { SeriesOrderByWithAggregationInputObjectSchema } from './objects/SeriesOrderByWithAggregationInput.schema'
import { SeriesScalarWhereWithAggregatesInputObjectSchema } from './objects/SeriesScalarWhereWithAggregatesInput.schema'
import { SeriesScalarFieldEnumSchema } from './enums/SeriesScalarFieldEnum.schema'

export const SeriesGroupBySchema = z.object({
  where: SeriesWhereInputObjectSchema.optional(),
  orderBy: z.union([SeriesOrderByWithAggregationInputObjectSchema, SeriesOrderByWithAggregationInputObjectSchema.array()]).optional(),
  having: SeriesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SeriesScalarFieldEnumSchema),
})
