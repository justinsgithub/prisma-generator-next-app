import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutSeriesNestedInput.schema'
import { GenreUpdateOneRequiredWithoutSeriesNestedInputObjectSchema } from './GenreUpdateOneRequiredWithoutSeriesNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateWithoutBooksInput> = z
  .object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    Author: z.lazy(() => AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema).optional(),
    Genre: z.lazy(() => GenreUpdateOneRequiredWithoutSeriesNestedInputObjectSchema).optional(),
  })
  .strict()

export const SeriesUpdateWithoutBooksInputObjectSchema = Schema
