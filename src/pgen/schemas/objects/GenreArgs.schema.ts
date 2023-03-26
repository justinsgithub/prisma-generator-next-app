import { z } from 'zod'
import { GenreSelectObjectSchema } from './GenreSelect.schema'
import { GenreIncludeObjectSchema } from './GenreInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreArgs> = z
  .object({
    select: z.lazy(() => GenreSelectObjectSchema).optional(),
    include: z.lazy(() => GenreIncludeObjectSchema).optional(),
  })
  .strict()

export const GenreArgsObjectSchema = Schema
