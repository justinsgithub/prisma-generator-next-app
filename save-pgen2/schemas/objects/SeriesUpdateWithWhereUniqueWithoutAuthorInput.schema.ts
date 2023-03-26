import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithoutAuthorInputObjectSchema } from './SeriesUpdateWithoutAuthorInput.schema'
import { SeriesUncheckedUpdateWithoutAuthorInputObjectSchema } from './SeriesUncheckedUpdateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => SeriesUpdateWithoutAuthorInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateWithoutAuthorInputObjectSchema)]),
  })
  .strict()

export const SeriesUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
