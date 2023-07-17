import React from 'react'
import Icon_Rounded_Box from './icon-rounded-box'

const Why_Choose_Us = () => {
    return (
        <section className='py-16 bg-BgGray'>
            <div className='container mx-auto px-4'>
                <div className="mb-12">
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        Why Choose Us
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-normal text-txt_clr text-center mt-5'>
                        Our Energetic Minds Help Your Business to Achieve Online
                    </p>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
                    <Icon_Rounded_Box title="ADVERTISING"
                        img="/images/icons/icon-3.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-black"
                    />
                    <Icon_Rounded_Box title="Support"
                        img="/images/icons/icon.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-white"
                    />
                    <Icon_Rounded_Box title="Production"
                        img="/images/icons/icon-1.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-white"
                    />
                    <Icon_Rounded_Box title="Experience"
                        img="/images/icons/icon-2.png"
                        content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet"
                        Custom_bg="bg-white"
                    />
                </div>
            </div>
        </section>
    )
}

export default Why_Choose_Us