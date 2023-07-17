import Image from 'next/image'
import React from 'react'
import Service_Box from './service-box'

const Services = () => {
    return (
        <section className=" flex md:flex-row flex-col justify-between">
            <div className='md:w-1/2 w-full'>
                <div className="container mx-auto px-4">
                    <div className="content-holder grid md:grid-cols-2 grid-cols-1 [&>div:nth-child(1)]:md:border-b [&>div:nth-child(1)]:md:border-r [&>div:nth-child(3)]:md:border-t-0 [&>div:nth-child(4)]:md:border-t [&>div:nth-child(4)]:md:border-l [&>div:nth-child(1)]:border-b [&>div:nth-child(1)]:border-r-0 [&>div:nth-child(3)]:border-t [&>div:nth-child(4)]:border-t [&>div:nth-child(4)]:border-l-0 ">
                        <Service_Box
                            img="/images/icons/idea.png"
                            title="UI / UX Strategy"
                            content=" We deliver content with a kick! Vistors will flock to
                        your website to view featured blogs, articles and
                        website."
                        />
                        <Service_Box
                            img="/images/icons/laptop.png"
                            title="Design &amp; Development"
                            content="Impress and boost your sales with our website design
                                    services. Our experts will discuss and create a tailored
                                    website."
                        />
                        <Service_Box
                            img="/images/icons/analytics.png"
                            title="Marketing"
                            content="We deliver content with a kick! Vistors will flock to
                                    your website to view featured blogs, articles and
                                    website."
                        />
                        <Service_Box
                            img="/images/icons/picture.png"
                            title="Photography"
                            content="We deliver content with a kick! Vistors will flock to
                                    your website to view featured blogs, articles and
                                    website."
                        />
                    </div>
                </div>
            </div>
            <div className="image-holder md:w-1/2 w-full relative">
                <Image src="/images/home/services-1-01.jpg" height={500} width={500} alt="img" className='object-cover h-full w-full object-center ' />
            </div>
        </section>
    )
}

export default Services