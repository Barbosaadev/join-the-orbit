'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function Login() {
  const form = useForm()
  const router = useRouter()
  return (
    <>
      <div className='flex flex-col flex-1 justify-start h-screen pl-20'>
        <div className='flex space-x-2 pt-5 items-center'>
          {/* <MdArrowBack className='text-neutral-100 text-lg' />
          <p className='text-neutral-200 text-md'>{'Home'}</p> */}

          <Button
            className='bg-neutral-950 text-neutral-100 hover:bg-teal-700 hover:text-neutral-100'
            variant={'ghost'}
            onClick={() => router.back()}>
            {'Home'}
          </Button>
        </div>
        <div className='flex flex-col justify-end space-y-4 h-1/2'>
          <h1 className='font-bold text-7xl text-neutral-200'>{'Conquer the space'}</h1>
          <h1 className='font-bold text-7xl text-neutral-200'>{'Join the Orbit 🪐'}</h1>
          <p className='text-neutral-200 text-md w-1/3'>
            {"We're looking for people that want to be part of a team and grow in their carreer"}
          </p>
        </div>
      </div>

      <Form {...form}>
        <form className='flex flex-col justify-center w-2/6 h-screen px-24 bg-emerald-900'>
          <div className='flex flex-col space-y-8'>
            <h2 className='text-3xl font-bold text-neutral-50'>{'🚀 Sign In'}</h2>
            <FormField
              control={form.control}
              name='Username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-neutral-50'>{'Username'}</FormLabel>
                  <FormControl>
                    <Input placeholder='Username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='Password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-neutral-50'>{'Password'}</FormLabel>
                  <FormControl>
                    <Input placeholder='Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className='bg-teal-600 hover:bg-teal-700 text-md font-semibold' type='submit'>
              {'Sign In'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
