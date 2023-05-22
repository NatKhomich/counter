import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';

/*
type SettingsType = {
    startValue: number
    maxValue: number

    settingsMaxValue: (maxValue: number) => void
    settingsStartValue: (startValue: number) => void

    //setButton: ()=> void
    setCounter: number
}

const Settings = (props: SettingsType) => {

    /!*const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)*!/


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {//получили макс значение
        props.settingsMaxValue(+e.currentTarget.value)
        //console.log(e.currentTarget.value)
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {//получили мин значение
        props.settingsStartValue(+e.currentTarget.value)
    }


    return (
        <div className={s.settings}>

            <div className={s.maxValue}>
                <div className={s.settingsTitle}> Max value:</div>
                <input className={s.input}
                       type="number"
                    //value={props.maxValue}
                       onChange={maxValueHandler}
                />
            </div>

            <div className={s.startValue}>
                <div className={s.settingsTitle}> Start value:</div>
                <input className={s.input}
                       type="number"
                       //value={props.startValue}
                       onChange={minValueHandler}

                />
            </div>

            <Button name={'set'} callBack={ ()=> {} }/>

        </div>
    );
};

export default Settings;*/
