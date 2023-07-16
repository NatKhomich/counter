import React, {ChangeEvent} from 'react';
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

    isInitDataFalse: boolean
}

const Settings = (props: SettingsType) => {

    const maxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {//получили макс значение
        props.settingsMaxValue(+event.currentTarget.value)
    }
    const minValueHandler = (event: ChangeEvent<HTMLInputElement>) => {//получили мин значение
        props.settingsStartValue(+event.currentTarget.value)
    }

    return (

        <div className={s.settings}>
            <div className={s.maxValue}>
                <div className={s.settingsTitle}> Max value:</div>
                <input className={props.error === 'error' ? s.error : s.input}
                       type="number"
                       value={props.maxValue}
                       onChange={maxValueHandler}
                />
            </div>
            <div className={s.startValue}>
                <div className={s.settingsTitle}> Start value:</div>
                <input className={props.error === 'error' ? s.error : s.input}
                       type="number"
                       value={props.startValue}
                      onChange={minValueHandler}
                />
            </div>
              <Button name={'set'}
                    callBack={() => props.setButton()}
                    disabled={props.error==='error'}

            />

        </div>
    );
};

export default Settings;
