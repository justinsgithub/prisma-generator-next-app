import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './BookUncheckedUpdateManyWithoutAuthorNestedInput.schema'
import { SeriesUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from './SeriesUncheckedUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUncheckedUpdateInput> = z
  .object({
    id: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
    twitter: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
    series: z.lazy(() => SeriesUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  })
  .strict()

export const AuthorUncheckedUpdateInputObjectSchema = Schema
