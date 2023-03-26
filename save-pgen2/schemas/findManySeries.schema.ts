import { z } from 'zod'
import { SeriesSelectObjectSchema } from './objects/SeriesSelect.schema'
import { SeriesIncludeObjectSchema } from './objects/SeriesInclude.schema'
import { SeriesOrderByWithRelationInputObjectSchema } from './objects/SeriesOrderByWithRelationInput.schema'
import { SeriesWhereInputObjectSchema } from './objects/SeriesWhereInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './objects/SeriesWhereUniqueInput.schema'
import { SeriesScalarFieldEnumSchema } from './enums/SeriesScalarFieldEnum.schema'

export const SeriesFindManySchema = z.object({
  select: z.lazy(() => SeriesSelectObjectSchema.optional()),
  include: z.lazy(() => SeriesIncludeObjectSchema.optional()),
  orderBy: z.union([SeriesOrderByWithRelationInputObjectSchema, SeriesOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: SeriesWhereInputObjectSchema.optional(),
  cursor: SeriesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SeriesScalarFieldEnumSchema).optional(),
})
