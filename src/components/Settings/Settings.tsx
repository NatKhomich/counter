import React, {ChangeEvent, memo} from 'react';
import styles from './Settings.module.css'
import Button from '../Button/Button';
import {ErrorType} from '../Counter/Counter';
import {setButtonAC, settingsMaxValueAC, settingsStartValueAC} from '../../state/counterReducer';
import {AppRootStateType, useAppDispatch} from '../../state/store';
import {useSelector} from 'react-redux';

export const Settings = memo(() => {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.counter.error)

    const dispatch = useAppDispatch()

    const settingsMaxValue = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(settingsMaxValueAC(Math.round(+e.currentTarget.value)))
    const settingsStartValue = (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(settingsStartValueAC(Math.round(+e.currentTarget.value)))
    const setButton = () => dispatch(setButtonAC())

    return (
        <div className={styles.settings}>
            <div className={styles.maxValue}>
                <div className={styles.settingsTitle}> Max value:</div>
                <input className={error === 'error' ? styles.error : styles.input}
                       type="number"
                       value={maxValue}
                       onChange={settingsMaxValue}/>
            </div>
            <div className={styles.startValue}>
                <div className={styles.settingsTitle}> Start value:</div>
                <input className={error === 'error' ? styles.error : styles.input}
                       type="number"
                       value={startValue}
                       onChange={settingsStartValue}/>
            </div>

            <Button name={'set'}
                    callBack={setButton}
                    disabled={error === 'error'}/>
        </div>
    );
})

