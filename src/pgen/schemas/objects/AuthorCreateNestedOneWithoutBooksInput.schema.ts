import { z } from 'zod'
import { AuthorCreateWithoutBooksInputObjectSchema } from './AuthorCreateWithoutBooksInput.schema'
import { AuthorUncheckedCreateWithoutBooksInputObjectSchema } from './AuthorUncheckedCreateWithoutBooksInput.schema'
import { AuthorCreateOrConnectWithoutBooksInputObjectSchema } from './AuthorCreateOrConnectWithoutBooksInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorCreateNestedOneWithoutBooksInput> = z
  .object({
    create: z
      .union([z.lazy(() => AuthorCreateWithoutBooksInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutBooksInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutBooksInputObjectSchema).optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AuthorCreateNestedOneWithoutBooksInputObjectSchema = Schema
