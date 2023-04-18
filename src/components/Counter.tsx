import React from 'react';
import s from './Counter.module.css'
import SuperButton from './SuperButton/SuperButton';
import sBtn from './SuperButton/SuperButton.module.css'
import DisplayCounter from './DisplayCounter/DisplayCounter';

type CounterType = {
    buttonIncrease: () => void
    buttonDecrease: () => void
    buttonResetHandler: () => void
    num: number
}

export const Counter = (props: CounterType) => {

    const ButtonIncreaseHandler = () => {
        props.buttonIncrease()
    }

    const ButtonDecreaseHandler = () => {
        props.buttonDecrease()
    }

    const ButtonResetHandler = () => {
        props.buttonResetHandler()
    }

    return (
        <div className={s.counter}>
            <DisplayCounter num={props.num}/>
            <div className={sBtn.button}>
                <SuperButton disabled={props.num === 5} name={'+'} callBack={ButtonIncreaseHandler}/>
                <SuperButton disabled={props.num === 0} name={'-'} callBack={ButtonDecreaseHandler}/>
                <SuperButton disabled={props.num === 0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
