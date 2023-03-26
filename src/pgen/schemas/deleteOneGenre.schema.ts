import { z } from 'zod'
import { GenreSelectObjectSchema } from './objects/GenreSelect.schema'
import { GenreIncludeObjectSchema } from './objects/GenreInclude.schema'
import { GenreWhereUniqueInputObjectSchema } from './objects/GenreWhereUniqueInput.schema'

export const GenreDeleteOneSchema = z.object({
  select: GenreSelectObjectSchema.optional(),
  include: GenreIncludeObjectSchema.optional(),
  where: GenreWhereUniqueInputObjectSchema,
})
