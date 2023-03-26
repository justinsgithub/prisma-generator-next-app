import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUpdateManyWithoutSeriesNestedInputObjectSchema } from './BookUpdateManyWithoutSeriesNestedInput.schema'
import { AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutSeriesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateWithoutGenreInput> = z
  .object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUpdateManyWithoutSeriesNestedInputObjectSchema).optional(),
    Author: z.lazy(() => AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema).optional(),
  })
  .strict()

export const SeriesUpdateWithoutGenreInputObjectSchema = Schema
