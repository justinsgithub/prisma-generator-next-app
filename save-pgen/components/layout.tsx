import '../styles/globals.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  },
  '/guestbook': {
    name: 'guestbook',
    x: 182,
    y: 104,
    w: '100px',
  },
}

function Logo() {
  return <Link href='/'>Models</Link>
}

function Navbar() {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }

  return (
    <aside className='-mx-4 font-serif md:mx-0 md:w-[150px] md:flex-shrink-0 md:px-0'>
      <div className='lg:sticky lg:top-20'>
        <div className='ml-2 mb-2 flex flex-col items-start space-y-10 px-4 md:ml-[12px] md:mb-8 md:flex-row md:px-0 '>
          <Logo />
        </div>
        <nav
          className='fade relative flex scroll-pr-6 flex-row items-start overflow-hidden px-4 pb-0 md:relative md:flex-col md:overflow-auto md:px-0'
          id='nav'
        >
          <div className='mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col'>
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname
              return (
                <Link
                  key={path}
                  href={path}
                  className={`px-[10px]', py-[5px] transition-all hover:text-neutral-800 dark:hover:text-neutral-200 ${
                    !isActive ? 'text-neutral-500' : 'font-bold'
                  }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}

export const Layout: FC<{children: ReactNode}> =  ({children}) => {
  return (
    <div className='bg-white text-black dark:bg-[#111010] dark:text-white'>
      <div className='mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32'>
        <Navbar />
        <main className='mt-6 flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0'>
          {children}
        </main>
      </div>
    </div>
  )
}
