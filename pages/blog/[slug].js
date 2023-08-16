import React from 'react'
import PageBanner from '../components/page-banner'
import SideBar from '../components/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { HiPlus } from 'react-icons/hi'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from 'react-icons/bi'
import Coment from '../components/coments'
import RelatedPost from '../components/related-post'

function Single() {
    return (
        <main>
            <PageBanner
                title="Single Blog"
                content="We're always open to talk to good people"
                Custom_bg="bg-[url(/images/backgrounds/1.jpg)]" />

            <section className='py-16'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7'>
                    <div className='md:w-3/4 w-full'>
                        <div>
                            <Image src="/images/blog/2-column/1.jpg" alt='feature-img' width={550} height={200} className='w-full' />
                        </div>
                        <div className='mb-16'>
                            <ul className='flex gap-3 my-7'>
                                <li>
                                    <Link href="#" className="text-sm font-semibold uppercase px-4 py-1 border-primary border-y-2 bg-transparent text-primary hover:bg-primary hover:text-white">
                                        Graphic
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-sm font-semibold uppercase px-4 py-1 border-primary border-y-2 bg-transparent text-primary hover:bg-primary hover:text-white">
                                        Agency
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link href="#" className='text-2xl font-semibold uppercase text-title_clr text-center mb-5'>
                                    NEW APPROACH TO MOBILE TRENDS NEW UI
                                </Link>
                                <p className='text-lg font-medium text-txt_clr/80 mt-5 mb-12'>
                                    Believe it or not, I'm walking on ai. I never thought I could feel so free. Flying away on a, Believe it or not, I'm walking on ai. I never thought I could feel so free. Flying away on a,
                                </p>
                                <Link href="#" className="text-base font-medium px-5 py-3 border-primary border bg-txt_clr text-white hover:bg-transparent hover:text-txt_clr">
                                    Read more
                                </Link>
                            </div>
                        </div>
                        <div className='my-10 py-5 border-y flex flex-wrap gap-3 justify-between items-center'>
                            <ul className='flex gap-2 flex-wrap'>
                                <li className='flex gap-2'>
                                    <HiPlus className='bg-txt_clr/70 text-white text-2xl' />
                                    <span className='text-base font-bold '>
                                        0 Comments
                                    </span>
                                </li>
                            </ul>
                            <ul className='flex gap-2 flex-wrap items-center'>
                                <li className='flex gap-2'>
                                    <span className='text-base font-bold px-2 py-1'>
                                        55 Shares
                                    </span>
                                </li>
                                <li>
                                    <Link href="#" className='bg-txt_clr/70 hover:bg-black text-white px-2 py-1 flex gap-1 items-center'>
                                        <BiLogoFacebook />
                                        <span className='text-sm font-bold '>
                                            Share on Facebook
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='bg-txt_clr/70 hover:bg-black text-white px-2 py-1 flex gap-1 items-center'>
                                        <BiLogoTwitter />
                                        <span className='text-sm font-bold '>
                                            Share on Twitter
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className='bg-txt_clr/70 hover:bg-black text-white px-2 py-1 flex gap-1 items-center'>
                                        <BiLogoInstagram />
                                        <span className='text-sm font-bold '>
                                            Share on Instagram
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='mb-12'>
                            <Coment />
                        </div>
                        <div>
                            <h3 className='text-2xl font-medium text-title_clr uppercase mb-7'>
                                Related Posts
                            </h3>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-y py-10'>
                                <RelatedPost
                                    img="/images/blog/2-column/1.jpg"
                                    title="MINIMUM USABLE DESIGN"
                                    author="POSTED BY ADMIN"
                                    date="31 OCTOBER 2015"
                                />
                                <RelatedPost
                                    img="/images/blog/2-column/2.jpg"
                                    title="YOU DESIGN IT, THEY DO IT"
                                    author="POSTED BY ADMIN"
                                    date="31 OCTOBER 2015"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/4 w-full'>
                        <SideBar />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Single