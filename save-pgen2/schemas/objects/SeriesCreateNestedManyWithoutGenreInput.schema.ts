import { z } from 'zod'
import { SeriesCreateWithoutGenreInputObjectSchema } from './SeriesCreateWithoutGenreInput.schema'
import { SeriesUncheckedCreateWithoutGenreInputObjectSchema } from './SeriesUncheckedCreateWithoutGenreInput.schema'
import { SeriesCreateOrConnectWithoutGenreInputObjectSchema } from './SeriesCreateOrConnectWithoutGenreInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateNestedManyWithoutGenreInput> = z
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
    connect: z.union([z.lazy(() => SeriesWhereUniqueInputObjectSchema), z.lazy(() => SeriesWhereUniqueInputObjectSchema).array()]).optional(),
  })
  .strict()

export const SeriesCreateNestedManyWithoutGenreInputObjectSchema = Schema
