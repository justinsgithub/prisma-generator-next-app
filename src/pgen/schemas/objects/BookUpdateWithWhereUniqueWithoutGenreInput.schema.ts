import { z } from 'zod'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookUpdateWithoutGenreInputObjectSchema } from './BookUpdateWithoutGenreInput.schema'
import { BookUncheckedUpdateWithoutGenreInputObjectSchema } from './BookUncheckedUpdateWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUpdateWithWhereUniqueWithoutGenreInput> = z
  .object({
    where: z.lazy(() => BookWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => BookUpdateWithoutGenreInputObjectSchema), z.lazy(() => BookUncheckedUpdateWithoutGenreInputObjectSchema)]),
  })
  .strict()

export const BookUpdateWithWhereUniqueWithoutGenreInputObjectSchema = Schema
