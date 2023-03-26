import { z } from 'zod'
import { MapSelectObjectSchema } from './objects/MapSelect.schema'
import { MapCreateInputObjectSchema } from './objects/MapCreateInput.schema'
import { MapUncheckedCreateInputObjectSchema } from './objects/MapUncheckedCreateInput.schema'

export const MapCreateOneSchema = z.object({
  select: MapSelectObjectSchema.optional(),
  data: z.union([MapCreateInputObjectSchema, MapUncheckedCreateInputObjectSchema]),
})
