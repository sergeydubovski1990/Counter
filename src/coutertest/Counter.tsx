import React, {useState} from 'react';
import {Buttons} from "./Buttons";
import s from "./Counter.module.css"

const startValue = 0;
const valueMax = 5;

export const Counter = () => {
    const [value, setValue] = useState(startValue)

    const incHandler = () => {
        if (value < valueMax)
            setValue(value + 1)
        localStorage.setItem('counterValue', JSON.stringify(value))
    }
    const resetHandler = () => {
        setValue(startValue)
        localStorage.setItem('counterValue', JSON.stringify(value))
    }

    return (
        <div className={s.container}>
            <div className={s["count-wrapper"]}>
                <h1>{value}</h1>
            </div>
            <Buttons
                incHandler={incHandler}
                resetHandler={resetHandler}
                value={value}
                valueMax={valueMax}/>

        </div>
    );
}

