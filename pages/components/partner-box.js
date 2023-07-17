import Image from 'next/image'
import React from 'react'

const Partner = ({ img, Custom_class }) => {
    return (
        <div className={`px-4 py-20 ${Custom_class}`}>
            <div className=' w-full flex justify-center items-center'>
                <Image src={img} alt='img' height={42} width={42} className="h-auto w-auto" />
            </div>
        </div>
    )
}

export default Partner