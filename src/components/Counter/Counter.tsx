import React, {memo} from 'react';
import styles from './Counter.module.css'
import stylesBtn from '../Button/Button.module.css'
import Button from '../Button/Button';
import {increaseValueAC, resetValueAC} from '../../state/counterReducer';
import {AppRootStateType, useAppDispatch} from '../../state/store';
import {useSelector} from 'react-redux';

export type ErrorType = 'error' | 'none' | 'enter'
export type DisplayCounterType = 'error' | 'number' | 'startTitle' | 'none'

export const Counter = memo(() => {

    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.counter.error)
    const displayCounter = useSelector<AppRootStateType, DisplayCounterType>(state => state.counter.displayCounter)

    const dispatch = useAppDispatch()
    const increaseValueHandler = () => dispatch(increaseValueAC())
    const resetValueHandler = () => dispatch(resetValueAC())

    const incorrectValue = displayCounter === 'error' && error === 'error'
    const enterValue = displayCounter === 'startTitle' || displayCounter === 'none'
    const disabledIncrease = error === 'error' || maxValue === counter || !displayCounter || maxValue <= counter
    const disabledReset = counter === 0 || error === 'error'

    return (
        <div className={styles.counter}>
            <div className={styles.displayBlock}>

                {displayCounter === 'startTitle' && error === 'enter' &&
                    <div className={styles.text}> enter value and press "set" </div>}

                {incorrectValue ? <div className={styles.errorMessage}> Incorrect value! </div>
                    : enterValue ? <div className={styles.text}> Enter value and press "set" </div>
                        : <div className={counter === maxValue ? styles.numberRed : styles.number}>
                            {counter}
                        </div>}
            </div>
            <div className={stylesBtn.button}>
                <Button disabled={disabledIncrease} name={'+'} callBack={increaseValueHandler}/>

                <Button disabled={disabledReset} name={'reset'} callBack={resetValueHandler}/>
            </div>
        </div>
    )
})
