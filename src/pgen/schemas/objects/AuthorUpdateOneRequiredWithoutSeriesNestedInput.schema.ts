import { z } from 'zod'
import { AuthorCreateWithoutSeriesInputObjectSchema } from './AuthorCreateWithoutSeriesInput.schema'
import { AuthorUncheckedCreateWithoutSeriesInputObjectSchema } from './AuthorUncheckedCreateWithoutSeriesInput.schema'
import { AuthorCreateOrConnectWithoutSeriesInputObjectSchema } from './AuthorCreateOrConnectWithoutSeriesInput.schema'
import { AuthorUpsertWithoutSeriesInputObjectSchema } from './AuthorUpsertWithoutSeriesInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorUpdateWithoutSeriesInputObjectSchema } from './AuthorUpdateWithoutSeriesInput.schema'
import { AuthorUncheckedUpdateWithoutSeriesInputObjectSchema } from './AuthorUncheckedUpdateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateOneRequiredWithoutSeriesNestedInput> = z
  .object({
    create: z
      .union([z.lazy(() => AuthorCreateWithoutSeriesInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutSeriesInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutSeriesInputObjectSchema).optional(),
    upsert: z.lazy(() => AuthorUpsertWithoutSeriesInputObjectSchema).optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([z.lazy(() => AuthorUpdateWithoutSeriesInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutSeriesInputObjectSchema)])
      .optional(),
  })
  .strict()

export const AuthorUpdateOneRequiredWithoutSeriesNestedInputObjectSchema = Schema
