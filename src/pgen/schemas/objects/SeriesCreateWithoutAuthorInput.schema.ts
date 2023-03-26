import { z } from 'zod'
import { BookCreateNestedManyWithoutSeriesInputObjectSchema } from './BookCreateNestedManyWithoutSeriesInput.schema'
import { GenreCreateNestedOneWithoutSeriesInputObjectSchema } from './GenreCreateNestedOneWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateWithoutAuthorInput> = z
  .object({
    title: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutSeriesInputObjectSchema).optional(),
    Genre: z.lazy(() => GenreCreateNestedOneWithoutSeriesInputObjectSchema).optional(),
  })
  .strict()

export const SeriesCreateWithoutAuthorInputObjectSchema = Schema
