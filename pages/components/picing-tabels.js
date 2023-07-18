import Link from 'next/link'
import React from 'react'

const Pricing_Tabels = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7'>
                <Table
                    price="19"
                    plan="Basic" />
                <Table
                    price="79"
                    plan="Standard" />
                <Table
                    price="99"
                    plan="Premium" />
            </div>
        </section>
    )
}

export default Pricing_Tabels

function Table({ price, plan }) {
    return (
        <div className={`border-2 divide-y-2`}>
            <div className='py-7'>
                <h2 className="md:text-5xl text-3xl font-normal text-title_clr text-center">
                    <sup>$</sup>{price}<sub>/month</sub>
                </h2>
                <p className="text-xl font-bold uppercase text-txt_clr text-center mt-7">
                    {plan}
                </p>
                <div className='my-5 grid justify-center'>
                    <Link href="#" className="text-sm font-normal uppercase px-8 py-2 border-primary border bg-txt_clr text-white hover:bg-transparent hover:text-txt_clr">
                        Order Plan
                    </Link>
                </div>
            </div>
            <div className=''>
                <ul className='divide-y'>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            Unlimited Forms
                        </span>
                    </li>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            Unlimited Reports
                        </span>
                    </li>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            Max Fields *
                        </span>
                    </li>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            10 User Account
                        </span>
                    </li>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            6000 Content Pages
                        </span>
                    </li>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            Not Responsive
                        </span>
                    </li>
                    <li className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                        <span>
                            100 GB Bandwidth
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export const Table_Data = [
    {
        price: "19",
        plan: "Basic",
        tbl_link: "#",
        features: [
            {
                list: "Unlimited Forms",
            },
            {
                list: " Unlimited Reports",
            },
            {
                list: "Max Fields *",
            },
            {
                list: "10 User Account",
            },
            {
                list: "6000 Content Pages",
            },
            {
                list: "Not Responsive",
            },
            {
                list: "100 GB Bandwidth",
            },
        ],
    },
    {
        price: "19",
        plan: "Basic",
        tbl_link: "#",
        features: [
            {
                list: "Unlimited Forms",
            },
            {
                list: " Unlimited Reports",
            },
            {
                list: "Max Fields *",
            },
            {
                list: "10 User Account",
            },
            {
                list: "6000 Content Pages",
            },
            {
                list: "Not Responsive",
            },
            {
                list: "100 GB Bandwidth",
            },
        ],
    },
    {
        price: "19",
        plan: "Basic",
        tbl_link: "#",
        features: [
            {
                list: "Unlimited Forms",
            },
            {
                list: " Unlimited Reports",
            },
            {
                list: "Max Fields *",
            },
            {
                list: "10 User Account",
            },
            {
                list: "6000 Content Pages",
            },
            {
                list: "Not Responsive",
            },
            {
                list: "100 GB Bandwidth",
            },
        ],
    },
]