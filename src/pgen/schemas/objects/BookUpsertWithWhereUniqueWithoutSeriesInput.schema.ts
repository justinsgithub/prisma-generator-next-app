import { z } from 'zod'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookUpdateWithoutSeriesInputObjectSchema } from './BookUpdateWithoutSeriesInput.schema'
import { BookUncheckedUpdateWithoutSeriesInputObjectSchema } from './BookUncheckedUpdateWithoutSeriesInput.schema'
import { BookCreateWithoutSeriesInputObjectSchema } from './BookCreateWithoutSeriesInput.schema'
import { BookUncheckedCreateWithoutSeriesInputObjectSchema } from './BookUncheckedCreateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUpsertWithWhereUniqueWithoutSeriesInput> = z
  .object({
    where: z.lazy(() => BookWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => BookUpdateWithoutSeriesInputObjectSchema), z.lazy(() => BookUncheckedUpdateWithoutSeriesInputObjectSchema)]),
    create: z.union([z.lazy(() => BookCreateWithoutSeriesInputObjectSchema), z.lazy(() => BookUncheckedCreateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const BookUpsertWithWhereUniqueWithoutSeriesInputObjectSchema = Schema
