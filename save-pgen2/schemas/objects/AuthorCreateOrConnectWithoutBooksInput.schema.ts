import { z } from 'zod'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorCreateWithoutBooksInputObjectSchema } from './AuthorCreateWithoutBooksInput.schema'
import { AuthorUncheckedCreateWithoutBooksInputObjectSchema } from './AuthorUncheckedCreateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateOrConnectWithoutBooksInput> = z
  .object({
    where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => AuthorCreateWithoutBooksInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutBooksInputObjectSchema)]),
  })
  .strict()

export const AuthorCreateOrConnectWithoutBooksInputObjectSchema = Schema
