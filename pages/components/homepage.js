import React from 'react';
import Header from './header';
import SliderComponent from './slider';
import Link from 'next/link';
import Image from 'next/image';
import Signature from '../../public/images/signature.png';
import Services from './services';

export default function Homepage() {
  return (
    <>
      <Header />
      <SliderComponent />
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-[700px] mx-auto'>
            <p className='text-2xl leading-7 font-normal text-txt_clr text-center'>
              we are a creative studio focused on web, design Inspiration is the one word we love and we put it into our work everyday.
            </p>
            <div className='my-16 text-center'>
              <Link href="#" className="text-base font-medium uppercase px-7 py-3 border-primary/40 border-y-2">
                Explore More
              </Link>
            </div>
            <p className='text-lg font-normal text-txt_clr text-center'>
              All things will be clear and distinct</p>
            <p className='text-lg font-normal text-txt_clr text-center'>
              to the man who does not hurry; haste is blind and improvident.
            </p>
            <Image src={Signature} alt="signature.png" className='mx-auto mt-16' />
          </div>
        </div>
      </section>
      <Services />
      {/* <section id="going-down" className="intro pt-80 pb-80">
        <div className="container">
          <div className="row center wow fadeInDown">
            <div className="col-sm-12">
              <h1>
                Everything you see here is responsive and mobile-friendly
              </h1>
            </div>
            <div className="col-sm-12 lg-calla-btn pt-40 pb-40">
              <a href="#">Explore More</a>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec massa enim. Aliquam viverra at est ullamcorper
                sollicitudin. Proin a leo sit amet nunc malesuada imperdiet
                pharetra ut eros.
              </p>
            </div>
            <div className="col-sm-12 pt-30">
              <div className="ca ca-signature"></div>
            </div>
          </div>
        </div>
      </section>

       */}
    </>
  );
}
