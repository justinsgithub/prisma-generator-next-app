import { z } from 'zod'
import { AuthorUpdateWithoutBooksInputObjectSchema } from './AuthorUpdateWithoutBooksInput.schema'
import { AuthorUncheckedUpdateWithoutBooksInputObjectSchema } from './AuthorUncheckedUpdateWithoutBooksInput.schema'
import { AuthorCreateWithoutBooksInputObjectSchema } from './AuthorCreateWithoutBooksInput.schema'
import { AuthorUncheckedCreateWithoutBooksInputObjectSchema } from './AuthorUncheckedCreateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpsertWithoutBooksInput> = z
  .object({
    update: z.union([z.lazy(() => AuthorUpdateWithoutBooksInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutBooksInputObjectSchema)]),
    create: z.union([z.lazy(() => AuthorCreateWithoutBooksInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutBooksInputObjectSchema)]),
  })
  .strict()

export const AuthorUpsertWithoutBooksInputObjectSchema = Schema
