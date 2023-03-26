import { z } from 'zod'
import { SeriesSelectObjectSchema } from './objects/SeriesSelect.schema'
import { SeriesIncludeObjectSchema } from './objects/SeriesInclude.schema'
import { SeriesUpdateInputObjectSchema } from './objects/SeriesUpdateInput.schema'
import { SeriesUncheckedUpdateInputObjectSchema } from './objects/SeriesUncheckedUpdateInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './objects/SeriesWhereUniqueInput.schema'

export const SeriesUpdateOneSchema = z.object({
  select: SeriesSelectObjectSchema.optional(),
  include: SeriesIncludeObjectSchema.optional(),
  data: z.union([SeriesUpdateInputObjectSchema, SeriesUncheckedUpdateInputObjectSchema]),
  where: SeriesWhereUniqueInputObjectSchema,
})
