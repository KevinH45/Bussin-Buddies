'use client';

import {CheckCircleIcon, PhotoIcon} from '@heroicons/react/24/solid';
import { useState, useEffect} from "react";
import { days, months, years } from "@/components/picker/dates";
import Date, { DDVal } from "@/components/picker/Date";
import * as React from "react";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import {PlusIcon} from "@heroicons/react/20/solid";
import {flag} from "arg";

const meetupSample =     {
    id: 1,
    title: 'QuHacks Dinner',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    date: 'Dec 16, 2023',
    datetime: '2023-12-16',
    imageUrl: "https://s3-media0.fl.yelpcdn.com/bphoto/55ytTjhnJ8ka0O4ccaV6aA/o.jpg",
    author: {
      id: 1,
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }

export default function Post() {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("First");
  const [description, setDescription] = useState<string>("Last");
  const [date, setDate] = useState<string>("Last");
  const [datetime, setDatetime] = useState<string>("...");
  const [imageUrl, setImageUrl] = useState<string>("...");
  const [people, setPeople] = useState<string[]>([]);
  const [author, setAuthor] = useState<{id: number, name: string, imageUrl: string}>({id: 0, name: "N/A", imageUrl: ""});
  const badSlug = usePathname();
  const slug = badSlug.split("/")[badSlug.split("/").length - 1]
  const [going, setGoing] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/api/listings/" + slug)
      .then(response => {
        if (!response.ok) {
          setId(meetupSample.id)
          setTitle(meetupSample.title)
          setDescription(meetupSample.description)
          setDate(meetupSample.date)
          setDatetime(meetupSample.datetime)
          setImageUrl(meetupSample.imageUrl)
          setAuthor(meetupSample.author)
          // throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: any) => {
        console.log(data)
        setTitle(data.title)
        setDescription(data.description)
        setDate(data.date)
        setDatetime(data.datetime)
        setImageUrl("https://s3-media0.fl.yelpcdn.com/bphoto/55ytTjhnJ8ka0O4ccaV6aA/o.jpg")
        setAuthor(data.author_descriptor)
        setPeople(data.people)
      })
  }, []);

  return (
    <div className='p-5 flex justify-center'>
      <form className="">
        <div className=''>
          <div className='pb-12'>
            <article key={id} className="flex max-w-xl flex-col content-center items-start justify-between">
              <img src={imageUrl} className="py-3" alt="Restuarant Image"/>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={datetime} className="text-gray-500 text-base">
                  {date}
                </time>
                {/*<a*/}
                {/*  href={category.href}*/}
                {/*  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"*/}
                {/*>*/}
                {/*  {category.title}*/}
                {/*</a>*/}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"/>
                    {title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
              </div>
              <div className="pt-8 w-full justify-center items-center flex">
                <button
                  type="button"
                  onClick={() => setGoing(!going)}
                  className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {going ? "Going" : "Want to go"}
                    {going ? <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" /> : <PlusIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />}

                </button>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={`/profile/${people[0]}`}>
                      <span className="absolute inset-0"/>
                      {author.name}
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </form>
    </div>
  );
}
