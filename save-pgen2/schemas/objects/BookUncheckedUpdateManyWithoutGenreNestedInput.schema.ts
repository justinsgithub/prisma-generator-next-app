import { z } from 'zod'
import { BookCreateWithoutGenreInputObjectSchema } from './BookCreateWithoutGenreInput.schema'
import { BookUncheckedCreateWithoutGenreInputObjectSchema } from './BookUncheckedCreateWithoutGenreInput.schema'
import { BookCreateOrConnectWithoutGenreInputObjectSchema } from './BookCreateOrConnectWithoutGenreInput.schema'
import { BookUpsertWithWhereUniqueWithoutGenreInputObjectSchema } from './BookUpsertWithWhereUniqueWithoutGenreInput.schema'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookUpdateWithWhereUniqueWithoutGenreInputObjectSchema } from './BookUpdateWithWhereUniqueWithoutGenreInput.schema'
import { BookUpdateManyWithWhereWithoutGenreInputObjectSchema } from './BookUpdateManyWithWhereWithoutGenreInput.schema'
import { BookScalarWhereInputObjectSchema } from './BookScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUncheckedUpdateManyWithoutGenreNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => BookUpsertWithWhereUniqueWithoutGenreInputObjectSchema),
        z.lazy(() => BookUpsertWithWhereUniqueWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    set: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    update: z
      .union([
        z.lazy(() => BookUpdateWithWhereUniqueWithoutGenreInputObjectSchema),
        z.lazy(() => BookUpdateWithWhereUniqueWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => BookUpdateManyWithWhereWithoutGenreInputObjectSchema),
        z.lazy(() => BookUpdateManyWithWhereWithoutGenreInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z.union([z.lazy(() => BookScalarWhereInputObjectSchema), z.lazy(() => BookScalarWhereInputObjectSchema).array()]).optional(),
  })
  .strict()

export const BookUncheckedUpdateManyWithoutGenreNestedInputObjectSchema = Schema
