import { z } from 'zod'
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PostCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional(),
    viewCount: z.number().optional(),
    author: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema).optional(),
    likes: z.number(),
  })
  .strict()

export const PostCreateInputObjectSchema = Schema
