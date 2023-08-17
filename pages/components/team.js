import React from 'react'
import Team_Box from './team-box'

const Team = ({ anim, view }) => {
    return (
        <section className='py-16' ref={view}>
            <div className='container mx-auto px-4'>
                <div className="mb-12">
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        MEET THE TALENTS team
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                    <p className='text-lg font-medium text-txt_clr text-center mt-5'>
                        Our Energetic Minds Help Your Business to Achieve Online
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    {Team_Data.map((item, idx) => {
                        return (
                            <Team_Box key={idx}
                                img={item?.img}
                                position={item?.position}
                                content={item?.content}
                                teamlink={item?.teamlink}
                                name={item?.name}
                                designation={item?.designation}
                                fblink={item?.fblink}
                                twitter={item?.twitter}
                                linkedinlink={item?.linkedinlink}
                                anim={anim}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team

export const Team_Data = [
    {
        name: "Alexander Harvard",
        img: "/images/team/1.jpg",
        position: "I am Creative",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the since .",
        teamlink: "#",
        name: "Alexander Harvard",
        designation: "Co Founder / CEO",
        fblink: "#",
        twitter: "#",
        linkedinlink: "#",
    },
    {
        name: "Alexander Harvard",
        img: "/images/team/2.jpg",
        position: "I am Creative",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the since .",
        teamlink: "#",
        name: "Alexander Harvard",
        designation: "Co Founder / CEO",
        fblink: "#",
        twitter: "#",
        linkedinlink: "#",
    },
    {
        name: "Alexander Harvard",
        img: "/images/team/3.jpg",
        position: "I am Creative",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the since .",
        teamlink: "#",
        name: "Alexander Harvard",
        designation: "Co Founder / CEO",
        fblink: "#",
        twitter: "#",
        linkedinlink: "#",
    },
];