import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';


const Settings = () => {

    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {//получили макс значение
        setMaxValue(Number(e.currentTarget.value))
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {//получили мин значение
        setStartValue(Number(e.currentTarget.value))
    }

    return (
        <div className={s.settings}>

            <div className={s.maxValue}>
                <div className={s.settingsTitle}> Max value:</div>
                <input className={s.input}
                       type="number"
                       value={maxValue}
                       onChange={ maxValueHandler }
                />
            </div>

            <div className={s.startValue}>
                <div className={s.settingsTitle}> Start value:</div>
                <input className={s.input}
                       type="number"
                       value={startValue}
                       onChange={ minValueHandler }

                />
            </div>

            <Button name={'set'} callBack={ ()=> {} }/>

        </div>
    );
};

export default Settings;