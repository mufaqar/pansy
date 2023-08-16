import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Service_Box = ({ img, title, content, btn_link }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="px-4 py-16" ref={ref}>
            <div className="" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <Image src={img} alt="img" height={42} width={42} className='mx-auto' />
            </div>
            <h3 className='text-xl font-semibold text-title_clr text-center my-5' style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                {title}
            </h3>
            <p className='text-base font-medium text-txt_clr text-center' style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                {content}
            </p>
            {btn_link ? (<div className='mt-8 text-center' style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <Link href="#" className="text-sm font-medium uppercase px-6 py-2 border-primary/40 border-y-2 bg-transparent hover:bg-primary hover:text-white">
                    Read More
                </Link>
            </div>) : ""}
        </div>
    )
}

export default Service_Box