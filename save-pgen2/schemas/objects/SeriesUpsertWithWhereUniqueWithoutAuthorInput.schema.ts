import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithoutAuthorInputObjectSchema } from './SeriesUpdateWithoutAuthorInput.schema'
import { SeriesUncheckedUpdateWithoutAuthorInputObjectSchema } from './SeriesUncheckedUpdateWithoutAuthorInput.schema'
import { SeriesCreateWithoutAuthorInputObjectSchema } from './SeriesCreateWithoutAuthorInput.schema'
import { SeriesUncheckedCreateWithoutAuthorInputObjectSchema } from './SeriesUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpsertWithWhereUniqueWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => SeriesUpdateWithoutAuthorInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateWithoutAuthorInputObjectSchema)]),
    create: z.union([z.lazy(() => SeriesCreateWithoutAuthorInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutAuthorInputObjectSchema)]),
  })
  .strict()

export const SeriesUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = Schema
