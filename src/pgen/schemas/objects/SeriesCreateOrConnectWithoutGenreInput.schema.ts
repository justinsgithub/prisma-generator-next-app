import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesCreateWithoutGenreInputObjectSchema } from './SeriesCreateWithoutGenreInput.schema'
import { SeriesUncheckedCreateWithoutGenreInputObjectSchema } from './SeriesUncheckedCreateWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateOrConnectWithoutGenreInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => SeriesCreateWithoutGenreInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutGenreInputObjectSchema)]),
  })
  .strict()

export const SeriesCreateOrConnectWithoutGenreInputObjectSchema = Schema
