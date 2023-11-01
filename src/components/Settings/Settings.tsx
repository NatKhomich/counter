import React, {ChangeEvent, FC, memo, useCallback} from 'react';
import styles from './Settings.module.css'
import Button from '../Button/Button';
import {ErrorType} from '../Counter/Counter';

type Settings = {
    startValue: number
    maxValue: number
    settingsStartValue: (startValue: number) => void
    settingsMaxValue: (maxValue: number) => void
    setButton: () => void
    error: ErrorType
}

export const Settings: FC<Settings> = memo((props) => {

    const {startValue, maxValue, settingsStartValue, settingsMaxValue, setButton, error} = props

    const maxValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            settingsMaxValue(+e.currentTarget.value)
    }, [settingsMaxValue])

    const minValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            settingsStartValue(+e.currentTarget.value)
    }, [settingsStartValue])

    return (
        <div className={styles.settings}>
            <div className={styles.maxValue}>
                <div className={styles.settingsTitle}> Max value:</div>
                <input className={error === 'error' ? styles.error : styles.input}
                       type="number"
                       value={maxValue}
                       onChange={maxValueHandler}/>
            </div>
            <div className={styles.startValue}>
                <div className={styles.settingsTitle}> Start value:</div>
                <input className={error === 'error' ? styles.error : styles.input}
                       type="number"
                       value={startValue}
                       onChange={minValueHandler}/>
            </div>
            <Button name={'set'}
                    callBack={() => setButton()}
                    disabled={error === 'error'}/>
        </div>
    );
})

