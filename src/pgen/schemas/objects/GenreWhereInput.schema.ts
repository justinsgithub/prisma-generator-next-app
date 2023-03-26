import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BookListRelationFilterObjectSchema } from './BookListRelationFilter.schema'
import { SeriesListRelationFilterObjectSchema } from './SeriesListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => GenreWhereInputObjectSchema), z.lazy(() => GenreWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => GenreWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => GenreWhereInputObjectSchema), z.lazy(() => GenreWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    books: z.lazy(() => BookListRelationFilterObjectSchema).optional(),
    series: z.lazy(() => SeriesListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const GenreWhereInputObjectSchema = Schema
