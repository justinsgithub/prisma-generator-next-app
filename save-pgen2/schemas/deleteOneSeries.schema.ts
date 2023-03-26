import { z } from 'zod'
import { SeriesSelectObjectSchema } from './objects/SeriesSelect.schema'
import { SeriesIncludeObjectSchema } from './objects/SeriesInclude.schema'
import { SeriesWhereUniqueInputObjectSchema } from './objects/SeriesWhereUniqueInput.schema'

export const SeriesDeleteOneSchema = z.object({
  select: SeriesSelectObjectSchema.optional(),
  include: SeriesIncludeObjectSchema.optional(),
  where: SeriesWhereUniqueInputObjectSchema,
})
