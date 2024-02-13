'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function Login() {
  const form = useForm()
  return (
    <>
        <Image
        className='flex-1 h-screen'
          alt={'join-the-orbit'}
          width={1200}
          height={700}
          style={{
            objectFit: 'cover'
          }}
          src={
            'https://cloudcfo.ph/wp-content/uploads/2022/11/CloudCfo-Blog-Banner-Blog17-Business-Structures.png'
          }
        />

      <Form {...form}>
        <form className='flex flex-col justify-center border-l-4 border-gray-700 w-2/5 h-screen px-10 bg-blue-500'>
          <div className='flex flex-col space-y-5'>
            <h2 className='text-center font-semibold text-xl'>Login</h2>
            <FormField
              control={form.control}
              name='Username'
              render={({ field }) => (
                <div className='space-y-5'>
                  <FormItem>
                    <FormLabel>{'Username'}</FormLabel>
                    <FormControl>
                      <Input placeholder='Username' {...field} />
                    </FormControl>
                    <FormDescription>{'How you wanna be called'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel>{'Password'}</FormLabel>
                    <FormControl>
                      <Input placeholder='Password' {...field} />
                    </FormControl>
                    <FormDescription>{'Your password needs to be only numbers'}</FormDescription>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <Button type='submit'>{'Login'}</Button>
          </div>
        </form>
      </Form>
    </>
  )
}
