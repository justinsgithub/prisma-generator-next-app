import { z } from 'zod'
import { SeriesScalarWhereInputObjectSchema } from './SeriesScalarWhereInput.schema'
import { SeriesUpdateManyMutationInputObjectSchema } from './SeriesUpdateManyMutationInput.schema'
import { SeriesUncheckedUpdateManyWithoutSeriesInputObjectSchema } from './SeriesUncheckedUpdateManyWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateManyWithWhereWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => SeriesScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => SeriesUpdateManyMutationInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateManyWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const SeriesUpdateManyWithWhereWithoutAuthorInputObjectSchema = Schema
