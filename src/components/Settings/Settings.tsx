import React from 'react';
import s from './Settings.module.css'
import SuperButton from '../SuperButton/SuperButton';


const Settings = () => {

    return (
        <div className={s.settings}>

            <div className={s.maxValue}>
                <div className={s.settingsTitle}> Max value:</div>
                <input className={s.input}
                       type="number"
                />
            </div>

            <div className={s.startValue}>
                <div className={s.settingsTitle}> Start value:</div>
                <input className={s.input}
                       type="number"

                />
            </div>

            <SuperButton name={'set'} callBack={() => {
            }}/>

        </div>
    );
};

export default Settings;