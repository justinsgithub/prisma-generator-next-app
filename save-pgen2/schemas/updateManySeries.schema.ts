import { z } from 'zod'
import { SeriesUpdateManyMutationInputObjectSchema } from './objects/SeriesUpdateManyMutationInput.schema'
import { SeriesWhereInputObjectSchema } from './objects/SeriesWhereInput.schema'

export const SeriesUpdateManySchema = z.object({ data: SeriesUpdateManyMutationInputObjectSchema, where: SeriesWhereInputObjectSchema.optional() })
