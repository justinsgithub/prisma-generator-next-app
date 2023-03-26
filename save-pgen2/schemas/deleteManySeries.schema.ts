import { z } from 'zod'
import { SeriesWhereInputObjectSchema } from './objects/SeriesWhereInput.schema'

export const SeriesDeleteManySchema = z.object({ where: SeriesWhereInputObjectSchema.optional() })
