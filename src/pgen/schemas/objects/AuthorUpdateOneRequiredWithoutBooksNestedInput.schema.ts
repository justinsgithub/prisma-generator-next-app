import { z } from 'zod'
import { AuthorCreateWithoutBooksInputObjectSchema } from './AuthorCreateWithoutBooksInput.schema'
import { AuthorUncheckedCreateWithoutBooksInputObjectSchema } from './AuthorUncheckedCreateWithoutBooksInput.schema'
import { AuthorCreateOrConnectWithoutBooksInputObjectSchema } from './AuthorCreateOrConnectWithoutBooksInput.schema'
import { AuthorUpsertWithoutBooksInputObjectSchema } from './AuthorUpsertWithoutBooksInput.schema'
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema'
import { AuthorUpdateWithoutBooksInputObjectSchema } from './AuthorUpdateWithoutBooksInput.schema'
import { AuthorUncheckedUpdateWithoutBooksInputObjectSchema } from './AuthorUncheckedUpdateWithoutBooksInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput> = z
  .object({
    create: z
      .union([z.lazy(() => AuthorCreateWithoutBooksInputObjectSchema), z.lazy(() => AuthorUncheckedCreateWithoutBooksInputObjectSchema)])
      .optional(),
    connectOrCreate: z.lazy(() => AuthorCreateOrConnectWithoutBooksInputObjectSchema).optional(),
    upsert: z.lazy(() => AuthorUpsertWithoutBooksInputObjectSchema).optional(),
    connect: z.lazy(() => AuthorWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([z.lazy(() => AuthorUpdateWithoutBooksInputObjectSchema), z.lazy(() => AuthorUncheckedUpdateWithoutBooksInputObjectSchema)])
      .optional(),
  })
  .strict()

export const AuthorUpdateOneRequiredWithoutBooksNestedInputObjectSchema = Schema
