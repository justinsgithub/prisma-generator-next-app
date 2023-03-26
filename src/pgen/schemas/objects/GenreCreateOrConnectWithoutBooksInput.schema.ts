import { z } from 'zod'
import { GenreWhereUniqueInputObjectSchema } from './GenreWhereUniqueInput.schema'
import { GenreCreateWithoutBooksInputObjectSchema } from './GenreCreateWithoutBooksInput.schema'
import { GenreUncheckedCreateWithoutBooksInputObjectSchema } from './GenreUncheckedCreateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreCreateOrConnectWithoutBooksInput> = z
  .object({
    where: z.lazy(() => GenreWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => GenreCreateWithoutBooksInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutBooksInputObjectSchema)]),
  })
  .strict()

export const GenreCreateOrConnectWithoutBooksInputObjectSchema = Schema
