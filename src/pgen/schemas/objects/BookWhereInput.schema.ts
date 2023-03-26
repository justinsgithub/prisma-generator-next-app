import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { AuthorRelationFilterObjectSchema } from './AuthorRelationFilter.schema'
import { AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema'
import { GenreRelationFilterObjectSchema } from './GenreRelationFilter.schema'
import { GenreWhereInputObjectSchema } from './GenreWhereInput.schema'
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'
import { SeriesRelationFilterObjectSchema } from './SeriesRelationFilter.schema'
import { SeriesWhereInputObjectSchema } from './SeriesWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => BookWhereInputObjectSchema), z.lazy(() => BookWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => BookWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => BookWhereInputObjectSchema), z.lazy(() => BookWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    published: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    author: z.union([z.lazy(() => AuthorRelationFilterObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema)]).optional(),
    authorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    genre: z
      .union([z.lazy(() => GenreRelationFilterObjectSchema), z.lazy(() => GenreWhereInputObjectSchema)])
      .optional()
      .nullable(),
    genreId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    series: z
      .union([z.lazy(() => SeriesRelationFilterObjectSchema), z.lazy(() => SeriesWhereInputObjectSchema)])
      .optional()
      .nullable(),
    seriesId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict()

export const BookWhereInputObjectSchema = Schema
