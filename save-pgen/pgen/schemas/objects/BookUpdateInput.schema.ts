import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { UserUpdateOneWithoutBooksNestedInputObjectSchema } from './UserUpdateOneWithoutBooksNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUpdateInput> = z
  .object({
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    author: z.lazy(() => UserUpdateOneWithoutBooksNestedInputObjectSchema).optional(),
  })
  .strict()

export const BookUpdateInputObjectSchema = Schema
