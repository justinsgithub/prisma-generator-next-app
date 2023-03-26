import { z } from 'zod'
import { MapSelectObjectSchema } from './objects/MapSelect.schema'
import { MapOrderByWithRelationInputObjectSchema } from './objects/MapOrderByWithRelationInput.schema'
import { MapWhereInputObjectSchema } from './objects/MapWhereInput.schema'
import { MapWhereUniqueInputObjectSchema } from './objects/MapWhereUniqueInput.schema'
import { MapScalarFieldEnumSchema } from './enums/MapScalarFieldEnum.schema'

export const MapFindFirstSchema = z.object({
  select: MapSelectObjectSchema.optional(),
  orderBy: z.union([MapOrderByWithRelationInputObjectSchema, MapOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: MapWhereInputObjectSchema.optional(),
  cursor: MapWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MapScalarFieldEnumSchema).optional(),
})
