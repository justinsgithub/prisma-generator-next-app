import { z } from 'zod'
import { GenreUpdateWithoutSeriesInputObjectSchema } from './GenreUpdateWithoutSeriesInput.schema'
import { GenreUncheckedUpdateWithoutSeriesInputObjectSchema } from './GenreUncheckedUpdateWithoutSeriesInput.schema'
import { GenreCreateWithoutSeriesInputObjectSchema } from './GenreCreateWithoutSeriesInput.schema'
import { GenreUncheckedCreateWithoutSeriesInputObjectSchema } from './GenreUncheckedCreateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpsertWithoutSeriesInput> = z
  .object({
    update: z.union([z.lazy(() => GenreUpdateWithoutSeriesInputObjectSchema), z.lazy(() => GenreUncheckedUpdateWithoutSeriesInputObjectSchema)]),
    create: z.union([z.lazy(() => GenreCreateWithoutSeriesInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const GenreUpsertWithoutSeriesInputObjectSchema = Schema
