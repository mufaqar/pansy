import React, { useState } from "react";
import { CountSetInterval } from "./CountMethods";

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [duration, setDuration] = useState(0);
    const [start, setStart] = useState(false);

    //If any input changes reset
    const basicReset = () => {
        setStart(false);
    };

    //store number
    const numberChangeHandler = (e) => {
        const { value } = e.target;
        setNumber(value);
        basicReset();
    };

    //store duration
    const durationChangeHandler = (e) => {
        const { value } = e.target;
        setDuration(value);
        basicReset();
    };

    const startHandler = () => {
        // trigger the animation
        setStart(true);
    };

    const resetHandler = () => {
        window.location.reload();
    };

    return (
        <main style={{ width: "500px", margin: "50px auto" }}>
            <section className="input-area">
                <div>
                    <div>
                        <label>Number:</label>{" "}
                        <input
                            type="number"
                            value={inputValue}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div>
                        <label>Duration:</label>{" "}
                        <input
                            type="number"
                            value={duration}
                            onChange={durationChangeHandler}
                        />
                    </div>
                </div>
                <br />
                <div>
                    <button onClick={startHandler}>start</button>{" "}
                    <button onClick={resetHandler}>reset</button>
                </div>
            </section>
            <br />
            <section className="result-area">
                <div>
                    SetInterval:{" "}
                    {(start && (
                        <CountSetInterval
                            label={"count"}
                            number={inputValue}
                            duration={parseInt(duration)}
                        />
                    )) ||
                        0}
                </div>
            </section>
        </main>
    );
};

export default Counter;