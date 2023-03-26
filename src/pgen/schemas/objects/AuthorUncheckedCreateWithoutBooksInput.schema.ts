import { z } from 'zod'
import { SeriesUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './SeriesUncheckedCreateNestedManyWithoutAuthorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateWithoutBooksInput> = z
  .object({
    id: z.number().optional(),
    twitter: z.string().optional().nullable(),
    name: z.string(),
    series: z.lazy(() => SeriesUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
  })
  .strict()

export const AuthorUncheckedCreateWithoutBooksInputObjectSchema = Schema
