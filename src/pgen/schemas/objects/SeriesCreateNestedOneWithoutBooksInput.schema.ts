import { z } from 'zod'
import { SeriesCreateWithoutBooksInputObjectSchema } from './SeriesCreateWithoutBooksInput.schema'
import { SeriesUncheckedCreateWithoutBooksInputObjectSchema } from './SeriesUncheckedCreateWithoutBooksInput.schema'
import { SeriesCreateOrConnectWithoutBooksInputObjectSchema } from './SeriesCreateOrConnectWithoutBooksInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesCreateNestedOneWithoutBooksInput> = z
  .object({
    create: z
      .union([z.lazy(() => SeriesCreateWithoutBooksInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutBooksInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => SeriesCreateOrConnectWithoutBooksInputObjectSchema).optional(),
    connect: z.lazy(() => SeriesWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const SeriesCreateNestedOneWithoutBooksInputObjectSchema = Schema
