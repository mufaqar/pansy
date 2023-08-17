import React from 'react'
import Partner from './partner-box'

const Partners = ({ anim, view }) => {
    return (
        <section className='py-16' ref={view}>
            <div className='container mx-auto px-4'>
                <div className="mb-10" style={{
                    transform: anim ? "none" : "translateX(-200px)",
                    opacity: anim ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        Our Partners
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-medium text-txt_clr text-center mt-5'>
                        You Can Easily Change the Our Happy Costomer Partners logo Appearance
                    </p>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
                    <Partner
                        img="/images/icons/1.png"
                        Custom_class="bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/2.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/3.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/4.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/5.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/6.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/7.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                    <Partner
                        img="/images/icons/8.png"
                        Custom_class="bg-BgGray hover:bg-primary" 
                        anim={anim}
                        />
                </div>
            </div>
        </section>
    )
}

export default Partners