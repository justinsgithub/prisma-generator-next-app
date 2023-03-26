import { z } from 'zod'
import { SeriesCreateWithoutAuthorInputObjectSchema } from './SeriesCreateWithoutAuthorInput.schema'
import { SeriesUncheckedCreateWithoutAuthorInputObjectSchema } from './SeriesUncheckedCreateWithoutAuthorInput.schema'
import { SeriesCreateOrConnectWithoutAuthorInputObjectSchema } from './SeriesCreateOrConnectWithoutAuthorInput.schema'
import { SeriesUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './SeriesUpsertWithWhereUniqueWithoutAuthorInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './SeriesUpdateWithWhereUniqueWithoutAuthorInput.schema'
import { SeriesUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './SeriesUpdateManyWithWhereWithoutAuthorInput.schema'
import { SeriesScalarWhereInputObjectSchema } from './SeriesScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateManyWithoutAuthorNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => SeriesUpsertWithWhereUniqueWithoutAuthorInputObjectSchema),
        z.lazy(() => SeriesUpsertWithWhereUniqueWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    set: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    update: z
      .union([
        z.lazy(() => SeriesUpdateWithWhereUniqueWithoutAuthorInputObjectSchema),
        z.lazy(() => SeriesUpdateWithWhereUniqueWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SeriesUpdateManyWithWhereWithoutAuthorInputObjectSchema),
        z.lazy(() => SeriesUpdateManyWithWhereWithoutAuthorInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z.union([z.lazy(() => SeriesScalarWhereInputObjectSchema), z.lazy(() => SeriesScalarWhereInputObjectSchema).array()]).optional(),
  })
  .strict()

export const SeriesUpdateManyWithoutAuthorNestedInputObjectSchema = Schema
