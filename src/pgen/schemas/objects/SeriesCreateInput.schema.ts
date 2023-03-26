import { z } from 'zod'
import { BookCreateNestedManyWithoutSeriesInputObjectSchema } from './BookCreateNestedManyWithoutSeriesInput.schema'
import { AuthorCreateNestedOneWithoutSeriesInputObjectSchema } from './AuthorCreateNestedOneWithoutSeriesInput.schema'
import { GenreCreateNestedOneWithoutSeriesInputObjectSchema } from './GenreCreateNestedOneWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateInput> = z
  .object({
    title: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutSeriesInputObjectSchema).optional(),
    Author: z.lazy(() => AuthorCreateNestedOneWithoutSeriesInputObjectSchema),
    Genre: z.lazy(() => GenreCreateNestedOneWithoutSeriesInputObjectSchema).optional(),
  })
  .strict()

export const SeriesCreateInputObjectSchema = Schema
