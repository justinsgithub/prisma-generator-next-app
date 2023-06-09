import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { AuthorUpdateOneRequiredWithoutBooksNestedInputObjectSchema } from './AuthorUpdateOneRequiredWithoutBooksNestedInput.schema'
import { GenreUpdateOneWithoutBooksNestedInputObjectSchema } from './GenreUpdateOneWithoutBooksNestedInput.schema'
import { SeriesUpdateOneWithoutBooksNestedInputObjectSchema } from './SeriesUpdateOneWithoutBooksNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUpdateInput> = z
  .object({
    createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    published: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    author: z.lazy(() => AuthorUpdateOneRequiredWithoutBooksNestedInputObjectSchema).optional(),
    genre: z.lazy(() => GenreUpdateOneWithoutBooksNestedInputObjectSchema).optional(),
    series: z.lazy(() => SeriesUpdateOneWithoutBooksNestedInputObjectSchema).optional(),
  })
  .strict()

export const BookUpdateInputObjectSchema = Schema
