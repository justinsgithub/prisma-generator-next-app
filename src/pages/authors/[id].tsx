import type { ModelName } from '@/pgen/types'
import { NextPage } from 'next'
import Link from 'next/link'
import pluralize from 'pluralize'
import { FC, useEffect, useState } from 'react'
import { authorFindFirst, authorFindMany } from '@/pgen/frontend/authors'
import { Author, Book } from '@prisma/client'
import { useRouter } from 'next/router'

const Card: FC<{ href: string, name: string }> = ({ href, name }) => {
  return (
    <Link href={href}>
      <div className='my-5 w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
        <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
          <h3 className='text-md text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-lg'>{name}</h3>
        </div>
      </div>
    </Link>
  )
}

const Page: NextPage = () => {
  const [author, setAuthor] = useState<(Author & { books: Book[]; } | null)>()
  const router = useRouter()
  const _id  = router.query.id as string
  const id = +_id
   
  async function getAuthor() {
    const author = await authorFindFirst({include:{"books": true}})
    setAuthor(author)
  }

  useEffect(() => {
    getAuthor()
  }, [])

  const authorPages = authors.map((author) => {
    return {
      href: `/authors/${author.id}`,
      name: author.name,
    }
  })

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div className='bg-gray-50 dark:bg-gray-900'>
        <header>
          <Link href='/'>
            <h1 className='pt-9 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>My Library - Authors</h1>
          </Link>
        </header>
      </div>
      <main className='container mx-auto'>
        <section className='bg-gray-50 dark:bg-gray-900'>
          <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
            {authorPages.length > 0 && authorPages.map((page) => ( <Card {...page} />))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page


