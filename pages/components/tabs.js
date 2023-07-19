import Image from "next/image";
import React from "react";
import Article1 from '../../public/images/about/mission/our-mission-1.jpg';

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
                                    {item.title1}
                                </span>
                            </li>
                        })}

                    </ul>
                    <div className="relative flex flex-col min-w-0 mt-12">
                        <div className="py-5 flex-auto">
                            <div className="tab-content tab-space">
                                {Tabs_Data.map((item, idx) => {
                                    return <div key={idx} className={openTab === item.id ? "block" : "hidden"} id="link1">
                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                                            <div>
                                                <h2 className='text-8xl font-bold text-title_clr/40'>
                                                    0{item.id}
                                                </h2>
                                                <h2 className='text-4xl font-bold text-title_clr mb-5 -mt-5'>
                                                    {item.title2}
                                                </h2>
                                                <ul className="grid gap-5 list-inside">
                                                    {item.content?.map((_item, _idx) => {
                                                        return <li key={_idx} className='text-base font-bold text-txt_clr/80 list-image-[url(/images/icons/right-arrow.png)]'>
                                                            {_item?.para}
                                                        </li>
                                                    })}
                                                </ul>
                                            </div>
                                            <div>
                                                <Image src={item.img} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function TabsRender() {
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
        title1: "Story",
        title2: "About Discovery",
        img: Article1,
        link: "/simply-sync",
        content: [
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types",
            },
        ]
    },
    {
        id: 2,
        title1: "Philosophy",
        title2: "About Philosophy",
        img: Article1,
        link: "/simply-simp-agent",
        content: [
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types",
            },
        ]
    },
    {
        id: 3,
        title1: "Process",
        title2: "About Process",
        img: Article1,
        link: "/simply-transport-agent",
        content: [
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types with Multi Styles",
            },
            {
                para: "You Can Easily Change the Appearance of Your Blog Post Types",
            },
        ]
    },
]