import React, {ChangeEvent, memo} from 'react';
import styles from './Settings.module.css'
import Button from '../Button/Button';
import {ErrorType} from '../Counter/Counter';
import {setButtonAC, settingsMaxValueAC, settingsStartValueAC} from '../../state/counterReducer';
import {useAppDispatch} from '../../state/store';

type Props = {
    startValue: number
    maxValue: number
    error: ErrorType
}

export const Settings = memo(({startValue, maxValue, error}: Props) => {

    const dispatch = useAppDispatch()

    const settingsMaxValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(settingsMaxValueAC(+e.currentTarget.value))
    const settingsStartValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(settingsStartValueAC(+e.currentTarget.value))
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

