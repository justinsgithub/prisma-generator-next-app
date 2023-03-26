import { z } from 'zod'
import { BookFindManySchema } from '../findManyBook.schema'
import { SeriesFindManySchema } from '../findManySeries.schema'
import { AuthorCountOutputTypeArgsObjectSchema } from './AuthorCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorInclude> = z
  .object({
    books: z.union([z.boolean(), z.lazy(() => BookFindManySchema)]).optional(),
    series: z.union([z.boolean(), z.lazy(() => SeriesFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const AuthorIncludeObjectSchema = Schema
