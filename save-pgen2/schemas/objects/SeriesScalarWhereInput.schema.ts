import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesScalarWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => SeriesScalarWhereInputObjectSchema), z.lazy(() => SeriesScalarWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => SeriesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => SeriesScalarWhereInputObjectSchema), z.lazy(() => SeriesScalarWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    authorId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    genreId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
  })
  .strict()

export const SeriesScalarWhereInputObjectSchema = Schema
