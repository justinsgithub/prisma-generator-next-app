import { z } from 'zod'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorCreateWithoutSeriesInputObjectSchema } from './AuthorCreateWithoutSeriesInput.schema'
import { AuthorUncheckedCreateWithoutSeriesInputObjectSchema } from './AuthorUncheckedCreateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutSeriesInput> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => AuthorCreateWithoutSeriesInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutSeriesInputObjectSchema = Schema
