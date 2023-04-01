import React from 'react';
import s from "./Buttos.module.css"

type ButtonsType = {
    incHandler: () => void
    resetHandler: () => void
    valueMax: number
    value: number
}

export const Buttons = (props: ButtonsType) => {
    const disableButtonInc = props.value === props.valueMax
    const disableButtonRestart = props.value === 0
    const incButtonHandler = () => props.incHandler();
    const resetButtonHandler = () => props.resetHandler();
    return (
        <div >
            <button
                className={`${s.button1}`}
                disabled={disableButtonInc}
                onClick={incButtonHandler}>INC
            </button>
            <button
                className={`${s.button2}`}
                disabled={disableButtonRestart}
                onClick={resetButtonHandler}>
                RESET
            </button>
        </div>
    );
};


