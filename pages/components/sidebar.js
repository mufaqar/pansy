import React from 'react'
import Recent_Post from './recent-post'
import SearchForm from './search'
import AuthorBox from './author-box'
import SignForm from './signup'

export default function SideBar() {
    return (
        <div>
            <div className='mb-5'>
                <SearchForm />
            </div>
            <div className='mb-5'>
                <div className="mb-5">
                    <h2 className='text-xl font-medium text-title_clr uppercase mb-5'>
                        About Author
                    </h2>
                    <div className="w-10 h-[2px] bg-primary"></div>
                    <div className="w-5 h-[2px] bg-primary mt-1"></div>
                </div>
                <AuthorBox />
            </div>
            <div className='mb-5'>
                <SignForm />
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
        </div>
    )
}
