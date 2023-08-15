import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RelatedPost = ({ img, title, content, author, date }) => {
    return (
        <div>
            <div>
                <Image src={img} height={250} width={250} alt="img" className='w-full object-cover ' />
            </div>
            <div className='py-5'>
                <Link href="#" className='text-xl font-medium text-title_clr text-center mb-2'>
                    {title}
                </Link>
                <p className='text-sm font-medium text-txt_clr/80 mt-3'>
                    <Link href="#" className=''>
                        {author}
                    </Link> | <Link href="#" className=''>
                        {date}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default RelatedPost