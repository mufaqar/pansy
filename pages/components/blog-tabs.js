import Image from "next/image";
import React from "react";
import Article1 from '../../public/images/about/mission/our-mission-1.jpg';
import Link from "next/link";

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const handleFaq = (id) => {
        if (openTab === id) {
            return setOpenTab(id)
        }
        setOpenTab(id)
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex w-fit mx-auto mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-8"
                        role="tablist"
                    >
                        {Tabs_Data.map((item, idx) => {
                            return <li key={idx} className="text-center">
                                <span
                                    className={
                                        "text-base font-bold uppercase px-7 py-3 " +
                                        (openTab === item.id
                                            ? "border-primary border-y-2 bg-transparent "
                                            : " border-transparent border-y-2 bg-transparent hover:border-primary ")
                                    }
                                    onClick={() => handleFaq(item.id)}
                                    data-toggle="tab"
                                    role="tablist"
                                >
                                    {item.category}
                                </span>
                            </li>
                        })}

                    </ul>
                    <div className="relative flex flex-col min-w-0 mt-12">
                        <div className="py-5 flex-auto">
                            <div className="tab-content grid md:grid-cols-3 grid-cols-1 gap-7">
                                {Tabs_Data.map((item, idx) => {
                                    return <div key={idx}>
                                        <div>
                                            <Image src={item?.img} height={250} width={250} alt="img" className='w-full object-cover ' />
                                        </div>
                                        <div className='py-7'>
                                            <div className="mb-5">
                                                <Link href="#" className="text-sm font-semibold uppercase px-4 py-1 border-primary border-y-2 bg-transparent text-primary hover:bg-primary hover:text-white">
                                                    {item?.category}
                                                </Link>
                                            </div>
                                            <Link href="#" className='text-lg font-semibold uppercase text-title_clr text-center mb-2'>
                                                {item?.title}
                                            </Link>
                                            <p className='text-base font-medium text-txt_clr/80 my-5'>
                                                {item?.content}
                                            </p>
                                            <div className="mb-5">
                                                <Link href="#" className="text-sm font-semibold uppercase py-1 text-primary  hover:text-primary/70">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Link href="#" className="text-base font-semibold uppercase px-7 py-3 border-primary border-y-2 bg-transparent hover:bg-primary hover:text-white">
                                Purchase Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function Blog_Tabs() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        Even More Features
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                </div>
                <Tabs />
            </div>
        </section>
    );
}



export const Tabs_Data = [
    {
        id: 1,
        category: "Show All",
        title: "About Discovery",
        img: "/images/blog/2-column/1.jpg",
        link: "/simply-sync",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...",
    },
    {
        id: 2,
        category: "Culture",
        title: "About Philosophy",
        img: "/images/blog/2-column/2.jpg",
        link: "/simply-simp-agent",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
    },
    {
        id: 3,
        category: "Life Style",
        title: "About Process",
        img: "/images/blog/2-column/3.jpg",
        link: "/simply-transport-agent",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
    },
    {
        id: 4,
        category: "Arts",
        title: "About Process",
        img: "/images/blog/2-column/4.jpg",
        link: "/simply-transport-agent",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
    },
    {
        id: 5,
        category: "Travel",
        title: "About Process",
        img: "/images/blog/2-column/5.jpg",
        link: "/simply-transport-agent",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
    },
    {
        id: 6,
        category: "Business",
        title: "About Process",
        img: "/images/blog/2-column/6.jpg",
        link: "/simply-transport-agent",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..."
    },
]