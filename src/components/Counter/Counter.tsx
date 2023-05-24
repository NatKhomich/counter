import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css'

type CounterType = {
    increaseStartValue: () => void
    resetValue: () => void

    startValue: number
    maxValue: number

    error: boolean
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

                {/*{ <div> enter value and press "set" </div>  : ''}*/}

                {props.displayCounter ? <div
                        className={props.startValue === props.maxValue ? s.numberRed : s.number}> {props.startValue} </div>
                    : props.error && <div className={s.errorMessage}> incorrect value! </div>
                }

            </div>

            {/* 3 кнопки + - reset*/}
            <div className={sBtn.button}>
                <Button disabled={props.error || props.maxValue === props.startValue}
                        name={'+'}
                        callBack={ButtonIncreaseHandler}/>
                {/*<Button disabled={props.startValue === 0} name={'-'} callBack={ButtonDecreaseHandler}/>*/}
                <Button disabled={props.startValue === 0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
