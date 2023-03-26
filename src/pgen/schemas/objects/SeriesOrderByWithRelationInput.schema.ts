import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { BookOrderByRelationAggregateInputObjectSchema } from './BookOrderByRelationAggregateInput.schema'
import { AuthorOrderByWithRelationInputObjectSchema } from './AuthorOrderByWithRelationInput.schema'
import { GenreOrderByWithRelationInputObjectSchema } from './GenreOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    books: z.lazy(() => BookOrderByRelationAggregateInputObjectSchema).optional(),
    Author: z.lazy(() => AuthorOrderByWithRelationInputObjectSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    Genre: z.lazy(() => GenreOrderByWithRelationInputObjectSchema).optional(),
    genreId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const SeriesOrderByWithRelationInputObjectSchema = Schema
