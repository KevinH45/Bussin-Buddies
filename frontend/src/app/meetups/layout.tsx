import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: 'Meetups',
  description: 'Meetups',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">
    <NavBar selected="Meetups"/>
    {children}
  </div>;
}
