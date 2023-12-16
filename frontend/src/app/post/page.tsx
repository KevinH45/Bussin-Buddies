/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Post() {
  return (
    <div className='items-center p-5'>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p> */}

            <div className='mt-10 grid grid-cols-9 gap-x-6 gap-y-8'>
              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='restaurant'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Restaurant
                </label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type='text'
                      name='restaurant'
                      id='restaurant'
                      autoComplete='restaurant'
                      className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                      placeholder='McDonalds'
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

              <div className='col-span-2 col-start-4'>
                  Calendar
              </div>

              <div className='content-end col-span-1 px-0'>
                <button className="text-sm text-gray-600 bg-green-500 hover:bg-blue-700 text-white float-right font-bold py-2 px-4 rounded-full">
                  Post
                </button>
              </div>

              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='photo'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Photo
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <UserCircleIcon
                    className='h-12 w-12 text-gray-300'
                    aria-hidden='true'
                  />
                  <button
                    type='button'
                    className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
