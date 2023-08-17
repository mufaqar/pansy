import Image from 'next/image'
import React from 'react'

const Partner = ({ img, Custom_class, anim }) => {
    return (
        <div className={`px-4 h-[260px] w-full  flex justify-center items-center ${Custom_class}`}
            style={{
                transform: anim ? "none" : "scale(0.5)",
                opacity: anim ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
            <div className=' '>
                <Image src={img} alt='img' height={42} width={42} className="h-auto w-auto" />
            </div>
        </div>
    )
}

export default Partner