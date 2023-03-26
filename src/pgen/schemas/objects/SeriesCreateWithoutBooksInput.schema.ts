import { z } from 'zod'
import { AuthorCreateNestedOneWithoutSeriesInputObjectSchema } from './AuthorCreateNestedOneWithoutSeriesInput.schema'
import { GenreCreateNestedOneWithoutSeriesInputObjectSchema } from './GenreCreateNestedOneWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateWithoutBooksInput> = z
  .object({
    title: z.string(),
    Author: z.lazy(() => AuthorCreateNestedOneWithoutSeriesInputObjectSchema),
    Genre: z.lazy(() => GenreCreateNestedOneWithoutSeriesInputObjectSchema).optional(),
  })
  .strict()

export const SeriesCreateWithoutBooksInputObjectSchema = Schema
