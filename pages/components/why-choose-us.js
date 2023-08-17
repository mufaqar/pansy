import React from 'react'
import Icon_Rounded_Box from './icon-rounded-box'

const Why_Choose_Us = ({ anim, view }) => {
    return (
        <section className='py-16 bg-BgGray' ref={view}>
            <div className='container mx-auto px-4'>
                <div className="mb-12"
                    style={{
                        transform: anim ? "none" : "translateX(-200px)",
                        opacity: anim ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}>
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        Why Choose Us
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-medium text-txt_clr text-center mt-5'>
                        Our Energetic Minds Help Your Business to Achieve Online
                    </p>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
                    <Icon_Rounded_Box title="ADVERTISING"
                        img="/images/icons/icon-3.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-black"
                        anim={anim}
                    />
                    <Icon_Rounded_Box title="Support"
                        img="/images/icons/icon.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-white hover:bg-black"
                        anim={anim}
                    />
                    <Icon_Rounded_Box title="Production"
                        img="/images/icons/icon-1.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-white hover:bg-black"
                        anim={anim}
                    />
                    <Icon_Rounded_Box title="Experience"
                        img="/images/icons/icon-2.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-white hover:bg-black"
                        anim={anim}
                    />
                </div>
            </div>
        </section>
    )
}

export default Why_Choose_Us