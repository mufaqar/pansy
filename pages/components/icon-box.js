import Image from 'next/image'
import React from 'react'

const Icon_Box = ({ img, title, anim }) => {
    return (
        <div className="px-4 py-10" 
        style={{
            transform: anim ? "none" : "scale(0)",
            opacity: anim ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
            <Image src={img} alt='img' height={42} width={42} className='mx-auto w-8 h-8 object-contain' />
            <h3 className='text-xl font-semibold text-title_clr text-center my-5'>
                {title}
            </h3>
        </div>
    )
}

export default Icon_Box