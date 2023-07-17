import Image from 'next/image'
import React from 'react'

const Contact_Section = () => {
    return (
        <section className=''>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div>
                    <Image src="/images/home/portfolio/01/5.jpg" height={500} width={500} alt="img" className='w-full h-full object-cover' />
                </div>
                <div className='md:px-10 px-4 md:py-16 py-10'>
                    <div>
                        <Image src="/images/icons/cofee.png" alt='img' height={42} width={42} className={`mx-auto w-16 h-16 object-contain`} />
                        <div className="my-6">
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
                                    <input className={`px-5 py-4 text-sm font-normal bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Name" type="text" id="name" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="hidden mb-2">Email</label>
                                    <input className={`px-5 py-4 text-sm font-normal bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Email" type="email" id="email" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="phone" className="hidden mb-2">Phone</label>
                                    <input className={`px-5 py-4 text-sm font-normal bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Phone" type="tel" id="phone" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="website" className="hidden mb-2">Website</label>
                                    <input className={`px-5 py-4 text-sm font-normal bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Website" type="text" id="website" />
                                </div>
                            </div>
                            <div className="w-full my-7">
                                <textarea id="message" className={`px-5 py-4 text-sm font-normal bg-transparent placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20 h-[126px]`} rows={3} placeholder="Your Need & Description" ></textarea>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className="text-base font-normal px-10 py-3 border-primary border bg-txt_clr text-white hover:bg-transparent hover:text-txt_clr">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact_Section