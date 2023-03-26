import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUpdateManyWithoutSeriesNestedInputObjectSchema } from './BookUpdateManyWithoutSeriesNestedInput.schema'
import { GenreUpdateOneWithoutSeriesNestedInputObjectSchema } from './GenreUpdateOneWithoutSeriesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateWithoutAuthorInput> = z
  .object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUpdateManyWithoutSeriesNestedInputObjectSchema).optional(),
    Genre: z.lazy(() => GenreUpdateOneWithoutSeriesNestedInputObjectSchema).optional(),
  })
  .strict()

export const SeriesUpdateWithoutAuthorInputObjectSchema = Schema
