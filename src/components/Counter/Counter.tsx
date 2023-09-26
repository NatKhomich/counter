import React, {FC, memo, useCallback} from 'react';
import s from './Counter.module.css'
import sBtn from '../Button/Button.module.css'
import Button from '../Button/Button';

export type ErrorType = 'error' | 'none' | 'enter'
export type DisplayCounterType = 'error' | 'number' | 'startTitle' | 'none'

type CounterType = {
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
    error: ErrorType
    displayCounter: DisplayCounterType
}

export const Counter: FC<CounterType> = memo(({
                                             increaseValue,
                                             resetValue,
                                             startValue,
                                             maxValue,
                                             error,
                                             displayCounter
                                         }) => {

    const buttonIncreaseHandler = useCallback(() => increaseValue(), [increaseValue])
    const buttonResetHandler = useCallback(() => resetValue(), [resetValue])

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
})
