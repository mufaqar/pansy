import Image from 'next/image'
import React from 'react'

const Icon_Box = ({ img, title }) => {
    return (
        <div className="px-4 py-10">
            <Image src={img} height={42} width={42} className='mx-auto w-8 h-8 object-contain' />
            <h3 className='text-xl font-semibold text-title_clr text-center my-5'>
                {title}
            </h3>
        </div>
    )
}

export default Icon_Box