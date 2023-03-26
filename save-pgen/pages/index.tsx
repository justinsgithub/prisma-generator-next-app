import { type NextPage } from 'next'
import Head from 'next/head'
import type { Book, User, Prisma, PrismaClient } from '@prisma/client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { serialize, stringify } from 'superjson'
import Link from 'next/link'
import { z } from 'zod'
import { makeErrors, Zodios } from '@zodios/core'
import { prisma } from '@/pgen'
type FindFirstReponse<T extends Prisma.BookFindFirstArgsBase> = Prisma.Prisma__BookClient<Prisma.BookGetPayload<T> | null, null>
type FFR<T extends Prisma.BookFindFirstArgsBase> = Prisma.BookGetPayload<T>

const b: z.ZodType<null | (Book & { author: User | null })> = z.object({
  id: z.number(),
  title: z.string(),
  authorId: z.number().nullable(),
  author: z
    .object({
      id: z.number(),
      email: z.string(),
      name: z.string().nullable(),
    })
    .nullable(),
})

const y: z.ZodType<FFR<{include: {author: true}}>> = z.object({
    id: z.number(),
    title: z.string(),
    authorId: z.number().nullable(),
    author: z
      .object({
        id: z.number(),
        email: z.string(),
        name: z.string().nullable(),
      }).nullable(),
  })

y.nullish

const apiClient = new Zodios('/api/pgen', [
  {
    method: 'get',
    path: '/books?op=findMany',
    alias: 'getBooks',
    response: z.array(b),
  },
  {
    method: 'get',
    path: '/books?op=findFirst',
    alias: 'getBook',
    response: y,
  },
  /* { */
  /*   method: "get", */
  /*   path: "/users/:id", */
  /*   alias: "getUser", */
  /*   response: user, */
  /*   errors, */
  /* }, */
  /* { */
  /*   method: "post", */
  /*   path: "/users", */
  /*   alias: "createUser", */
  /*   parameters: [ */
  /*     { */
  /*       name: "user", */
  /*       type: "Body", */
  /*       schema: user.omit({ id: true }), */
  /*     }, */
  /*   ], */
  /*   response: user, */
  /*   errors, */
  /* },   */
])

// get all users
/* const users = await apiClient.getUsers(); */
// get user by id
/* const guser = await apiClient.getUser({ params: { id: 1 } }); */
// create user
/* const newUser = await apiClient.createUser({ name: "John", age: 20, email: "jodn@doe.com"}); */

/* export type User = z.infer<typeof user>; */

const Home: NextPage = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [book, setBook] = useState<Book>()

  const getBooks = async () => {
    const books = await apiClient.getBooks()
    const book = await apiClient.getBook()
    console.log(book.author)
    /* console.log(book["blah"]) */
    console.log('BOOKS', books)
    /* setBooks(books) */
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <Head>
        <title>Prisma-Generator-Next</title>
        <meta name='description' content='Prisma-Generator-Next' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mx-auto mt-10'>
        <header className='mx-auto w-fit border-2 border-solid border-red-500'>
          <h1 className='text-md font-extrabold tracking-tight sm:text-[5rem]'>Prisma-Generator-Next</h1>
        </header>
        <div>
          {books.length > 0 &&
            books.map((book) => {
              return (
                <div key={book.id}>
                  <p className='text-blue-500'>{book.title}</p>
                </div>
              )
            })}
        </div>
        {/* <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'> */}
        {/*   <Link href='/pgen' className='flex max-w-xs flex-col gap-4 rounded-xl bg-red-50 p-4 hover:bg-white/20' > */}
        {/*     <h3 className='text-2xl font-bold'>Models</h3> */}
        {/*     <div className='text-lg'>View your models</div> */}
        {/*   </Link> */}
        {/*   <Link */}
        {/*     className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20' */}
        {/*     href='https://create.t3.gg/en/introduction' */}
        {/*     target='_blank' */}
        {/*   > */}
        {/*     <h3 className='text-2xl font-bold'>Api Routes</h3> */}
        {/*     <div className='text-lg'>See api route examples</div> */}
        {/*   </Link> */}
        {/* </div> */}
      </main>
    </>
  )
}

export default Home
