import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css'
import {ErrorType} from '../../App';

type CounterType = {
    increaseStartValue: () => void
    resetValue: () => void

    startValue: number
    maxValue: number

    error: ErrorType
    displayCounter: boolean

    //decreaseStartValue: () => void
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

                {!props.displayCounter && props.error === 'enter' && <div className={s.text}> enter value and press "set" </div>}

                {props.displayCounter ? <div
                        className={props.startValue === props.maxValue ? s.numberRed : s.number}> {props.startValue} </div>
                    : props.error === 'error' && <div className={s.errorMessage}> incorrect value! </div>
                }
              {/*  {
                    props.startValue > props.maxValue  && <div>error</div>
                }*/}

            </div>

            {/* 3 кнопки + - reset*/}
            <div className={sBtn.button}>
                <Button disabled={props.error === 'error' || props.maxValue === props.startValue}
                        name={'+'}
                        callBack={ButtonIncreaseHandler}/>
                {/*<Button disabled={props.startValue === 0} name={'-'} callBack={ButtonDecreaseHandler}/>*/}
                <Button disabled={props.startValue === 0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
