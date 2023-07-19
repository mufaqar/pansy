import React from 'react'

const PageBanner = ({ title, content, Custom_bg }) => {
    return (
        <section className={`min-h-[450px] bg-blend-multiply bg-black/75 grid items-center py-24 bg-center bg-no-repeat bg-cover ${Custom_bg}`}>
            <div className='container mx-auto px-4'>
                <div className='max-w-[536px] mx-auto'>
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