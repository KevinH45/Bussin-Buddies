'use client';

import Image from "next/image";

const posts = [
  {
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
  },
  {
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
  },
  {
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
]

import Head from 'next/head';
import * as React from 'react';
import {useEffect, useState} from 'react';
import Link from "next/link";

export default function Meetups() {
  const [meetups, setMeetups] = useState<any>()
  useEffect(() => {
    fetch("http://localhost:5000/api/listings", {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem("accessToken")
      }
    }).then((e) => e.json()).then((v) => {
      setMeetups(v)
    })
  }, [])
  if (!meetups) return <p>Loading</p>
  return (
    <main>
      <div className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            {/*<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>*/}
            {/*<p className="mt-2 text-lg leading-8 text-gray-600">*/}
            {/*  Learn how to grow your business with our expert advice.*/}
            {/*</p>*/}
            <div className="space-y-16 sm:mt-4 sm:pt-4">
              {meetups.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                  <img src={"https://s3-media0.fl.yelpcdn.com/bphoto/55ytTjhnJ8ka0O4ccaV6aA/o.jpg"} className="py-3" alt="Restuarant Image" />
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500 text-base">
                      {post.date}
                    </time>
                    {/*<a*/}
                    {/*  href={post.category.href}*/}
                    {/*  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"*/}
                    {/*>*/}
                    {/*  {post.category.title}*/}
                    {/*</a>*/}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/meetup/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author_descriptor.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <Link href={`/profile/${post.people[0]}`}>
                          <span className="absolute inset-0" />
                          {post.author_descriptor.name}
                        </Link>
                      </p>
                      {/*<p className="text-gray-600">{post.author.role}</p>*/}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
