import { z } from 'zod'
import { AuthorUpdateWithoutSeriesInputObjectSchema } from './AuthorUpdateWithoutSeriesInput.schema'
import { AuthorUncheckedUpdateWithoutSeriesInputObjectSchema } from './AuthorUncheckedUpdateWithoutSeriesInput.schema'
import { AuthorCreateWithoutSeriesInputObjectSchema } from './AuthorCreateWithoutSeriesInput.schema'
import { AuthorUncheckedCreateWithoutSeriesInputObjectSchema } from './AuthorUncheckedCreateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpsertWithoutSeriesInput> = z
  .object({
    update: z.union([z.lazy(() => AuthorUpdateWithoutSeriesInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutSeriesInputObjectSchema)]),
    create: z.union([z.lazy(() => AuthorCreateWithoutSeriesInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const AuthorUpsertWithoutSeriesInputObjectSchema = Schema
