import React from 'react'

export default function SignForm() {
    return (
        <form className='grid gap-5 bg-txt_clr/50 p-5'>
            <div className="mb-5">
                <h2 className='text-xl font-medium text-white uppercase mb-5'>
                    About Author
                </h2>
                <div className="w-10 h-[2px] bg-white"></div>
                <div className="w-5 h-[2px] bg-white mt-1"></div>
                <p className='text-base font-bold text-white mt-5'>
                Believe it or not, I'm walking on air. I never thought I could feel so free. Flying away on
            </p>
            </div>
            <div className="w-full">
                <label htmlFor="email" className="hidden mb-2">Email</label>
                <input className={`px-5 py-4 text-sm font-medium bg-white placeholder:text-txt_clr text-txt_clr focus:outline-none w-full border border-primary/20`} placeholder="Enter you'r email here" type="email" id="email" />
            </div>
            <div className=''>
                <button type='submit' className="text-base font-medium px-10 py-3 border-primary border bg-txt_clr text-white hover:bg-transparent hover:text-white w-full">
                    Signup
                </button>
            </div>
        </form>
    )
}
