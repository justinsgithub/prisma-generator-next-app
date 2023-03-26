import { z } from 'zod'
import { BookSelectObjectSchema } from './BookSelect.schema'
import { BookIncludeObjectSchema } from './BookInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookArgs> = z
  .object({
    select: z.lazy(() => BookSelectObjectSchema).optional(),
    include: z.lazy(() => BookIncludeObjectSchema).optional(),
  })
  .strict()

export const BookArgsObjectSchema = Schema
