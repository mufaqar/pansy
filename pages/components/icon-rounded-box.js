import Image from 'next/image'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Icon_Rounded_Box = ({ img, title, content, Custom_bg }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div className="px-4 py-10" ref={ref} style={{
            transform: isInView ? "none" : "scale(0.5)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}>
            <Image src={img} alt='img' height={42} width={42} className={`mx-auto w-20 h-20 p-4 rounded-full object-contain  ${Custom_bg}`} />
            <h3 className='text-lg font-semibold text-title_clr uppercase text-center my-5'>
                {title}
            </h3>
            <div className="w-10 h-[2px] bg-primary mx-auto"></div>
            <div className="w-5 h-[2px] bg-primary mx-auto mt-1"></div>
            <p className='text-sm font-medium text-txt_clr text-center my-5'>
                {content}
            </p>
            <div className="w-10 h-[2px] bg-primary mx-auto"></div>
        </div>
    )
}

export default Icon_Rounded_Box