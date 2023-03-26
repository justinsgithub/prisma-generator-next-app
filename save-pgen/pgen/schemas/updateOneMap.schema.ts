import { z } from 'zod'
import { MapSelectObjectSchema } from './objects/MapSelect.schema'
import { MapUpdateInputObjectSchema } from './objects/MapUpdateInput.schema'
import { MapUncheckedUpdateInputObjectSchema } from './objects/MapUncheckedUpdateInput.schema'
import { MapWhereUniqueInputObjectSchema } from './objects/MapWhereUniqueInput.schema'

export const MapUpdateOneSchema = z.object({
  select: MapSelectObjectSchema.optional(),
  data: z.union([MapUpdateInputObjectSchema, MapUncheckedUpdateInputObjectSchema]),
  where: MapWhereUniqueInputObjectSchema,
})
