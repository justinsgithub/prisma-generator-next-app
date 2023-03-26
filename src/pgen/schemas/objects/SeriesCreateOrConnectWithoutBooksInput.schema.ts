import { z } from 'zod'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesCreateWithoutBooksInputObjectSchema } from './SeriesCreateWithoutBooksInput.schema'
import { SeriesUncheckedCreateWithoutBooksInputObjectSchema } from './SeriesUncheckedCreateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateOrConnectWithoutBooksInput> = z
  .object({
    where: z.lazy(() => SeriesWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => SeriesCreateWithoutBooksInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutBooksInputObjectSchema)]),
  })
  .strict()

export const SeriesCreateOrConnectWithoutBooksInputObjectSchema = Schema
