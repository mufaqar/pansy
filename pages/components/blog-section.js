import React from 'react'
import Post_Box from './post-box'
import { useRef } from "react";
import { useInView } from "framer-motion";

const Blog_Section = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className='py-16' ref={ref}>
            <div className='container mx-auto px-4'>
                <div className="mb-12" style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        BE AWARE OF NEWS
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-medium text-txt_clr text-center mt-5'>
                        You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                    <Post_Box
                        img="/images/blog/2-column/1.jpg"
                        title="MINIMUM USABLE DESIGN"
                        author="POSTED BY ADMIN"
                        date="31 OCTOBER 2015"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
                    />
                    <Post_Box
                        img="/images/blog/2-column/2.jpg"
                        title="YOU DESIGN IT, THEY DO IT"
                        author="POSTED BY ADMIN"
                        date="31 OCTOBER 2015"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
                    />
                    <Post_Box
                        img="/images/blog/2-column/3.jpg"
                        title="FOR A MORE READABLE WEB PAGE"
                        author="POSTED BY ADMIN"
                        date="31 OCTOBER 2015"
                        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
                    />
                </div>
            </div>
        </section>
    )
}

export default Blog_Section