import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    callBack: ()=> void
    disabled?: boolean| undefined
}

const Button: FC<ButtonType> = ({name, callBack, disabled }) => {
    return (
            <button className={s.buttonStyled}
                    disabled={disabled}
                    onClick={callBack}> {name}
            </button>
    );
};

export default Button;