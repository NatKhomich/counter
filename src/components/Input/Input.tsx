import React, {ChangeEvent, FC} from 'react';
import s from '../Settings/Settings.module.css';
import {ErrorType} from '../Counter/Counter';

type InputType = {
    value: number
    onChange: (event: number) => void
    error: ErrorType
}

export const Input: FC<InputType> = ({value,onChange, error }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(+e.currentTarget.value)
    }
    return (
        <input type={'number'}
               value={value}
               className={error === 'error' ? s.error : s.input}
               onChange={onChangeHandler}
        />
    );
};
