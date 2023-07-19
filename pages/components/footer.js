import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterest, BiLogoInstagramAlt } from 'react-icons/bi'
import { LiaGoogle } from 'react-icons/lia'

export default function Footer() {
  return (
    <footer className='py-16 bg-BgGray'>
      <div className='container mx-auto px-4'>
        <div>
          <Link href="/">
            <Image src="/images/hi-res-logo.png" alt="logo" width={200} height={200} className='mx-auto' />
          </Link>
        </div>
        <ul className='flex gap-7 mx-auto w-fit my-10'>
          <li>
            <Link href="#" className='text-lg font-medium text-txt_clr hover:text-[#f6a087] text-center'>
              <BiLogoFacebook size={28} />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-lg font-medium text-txt_clr hover:text-[#f6a087] text-center'>
              <BiLogoTwitter size={28} />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-lg font-medium text-txt_clr hover:text-[#f6a087] text-center'>
              <BiLogoPinterest size={28} />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-lg font-medium text-txt_clr hover:text-[#f6a087] text-center'>
              <LiaGoogle size={28} />
            </Link>
          </li>
          <li>
            <Link href="#" className='text-lg font-medium text-txt_clr hover:text-[#f6a087] text-center'>
              <BiLogoInstagramAlt size={28} />
            </Link>
          </li>
        </ul>
        <p className='text-sm font-medium text-txt_clr text-center'>
          Pansy© Copyright 2018, All Rights Reserved  xpertdesignerr
        </p>
      </div>
    </footer>
  );
}
