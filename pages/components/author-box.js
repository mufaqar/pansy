import Image from 'next/image'
import React from 'react'

export default function AuthorBox() {
    return (
        <div>
            <Image src="/images/team/2.jpg" alt='team' width={100} height={70} className='w-full max-h-64 object-cover object-top' />
            <p className='text-base font-bold text-txt_clr/80 mt-5'>
                Believe it or not, I'm walking on air. I never thought I could feel so free. Flying away on
            </p>
        </div>
    )
}
