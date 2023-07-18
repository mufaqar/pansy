import Image from 'next/image'
import React from 'react'

const Partner = ({ img, Custom_class }) => {
    return (
        <div className={`px-4 h-[260px] w-full  flex justify-center items-center ${Custom_class}`}>
            <div className=' '>
                <Image src={img} alt='img' height={42} width={42} className="h-auto w-auto" />
            </div>
        </div>
    )
}

export default Partner