import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BookListRelationFilterObjectSchema } from './BookListRelationFilter.schema'
import { AuthorRelationFilterObjectSchema } from './AuthorRelationFilter.schema'
import { AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'
import { GenreRelationFilterObjectSchema } from './GenreRelationFilter.schema'
import { GenreWhereInputObjectSchema } from './GenreWhereInput.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => SeriesWhereInputObjectSchema), z.lazy(() => SeriesWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => SeriesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => SeriesWhereInputObjectSchema), z.lazy(() => SeriesWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    books: z.lazy(() => BookListRelationFilterObjectSchema).optional(),
    Author: z.union([z.lazy(() => AuthorRelationFilterObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema)]).optional(),
    authorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    Genre: z
      .union([z.lazy(() => GenreRelationFilterObjectSchema), z.lazy(() => GenreWhereInputObjectSchema)])
      .optional()
      .nullable(),
    genreId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict()

export const SeriesWhereInputObjectSchema = Schema
