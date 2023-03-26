import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUpdateManyWithoutSeriesNestedInputObjectSchema } from './BookUpdateManyWithoutSeriesNestedInput.schema'
import { AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutSeriesNestedInput.schema'
import { GenreUpdateOneWithoutSeriesNestedInputObjectSchema } from './GenreUpdateOneWithoutSeriesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateInput> = z
  .object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUpdateManyWithoutSeriesNestedInputObjectSchema).optional(),
    Author: z.lazy(() => AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema).optional(),
    Genre: z.lazy(() => GenreUpdateOneWithoutSeriesNestedInputObjectSchema).optional(),
  })
  .strict()

export const SeriesUpdateInputObjectSchema = Schema
