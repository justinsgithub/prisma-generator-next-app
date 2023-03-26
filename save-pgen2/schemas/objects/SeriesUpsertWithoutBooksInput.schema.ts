import { z } from 'zod'
import { SeriesUpdateWithoutBooksInputObjectSchema } from './SeriesUpdateWithoutBooksInput.schema'
import { SeriesUncheckedUpdateWithoutBooksInputObjectSchema } from './SeriesUncheckedUpdateWithoutBooksInput.schema'
import { SeriesCreateWithoutBooksInputObjectSchema } from './SeriesCreateWithoutBooksInput.schema'
import { SeriesUncheckedCreateWithoutBooksInputObjectSchema } from './SeriesUncheckedCreateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpsertWithoutBooksInput> = z
  .object({
    update: z.union([z.lazy(() => SeriesUpdateWithoutBooksInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateWithoutBooksInputObjectSchema)]),
    create: z.union([z.lazy(() => SeriesCreateWithoutBooksInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutBooksInputObjectSchema)]),
  })
  .strict()

export const SeriesUpsertWithoutBooksInputObjectSchema = Schema
