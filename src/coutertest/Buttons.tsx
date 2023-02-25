import React from 'react';

type Button1Type = {
    incHandler: ()=>void
}

export const Button1 = (props: Button1Type) => {
    return (
        <div className="Button1">
            <button onClick={()=>props.incHandler()}>INC</button>
        </div>
    );
};

