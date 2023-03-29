import React from 'react';
import s from './DisplayCounter.module.css'

type DisplayCounterType = {
    num: number
}

const DisplayCounter = (props: DisplayCounterType) => {
    return (
        <div className={s.displayBlock}>
            <div className={props.num === 5 ? s.numberRed : s.number}> {props.num} </div>
        </div>
    );
};

export default DisplayCounter;