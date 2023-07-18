import React from 'react';
import Header from './components/header';
import PageBanner from './components/page-banner';
import Service_Box from './components/service-box';
import Image from 'next/image';
import Why_Choose_Us from './components/why-choose-us';
import Footer from './components/footer';
import Counter_Section from './components/counter-section';
import Pricing_Tabels from './components/picing-tabels';

export default function Services() {
  return (
    <main>
      <Header />
      <PageBanner
        title="Calla Services"
        content="Here are the key services to enhance your business performance"
        Custom_bg="bg-[url(/images/backgrounds/2.jpg)]" />
      <section className=" flex md:flex-row flex-col justify-between">
        <div className='md:w-1/2 w-full'>
          <div className="md:px-10 px-4">
            <div className="content-holder grid md:grid-cols-2 grid-cols-1 items-center [&>div:nth-child(1)]:md:border-b [&>div:nth-child(1)]:md:border-r [&>div:nth-child(3)]:md:border-t-0 [&>div:nth-child(4)]:md:border-t [&>div:nth-child(4)]:md:border-l [&>div:nth-child(1)]:border-b [&>div:nth-child(1)]:border-r-0 [&>div:nth-child(3)]:border-t [&>div:nth-child(4)]:border-t [&>div:nth-child(4)]:border-l-0 ">
              <Service_Box
                img="/images/icons/idea.png"
                title="UI / UX Strategy"
                content=" We deliver content with a kick! Vistors will flock to
                          your website to view featured blogs, articles and
                          website."
                btn_link="#"
              />
              <Service_Box
                img="/images/icons/laptop.png"
                title="Design &amp; Development"
                content="Impress and boost your sales with our website design
                        services. Our experts will discuss and create a tailored
                        website."
                btn_link="#"
              />
              <Service_Box
                img="/images/icons/analytics.png"
                title="Marketing"
                content="We deliver content with a kick! Vistors will flock to
                        your website to view featured blogs, articles and
                        website."
                btn_link="#"
              />
              <Service_Box
                img="/images/icons/picture.png"
                title="Photography"
                content="We deliver content with a kick! Vistors will flock to
                        your website to view featured blogs, articles and
                        website."
                btn_link="#"
              />
            </div>
          </div>
        </div>
        <div className="image-holder md:w-1/2 w-full relative">
          <Image src="/images/services/right-holder.jpg" height={500} width={500} alt="img" className='object-cover h-full w-full object-center ' />
        </div>
      </section>
      <Why_Choose_Us />
      <section className=" flex md:flex-row flex-col justify-between">
        <div className="image-holder md:w-1/2 w-full relative">
          <Image src="/images/services/left-holder.jpg" height={500} width={500} alt="img" className='object-cover h-full w-full object-center ' />
        </div>
        <div className='md:w-1/2 w-full'>
          <div className="md:px-10 px-4">
            <div className="content-holder grid md:grid-cols-2 grid-cols-1 items-center [&>div:nth-child(1)]:md:border-b [&>div:nth-child(1)]:md:border-r [&>div:nth-child(3)]:md:border-t-0 [&>div:nth-child(4)]:md:border-t [&>div:nth-child(4)]:md:border-l [&>div:nth-child(1)]:border-b [&>div:nth-child(1)]:border-r-0 [&>div:nth-child(3)]:border-t [&>div:nth-child(4)]:border-t [&>div:nth-child(4)]:border-l-0 ">
              <Service_Box
                img="/images/icons/idea.png"
                title="UI / UX Strategy"
                content=" We deliver content with a kick! Vistors will flock to
                          your website to view featured blogs, articles and
                          website."
                btn_link="#"
              />
              <Service_Box
                img="/images/icons/laptop.png"
                title="Design &amp; Development"
                content="Impress and boost your sales with our website design
                        services. Our experts will discuss and create a tailored
                        website."
                btn_link="#"
              />
              <Service_Box
                img="/images/icons/analytics.png"
                title="Marketing"
                content="We deliver content with a kick! Vistors will flock to
                        your website to view featured blogs, articles and
                        website."
                btn_link="#"
              />
              <Service_Box
                img="/images/icons/picture.png"
                title="Photography"
                content="We deliver content with a kick! Vistors will flock to
                        your website to view featured blogs, articles and
                        website."
                btn_link="#"
              />
            </div>
          </div>
        </div>
      </section>
      <Counter_Section />
      <Pricing_Tabels />
      <Footer />
    </main>
  );
}
