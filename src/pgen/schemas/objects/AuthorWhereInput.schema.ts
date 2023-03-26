import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BookListRelationFilterObjectSchema } from './BookListRelationFilter.schema'
import { SeriesListRelationFilterObjectSchema } from './SeriesListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => AuthorWhereInputObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => AuthorWhereInputObjectSchema), z.lazy(() => AuthorWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    twitter: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    books: z.lazy(() => BookListRelationFilterObjectSchema).optional(),
    series: z.lazy(() => SeriesListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const AuthorWhereInputObjectSchema = Schema
