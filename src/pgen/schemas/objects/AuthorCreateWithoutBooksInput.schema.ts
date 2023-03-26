import { z } from 'zod'
import { SeriesCreateNestedManyWithoutAuthorInputObjectSchema } from './SeriesCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateWithoutBooksInput> = z
  .object({
    twitter: z.string().optional().nullable(),
    name: z.string(),
    series: z.lazy(() => SeriesCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateWithoutBooksInputObjectSchema = Schema
