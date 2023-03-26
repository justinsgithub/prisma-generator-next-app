import { z } from 'zod'
import { BookCreateNestedManyWithoutAuthorInputObjectSchema } from './BookCreateNestedManyWithoutAuthorInput.schema'
import { SeriesCreateNestedManyWithoutAuthorInputObjectSchema } from './SeriesCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateInput> = z
  .object({
    twitter: z.string().optional().nullable(),
    name: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
    series: z.lazy(() => SeriesCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateInputObjectSchema = Schema
