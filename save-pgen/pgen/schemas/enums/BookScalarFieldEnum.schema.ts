import { z } from 'zod'

export const BookScalarFieldEnumSchema = z.enum(['id', 'title', 'authorId'])
