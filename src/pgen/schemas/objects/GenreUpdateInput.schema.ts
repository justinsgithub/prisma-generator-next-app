import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUpdateManyWithoutGenreNestedInputObjectSchema } from './BookUpdateManyWithoutGenreNestedInput.schema'
import { SeriesUpdateManyWithoutGenreNestedInputObjectSchema } from './SeriesUpdateManyWithoutGenreNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpdateInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUpdateManyWithoutGenreNestedInputObjectSchema).optional(),
    series: z.lazy(() => SeriesUpdateManyWithoutGenreNestedInputObjectSchema).optional(),
  })
  .strict()

export const GenreUpdateInputObjectSchema = Schema
