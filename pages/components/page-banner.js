import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";

const PageBanner = ({ title, content, Custom_bg }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <section ref={ref} className={`min-h-[450px] bg-blend-multiply bg-black/75 grid items-center py-24 bg-center bg-no-repeat bg-cover ${Custom_bg}`}>
            <div className='container mx-auto px-4'>
                <div className='max-w-[536px] mx-auto'
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    {title ? (<h1 className="md:text-5xl text-3xl font-semibold text-white text-center uppercase mb-7">
                        {title}
                    </h1>) : ""}

                    {content ? (<p className="text-xl font-medium text-white text-center">
                        {content}
                    </p>) : ""}
                </div>
            </div>
        </section>
    )
}

export default PageBanner