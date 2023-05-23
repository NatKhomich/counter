import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    callBack: ()=> void
    disabled?: boolean| undefined 
}

const Button = (props: ButtonType) => {
    return (
            <button className={s.buttonStyled}
                    disabled={props.disabled}
                    onClick={props.callBack}> {props.name}
            </button>
    );
};

export default Button;