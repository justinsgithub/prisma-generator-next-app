import { z } from 'zod'
import { GenreCreateWithoutSeriesInputObjectSchema } from './GenreCreateWithoutSeriesInput.schema'
import { GenreUncheckedCreateWithoutSeriesInputObjectSchema } from './GenreUncheckedCreateWithoutSeriesInput.schema'
import { GenreCreateOrConnectWithoutSeriesInputObjectSchema } from './GenreCreateOrConnectWithoutSeriesInput.schema'
import { GenreUpsertWithoutSeriesInputObjectSchema } from './GenreUpsertWithoutSeriesInput.schema'
import { GenreWhereUniqueInputObjectSchema } from './GenreWhereUniqueInput.schema'
import { GenreUpdateWithoutSeriesInputObjectSchema } from './GenreUpdateWithoutSeriesInput.schema'
import { GenreUncheckedUpdateWithoutSeriesInputObjectSchema } from './GenreUncheckedUpdateWithoutSeriesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpdateOneRequiredWithoutSeriesNestedInput> = z
  .object({
    create: z
      .union([z.lazy(() => GenreCreateWithoutSeriesInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutSeriesInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => GenreCreateOrConnectWithoutSeriesInputObjectSchema).optional(),
    upsert: z.lazy(() => GenreUpsertWithoutSeriesInputObjectSchema).optional(),
    connect: z.lazy(() => GenreWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([z.lazy(() => GenreUpdateWithoutSeriesInputObjectSchema), z.lazy(() => GenreUncheckedUpdateWithoutSeriesInputObjectSchema)])
      .optional(),
  })
  .strict()

export const GenreUpdateOneRequiredWithoutSeriesNestedInputObjectSchema = Schema
