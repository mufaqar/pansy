import React from 'react'
import Count from './count'

const Counter_Section = () => {
    return (
        <section className='py-20 items-center bg-blend-multiply bg-black/75 bg-[url("/images/backgrounds/4.jpg")] bg-center bg-no-repeat bg-cover'>
            <div className='conatiner mx-auto px-4 grid md:grid-cols-4 grid-cols-2 gap-7'>
                {counts?.map((count, id) => <Count key={id} data={count} />)}
            </div>
        </section>
    )
}

export default Counter_Section


export const counts = [
    {
        "label": "Coffee cups",
        "number": "509",
        "duration": "1"
    },
    {
        "label": "Projects",
        "number": "75",
        "duration": "1"
    },
    {
        "label": "Working Days",
        "number": "250",
        "duration": "1"
    },
    {
        "label": "Happy Clients",
        "number": "68",
        "duration": "1"
    }
]