import React, {memo} from 'react';
import styles from './Counter.module.css'
import stylesBtn from '../Button/Button.module.css'
import Button from '../Button/Button';
import {increaseValueAC, resetValueAC} from '../../state/counterReducer';
import {useAppDispatch} from '../../state/store';

export type ErrorType = 'error' | 'none' | 'enter'
export type DisplayCounterType = 'error' | 'number' | 'startTitle' | 'none'

type Props = {
    startValue: number
    maxValue: number
    error: ErrorType
    displayCounter: DisplayCounterType
}

export const Counter = memo(({startValue, maxValue, error, displayCounter}: Props) => {

    const dispatch = useAppDispatch()
    const increaseValueHandler = () => dispatch(increaseValueAC())
    const resetValueHandler = () => dispatch(resetValueAC())

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
                        callBack={increaseValueHandler}/>

                <Button disabled={startValue === 0 || error === 'error'} name={'reset'}
                        callBack={resetValueHandler}/>
            </div>
        </div>
    )
})
