import { z } from 'zod'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookCreateWithoutSeriesInputObjectSchema } from './BookCreateWithoutSeriesInput.schema'
import { BookUncheckedCreateWithoutSeriesInputObjectSchema } from './BookUncheckedCreateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookCreateOrConnectWithoutSeriesInput> = z
  .object({
    where: z.lazy(() => BookWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => BookCreateWithoutSeriesInputObjectSchema), z.lazy(() => BookUncheckedCreateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const BookCreateOrConnectWithoutSeriesInputObjectSchema = Schema
