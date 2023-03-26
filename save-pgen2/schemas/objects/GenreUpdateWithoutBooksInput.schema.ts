import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { SeriesUpdateManyWithoutGenreNestedInputObjectSchema } from './SeriesUpdateManyWithoutGenreNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpdateWithoutBooksInput> = z
  .object({
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    series: z.lazy(() => SeriesUpdateManyWithoutGenreNestedInputObjectSchema).optional(),
  })
  .strict()

export const GenreUpdateWithoutBooksInputObjectSchema = Schema
