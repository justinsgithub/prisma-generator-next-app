import { z } from 'zod'
import { BookFindManySchema } from '../findManyBook.schema'
import { SeriesFindManySchema } from '../findManySeries.schema'
import { GenreCountOutputTypeArgsObjectSchema } from './GenreCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreInclude> = z
  .object({
    books: z.union([z.boolean(), z.lazy(() => BookFindManySchema)]).optional(),
    series: z.union([z.boolean(), z.lazy(() => SeriesFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => GenreCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const GenreIncludeObjectSchema = Schema
