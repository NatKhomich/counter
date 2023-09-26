import React, {ChangeEvent, FC, memo, useCallback} from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';
import {ErrorType} from '../Counter/Counter';

type SettingsType = {
    startValue: number
    maxValue: number
    settingsStartValue: (startValue: number) => void
    settingsMaxValue: (maxValue: number) => void
    setButton: () => void
    error: ErrorType
}

export const Settings: FC<SettingsType> = memo(({
                                               startValue,
                                               maxValue,
                                               settingsStartValue,
                                               settingsMaxValue,
                                               setButton,
                                               error
                                           }) => {

    const maxValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            settingsMaxValue(+e.currentTarget.value)
    }, [settingsMaxValue])
    const minValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
            settingsStartValue(+e.currentTarget.value)
    }, [settingsStartValue])

    return (
        <div className={s.settings}>
            <div className={s.maxValue}>
                <div className={s.settingsTitle}> Max value:</div>
                <input className={error === 'error' ? s.error : s.input}
                       type="number"
                       value={maxValue}
                       onChange={maxValueHandler}/>
            </div>
            <div className={s.startValue}>
                <div className={s.settingsTitle}> Start value:</div>
                <input className={error === 'error' ? s.error : s.input}
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

