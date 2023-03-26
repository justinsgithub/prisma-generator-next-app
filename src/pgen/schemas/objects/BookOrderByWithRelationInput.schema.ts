import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AuthorOrderByWithRelationInputObjectSchema } from './AuthorOrderByWithRelationInput.schema'
import { GenreOrderByWithRelationInputObjectSchema } from './GenreOrderByWithRelationInput.schema'
import { SeriesOrderByWithRelationInputObjectSchema } from './SeriesOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    author: z.lazy(() => AuthorOrderByWithRelationInputObjectSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    genre: z.lazy(() => GenreOrderByWithRelationInputObjectSchema).optional(),
    genreId: z.lazy(() => SortOrderSchema).optional(),
    series: z.lazy(() => SeriesOrderByWithRelationInputObjectSchema).optional(),
    seriesId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const BookOrderByWithRelationInputObjectSchema = Schema
