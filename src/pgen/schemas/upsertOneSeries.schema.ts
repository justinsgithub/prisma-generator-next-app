import { z } from 'zod'
import { SeriesSelectObjectSchema } from './objects/SeriesSelect.schema'
import { SeriesIncludeObjectSchema } from './objects/SeriesInclude.schema'
import { SeriesWhereUniqueInputObjectSchema } from './objects/SeriesWhereUniqueInput.schema'
import { SeriesCreateInputObjectSchema } from './objects/SeriesCreateInput.schema'
import { SeriesUncheckedCreateInputObjectSchema } from './objects/SeriesUncheckedCreateInput.schema'
import { SeriesUpdateInputObjectSchema } from './objects/SeriesUpdateInput.schema'
import { SeriesUncheckedUpdateInputObjectSchema } from './objects/SeriesUncheckedUpdateInput.schema'

export const SeriesUpsertSchema = z.object({
  select: SeriesSelectObjectSchema.optional(),
  include: SeriesIncludeObjectSchema.optional(),
  where: SeriesWhereUniqueInputObjectSchema,
  create: z.union([SeriesCreateInputObjectSchema, SeriesUncheckedCreateInputObjectSchema]),
  update: z.union([SeriesUpdateInputObjectSchema, SeriesUncheckedUpdateInputObjectSchema]),
})
