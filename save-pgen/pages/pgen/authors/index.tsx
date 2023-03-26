import { type NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { authorFindMany } from '@/pgen/frontend/authors'
import { Author } from '@prisma/client'


const Page: NextPage = () => {
  const [authors, setAuthors] = useState<Author[]>([])

  const getUsers = async () => {
    const authors = await authorFindMany({})
  }

  useEffect(() => {
    getUsers()
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

export default Page

