import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css'

type CounterType = {
    increaseStartValue: () => void
    //decreaseStartValue: () => void
    resetValue: () => void

    startValue: number
    maxValue: number

    //setCounter: number
}

export const Counter = (props: CounterType) => {

    const ButtonIncreaseHandler = () => {
        props.increaseStartValue()
    }

    /*const ButtonDecreaseHandler = () => {
        props.decreaseStartValue()
    }*/

    const ButtonResetHandler = () => {
        props.resetValue()
    }

    return (
        <div className={s.counter}>

            {/*дисплей*/}
            <div className={s.displayBlock}>
                <div className={props.startValue === props.maxValue ? s.numberRed : s.number}> {props.startValue} </div>
            </div>

           {/* 3 кнопки + - reset*/}
            <div className={sBtn.button}>
                <Button disabled={props.startValue === props.maxValue} name={'+'} callBack={ButtonIncreaseHandler}/>
                {/*<Button disabled={props.startValue === 0} name={'-'} callBack={ButtonDecreaseHandler}/>*/}
                <Button disabled={props.startValue === 0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
