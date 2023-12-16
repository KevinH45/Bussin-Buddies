'use client';

import Head from 'next/head';
import * as React from 'react';
import {useState} from "react";
import DDInput from "@/components/dropdown/DDInput";
import {days, months, years} from "@/app/register/dates";

type DDVal = {
  id: number,
  name: string
}

export default function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dateDay, setDateDay] = useState<DDVal>(days[0]);
  const [dateMonth, setDateMonth] = useState<DDVal>(months[0]);
  const [dateYear, setDateYear] = useState<DDVal>(years[0]);

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password, dateDay, dateMonth, dateYear)
  }

  return (
    <main className='h-full'>
      <Head>
        <title>Register</title>
      </Head>
      <div className='flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-sm space-y-10'>
          <div>
            <img
              className='mx-auto h-10 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company'
            />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Register
            </h2>
          </div>
          <form className='space-y-6' action='#' method='POST'>
            <div className='relative -space-y-px rounded-md shadow-sm'>
              <div className='pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300'/>
              <div className='flex flex-row'>
                <div>
                  <label htmlFor='first-name' className='sr-only'>
                    First Name
                  </label>
                  <input
                    id='first-name'
                    name='firstname'
                    type='text'
                    autoComplete='none'
                    required
                    className='relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor='last-name' className='sr-only'>
                    Last Name
                  </label>
                  <input
                    id='last-name'
                    name='lastname'
                    type='text'
                    autoComplete='none'
                    required
                    className='relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
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
                  className='relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/*<div>*/}
              {/*    <label htmlFor="username" className="sr-only">*/}
              {/*        Username*/}
              {/*    </label>*/}
              {/*    <input*/}
              {/*        id="username"*/}
              {/*        name="username"*/}
              {/*        type="text"*/}
              {/*        autoComplete="username"*/}
              {/*        required*/}
              {/*        className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"*/}
              {/*        placeholder="Username"*/}
              {/*    />*/}
              {/*</div>*/}
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
                  className='relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <p className="border-0 text-gray-700 sm:text-sm sm:leading-6 pl-1.5">Birth Day</p>
                <div className='flex flex-row rounded-b-md'>
                  <DDInput data={days} selected={dateDay} setSelected={setDateDay}/>
                  <DDInput data={months} selected={dateMonth} setSelected={setDateMonth}/>
                  <DDInput data={years} selected={dateYear} setSelected={setDateYear}/>
                </div>
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
                  Forgot password? FIXME
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                onClick={(e) => onSubmit(e)}
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='text-center text-sm leading-6 text-gray-500'>
            Already a Member?{' '}
            <a
              href='#'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
            >
            Login CHANGEMENEXTLINK
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
