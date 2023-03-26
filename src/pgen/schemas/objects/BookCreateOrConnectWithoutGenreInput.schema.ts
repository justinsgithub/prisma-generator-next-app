import { z } from 'zod'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookCreateWithoutGenreInputObjectSchema } from './BookCreateWithoutGenreInput.schema'
import { BookUncheckedCreateWithoutGenreInputObjectSchema } from './BookUncheckedCreateWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateOrConnectWithoutGenreInput> = z
  .object({
    where: z.lazy(() => BookWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => BookCreateWithoutGenreInputObjectSchema), z.lazy(() => BookUncheckedCreateWithoutGenreInputObjectSchema)]),
  })
  .strict()

export const BookCreateOrConnectWithoutGenreInputObjectSchema = Schema
