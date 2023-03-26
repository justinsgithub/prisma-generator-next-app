import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUncheckedCreateWithoutAuthorInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
  })
  .strict()

export const BookUncheckedCreateWithoutAuthorInputObjectSchema = Schema
