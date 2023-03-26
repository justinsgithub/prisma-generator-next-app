import { z } from 'zod'
import { BookSelectObjectSchema } from './objects/BookSelect.schema'
import { BookIncludeObjectSchema } from './objects/BookInclude.schema'
import { BookWhereUniqueInputObjectSchema } from './objects/BookWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'

export const BookFindUniqueSchema: z.ZodType<Prisma.BookFindUniqueArgsBase> = z.object({
  select: BookSelectObjectSchema.optional(),
  include: BookIncludeObjectSchema.optional(),
  where: BookWhereUniqueInputObjectSchema,
})
