import { z } from 'zod'
import { GenreWhereUniqueInputObjectSchema } from './GenreWhereUniqueInput.schema'
import { GenreCreateWithoutSeriesInputObjectSchema } from './GenreCreateWithoutSeriesInput.schema'
import { GenreUncheckedCreateWithoutSeriesInputObjectSchema } from './GenreUncheckedCreateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateOrConnectWithoutSeriesInput> = z
  .object({
    where: z.lazy(() => GenreWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => GenreCreateWithoutSeriesInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutSeriesInputObjectSchema)]),
  })
  .strict()

export const GenreCreateOrConnectWithoutSeriesInputObjectSchema = Schema
