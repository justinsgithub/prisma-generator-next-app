import { z } from 'zod'
import { MapSelectObjectSchema } from './objects/MapSelect.schema'
import { MapWhereUniqueInputObjectSchema } from './objects/MapWhereUniqueInput.schema'

export const MapDeleteOneSchema = z.object({ select: MapSelectObjectSchema.optional(), where: MapWhereUniqueInputObjectSchema })