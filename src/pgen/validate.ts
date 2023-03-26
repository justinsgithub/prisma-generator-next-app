/* IMPORTANT: this file ***IS NOT SAFE*** to edit, will be overwritten every time "prisma generate" is ran */
/* all files in ./prisma-zod directory will also be deleted / overwritten */
import * as schemas from './schemas'
import { ModelValidations } from './types'

export const validations: ModelValidations = {
  Author: {
    aggregate: schemas.AuthorAggregateSchema,

    findFirst: schemas.AuthorFindFirstSchema,
    findMany: schemas.AuthorFindManySchema,

    findUnique: schemas.AuthorFindUniqueSchema,
    groupBy: schemas.AuthorGroupBySchema,
    create: schemas.AuthorCreateOneSchema,

    update: schemas.AuthorUpdateOneSchema,
    updateMany: schemas.AuthorUpdateManySchema,
    upsert: schemas.AuthorUpsertSchema,
    delete: schemas.AuthorDeleteOneSchema,
    deleteMany: schemas.AuthorDeleteManySchema,
  },
  Book: {
    aggregate: schemas.BookAggregateSchema,

    findFirst: schemas.BookFindFirstSchema,
    findMany: schemas.BookFindManySchema,

    findUnique: schemas.BookFindUniqueSchema,
    groupBy: schemas.BookGroupBySchema,
    create: schemas.BookCreateOneSchema,

    update: schemas.BookUpdateOneSchema,
    updateMany: schemas.BookUpdateManySchema,
    upsert: schemas.BookUpsertSchema,
    delete: schemas.BookDeleteOneSchema,
    deleteMany: schemas.BookDeleteManySchema,
  },
  Series: {
    aggregate: schemas.SeriesAggregateSchema,

    findFirst: schemas.SeriesFindFirstSchema,
    findMany: schemas.SeriesFindManySchema,

    findUnique: schemas.SeriesFindUniqueSchema,
    groupBy: schemas.SeriesGroupBySchema,
    create: schemas.SeriesCreateOneSchema,

    update: schemas.SeriesUpdateOneSchema,
    updateMany: schemas.SeriesUpdateManySchema,
    upsert: schemas.SeriesUpsertSchema,
    delete: schemas.SeriesDeleteOneSchema,
    deleteMany: schemas.SeriesDeleteManySchema,
  },
  Genre: {
    aggregate: schemas.GenreAggregateSchema,

    findFirst: schemas.GenreFindFirstSchema,
    findMany: schemas.GenreFindManySchema,

    findUnique: schemas.GenreFindUniqueSchema,
    groupBy: schemas.GenreGroupBySchema,
    create: schemas.GenreCreateOneSchema,

    update: schemas.GenreUpdateOneSchema,
    updateMany: schemas.GenreUpdateManySchema,
    upsert: schemas.GenreUpsertSchema,
    delete: schemas.GenreDeleteOneSchema,
    deleteMany: schemas.GenreDeleteManySchema,
  },
}
