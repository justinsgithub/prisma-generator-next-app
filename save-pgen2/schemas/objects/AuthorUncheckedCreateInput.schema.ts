import { z } from 'zod'
import { BookUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './BookUncheckedCreateNestedManyWithoutAuthorInput.schema'
import { SeriesUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './SeriesUncheckedCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    twitter: z.string().optional().nullable(),
    name: z.string(),
    books: z.lazy(() => BookUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
    series: z.lazy(() => SeriesUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()

export const AuthorUncheckedCreateInputObjectSchema = Schema
