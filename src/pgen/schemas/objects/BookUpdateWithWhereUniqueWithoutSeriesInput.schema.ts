import { z } from 'zod'
import { BookWhereUniqueInputObjectSchema } from './BookWhereUniqueInput.schema'
import { BookUpdateWithoutSeriesInputObjectSchema } from './BookUpdateWithoutSeriesInput.schema'
import { BookUncheckedUpdateWithoutSeriesInputObjectSchema } from './BookUncheckedUpdateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookUpdateWithWhereUniqueWithoutSeriesInput> = z
  .object({
    where: z.lazy(() => BookWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => BookUpdateWithoutSeriesInputObjectSchema), z.lazy(() => BookUncheckedUpdateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const BookUpdateWithWhereUniqueWithoutSeriesInputObjectSchema = Schema
