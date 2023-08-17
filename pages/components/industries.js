import React from 'react'
import Icon_Box from './icon-box'

const Industries = ({anim, view}) => {

    return (
        <section className='py-16' ref={view}>
            <div className="container mx-auto px-4 ">
                <div className="mb-10" style={{
                    transform: anim ? "none" : "translateX(200px)",
                    opacity: anim ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <h2 className='text-2xl font-medium text-title_clr uppercase text-center mb-5'>
                        Industries We Cover
                    </h2>
                    <div className="w-20 h-[2px] bg-primary mx-auto"></div>
                    <div className="w-10 h-[2px] bg-primary mx-auto mt-1"></div>
                </div>
                <div>
                    <ul className='grid md:grid-cols-3 grid-cols-1'>
                        <li className="border-l md:border-r-0 md:border-b-0 border-r border-t border-b">
                            <Icon_Box img="/images/icons/tower.png" title="FULL RESPONSIVE" anim={anim} />
                        </li>
                        <li className="border-l md:border-r-0 border-b-0 md:border-t border-r border-t-0">
                            <Icon_Box img="/images/icons/industry.png" title="FULL RESPONSIVE" anim={anim} />
                        </li>
                        <li className="border-l border-r border-t border-b-0">
                            <Icon_Box img="/images/icons/cart.png" title="FULL RESPONSIVE" anim={anim} />
                        </li>
                        <li className="border-l md:border-r-0 border-r border-t border-b">
                            <Icon_Box img="/images/icons/signal.png" title="FULL RESPONSIVE" anim={anim} />
                        </li>
                        <li className="border-l md:border-r-0 md:border-t md:border-b border-r border-t-0 border-b-0">
                            <Icon_Box img="/images/icons/presentation.png" title="FULL RESPONSIVE" anim={anim} />
                        </li>
                        <li className="border-l border-r border-t border-b">
                            <Icon_Box img="/images/icons/building.png" title="FULL RESPONSIVE" anim={anim} />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Industries