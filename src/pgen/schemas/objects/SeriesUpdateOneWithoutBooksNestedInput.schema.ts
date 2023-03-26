import { z } from 'zod'
import { SeriesCreateWithoutBooksInputObjectSchema } from './SeriesCreateWithoutBooksInput.schema'
import { SeriesUncheckedCreateWithoutBooksInputObjectSchema } from './SeriesUncheckedCreateWithoutBooksInput.schema'
import { SeriesCreateOrConnectWithoutBooksInputObjectSchema } from './SeriesCreateOrConnectWithoutBooksInput.schema'
import { SeriesUpsertWithoutBooksInputObjectSchema } from './SeriesUpsertWithoutBooksInput.schema'
import { SeriesWhereUniqueInputObjectSchema } from './SeriesWhereUniqueInput.schema'
import { SeriesUpdateWithoutBooksInputObjectSchema } from './SeriesUpdateWithoutBooksInput.schema'
import { SeriesUncheckedUpdateWithoutBooksInputObjectSchema } from './SeriesUncheckedUpdateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SeriesUpdateOneWithoutBooksNestedInput> = z
  .object({
    create: z
      .union([z.lazy(() => SeriesCreateWithoutBooksInputObjectSchema), z.lazy(() => SeriesUncheckedCreateWithoutBooksInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => SeriesCreateOrConnectWithoutBooksInputObjectSchema).optional(),
    upsert: z.lazy(() => SeriesUpsertWithoutBooksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => SeriesWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([z.lazy(() => SeriesUpdateWithoutBooksInputObjectSchema), z.lazy(() => SeriesUncheckedUpdateWithoutBooksInputObjectSchema)])
      .optional(),
  })
  .strict()

export const SeriesUpdateOneWithoutBooksNestedInputObjectSchema = Schema
