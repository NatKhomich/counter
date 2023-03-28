import React from 'react';
import s from './SuperButton.module.css'

type SuperButtonType = {
    name: string
    callBack: ()=> void
    disabled?: boolean
}

const SuperButton = (props: SuperButtonType) => {
    return (
            <button className={s.buttonStyled}
                    disabled={props.disabled}
                    onClick={props.callBack}> {props.name}
            </button>
    );
};

export default SuperButton;