import Image from 'next/image'
import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Partner = ({ img, Custom_class }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className={`px-4 h-[260px] w-full  flex justify-center items-center ${Custom_class}`}
            style={{
                transform: isInView ? "none" : "scale(0.5)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
            <div className=' '>
                <Image src={img} alt='img' height={42} width={42} className="h-auto w-auto" />
            </div>
        </div>
    )
}

export default Partner