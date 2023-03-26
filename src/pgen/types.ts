/* IMPORTANT: this file ***IS NOT SAFE*** to edit, will be overwritten every time "prisma generate" is ran */
import { ZodObject } from 'zod'

export type ModelOp =
  | 'aggregate'
  | 'create'
  | 'deleteMany'
  | 'delete'
  | 'findFirst'
  | 'findFirstOrThrow'
  | 'findMany'
  | 'findUnique'
  | 'findUniqueOrThrow'
  | 'groupBy'
  | 'updateMany'
  | 'update'
  | 'upsert'

export type ModelName = 'Author' | 'Book' | 'Series' | 'Genre'

export type ValidateOp = Exclude<ModelOp, 'findFirstOrThrow' | 'findUniqueOrThrow'>

export type ModelValidations = Record<ModelName, Record<ValidateOp, ZodObject<any>>>
