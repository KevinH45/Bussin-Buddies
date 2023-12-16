'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState, useEffect} from "react";
import { days, months, years } from "@/components/picker/dates";
import Date, { DDVal } from "@/components/picker/Date";
import * as React from "react";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export default function Post() {
  const [firstName, setFirstName] = useState<string>("First");
  const [lastName, setLastName] = useState<string>("Last");
  const [userBio, setBio] = useState<string>("...");
  const badSlug = usePathname();
  const slug = badSlug.split("/")[badSlug.split("/").length - 1]
  console.log(slug)

  useEffect(() => {
    fetch("/api/users/" + slug)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setBio(data.bio)
      })
  });

  return (
    <div className='items-center p-5'>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-9 gap-x-6 gap-y-8'>
              <div className='col-span-3 col-start-4'>
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

              <div className='col-span-2 col-start-4'>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  <h1>
                    {firstName} {lastName}
                  </h1>
                </label>
              </div>

              <div className='col-span-1'>
                <div className='m-2 flex items-center gap-x-3 float-right'>
                  <PhotoIcon
                    className='h-12 w-12 text-gray-300'
                    aria-hidden='true'
                  />
                </div>
              </div>

              <div className='col-span-3 col-start-4'>
                <label
                  htmlFor='title'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  <p>
                    {slug}
                  </p>
                  <p>
                   {userBio}
                  </p>
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
