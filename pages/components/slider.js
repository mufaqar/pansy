import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                {Slide_BG.map((item, idx) => {
                    return (
                        <section className={`w-full h-full`} key={idx}>
                            <img
                                src={item?.img}
                                alt="img"
                                className="object-cover"
                            />

                        </section>
                    );
                })}
            </Slider>
        );
    }
}
export const Slide_BG = [
    {
        id: '1',
        img: "/images/home/slides/1.jpg",
    },
    {
        id: '2',
        img: "/images/home/slides/2.jpg",
    },
    {
        id: '3',
        img: "/images/home/slides/3.jpg",
    },
];