import { z } from 'zod'
import {useState} from 'react'
import { AuthorCreateOneSchema } from '../../schemas/createOneAuthor.schema'
import { prismaFrontend as prisma, requestFunction} from '../index'

type FormSchemaType = z.infer<typeof AuthorCreateOneSchema>

export const CreateAuthorForm = () => {

  const [errorMessage, useErrorMessage]  = useState<null | string>(null)
  const [isSubmitting, setIsSubmitting]  = useState(false)


  const onSubmit = async (e, blah) => {
    e.preventDefault()
    console.log('E', e.target.name.value)
    const test = AuthorCreateOneSchema.safeParse({data: {name: e.target.name.value}})
    if (!test.success){
      setErrorMessage('OH NO')
      return
    }
    const created = await prisma.author.create(test.data, requestFunction)
    console.log('CREATED', created)
  }

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
        <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>Add an Author</h1>
            <form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
              <div>
                <label htmlFor='username' className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                  Author Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm'
                  placeholder='Author Name'
                />
                {errorMessage && <span className='mt-2 block text-red-800'>{errorMessage}</span>}
              </div>
              <button
                type='submit'
                className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                disabled={isSubmitting}
              >
                Add Author
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
