import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service_Box = ({ img, title, content }) => {
    return (
        <div className="px-4 py-16">
            <div className="">
                <Image src={img} alt="img" height={42} width={42} className='mx-auto' />
            </div>
            <h3 className='text-xl font-semibold text-title_clr text-center my-5'>
                {title}
            </h3>
            <p className='text-base font-normal text-txt_clr text-center'>
                {content}
            </p>
        </div>
    )
}

export default Service_Box