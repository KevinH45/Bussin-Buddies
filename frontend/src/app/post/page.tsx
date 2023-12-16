'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { days, months, years } from "@/components/picker/dates";
import Date, { DDVal } from "@/components/picker/Date";
import * as React from "react";

export default function Post() {
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [user_email, setEmail] = useState<string>("");
  // const [user_password, setPassword] = useState<string>("");
  // const [dateDay, setDateDay] = useState<DDVal>(days[0]);
  // const [dateMonth, setDateMonth] = useState<DDVal>(months[0]);
  // const [dateYear, setDateYear] = useState<DDVal>(years[0]);

  const firstName = "a"
  const lastName = "b"
  const userBio = "sdfoihodsf"

  const onSubmit = (e: any) => {
    e.preventDefault()
  }

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
                  <h1>
                    ${firstName} ${lastName}
                  </h1>
                </label>
              </div>

              {/* TODO: time */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
