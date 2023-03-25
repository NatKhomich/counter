import React from 'react';
import s from './Counter.module.css'
import SuperButton from './SuperButton';

type CounterType = {
    buttonIncrease: ()=> void
    buttonResetHandler: ()=> void
    num: number
}

export const Counter = (props: CounterType) => {

   const ButtonIncreaseHandler = () => {
       props.buttonIncrease()
   }

    const ButtonResetHandler = () => {
        props.buttonResetHandler()
    }

    return (
        <div className={s.counter}>
            <div className={s.numberBlock}>
                <div className={props.num === 5 ? s.color : s.number}> {props.num} </div>
            </div>
            <div className={s.buttonBlock}>
                <div className={s.btn}>

                    {/*<button className={props.num>0 ? s.active : s.default} onClick={ ButtonIncreaseHandler }> inc </button>
                    <button disabled={props.num === 0} className={s.active} onClick={ ButtonResetHandler }> reset </button>*/}

                    <SuperButton disabled={props.num === 5} name={'inc'} callBack={ ButtonIncreaseHandler } />
                    <SuperButton disabled={props.num === 0} name={'reset'} callBack={ ButtonResetHandler } />

                </div>
            </div>
        </div>
    )
}
