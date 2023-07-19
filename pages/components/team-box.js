import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'

const Team_Box = ({ img, position, content, teamlink, name, designation, fblink, twitterlink, linkedinlink }) => {
    return (
        <div className='group'>
            <div className='relative'>
                <Image src={img} height={250} width={250} alt="img" className='w-full object-cover grayscale ' />
                <div className='bg-white/90 p-5 absolute top-auto bottom-12 left-12 right-12 h-fit group-hover:opacity-100 opacity-0'>
                    <h5 className='text-lg font-medium text-title_clr text-center mb-5'>
                        {position}
                    </h5>
                    <p className='text-sm leading-7 font-medium text-txt_clr text-center mb-5'>
                        {content}
                    </p>
                    <Link href={`${teamlink}`} className='text-3xl text-txt_clr hover:text-[#f6a087] text-center block'>
                        <HiOutlineArrowNarrowRight strokeWidth={1} className='w-16 mx-auto' />
                    </Link>
                </div>
            </div>
            <div className='py-5 bg-primary'>
                <h4 className='text-lg font-medium text-white text-center mb-1'>
                    {name}
                </h4>
                <p className='text-base font-medium text-white/80 text-center'>
                    {designation}
                </p>
                <ul className='mx-auto flex gap-3 justify-center mt-2'>
                    <li>
                        <Link href={`${fblink}`} className='text-base font-medium text-white hover:text-[#f6a087] text-center'>
                            <BiLogoFacebook size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href={`${twitterlink}`} className='text-base font-medium text-white hover:text-[#f6a087] text-center'>
                            <BiLogoTwitter size={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href={`${linkedinlink}`} className='text-base font-medium text-white hover:text-[#f6a087] text-center'>
                            <BiLogoLinkedin size={20} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Team_Box