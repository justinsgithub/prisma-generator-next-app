import { z } from 'zod'
import { SeriesCreateWithoutGenreInputObjectSchema } from './SeriesCreateWithoutGenreInput.schema'
import { SeriesUncheckedCreateWithoutGenreInputObjectSchema } from './SeriesUncheckedCreateWithoutGenreInput.schema'
import { SeriesCreateOrConnectWithoutGenreInputObjectSchema } from './SeriesCreateOrConnectWithoutGenreInput.schema'
import { SeriesUpsertWithWhereUniqueWithoutGenreInputObjectSchema } from './SeriesUpsertWithWhereUniqueWithoutGenreInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithWhereUniqueWithoutGenreInputObjectSchema } from './SeriesUpdateWithWhereUniqueWithoutGenreInput.schema'
import { SeriesUpdateManyWithWhereWithoutGenreInputObjectSchema } from './SeriesUpdateManyWithWhereWithoutGenreInput.schema'
import { SeriesScalarWhereInputObjectSchema } from './SeriesScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUncheckedUpdateManyWithoutGenreNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SeriesCreateWithoutGenreInputObjectSchema),
        z.lazy(() => SeriesCreateWithoutGenreInputObjectSchema).array(),
        z.lazy(() => SeriesUncheckedCreateWithoutGenreInputObjectSchema),
        z.lazy(() => SeriesUncheckedCreateWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SeriesCreateOrConnectWithoutGenreInputObjectSchema),
        z.lazy(() => SeriesCreateOrConnectWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SeriesUpsertWithWhereUniqueWithoutGenreInputObjectSchema),
        z.lazy(() => SeriesUpsertWithWhereUniqueWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    set: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
    update: z
      .union([
        z.lazy(() => SeriesUpdateWithWhereUniqueWithoutGenreInputObjectSchema),
        z.lazy(() => SeriesUpdateWithWhereUniqueWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SeriesUpdateManyWithWhereWithoutGenreInputObjectSchema),
        z.lazy(() => SeriesUpdateManyWithWhereWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z.union([z.lazy(() => SeriesScalarWhereInputObjectSchema), z.lazy(() => SeriesScalarWhereInputObjectSchema).array()]).optional(),
  })
  .strict()

export const SeriesUncheckedUpdateManyWithoutGenreNestedInputObjectSchema = Schema
