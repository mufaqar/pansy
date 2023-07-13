import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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
            <section className="main-slider">
                <Slider {...settings}>
                    {Slide_BG.map((item, idx) => {
                        return (
                            <div className={`${item?.img} bg-center bg-no-repeat bg-cover `} key={idx}>
                                <div className="container mx-auto px-4 h-screen flex md:flex-row flex-col items-center justify-center">
                                    <div className="md:w-1/2 w-full"></div>
                                    <div className="bg-white/60 md:w-1/2 w-full md:p-14 p-7 max-w-[711px] shadow-sm">
                                        <h1 className="md:text-5xl text-3xl font-semibold text-title_clr uppercase md:mb-24 mb-7">
                                            {item?.title}
                                        </h1>
                                        <p className="text-lg font-normal text-title_clr md:mb-16 mb-7">

                                        </p>
                                        <div>
                                            <Link href="#" className="text-base font-medium uppercase px-7 py-3 border-primary border-y-2">
                                                {item.btn_txt}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </section>
        );
    }
}


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "#202121" }}
            onClick={onClick}
        ></button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ ...style, display: "block", background: "#202121" }}
            onClick={onClick}
        ></button>
    );
}



export const Slide_BG = [
    {
        title: "We believe great design can make a good idea even better.",
        subtitle: "Toi is a full-service digital agency.",
        btn_txt: "Purchase Now",
        btn_link: "#",
        img: "bg-[url('/images/home/slides/1.jpg')]",
    },
    {
        title: "We believe great design can make a good idea even better.",
        subtitle: "Toi is a full-service digital agency.",
        btn_txt: "Purchase Now",
        btn_link: "#",
        img: "bg-[url('/images/home/slides/2.jpg')]",
    },
    {
        title: "We believe great design can make a good idea even better.",
        subtitle: "Toi is a full-service digital agency.",
        btn_txt: "Purchase Now",
        btn_link: "#",
        img: "bg-[url('/images/home/slides/3.jpg')]",
    },
];