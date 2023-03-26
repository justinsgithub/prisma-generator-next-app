import { z } from 'zod'
import { BookCreateWithoutGenreInputObjectSchema } from './BookCreateWithoutGenreInput.schema'
import { BookUncheckedCreateWithoutGenreInputObjectSchema } from './BookUncheckedCreateWithoutGenreInput.schema'
import { BookCreateOrConnectWithoutGenreInputObjectSchema } from './BookCreateOrConnectWithoutGenreInput.schema'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateNestedManyWithoutGenreInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BookCreateWithoutGenreInputObjectSchema),
        z.lazy(() => BookCreateWithoutGenreInputObjectSchema).array(),
        z.lazy(() => BookUncheckedCreateWithoutGenreInputObjectSchema),
        z.lazy(() => BookUncheckedCreateWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([z.lazy(() => BookCreateOrConnectWithoutGenreInputObjectSchema), z.lazy(() => BookCreateOrConnectWithoutGenreInputObjectSchema).array()])
      .optional(),
    connect: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
  })
  .strict()

export const BookCreateNestedManyWithoutGenreInputObjectSchema = Schema
