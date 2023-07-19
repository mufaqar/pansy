import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post_Box = ({ img, title, content, author, date }) => {
    return (
        <div>
            <div>
                <Image src={img} height={250} width={250} alt="img" className='w-full object-cover ' />
            </div>
            <div className='py-7'>
                <Link href="#" className='text-lg font-medium text-title_clr text-center mb-2'>
                    {title}
                </Link>
                <p className='text-base font-medium text-txt_clr/80 mt-5'>
                    <Link href="#" className='text-base font-medium text-txt_clr text-center'>
                        {author}
                    </Link> | <Link href="#" className='text-base font-medium text-txt_clr text-center'>
                        {date}
                    </Link>
                </p>
                <p className='text-base font-medium text-txt_clr/80 my-5'>
                    {content}
                </p>
                <div className="w-10 h-[2px] bg-primary mt-1"></div>
            </div>
        </div>
    )
}

export default Post_Box