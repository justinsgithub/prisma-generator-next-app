import { NextPage } from 'next'
import { Form } from '@/pgen/frontend/authors/forms'

const Page: NextPage = () => {
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div>
        <header className='mt-9'>
          <h1 className='text-center text-2xl text-red-500'> My Library </h1>
        </header>
      </div>
      <main className='container'>
        <Form />
      </main>
    </div>
  )
}

export default Page
