import { z } from 'zod'

export const SeriesScalarFieldEnumSchema = z.enum(['id', 'title', 'authorId', 'genreId'])
