import { z } from 'zod'
import { GenreCountOutputTypeSelectObjectSchema } from './GenreCountOutputTypeSelect.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => GenreCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const GenreCountOutputTypeArgsObjectSchema = Schema
