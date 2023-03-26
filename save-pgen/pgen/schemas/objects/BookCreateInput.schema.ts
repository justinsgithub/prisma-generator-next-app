import { z } from 'zod'
import { UserCreateNestedOneWithoutBooksInputObjectSchema } from './UserCreateNestedOneWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateInput> = z
  .object({
    title: z.string(),
    author: z.lazy(() => UserCreateNestedOneWithoutBooksInputObjectSchema).optional(),
  })
  .strict()

export const BookCreateInputObjectSchema = Schema
