import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithoutGenreInputObjectSchema } from './SeriesUpdateWithoutGenreInput.schema'
import { SeriesUncheckedUpdateWithoutGenreInputObjectSchema } from './SeriesUncheckedUpdateWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateWithWhereUniqueWithoutGenreInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => SeriesUpdateWithoutGenreInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateWithoutGenreInputObjectSchema)]),
  })
  .strict()

export const SeriesUpdateWithWhereUniqueWithoutGenreInputObjectSchema = Schema
