import Image from 'next/image'
import React from 'react'

const ProjectBox = ({ img }) => {
    return (
        <div className="relative group">
            <Image src={img} height={500} width={500} alt="img" className='w-full object-cover' />
            <div className="absolute inset-0 bg-white/90 flex justify-center items-center opacity-0 group-hover:opacity-100">
                <div className='p-4'>
                    <h2 className='text-xl font-medium text-title_clr uppercase text-center mb-5'>Our Recent Projects</h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-normal text-txt_clr text-center mt-5'>
                        Our Effective Work Going To Fill a Large Part Of Your Business
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox