'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const routes = useRouter()

  return (
    <main>
      <div className='flex justify-end'>
        <nav>
          <ul>
            <li>
              <Button onClick={() => {routes.push('/login')}}>{'Login'}</Button>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
