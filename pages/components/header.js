import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
//import { NavLinks } from '../const/navlinks';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='bg-BgGray py-3 z-50'>
      <div className="container mx-auto px-4">
        <div className='flex md:gap-12 items-center'>
          <div className="md:w-1/4 w-1/2">
            <Link href="/">
              <Image src="/images/hi-res-logo.png" alt="logo" width={200} height={200} />
            </Link>
          </div>
          <nav className='md:w-3/4 w-1/2'>
            <button onClick={() => setOpen(!open)} className={`md:hidden block ml-auto`}>
              <AiOutlineMenu className='w-6 h-6' />
            </button>
            <ul className={`w-full gap-4 items-center justify-end z-50 ${open ? 'absolute top-20 flex flex-col gap-6 p-10 left-0 right-0 w-full bg-BgGray' : 'hidden md:flex'}`}>
              {NavLinks.map((item, idx) => {
                return <li key={idx} >
                  <Link href={item.link} className="text-base font-semibold uppercase text-primary hover:text-[#f6a087]" >
                    {item.name}
                  </Link>
                </li>
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export const NavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];





