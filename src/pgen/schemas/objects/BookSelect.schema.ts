import { z } from 'zod'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { GenreArgsObjectSchema } from './GenreArgs.schema'
import { SeriesArgsObjectSchema } from './SeriesArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    title: z.boolean().optional(),
    published: z.boolean().optional(),
    author: z.union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)]).optional(),
    authorId: z.boolean().optional(),
    genre: z.union([z.boolean(), z.lazy(() => GenreArgsObjectSchema)]).optional(),
    genreId: z.boolean().optional(),
    series: z.union([z.boolean(), z.lazy(() => SeriesArgsObjectSchema)]).optional(),
    seriesId: z.boolean().optional(),
  })
  .strict()

export const BookSelectObjectSchema = Schema
