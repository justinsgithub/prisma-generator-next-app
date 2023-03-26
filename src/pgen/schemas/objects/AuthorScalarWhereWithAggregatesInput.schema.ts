import { z } from 'zod'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuthorScalarWhereWithAggregatesInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    twitter: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const AuthorScalarWhereWithAggregatesInputObjectSchema = Schema
