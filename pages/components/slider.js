import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export default class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <section className="main-slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {Slide_BG.map((item, idx) => {
                        return (
                            <div className={`${item?.img} bg-center bg-no-repeat bg-cover `} key={idx}>
                                <div className="container mx-auto px-4 h-screen flex md:flex-row flex-col items-center justify-center">
                                    <div className="md:w-1/2 w-full"></div>
                                    <div className="bg-white/60 md:w-1/2 w-full md:p-14 p-7 max-w-[711px] shadow-sm">
                                        <h1 className="md:text-5xl text-3xl font-semibold text-title_clr uppercase md:mb-24 mb-7">
                                            {item?.title}
                                        </h1>
                                        <p className="text-lg font-medium text-title_clr md:mb-16 mb-7">
                                            {item?.subtitle}
                                        </p>
                                        <div>
                                            <Link href="#" className="text-base font-medium uppercase px-7 py-3 border-primary border-y-2 bg-transparent hover:bg-primary hover:text-white">
                                                {item?.btn_txt}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <button className="absolute top-2/3 md:left-4 left-[3px] transform -translate-y-0 bg-primary text-white w-10 h-10 flex items-center justify-end text-2xl" onClick={this.previous}>
                    <BsArrowLeft />
                </button>
                <button className="absolute top-2/3 md:right-4 right-[3px] transform -translate-y-0 bg-primary text-white w-10 h-10 flex items-center justify-start text-2xl" onClick={this.next}>
                    <BsArrowRight />
                </button>
            </section>
        );
    }
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