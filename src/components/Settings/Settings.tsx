import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {ErrorType} from '../../App';
import Button from '../Button/Button';
import {Input} from '../Input/Input';

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

    const maxValueHandler = (event: number) => {//получили макс значение
        props.settingsMaxValue(event)
    }
    const minValueHandler = (event: number) => {//получили мин значение
        props.settingsStartValue(event)
    }

    return (

        <div className={s.settings}>
            <div className={s.maxValue}>
                <div className={s.settingsTitle}> Max value:</div>
               {/* <input className={props.error === 'error' ? s.error : s.input}
                       type="number"
                       value={props.maxValue}
                       onChange={maxValueHandler}
                />*/}

                <Input value={props.maxValue}
                       onChange={maxValueHandler }
                       error={props.error}

                />

            </div>
            <div className={s.startValue}>
                <div className={s.settingsTitle}> Start value:</div>
                {/*<input className={props.error === 'error' ? s.error : s.input}
                       type="number"
                       value={props.startValue}
                      // onChange={minValueHandler}
                />*/}

                <Input value={props.startValue}
                       onChange={minValueHandler}
                       error={props.error}
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
