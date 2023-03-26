import {
  AuthorAggregateSchema,
  AuthorCreateOneSchema,
  AuthorDeleteManySchema,
  AuthorDeleteOneSchema,
  AuthorFindFirstSchema,
  AuthorFindManySchema,
  AuthorFindUniqueSchema,
  AuthorGroupBySchema,
  AuthorUpdateManySchema,
  AuthorUpdateOneSchema,
  AuthorUpsertSchema,
} from './index'

export type AuthorAggregateSchemaT = z.infer<typeof AuthorAggregateSchema>
export type AuthorCreateOneSchemaT = z.infer<typeof AuthorCreateOneSchema>
export type AuthorDeleteManySchemaT = z.infer<typeof AuthorDeleteManySchema>
export type AuthorDeleteOneSchemaT = z.infer<typeof AuthorDeleteOneSchema>
export type AuthorFindFirstSchemaT = z.infer<typeof AuthorFindFirstSchema>
export type AuthorFindManySchemaT = z.infer<typeof AuthorFindManySchema>
export type AuthorFindUniqueSchemaT = z.infer<typeof AuthorFindUniqueSchema>
export type AuthorGroupBySchemaT = z.infer<typeof AuthorGroupBySchema>
export type AuthorUpdateManySchemaT = z.infer<typeof AuthorUpdateManySchema>
export type AuthorUpdateOneSchemaT = z.infer<typeof AuthorUpdateOneSchema>
export type AuthorUpsertSchemaT = z.infer<typeof AuthorUpsertSchema>
