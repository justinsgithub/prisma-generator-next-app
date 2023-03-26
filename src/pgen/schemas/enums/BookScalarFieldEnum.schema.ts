import { z } from 'zod'

export const BookScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'title', 'published', 'authorId', 'genreId', 'seriesId'])
