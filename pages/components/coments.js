import Image from 'next/image'
import React from 'react'

const Coment = () => {
    return (
        <div className='flex gap-4 items-center'>
            <div>
                <Image src="/images/team/2.jpg" alt='team' width={100} height={70} className='min-w-[80px]' />
            </div>
            <div>
                <h6 className='text-base font-bold '>
                    Jane Doe
                </h6>
                <p className='text-base font-bold text-txt_clr/80'>
                    Some men give up their designs when they have almost reached the goal; While others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than ever before.
                </p>
            </div>
        </div>
    )
}

export default Coment