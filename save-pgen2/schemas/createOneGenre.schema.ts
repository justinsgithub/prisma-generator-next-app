import { z } from 'zod'
import { GenreSelectObjectSchema } from './objects/GenreSelect.schema'
import { GenreIncludeObjectSchema } from './objects/GenreInclude.schema'
import { GenreCreateInputObjectSchema } from './objects/GenreCreateInput.schema'
import { GenreUncheckedCreateInputObjectSchema } from './objects/GenreUncheckedCreateInput.schema'

export const GenreCreateOneSchema = z.object({
  select: GenreSelectObjectSchema.optional(),
  include: GenreIncludeObjectSchema.optional(),
  data: z.union([GenreCreateInputObjectSchema, GenreUncheckedCreateInputObjectSchema]),
})
