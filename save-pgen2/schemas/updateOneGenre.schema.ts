import { z } from 'zod'
import { GenreSelectObjectSchema } from './objects/GenreSelect.schema'
import { GenreIncludeObjectSchema } from './objects/GenreInclude.schema'
import { GenreUpdateInputObjectSchema } from './objects/GenreUpdateInput.schema'
import { GenreUncheckedUpdateInputObjectSchema } from './objects/GenreUncheckedUpdateInput.schema'
import { GenreWhereUniqueInputObjectSchema } from './objects/GenreWhereUniqueInput.schema'

export const GenreUpdateOneSchema = z.object({
  select: GenreSelectObjectSchema.optional(),
  include: GenreIncludeObjectSchema.optional(),
  data: z.union([GenreUpdateInputObjectSchema, GenreUncheckedUpdateInputObjectSchema]),
  where: GenreWhereUniqueInputObjectSchema,
})
