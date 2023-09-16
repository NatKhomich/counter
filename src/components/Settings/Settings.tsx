import React, {ChangeEvent, FC} from 'react';
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

export const Settings: FC<SettingsType> = ({
                                               startValue,
                                               maxValue,
                                               settingsStartValue,
                                               settingsMaxValue,
                                               setButton,
                                               error
                                           }) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settingsMaxValue(+e.currentTarget.value)
    }
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settingsStartValue(+e.currentTarget.value)
    }

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
};

