import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUpdateManyWithoutGenreNestedInputObjectSchema } from './BookUpdateManyWithoutGenreNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpdateWithoutSeriesInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUpdateManyWithoutGenreNestedInputObjectSchema).optional(),
  })
  .strict()

export const GenreUpdateWithoutSeriesInputObjectSchema = Schema
