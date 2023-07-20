import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import PageBanner from './components/page-banner';
import Image from 'next/image';
import Icon_Rounded_Box from './components/icon-rounded-box';
import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <Header />
      <PageBanner
        title="Contact Now"
        content="We're always open to talk to good people"
        Custom_bg="bg-[url(/images/backgrounds/1.jpg)]" />
      <section className=''>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 items-center'>
          <div className='px-4 md:py-16 py-10'>
            <div>
              <div className="mb-6">
                <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                  Let's Srart Talk
                </h2>
                <div className="w-10 h-[2px] bg-primary mx-auto"></div>
                <div className="w-5 h-[2px] bg-primary mx-auto mt-1"></div>
                <p className='text-lg font-medium text-txt_clr/80 text-center mt-5'>
                  Discuss your dream projects with us. Drop us a line below.
                </p>
              </div>
              <form>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                  <div className="w-full">
                    <label htmlFor="name" className="hidden mb-2">Name</label>
                    <input className={`px-5 py-4 text-sm font-medium bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Name" type="text" id="name" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="hidden mb-2">Email</label>
                    <input className={`px-5 py-4 text-sm font-medium bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Email" type="email" id="email" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="hidden mb-2">Phone</label>
                    <input className={`px-5 py-4 text-sm font-medium bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Phone" type="tel" id="phone" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="website" className="hidden mb-2">Website</label>
                    <input className={`px-5 py-4 text-sm font-medium bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Website" type="text" id="website" />
                  </div>
                </div>
                <div className="w-full my-7">
                  <textarea id="message" className={`px-5 py-4 text-sm font-medium bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20 h-[126px]`} rows={3} placeholder="Your Need & Description" ></textarea>
                </div>
                <div className=''>
                  <button type='submit' className="text-base font-medium px-10 py-3 border-primary border-y-2 bg-transparent text-primary hover:bg-primary hover:text-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='px-4 md:py-16 py-10'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
              <div className="px-4 py-8">
                <div className="">
                  <Image src="/images/icons/idea.png" alt="img" height={42} width={42} className='h-10 w-10 object-fill mx-auto' />
                </div>
                <ul className='grid justify-center mt-3'>
                  <li className='text-center'>
                    <Link href="mailto:info@callathemes.co.uk" target='_blank' className='text-base font-medium text-txt_clr text-center'>
                      info@callathemes.co.uk
                    </Link>
                  </li>
                  <li className='text-center'>
                    <Link href="mailto:helpdesk@callathemes.co.uk" target='_blank' className='text-base font-medium text-txt_clr text-center'>
                      helpdesk@callathemes.co.uk
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-8">
                <div className="">
                  <Image src="/images/icons/laptop.png" alt="img" height={42} width={42} className='h-10 w-10 object-fill mx-auto' />
                </div>
                <Link href="#" className='text-base font-medium text-txt_clr text-center mt-3 block mx-auto'>
                  120 King Street Lorem Ipsum Dummy Area United States
                </Link>
              </div>
              <div className="px-4 py-8">
                <div className="">
                  <Image src="/images/icons/analytics.png" alt="img" height={42} width={42} className='h-10 w-10 object-fill mx-auto' />
                </div>
                <ul className='grid justify-center mt-3'>
                  <li className='text-center'>
                    <Link href="telto:+923334753749" target='_blank' className='text-base font-medium text-txt_clr text-center'>
                      +923334753749
                    </Link>
                  </li>
                  <li className='text-center'>
                    <Link href="telto:+923026006280" target='_blank' className='text-base font-medium text-txt_clr text-center'>
                      +923026006280
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 py-8">
                <div className="">
                  <Image src="/images/icons/picture.png" alt="img" height={42} width={42} className='h-10 w-10 object-fill mx-auto' />
                </div>
                <ul className='grid justify-center mt-3'>
                  <li className='text-center'>
                    <Link href="mailto:info@callathemes.co.uk" target='_blank' className='text-base font-medium text-txt_clr text-center'>
                      info@callathemes.co.uk
                    </Link>
                  </li>
                  <li className='text-center'>
                    <Link href="mailto:helpdesk@callathemes.co.uk" target='_blank' className='text-base font-medium text-txt_clr text-center'>
                      helpdesk@callathemes.co.uk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 bg-BgGray'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
            <Icon_Rounded_Box
              title="Write Email Us"
              img="/images/icons/icon-3.png"
              content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
              Custom_bg="bg-black"
            />
            <Icon_Rounded_Box
              title="Our Address"
              img="/images/icons/icon.png"
              content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
              Custom_bg="bg-white hover:bg-black"
            />
            <Icon_Rounded_Box
              title="Call Us"
              img="/images/icons/icon-1.png"
              content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
              Custom_bg="bg-white hover:bg-black"
            />
            <Icon_Rounded_Box
              title="Experience"
              img="/images/icons/icon-2.png"
              content="Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
              Custom_bg="bg-white hover:bg-black"
            />
          </div>
        </div>
      </section>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4530225331205!2d-71.39623962214667!3d42.07634228938861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e46f8fa1bd8709%3A0x98820aa97a0e9d98!2s120%20King%20St%2C%20Franklin%2C%20MA%2002038!5e0!3m2!1sen!2sus!4v1689847514891!5m2!1sen!2sus" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[450px]'></iframe>
      </section>
      <Footer />
    </main>
  );
}
