import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';
import {ErrorType} from '../../App';

type SettingsType = {
    startValue: number
    maxValue: number

    settingsStartValue: (startValue: number)=> void
    settingsMaxValue: (maxValue: number)=> void

    setButton: ()=> void
    error: ErrorType

    isInitDataFalse: boolean

   }

const Settings = (props: SettingsType) => {

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {//получили макс значение
        props.settingsMaxValue(+e.currentTarget.value)

    }
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {//получили мин значение
        props.settingsStartValue(+e.currentTarget.value)
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
                    callBack={()=> props.setButton()}

            />


        </div>
    );
};

export default Settings;
