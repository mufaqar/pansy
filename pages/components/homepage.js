import React from 'react';
import SliderComponent from './slider';
import Link from 'next/link';
import Image from 'next/image';
import Signature from '../../public/images/signature.png';
import Services from './services';

export default function Homepage({ anim, view }) {

  return (
    <>
      <SliderComponent anim={anim} view={view} />
      <section className='py-16' ref={view}>
        <div className='container mx-auto px-4'>
          <div className='max-w-[700px] mx-auto'>
            <p className='text-2xl leading-7 font-medium text-txt_clr text-center'
              style={{
                transform: anim ? "none" : "translateX(-200px)",
                opacity: anim ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
              we are a creative studio focused on web, design Inspiration is the one word we love and we put it into our work everyday.
            </p>
            <div className='my-16 text-center'
              style={{
                transform: anim ? "none" : "translateX(-200px)",
                opacity: anim ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}>
              <Link href="#" className="text-base font-medium uppercase px-7 py-3 border-primary/40 border-y-2 bg-transparent hover:bg-primary hover:text-white">
                Explore More
              </Link>
            </div>
            <p className='text-lg font-medium text-txt_clr text-center'>
              All things will be clear and distinct</p>
            <p className='text-lg font-medium text-txt_clr text-center'>
              to the man who does not hurry; haste is blind and improvident.
            </p>
            <Image src={Signature} alt="signature.png" className='mx-auto mt-16'
              style={{
                transform: anim ? "none" : "translatey(-50px)",
                opacity: anim ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }} />
          </div>
        </div>
      </section>
      <Services />
    </>
  );
}
