import React, {ChangeEvent} from 'react';
import s from '../Settings/Settings.module.css';
import {ErrorType} from '../../util/AppUtil';

type InputType = {
    value: number
    onChange: (event: number) => void
    error: ErrorType
}

export const Input = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+e.currentTarget.value)
    }

    return (
        <input type={'number'}
               value={props.value}
               className={props.error === 'error' ? s.error : s.input}
               onChange={onChangeHandler}
        />
    );
};
