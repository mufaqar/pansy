import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";

const Testimonial = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return (
        <section className='py-16 bg-[url("/images/backgrounds/testim-bg.png")] bg-center bg-no-repeat bg-cover'>
            <div className='container mx-auto px-4'>
                <div className="mb-10">
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        What Poeple Says About Calla
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                </div>
                <div>
                    <Slider {...settings}>
                        {Feedback.map((item, idx) => {
                            return <div key={idx}>
                                <div className='max-w-[600px] mx-auto'>
                                    <p className='text-lg font-medium text-txt_clr text-center mt-5'>
                                        {item?.content}
                                    </p>
                                    <h4 className='text-xl font-semibold text-txt_clr text-center mt-7'>
                                        {item?.name}
                                    </h4>
                                    <Image src={item?.img} height={90} width={90} alt="img" className='w-20 h-20 rounded-full object-cover object-top mx-auto mt-8' />
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

export const Feedback = [
    {
        name: "Henri Matisse",
        content: "Some men give up their designs when they have almost reached the goal; While others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than ever before.",
        img: "/images/team/1.jpg",
    },
    {
        name: "Henri Matisse",
        content: "Some men give up their designs when they have almost reached the goal; While others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than ever before.",
        img: "/images/team/1.jpg",
    },
    {
        name: "Henri Matisse",
        content: "Some men give up their designs when they have almost reached the goal; While others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than ever before.",
        img: "/images/team/1.jpg",
    },
    {
        name: "Henri Matisse",
        content: "Some men give up their designs when they have almost reached the goal; While others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than ever before.",
        img: "/images/team/1.jpg",
    },
];