import React from 'react';
import PageBanner from "./components/page-banner";
import WorkBox from './components/work-box';

export default function Portfolio() {
  return (
    <main>
      <PageBanner
        title="Portfolio"
        content="Here are the key services to enhance your business performance"
        Custom_bg="bg-[url(/images/backgrounds/2.jpg)]"
      />

      <section className='py-16'>
        <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1'>
          <WorkBox img="/images/blog/4-column/1.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/2.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/3.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/4.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/5.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/6.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/7.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
          <WorkBox img="/images/blog/4-column/8.jpg"
            title="DESIGN YOU NEED EVERYDAY"
            date=" 31 OCTOBER 2015"
          />
        </div>
      </section>
    </main>
  )
}