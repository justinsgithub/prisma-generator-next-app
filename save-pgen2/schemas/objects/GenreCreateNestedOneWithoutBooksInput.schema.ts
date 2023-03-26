import { z } from 'zod'
import { GenreCreateWithoutBooksInputObjectSchema } from './GenreCreateWithoutBooksInput.schema'
import { GenreUncheckedCreateWithoutBooksInputObjectSchema } from './GenreUncheckedCreateWithoutBooksInput.schema'
import { GenreCreateOrConnectWithoutBooksInputObjectSchema } from './GenreCreateOrConnectWithoutBooksInput.schema'
import { GenreWhereUniqueInputObjectSchema } from './GenreWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateNestedOneWithoutBooksInput> = z
  .object({
    create: z
      .union([z.lazy(() => GenreCreateWithoutBooksInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutBooksInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => GenreCreateOrConnectWithoutBooksInputObjectSchema).optional(),
    connect: z.lazy(() => GenreWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const GenreCreateNestedOneWithoutBooksInputObjectSchema = Schema
