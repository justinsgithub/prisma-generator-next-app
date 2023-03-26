import { z } from 'zod'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { GenreArgsObjectSchema } from './GenreArgs.schema'
import { SeriesArgsObjectSchema } from './SeriesArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookInclude> = z
  .object({
    author: z.union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)]).optional(),
    genre: z.union([z.boolean(), z.lazy(() => GenreArgsObjectSchema)]).optional(),
    series: z.union([z.boolean(), z.lazy(() => SeriesArgsObjectSchema)]).optional(),
  })
  .strict()

export const BookIncludeObjectSchema = Schema
