import { z } from 'zod'
import { GenreSelectObjectSchema } from './objects/GenreSelect.schema'
import { GenreIncludeObjectSchema } from './objects/GenreInclude.schema'
import { GenreWhereUniqueInputObjectSchema } from './objects/GenreWhereUniqueInput.schema'
import { GenreCreateInputObjectSchema } from './objects/GenreCreateInput.schema'
import { GenreUncheckedCreateInputObjectSchema } from './objects/GenreUncheckedCreateInput.schema'
import { GenreUpdateInputObjectSchema } from './objects/GenreUpdateInput.schema'
import { GenreUncheckedUpdateInputObjectSchema } from './objects/GenreUncheckedUpdateInput.schema'

export const GenreUpsertSchema = z.object({
  select: GenreSelectObjectSchema.optional(),
  include: GenreIncludeObjectSchema.optional(),
  where: GenreWhereUniqueInputObjectSchema,
  create: z.union([GenreCreateInputObjectSchema, GenreUncheckedCreateInputObjectSchema]),
  update: z.union([GenreUpdateInputObjectSchema, GenreUncheckedUpdateInputObjectSchema]),
})
