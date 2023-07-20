import React, { useEffect, useState } from 'react';

// //styling
// import './Count.css';

const Count = props => {
    // label of counter
    // number to increment to
    // duration of count in seconds
    const { label, number, duration } = props.data
    //console.log(props.data);
    // number displayed by component
    const [count, setCount] = useState("0")

    useEffect(() => {
        let start = 0;
        // first three numbers from props
        const end = parseInt(number.substring(0, 3))
        // if zero, return
        if (start === end) return;
        // find duration per increment
        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / end) * 1000;
        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + number.substring(3))
            if (start === end) clearInterval(timer)
        }, incrementTime);

        // dependency array
    }, [number, duration]);
    return (
        <div className="Count">
            <h2 className="md:text-5xl text-3xl font-semibold text-white text-center uppercase mb-7">
                {count}
            </h2>
            <div className="w-10 h-[2px] bg-white mx-auto"></div>
            <div className="w-5 h-[2px] bg-white mx-auto mt-1"></div>
            <h3 className="text-xl font-bold text-white text-center mt-7">
                {label}
            </h3>
        </div>
    );
}

export default Count;