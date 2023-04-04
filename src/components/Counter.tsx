import React from 'react';
import s from './Counter.module.css'
import SuperButton from './SuperButton/SuperButton';
import sBtn from './SuperButton/SuperButton.module.css'
import DisplayCounter from './DisplayCounter/DisplayCounter';

type CounterType = {
    buttonIncrease: () => void
    buttonResetHandler: () => void
    num: number
}

export const Counter = (props: CounterType) => {

    const ButtonIncreaseHandler = () => {
        props.buttonIncrease()
    }
    const ButtonResetHandler = () => {
        props.buttonResetHandler()
    }

    return (
        <div className={s.counter}>
            <DisplayCounter num={props.num}/>
            <div className={sBtn.button}>
                <SuperButton disabled={props.num === 5} name={'inc'} callBack={ButtonIncreaseHandler}/>
                <SuperButton disabled={props.num === 0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
