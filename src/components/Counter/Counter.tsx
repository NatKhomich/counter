import React, {FC} from 'react';
import s from './Counter.module.css'
import sBtn from '../Button/Button.module.css'
import {DisplayCounterType, ErrorType} from '../../util/AppUtil';
import Button from '../Button/Button';

type CounterType = {
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
    error: ErrorType
    displayCounter: DisplayCounterType
}

export const Counter: FC<CounterType> = ({
                                             increaseValue,
                                             resetValue,
                                             startValue,
                                             maxValue,
                                             error,
                                             displayCounter
                                         }) => {

    const buttonIncreaseHandler = () => {
        increaseValue()
    }
    const buttonResetHandler = () => {
        resetValue()
    }

    return (
        <div className={s.counter}>
            <div className={s.displayBlock}>

                {displayCounter === 'startTitle' && error === 'enter' &&
                    <div className={s.text}> enter value and press "set" </div>}

                {displayCounter === 'error' && error === 'error' ?
                    <div className={s.errorMessage}> incorrect value! </div>
                    : displayCounter === 'startTitle' || displayCounter === 'none' ?
                        <div className={s.text}> enter value and press "set" </div>
                        : <div className={startValue === maxValue ? s.numberRed : s.number}>
                            {startValue}
                        </div>}
            </div>
            <div className={sBtn.button}>
                <Button disabled={error === 'error' ||
                    maxValue === startValue ||
                    !displayCounter ||
                    maxValue <= startValue}
                        name={'+'}
                        callBack={buttonIncreaseHandler}/>
                <Button disabled={startValue === 0 || error === 'error'} name={'reset'}
                        callBack={buttonResetHandler}/>
            </div>
        </div>
    )
}
