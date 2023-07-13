import Image from 'next/image';
import React from 'react';
import ProjectBox from './project-box';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <div className="container mx-auto px-4 py-16">
          <div className="">
            <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>Our Recent Projects</h2>
            <div className="w-20 h-[2px] bg-primary mx-auto"></div>
            <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
            <p className='text-lg font-normal text-txt_clr text-center mt-5'>
              Our Effective Work Going To Fill a Large Part Of Your Business
            </p>
          </div>
        </div>
        <div className="bg-BgGray">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className='px-10'>
              <ProjectBox
                img="/images/home/portfolio/01/1.jpg" />
            </div>
            <div className=''>
              <ProjectBox
                img="/images/home/portfolio/01/2.jpg" />
              <div className='grid md:grid-cols-2 grid-cols-1'>
                <ProjectBox
                  img="/images/home/portfolio/01/3.jpg" />
                <ProjectBox
                  img="/images/home/portfolio/01/4.jpg" />
              </div>
            </div>

          </div>
        </div>
        <div className="bg-BgGray">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div className=''>
              <ProjectBox
                img="/images/home/portfolio/01/2.jpg" />
              <div className='grid md:grid-cols-2 grid-cols-1'>
                <ProjectBox
                  img="/images/home/portfolio/01/3.jpg" />
                <ProjectBox
                  img="/images/home/portfolio/01/4.jpg" />
              </div>
            </div>
            <div className='px-10'>
              <ProjectBox
                img="/images/home/portfolio/01/1.jpg" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
