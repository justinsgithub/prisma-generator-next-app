import { z } from 'zod'
import { PostFindManySchema } from '../findManyPost.schema'
import { BookFindManySchema } from '../findManyBook.schema'
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    books: z.union([z.boolean(), z.lazy(() => BookFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
