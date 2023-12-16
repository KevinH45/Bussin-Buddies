'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import {useState} from "react";
import {days, months, years} from "@/components/picker/dates";
import Date, {DDVal} from "@/components/picker/Date";
import * as React from "react";

export default function Post() {
  const [dateDay, setDateDay] = useState<DDVal>(days[0]);
  const [dateMonth, setDateMonth] = useState<DDVal>(months[0]);
  const [dateYear, setDateYear] = useState<DDVal>(years[0]);

  return (
    <div className='items-center p-5'>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-9 gap-x-6 gap-y-8'>
              <div className='col-span-3 col-start-4'>
                <div className='pb-5'>
                  <p className='text-2xl font-semibold leading-7 text-gray-900'>
                    Create Listing
                  </p>
                  <p className='mt-1 text-sm leading-6 text-gray-600'>
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>
                {/*<label*/}
                {/*  htmlFor='photo'*/}
                {/*  className='block text-sm font-medium leading-6 text-gray-900'*/}
                {/*>*/}
                {/*  Photo*/}
                {/*</label>*/}
                {/*<div className='mt-2 flex items-center gap-x-3'>*/}
                {/*  <PhotoIcon*/}
                {/*    className='h-12 w-12 text-gray-300'*/}
                {/*    aria-hidden='true'*/}
                {/*  />*/}
                {/*  <button*/}
                {/*    type='button'*/}
                {/*    className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'*/}
                {/*  >*/}
                {/*    Change*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>

              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Title
                </label>
                <div className='mt-2'>
                  <div
                    className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      autoComplete='title'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='Baltimore Linux User Group - Monthly Meeting'
                    />
                  </div>
                </div>
              </div>


              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='restaurant'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Restaurant
                </label>
                <div className='mt-2'>
                  <div
                    className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type='text'
                      name='restaurant'
                      id='restaurant'
                      autoComplete='restaurant'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='CLOCK Restoration - Baltimore'
                    />
                  </div>
                </div>
              </div>

              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='restaurant'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Link
                </label>
                <div className='mt-2'>
                  <div
                    className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type='text'
                      name='link'
                      id='link'
                      autoComplete='url'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='https://www.yelp.com/biz/clock-restoration-baltimore'
                    />
                  </div>
                </div>
              </div>

              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='details'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Details
                </label>
                <div className='mt-2'>
                  <textarea
                    id='details'
                    name='details'
                    rows={3}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
                <p className='mt-3 text-sm leading-6 text-gray-600'>
                  Write any additional details.
                </p>
              </div>

              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='cap'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Attendance Cap
                </label>
                <div className='mt-2'>
                  <div
                    className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type='number'
                      name='cap'
                      id='cap'
                      autoComplete='number'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='5'
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-2 col-start-4">
                <div className=''>Date</div>
                <Date dateDay={dateDay} dateMonth={dateMonth} dateYear={dateYear} setDateDay={setDateDay}
                      setDateMonth={setDateMonth} setDateYear={setDateYear}/>
              </div>

              {/* TODO: time */}

              <div className='col-span-2 col-start-5 content-end px-0'>
                <button
                  className='float-right rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-gray-600 text-white hover:bg-blue-700'>
                  Bussin!
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
