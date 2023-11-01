import React, {FC, memo, useCallback} from 'react';
import styles from './Counter.module.css'
import stylesBtn from '../Button/Button.module.css'
import Button from '../Button/Button';

export type ErrorType = 'error' | 'none' | 'enter'
export type DisplayCounterType = 'error' | 'number' | 'startTitle' | 'none'

type Counter = {
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
    error: ErrorType
    displayCounter: DisplayCounterType
}

export const Counter: FC<Counter> = memo((props) => {

    const {increaseValue, resetValue, startValue, maxValue, error, displayCounter} = props

    const buttonIncreaseHandler = useCallback(() => increaseValue(), [increaseValue])
    const buttonResetHandler = useCallback(() => resetValue(), [resetValue])

    const incorrectValue = displayCounter === 'error' && error === 'error'
    const enterValue = displayCounter === 'startTitle' || displayCounter === 'none'

    return (
        <div className={styles.counter}>
            <div className={styles.displayBlock}>

                {displayCounter === 'startTitle' && error === 'enter' &&
                    <div className={styles.text}> enter value and press "set" </div>}

                {incorrectValue ? <div className={styles.errorMessage}> incorrect value! </div>
                    : enterValue ? <div className={styles.text}> enter value and press "set" </div>
                        : <div className={startValue === maxValue ? styles.numberRed : styles.number}>
                            {startValue}
                        </div>}
            </div>
            <div className={stylesBtn.button}>
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
