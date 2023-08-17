import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Post_Box = ({ img, title, content, author, date }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} style={{
            transform: isInView ? "none" : "scale(0.5)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
            <div>
                <Image src={img} height={250} width={250} alt="img" className='w-full object-cover ' />
            </div>
            <div className='py-7'>
                <Link href="#" className='text-lg font-medium text-title_clr text-center mb-2'>
                    {title}
                </Link>
                <p className='text-base font-medium text-txt_clr/80 mt-5'>
                    <Link href="#" className='text-base font-medium text-txt_clr text-center'>
                        {author}
                    </Link> | <Link href="#" className='text-base font-medium text-txt_clr text-center'>
                        {date}
                    </Link>
                </p>
                <p className='text-base font-medium text-txt_clr/80 my-5'>
                    {content}
                </p>
                <div className="w-10 h-[2px] bg-primary mt-1"></div>
            </div>
        </div>
    )
}

export default Post_Box