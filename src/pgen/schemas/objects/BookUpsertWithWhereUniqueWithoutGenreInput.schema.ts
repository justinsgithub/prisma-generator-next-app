import { z } from 'zod'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookUpdateWithoutGenreInputObjectSchema } from './BookUpdateWithoutGenreInput.schema'
import { BookUncheckedUpdateWithoutGenreInputObjectSchema } from './BookUncheckedUpdateWithoutGenreInput.schema'
import { BookCreateWithoutGenreInputObjectSchema } from './BookCreateWithoutGenreInput.schema'
import { BookUncheckedCreateWithoutGenreInputObjectSchema } from './BookUncheckedCreateWithoutGenreInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUpsertWithWhereUniqueWithoutGenreInput> = z
  .object({
    where: z.lazy(() => BookWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => BookUpdateWithoutGenreInputObjectSchema), z.lazy(() => BookUncheckedUpdateWithoutGenreInputObjectSchema)]),
    create: z.union([z.lazy(() => BookCreateWithoutGenreInputObjectSchema), z.lazy(() => BookUncheckedCreateWithoutGenreInputObjectSchema)]),
  })
  .strict()

export const BookUpsertWithWhereUniqueWithoutGenreInputObjectSchema = Schema
