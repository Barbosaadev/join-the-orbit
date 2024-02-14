'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const routes = useRouter()

  return (
    <main className='bg-neutral-950 h-screen px-20'>
      <nav className='flex h-20 items-center justify-between'>
        <h1 className='text-2xl font-semibold text-neutral-100'>{'🪐 Orbit'}</h1>
        <ul className='flex justify-between space-x-2'>
          <li>
            <Button
              className='font-semibold bg-teal-600 hover:bg-teal-800'
              onClick={() => {
                routes.push('/login')
              }}>
              {'Sign In'}
            </Button>
          </li>
        </ul>
      </nav>
      <div className='h-1/2 flex flex-col justify-end space-y-4'>
        <h1 className='text-6xl font-bold text-neutral-100'>{'Welcome to Orbit 🪐'}</h1>
        <p className='text-lg text-neutral-100 pl-2'>{'This is the home page of Orbit'}</p>
      </div>
    </main>
  )
}
