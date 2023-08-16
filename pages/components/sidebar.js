import React from 'react'
import Recent_Post from './recent-post'
import SearchForm from './search'
import AuthorBox from './author-box'
import SignForm from './signup'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoPinterestAlt } from 'react-icons/bi'
import Gallery from './gallery'

export default function SideBar() {
    return (
        <div className='grid gap-8'>
            <div>
                <SearchForm />
            </div>
            <div>
                <div className="mb-5">
                    <h2 className='text-lg font-medium text-title_clr uppercase mb-5'>
                        About Author
                    </h2>
                    <div className="w-10 h-[2px] bg-primary"></div>
                    <div className="w-5 h-[2px] bg-primary mt-1"></div>
                </div>
                <AuthorBox />
            </div>
            <div>
                <SignForm />
            </div>
            <div>
                <ul className='grid grid-cols-2 gap-3  items-center'>
                    <li className='w-full'>
                        <Link href="#" className='bg-[#6fdec6] hover:bg-black text-white px-2 py-3 flex gap-2 items-center w-full'>
                            <BiLogoFacebook className='text-4xl' />
                            <span className='text-xs font-bold grid'>
                                <span className='text-lg font-bold'>201K+</span>
                                <span> Facebook fans </span>
                            </span>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link href="#" className='bg-[#6fdec6] hover:bg-black text-white px-2 py-3 flex gap-2 items-center w-full'>
                            <BiLogoTwitter className='text-4xl' />
                            <span className='text-xs font-bold grid'>
                                <span className='text-lg font-bold'>180K+</span>
                                <span> Twitter Followers </span>
                            </span>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link href="#" className='bg-[#6fdec6] hover:bg-black text-white px-2 py-3 flex gap-2 items-center w-full'>
                            <BiLogoInstagram className='text-4xl' />
                            <span className='text-xs font-bold grid'>
                                <span className='text-lg font-bold'>56K+</span>
                                <span> Followers </span>
                            </span>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link href="#" className='bg-[#6fdec6] hover:bg-black text-white px-2 py-3 flex gap-2 items-center w-full'>
                            <BiLogoPinterestAlt className='text-4xl' />
                            <span className='text-xs font-bold grid'>
                                <span className='text-lg font-bold'>854K+</span>
                                <span> Followers </span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="mb-5">
                    <h2 className='text-lg font-medium text-title_clr uppercase mb-5'>
                        Instagram Pictures
                    </h2>
                    <div className="w-10 h-[2px] bg-primary"></div>
                    <div className="w-5 h-[2px] bg-primary mt-1"></div>
                </div>
                <Gallery />
            </div>
            <div className='grid gap-3'>
                <Recent_Post
                    title="DESIGN YOU NEED EVERYDAY"
                    img="/images/blog/2-column/2.jpg"
                    content="Believe it or not, I'm walking on air. I never thought I could feel so free. Flying away on a..."
                />
                <Recent_Post
                    title="DESIGN YOU NEED EVERYDAY"
                    img="/images/blog/2-column/2.jpg"
                    content="Believe it or not, I'm walking on air. I never thought I could feel so free. Flying away on a..."
                />
                <Recent_Post
                    title="DESIGN YOU NEED EVERYDAY"
                    img="/images/blog/2-column/2.jpg"
                    content="Believe it or not, I'm walking on air. I never thought I could feel so free. Flying away on a..."
                />
            </div>
            <div>
                <div className="mb-5">
                    <h2 className='text-lg font-medium text-title_clr uppercase mb-5'>
                        Categories
                    </h2>
                    <div className="w-10 h-[2px] bg-primary"></div>
                    <div className="w-5 h-[2px] bg-primary mt-1"></div>
                </div>
                <div>
                    <ul className='flex gap-2 flex-wrap items-center'>
                        <li>
                            <Link href="#" className='text-sm bg-txt_clr/70 hover:bg-black text-white px-4 py-2 flex gap-1 items-center'>
                                Architecture
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-sm bg-txt_clr/70 hover:bg-black text-white px-4 py-2 flex gap-1 items-center'>
                                Website
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-sm bg-txt_clr/70 hover:bg-black text-white px-4 py-2 flex gap-1 items-center'>
                                Architecture Link
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-sm bg-txt_clr/70 hover:bg-black text-white px-4 py-2 flex gap-1 items-center'>
                                Graphic Design Image
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='text-sm bg-txt_clr/70 hover:bg-black text-white px-4 py-2 flex gap-1 items-center'>
                                Photegraphy Art
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
