import { z } from 'zod'
import { AuthorCreateWithoutSeriesInputObjectSchema } from './AuthorCreateWithoutSeriesInput.schema'
import { AuthorUncheckedCreateWithoutSeriesInputObjectSchema } from './AuthorUncheckedCreateWithoutSeriesInput.schema'
import { AuthorCreateOrConnectWithoutSeriesInputObjectSchema } from './AuthorCreateOrConnectWithoutSeriesInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutSeriesInput> = z
  .object({
    create: z
      .union([z.lazy(() => AuthorCreateWithoutSeriesInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutSeriesInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutSeriesInputObjectSchema).optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateNestedOneWithoutSeriesInputObjectSchema = Schema
