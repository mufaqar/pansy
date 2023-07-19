import Link from 'next/link'
import React from 'react'

const Pricing_Tabels = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div className="mb-12">
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        Some Of Our Services
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-medium text-txt_clr text-center mt-5'>
                        Our Energetic Minds Help Your Business to Achieve Online
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                    {Table_Data.map((item, idx) => {
                        return <Table
                            key={idx}
                            data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing_Tabels

function Table({ data }) {
    return (
        <div className={`border-2 divide-y-2 ${data?.standared ? "bg-BgGray/75" : ""}`}>
            <div className='py-7'>
                <h2 className="md:text-5xl text-3xl font-medium text-title_clr text-center">
                    <sup>$</sup>{data?.price}<sub>/month</sub>
                </h2>
                <p className="text-xl font-bold uppercase text-txt_clr text-center mt-7">
                    {data?.plan}
                </p>
                <div className='my-5 grid justify-center'>
                    <Link href="#" className="text-sm font-medium uppercase px-8 py-2 border-primary border bg-txt_clr text-white hover:bg-transparent hover:text-txt_clr">
                        Order Plan
                    </Link>
                </div>
            </div>
            <div className='px-7'>
                <ul className='divide-y'>
                    {data?.features?.map((_item, _idx) => {
                        return <li key={_idx} className='text-base py-3 font-bold text-txt_clr/80 uppercase text-center '>
                            <span>
                                {_item?.list}
                            </span>
                        </li>
                    })}

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
        price: "79",
        plan: "Standard",
        tbl_link: "#",
        standared: [],
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
        price: "99",
        plan: "Premium",
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