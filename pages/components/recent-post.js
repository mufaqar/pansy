import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Recent_Post({ img, title, content }) {
    return (
        <div className='flex gap-4 items-center'>
            <div className='w-1/3'>
                <Image src={img} alt='team' width={100} height={70} className='w-full h-full' />
            </div>
            <div className='w-2/3'>
                <Link href="#" className='text-base font-bold '>
                    {title}
                </Link>
                <p className='text-base font-bold text-txt_clr/80'>
                    {content}
                </p>
            </div>
        </div>
    )
}
