import React from 'react'

export default function SearchForm() {
    return (
        <form>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border" placeholder="Search Here" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
        </form>
    )
}
