import { z } from 'zod'
import { GenreUpdateWithoutBooksInputObjectSchema } from './GenreUpdateWithoutBooksInput.schema'
import { GenreUncheckedUpdateWithoutBooksInputObjectSchema } from './GenreUncheckedUpdateWithoutBooksInput.schema'
import { GenreCreateWithoutBooksInputObjectSchema } from './GenreCreateWithoutBooksInput.schema'
import { GenreUncheckedCreateWithoutBooksInputObjectSchema } from './GenreUncheckedCreateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GenreUpsertWithoutBooksInput> = z
  .object({
    update: z.union([z.lazy(() => GenreUpdateWithoutBooksInputObjectSchema), z.lazy(() => GenreUncheckedUpdateWithoutBooksInputObjectSchema)]),
    create: z.union([z.lazy(() => GenreCreateWithoutBooksInputObjectSchema), z.lazy(() => GenreUncheckedCreateWithoutBooksInputObjectSchema)]),
  })
  .strict()

export const GenreUpsertWithoutBooksInputObjectSchema = Schema
