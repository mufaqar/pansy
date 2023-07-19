import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service_Box = ({ img, title, content, btn_link }) => {
    return (
        <div className="px-4 py-16">
            <div className="">
                <Image src={img} alt="img" height={42} width={42} className='mx-auto' />
            </div>
            <h3 className='text-xl font-semibold text-title_clr text-center my-5'>
                {title}
            </h3>
            <p className='text-base font-medium text-txt_clr text-center'>
                {content}
            </p>
            {btn_link ? (<div className='mt-8 text-center'>
                <Link href="#" className="text-sm font-medium uppercase px-6 py-2 border-primary/40 border-y-2 bg-transparent hover:bg-primary hover:text-white">
                    Read More
                </Link>
            </div>) : ""}
        </div>
    )
}

export default Service_Box