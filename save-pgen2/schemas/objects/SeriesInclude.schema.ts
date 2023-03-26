import { z } from 'zod'
import { BookFindManySchema } from '../findManyBook.schema'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { GenreArgsObjectSchema } from './GenreArgs.schema'
import { SeriesCountOutputTypeArgsObjectSchema } from './SeriesCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesInclude> = z
  .object({
    books: z.union([z.boolean(), z.lazy(() => BookFindManySchema)]).optional(),
    Author: z.union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)]).optional(),
    Genre: z.union([z.boolean(), z.lazy(() => GenreArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SeriesCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const SeriesIncludeObjectSchema = Schema
