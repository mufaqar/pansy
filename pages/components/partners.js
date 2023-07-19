import React from 'react'
import Partner from './partner-box'

const Partners = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div className="mb-10">
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
                        Custom_class="bg-primary" />
                    <Partner
                        img="/images/icons/2.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                    <Partner
                        img="/images/icons/3.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                    <Partner
                        img="/images/icons/4.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                    <Partner
                        img="/images/icons/5.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                    <Partner
                        img="/images/icons/6.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                    <Partner
                        img="/images/icons/7.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                    <Partner
                        img="/images/icons/8.png"
                        Custom_class="bg-BgGray hover:bg-primary" />
                </div>
            </div>
        </section>
    )
}

export default Partners