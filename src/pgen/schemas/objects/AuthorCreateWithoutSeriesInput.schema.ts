import { z } from 'zod'
import { BookCreateNestedManyWithoutAuthorInputObjectSchema } from './BookCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateWithoutSeriesInput> = z
  .object({
    twitter: z.string().optional().nullable(),
    name: z.string(),
    books: z.lazy(() => BookCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateWithoutSeriesInputObjectSchema = Schema
