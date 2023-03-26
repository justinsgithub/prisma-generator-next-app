import { z } from 'zod'
import { SeriesCreateWithoutAuthorInputObjectSchema } from './SeriesCreateWithoutAuthorInput.schema'
import { SeriesUncheckedCreateWithoutAuthorInputObjectSchema } from './SeriesUncheckedCreateWithoutAuthorInput.schema'
import { SeriesCreateOrConnectWithoutAuthorInputObjectSchema } from './SeriesCreateOrConnectWithoutAuthorInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUncheckedCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SeriesCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => SeriesCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => SeriesUncheckedCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => SeriesUncheckedCreateWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SeriesCreateOrConnectWithoutAuthorInputObjectSchema),
        z.lazy(() => SeriesCreateOrConnectWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    connect: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
  })
  .strict()

export const SeriesUncheckedCreateNestedManyWithoutAuthorInputObjectSchema = Schema
