import Image from 'next/image'
import React from 'react'

export default function Gallery() {
    return (
        <div>
            <ul className='grid grid-cols-3 gap-3'>
                <li>
                    <Image src="/images/blog/2-column/1.jpg" alt='img' width={100} height={70} className='w-full h-full' />
                </li>
                <li>
                    <Image src="/images/blog/2-column/2.jpg" alt='img' width={100} height={70} className='w-full h-full' />
                </li>
                <li>
                    <Image src="/images/blog/2-column/3.jpg" alt='img' width={100} height={70} className='w-full h-full' />
                </li>
                <li>
                    <Image src="/images/blog/2-column/4.jpg" alt='img' width={100} height={70} className='w-full h-full' />
                </li>
                <li>
                    <Image src="/images/blog/2-column/5.jpg" alt='img' width={100} height={70} className='w-full h-full' />
                </li>
                <li>
                    <Image src="/images/blog/2-column/6.jpg" alt='img' width={100} height={70} className='w-full h-full' />
                </li>
            </ul>
        </div>
    )
}
