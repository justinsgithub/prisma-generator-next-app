import { z } from 'zod'
import { GenreCreateWithoutSeriesInputObjectSchema } from './GenreCreateWithoutSeriesInput.schema'
import { GenreUncheckedCreateWithoutSeriesInputObjectSchema } from './GenreUncheckedCreateWithoutSeriesInput.schema'
import { GenreCreateOrConnectWithoutSeriesInputObjectSchema } from './GenreCreateOrConnectWithoutSeriesInput.schema'
import { GenreWhereUniqueInputObjectSchema } from './GenreWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateNestedOneWithoutSeriesInput> = z
  .object({
    create: z
      .union([z.lazy(() => GenreCreateWithoutSeriesInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutSeriesInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => GenreCreateOrConnectWithoutSeriesInputObjectSchema).optional(),
    connect: z.lazy(() => GenreWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const GenreCreateNestedOneWithoutSeriesInputObjectSchema = Schema
