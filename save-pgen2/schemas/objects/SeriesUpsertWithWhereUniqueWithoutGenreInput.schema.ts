import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithoutGenreInputObjectSchema } from './SeriesUpdateWithoutGenreInput.schema'
import { SeriesUncheckedUpdateWithoutGenreInputObjectSchema } from './SeriesUncheckedUpdateWithoutGenreInput.schema'
import { SeriesCreateWithoutGenreInputObjectSchema } from './SeriesCreateWithoutGenreInput.schema'
import { SeriesUncheckedCreateWithoutGenreInputObjectSchema } from './SeriesUncheckedCreateWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpsertWithWhereUniqueWithoutGenreInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => SeriesUpdateWithoutGenreInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateWithoutGenreInputObjectSchema)]),
    create: z.union([z.lazy(() => SeriesCreateWithoutGenreInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutGenreInputObjectSchema)]),
  })
  .strict()

export const SeriesUpsertWithWhereUniqueWithoutGenreInputObjectSchema = Schema
