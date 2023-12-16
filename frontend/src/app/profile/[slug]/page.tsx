'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState, useEffect} from "react";
import { days, months, years } from "@/components/picker/dates";
import Date, { DDVal } from "@/components/picker/Date";
import * as React from "react";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const meetupSample =   {
  id: 1,
  title: 'Boost your conversion rate',
  description:
    'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/55ytTjhnJ8ka0O4ccaV6aA/o.jpg",
  author: {
    id: 1,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
}

export default function Post() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userBio, setBio] = useState<string>("...");
  const [userImage, setImage] = useState<string>("...")
  const badSlug = usePathname();
  const slug = badSlug.split("/")[badSlug.split("/").length - 1]
  console.log(slug)

  useEffect(() => {
    fetch("/api/users/" + slug)
      .then(response => {
        if (!response.ok) {
          setFirstName(meetupSample.author.name)
          setBio(meetupSample.description)
          setImage(meetupSample.author.imageUrl)
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
          <div className='pb-12'>
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
                  className='block text-sm font-medium leading-6 text-gray-900'>
                  <h1>
                    {firstName} {lastName}
                  </h1>
                </label>
              </div>

              <div className='col-span-1'>
                <div className='m-2 flex items-center gap-x-3 float-right'>
                  <img className='h-12 w-12 rounded-full' src={userImage}>
                  </img>
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
