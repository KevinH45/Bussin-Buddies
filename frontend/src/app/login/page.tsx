'use client';

import Head from 'next/head';
import * as React from 'react';
import { useState } from 'react';
import { redirect } from 'next/navigation'
import {useRouter} from "next/router";

function calculateAge(birthYear: number, birthMonth: number, birthDay: number): number {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-11
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
  }

  return age;
}

export default function Login() {
  const [user_email, setEmail] = useState<string>("");
  const [user_password, setPassword] = useState<string>("");
  // const { push } = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault()
    const info = JSON.stringify({ 
        email: user_email,
        password: user_password,
      })
    console.log(info)
    fetch("http://localhost:5000/api/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: info,
    }).then((resp) => {
      return resp.json();
    }).then((e: any) => {
      console.log(e)
      localStorage.setItem('accessToken', e.accessToken);
      localStorage.setItem('refreshToken', e.refreshToken);
      localStorage.setItem('userId', e.userId);
      window.location = "http://localhost:3000/meetups"
    });
  }

  return (
    <main className='h-full'>
      <Head>
        <title>Login</title>
      </Head>
      <div className='flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-sm space-y-10'>
          <div>
            <img
              className='mx-auto h-10 w-auto'
              src='/images/buicon.png'
              alt='Your Company'
            />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form className='space-y-6' action='#' method='POST'>
            <div className='relative -space-y-px rounded-md shadow-sm'>
            <div className='pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300' />
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Email address'
                  value={user_email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Password'
                  value={user_password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-3 block text-sm leading-6 text-gray-900'
                >
                  Remember me
                </label>
              </div>

              <div className='text-sm leading-6'>
                <a
                  href='#'
                  className='font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
                  onSubmit(e)}
                }
                onSubmit={(e) => {
                  e.preventDefault()
                  onSubmit(e)}
                }
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='text-center text-sm leading-6 text-gray-500'>
            Not a member?{' '}
            <a
              href='#'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
