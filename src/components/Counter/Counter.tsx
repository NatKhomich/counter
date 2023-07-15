import React from 'react';
import s from './Counter.module.css'
import sBtn from '../Button/Button.module.css'
import {DisplayCounterType, ErrorType} from '../../App';
import Button from '../Button/Button';


type CounterType = {
    increaseValue: () => void
    resetValue: () => void

    startValue: number
    maxValue: number

    error: ErrorType
    displayCounter: DisplayCounterType
}

export const Counter: React.FC<CounterType> = (props) => {

    const buttonIncreaseHandler = () => {
        props.increaseValue()
    }
    const buttonResetHandler = () => {
        props.resetValue()
    }

    return (
        <div className={s.counter}>

            {/*дисплей*/}
            <div className={s.displayBlock}>

                {props.displayCounter === 'startTitle' && props.error === 'enter' &&
                    <div className={s.text}> enter value and press "set" </div>}

                {props.displayCounter === 'error' && props.error === 'error' ?
                    <div className={s.errorMessage}> incorrect value! </div>
                    : props.displayCounter === 'startTitle' || props.displayCounter === 'none' ?
                        <div className={s.text}> enter value and press "set" </div>
                        : <div className={props.startValue === props.maxValue ? s.numberRed : s.number}>
                            {props.startValue}
                        </div>}

            </div>

            {/* 3 кнопки + - reset*/}
            <div className={sBtn.button}>
                <Button disabled={props.error === 'error' ||
                    props.maxValue === props.startValue ||
                    !props.displayCounter ||
                    props.maxValue <= props.startValue}
                        name={'+'}
                        callBack={buttonIncreaseHandler}/>

                <Button disabled={props.startValue === 0 || props.error === 'error'} name={'reset'}
                        callBack={buttonResetHandler}/>


            </div>
        </div>
    )
}
