import { z } from 'zod'
import { GenreCreateWithoutBooksInputObjectSchema } from './GenreCreateWithoutBooksInput.schema'
import { GenreUncheckedCreateWithoutBooksInputObjectSchema } from './GenreUncheckedCreateWithoutBooksInput.schema'
import { GenreCreateOrConnectWithoutBooksInputObjectSchema } from './GenreCreateOrConnectWithoutBooksInput.schema'
import { GenreUpsertWithoutBooksInputObjectSchema } from './GenreUpsertWithoutBooksInput.schema'
import { GenreWhereUniqueInputObjectSchema } from './GenreWhereUniqueInput.schema'
import { GenreUpdateWithoutBooksInputObjectSchema } from './GenreUpdateWithoutBooksInput.schema'
import { GenreUncheckedUpdateWithoutBooksInputObjectSchema } from './GenreUncheckedUpdateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpdateOneRequiredWithoutBooksNestedInput> = z
  .object({
    create: z
      .union([z.lazy(() => GenreCreateWithoutBooksInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutBooksInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => GenreCreateOrConnectWithoutBooksInputObjectSchema).optional(),
    upsert: z.lazy(() => GenreUpsertWithoutBooksInputObjectSchema).optional(),
    connect: z.lazy(() => GenreWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([z.lazy(() => GenreUpdateWithoutBooksInputObjectSchema), z.lazy(() => GenreUncheckedUpdateWithoutBooksInputObjectSchema)])
      .optional(),
  })
  .strict()

export const GenreUpdateOneRequiredWithoutBooksNestedInputObjectSchema = Schema
