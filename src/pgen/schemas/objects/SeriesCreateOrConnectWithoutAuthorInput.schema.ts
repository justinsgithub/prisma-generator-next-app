import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesCreateWithoutAuthorInputObjectSchema } from './SeriesCreateWithoutAuthorInput.schema'
import { SeriesUncheckedCreateWithoutAuthorInputObjectSchema } from './SeriesUncheckedCreateWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => SeriesCreateWithoutAuthorInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutAuthorInputObjectSchema)]),
  })
  .strict()

export const SeriesCreateOrConnectWithoutAuthorInputObjectSchema = Schema
