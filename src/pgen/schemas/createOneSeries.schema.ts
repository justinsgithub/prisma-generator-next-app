import { z } from 'zod'
import { SeriesSelectObjectSchema } from './objects/SeriesSelect.schema'
import { SeriesIncludeObjectSchema } from './objects/SeriesInclude.schema'
import { SeriesCreateInputObjectSchema } from './objects/SeriesCreateInput.schema'
import { SeriesUncheckedCreateInputObjectSchema } from './objects/SeriesUncheckedCreateInput.schema'

export const SeriesCreateOneSchema = z.object({
  select: SeriesSelectObjectSchema.optional(),
  include: SeriesIncludeObjectSchema.optional(),
  data: z.union([SeriesCreateInputObjectSchema, SeriesUncheckedCreateInputObjectSchema]),
})
