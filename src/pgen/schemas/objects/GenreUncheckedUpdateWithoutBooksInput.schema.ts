import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { SeriesUncheckedUpdateManyWithoutGenreNestedInputObjectSchema } from './SeriesUncheckedUpdateManyWithoutGenreNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUncheckedUpdateWithoutBooksInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    series: z.lazy(() => SeriesUncheckedUpdateManyWithoutGenreNestedInputObjectSchema).optional(),
  })
  .strict()

export const GenreUncheckedUpdateWithoutBooksInputObjectSchema = Schema
