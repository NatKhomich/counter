import React from 'react';
import s from './Counter.module.css'
import Button from '../Button/Button';
import sBtn from '../Button/Button.module.css'
/*import DisplayCounter from '../Counter/DisplayCounter/DisplayCounter';*/

type CounterType = {
    buttonIncrease: () => void
    buttonDecrease: () => void
    buttonReset: () => void
    value: number
}

export const Counter = (props: CounterType) => {

    const ButtonIncreaseHandler = () => {
        props.buttonIncrease()
    }

    const ButtonDecreaseHandler = () => {
        props.buttonDecrease()
    }

    const ButtonResetHandler = () => {
        props.buttonReset()
    }

    return (
        <div className={s.counter}>

            {/*дисплей*/}
            <div className={s.displayBlock}>
                <div className={props.value === 5 ? s.numberRed : s.number}> {props.value} </div>
            </div>

            <div className={sBtn.button}>
                <Button disabled={props.value === 5} name={'+'} callBack={ButtonIncreaseHandler}/>
                <Button disabled={props.value === 0} name={'-'} callBack={ButtonDecreaseHandler}/>
                <Button disabled={props.value === 0} name={'reset'} callBack={ButtonResetHandler}/>
            </div>
        </div>
    )
}
