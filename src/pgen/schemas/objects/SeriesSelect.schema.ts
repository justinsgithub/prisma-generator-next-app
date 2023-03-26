import { z } from 'zod'
import { BookFindManySchema } from '../findManyBook.schema'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { GenreArgsObjectSchema } from './GenreArgs.schema'
import { SeriesCountOutputTypeArgsObjectSchema } from './SeriesCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    books: z.union([z.boolean(), z.lazy(() => BookFindManySchema)]).optional(),
    Author: z.union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)]).optional(),
    authorId: z.boolean().optional(),
    Genre: z.union([z.boolean(), z.lazy(() => GenreArgsObjectSchema)]).optional(),
    genreId: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => SeriesCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const SeriesSelectObjectSchema = Schema
