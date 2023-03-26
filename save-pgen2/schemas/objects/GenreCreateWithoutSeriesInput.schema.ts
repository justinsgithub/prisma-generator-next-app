import { z } from 'zod'
import { BookCreateNestedManyWithoutGenreInputObjectSchema } from './BookCreateNestedManyWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateWithoutSeriesInput> = z
  .object({
    name: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutGenreInputObjectSchema).optional(),
  })
  .strict()

export const GenreCreateWithoutSeriesInputObjectSchema = Schema
