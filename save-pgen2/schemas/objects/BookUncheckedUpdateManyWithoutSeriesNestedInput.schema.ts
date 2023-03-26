import { z } from 'zod'
import { BookCreateWithoutSeriesInputObjectSchema } from './BookCreateWithoutSeriesInput.schema'
import { BookUncheckedCreateWithoutSeriesInputObjectSchema } from './BookUncheckedCreateWithoutSeriesInput.schema'
import { BookCreateOrConnectWithoutSeriesInputObjectSchema } from './BookCreateOrConnectWithoutSeriesInput.schema'
import { BookUpsertWithWhereUniqueWithoutSeriesInputObjectSchema } from './BookUpsertWithWhereUniqueWithoutSeriesInput.schema'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookUpdateWithWhereUniqueWithoutSeriesInputObjectSchema } from './BookUpdateWithWhereUniqueWithoutSeriesInput.schema'
import { BookUpdateManyWithWhereWithoutSeriesInputObjectSchema } from './BookUpdateManyWithWhereWithoutSeriesInput.schema'
import { BookScalarWhereInputObjectSchema } from './BookScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUncheckedUpdateManyWithoutSeriesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BookCreateWithoutSeriesInputObjectSchema),
        z.lazy(() => BookCreateWithoutSeriesInputObjectSchema).array(),
        z.lazy(() => BookUncheckedCreateWithoutSeriesInputObjectSchema),
        z.lazy(() => BookUncheckedCreateWithoutSeriesInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => BookCreateOrConnectWithoutSeriesInputObjectSchema),
        z.lazy(() => BookCreateOrConnectWithoutSeriesInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => BookUpsertWithWhereUniqueWithoutSeriesInputObjectSchema),
        z.lazy(() => BookUpsertWithWhereUniqueWithoutSeriesInputObjectSchema).array(),
      ])
      .optional(),
    set: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    delete: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    connect: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
    update: z
      .union([
        z.lazy(() => BookUpdateWithWhereUniqueWithoutSeriesInputObjectSchema),
        z.lazy(() => BookUpdateWithWhereUniqueWithoutSeriesInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => BookUpdateManyWithWhereWithoutSeriesInputObjectSchema),
        z.lazy(() => BookUpdateManyWithWhereWithoutSeriesInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z.union([z.lazy(() => BookScalarWhereInputObjectSchema), z.lazy(() => BookScalarWhereInputObjectSchema).array()]).optional(),
  })
  .strict()

export const BookUncheckedUpdateManyWithoutSeriesNestedInputObjectSchema = Schema
