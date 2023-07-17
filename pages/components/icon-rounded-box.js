import Image from 'next/image'
import React from 'react'

const Icon_Rounded_Box = ({ img, title, content, Custom_bg }) => {
    return (
        <div className="px-4 py-10">
            <Image src={img} alt='img' height={42} width={42} className={`mx-auto w-20 h-20 p-4 rounded-full object-contain ${Custom_bg}`} />
            <h3 className='text-lg font-semibold text-title_clr uppercase text-center my-5'>
                {title}
            </h3>
            <div className="w-10 h-[2px] bg-primary mx-auto"></div>
            <div className="w-5 h-[2px] bg-primary mx-auto mt-1"></div>
            <p className='text-sm font-normal text-txt_clr text-center my-5'>
                {content}
            </p>
            <div className="w-10 h-[2px] bg-primary mx-auto"></div>
        </div>
    )
}

export default Icon_Rounded_Box