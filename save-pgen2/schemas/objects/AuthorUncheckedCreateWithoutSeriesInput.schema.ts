import { z } from 'zod'
import { BookUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './BookUncheckedCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutSeriesInput> = z
  .object({
    id: z.number().optional(),
    twitter: z.string().optional().nullable(),
    name: z.string(),
    books: z.lazy(() => BookUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()

export const AuthorUncheckedCreateWithoutSeriesInputObjectSchema = Schema
