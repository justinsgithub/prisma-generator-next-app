import { z } from 'zod'
import { BookCreateWithoutSeriesInputObjectSchema } from './BookCreateWithoutSeriesInput.schema'
import { BookUncheckedCreateWithoutSeriesInputObjectSchema } from './BookUncheckedCreateWithoutSeriesInput.schema'
import { BookCreateOrConnectWithoutSeriesInputObjectSchema } from './BookCreateOrConnectWithoutSeriesInput.schema'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateNestedManyWithoutSeriesInput> = z
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
    connect: z.union([z.lazy(() => BookWhereUniqueInputObjectSchema), z.lazy(() => BookWhereUniqueInputObjectSchema).array()]).optional(),
  })
  .strict()

export const BookCreateNestedManyWithoutSeriesInputObjectSchema = Schema
