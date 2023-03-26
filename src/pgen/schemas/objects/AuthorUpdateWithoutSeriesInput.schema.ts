import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookUpdateManyWithoutAuthorNestedInputObjectSchema } from './BookUpdateManyWithoutAuthorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateWithoutSeriesInput> = z
  .object({
    twitter: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    books: z.lazy(() => BookUpdateManyWithoutAuthorNestedInputObjectSchema).optional(),
  })
  .strict()

export const AuthorUpdateWithoutSeriesInputObjectSchema = Schema
