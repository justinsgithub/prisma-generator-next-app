import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutSeriesNestedInput.schema'
import { GenreUpdateOneWithoutSeriesNestedInputObjectSchema } from './GenreUpdateOneWithoutSeriesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateWithoutBooksInput> = z
  .object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    Author: z.lazy(() => AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema).optional(),
    Genre: z.lazy(() => GenreUpdateOneWithoutSeriesNestedInputObjectSchema).optional(),
  })
  .strict()

export const SeriesUpdateWithoutBooksInputObjectSchema = Schema
