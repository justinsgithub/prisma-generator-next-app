import { z } from 'zod'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([z.lazy(() => BookScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BookScalarWhereWithAggregatesInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => BookScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => BookScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => BookScalarWhereWithAggregatesInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    published: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
    authorId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    genreId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    seriesId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
  })
  .strict()

export const BookScalarWhereWithAggregatesInputObjectSchema = Schema
