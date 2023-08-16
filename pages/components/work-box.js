import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WorkBox({ img, title, date }) {
    return (
        <div className='h-full relative group'>
            <Image src={img} alt='img' width={100} height={100} className='w-full h-full' />
            <div className='bg-txt_clr/50 group-hover:bg-[#6fdec6]/80 flex flex-col justify-between absolute top-3 bottom-3 left-3 right-3 py-12 px-4'>
                <div className=''>
                    <Link href="#" className='text-xs font-normal text-white block w-full mb-5'>
                        {date}
                    </Link>
                    <Link href="#" className='text-lg font-semibold uppercase text-white block w-full'>
                        {title}
                    </Link>
                </div>
                <div>
                    <Link href="#" className="text-base font-medium px-5 py-2.5 border-white border bg-white text-txt_clr hover:bg-txt_clr hover:text-white hover:border-txt_clr">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}
