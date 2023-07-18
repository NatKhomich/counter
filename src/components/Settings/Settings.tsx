import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css'
import {ErrorType} from '../../App';
import Button from '../Button/Button';

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

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {//получили макс значение
        settingsMaxValue(+event.currentTarget.value)
    }
    const minValueHandler = (event: ChangeEvent<HTMLInputElement>) => {//получили мин значение
        settingsStartValue(+event.currentTarget.value)
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

