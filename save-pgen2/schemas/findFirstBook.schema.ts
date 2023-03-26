import { z } from 'zod'
import { BookSelectObjectSchema } from './objects/BookSelect.schema'
import { BookIncludeObjectSchema } from './objects/BookInclude.schema'
import { BookOrderByWithRelationInputObjectSchema } from './objects/BookOrderByWithRelationInput.schema'
import { BookWhereInputObjectSchema } from './objects/BookWhereInput.schema'
import { BookWhereUniqueInputObjectSchema } from './objects/BookWhereUniqueInput.schema'
import { BookScalarFieldEnumSchema } from './enums/BookScalarFieldEnum.schema'

export const BookFindFirstSchema = z.object({
  select: BookSelectObjectSchema.optional(),
  include: BookIncludeObjectSchema.optional(),
  orderBy: z.union([BookOrderByWithRelationInputObjectSchema, BookOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: BookWhereInputObjectSchema.optional(),
  cursor: BookWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BookScalarFieldEnumSchema).optional(),
})
