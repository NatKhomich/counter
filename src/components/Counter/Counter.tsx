import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css'
import {isEqual} from '../../helpers/helpers';

type CounterType = {
    increaseStartValue: () => void
    //decreaseStartValue: () => void
    resetValue: () => void

    startValue: number
    maxValue: number

    error: string|null
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
                <div className={isEqual(props.startValue,props.maxValue) ? s.numberRed : s.number}> {props.startValue} </div>
                {props.error && <div className={s.errorMessage}> {props.error} </div>}
            </div>

           {/* 3 кнопки + - reset*/}
            <div className={sBtn.button}>
                <Button disabled={isEqual(props.startValue,props.maxValue)} name={'+'} callBack={ButtonIncreaseHandler}/>
                {/*<Button disabled={props.startValue === 0} name={'-'} callBack={ButtonDecreaseHandler}/>*/}
                <Button disabled={props.startValue===0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
