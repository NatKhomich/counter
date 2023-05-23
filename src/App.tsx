import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import s from './components/Settings/Settings.module.css';
import Button from './components/Button/Button';

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [setCounter, setSetCounter] = useState(startValue)

    const increaseStartValue = () => {
        setStartValue(num => num + 1)
        console.log(startValue)
    }

    /*const decreaseStartValue = () => {
        setStartValue(num => num - 1)
        console.log(startValue)
    }*/

    const resetValue = () => {
        setStartValue(0)
        console.log(startValue)
    }

    /*const settingsMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
       // console.log(maxValue)
    }

    const settingsStartValue = (startValue: number) => {
        setStartValue(startValue)
        //console.log(startValue)
    }*/


    const setButton = () => {
        setSetCounter(startValue)
        console.log(startValue)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }

    return (
        <div className="App">

            {/*<Settings startValue={startValue}
                      settingsStartValue={settingsStartValue}

                      maxValue={maxValue}
                      settingsMaxValue={settingsMaxValue}

                      //setButton={setButton}
                      setCounter={setCounter}


            />*/}

            <div className={s.settings}>
                <div className={s.maxValue}>
                    <div className={s.settingsTitle}> Max value:</div>
                    <input className={s.input}
                           type="number"
                           value={maxValue}
                           onChange={onChangeMaxValueHandler}
                    />
                </div>
                <div className={s.startValue}>
                    <div className={s.settingsTitle}> Start value:</div>
                    <input className={s.input}
                           type="number"
                           value={startValue}
                           onChange={onChangeStartValueHandler}
                    />
                </div>

                <Button name={'set'} callBack={setButton}/>

            </div>


            <Counter
                increaseStartValue={increaseStartValue} //увеличить
                //decreaseStartValue={decreaseStartValue} //уменьшить
                resetValue={resetValue} //перезагрузить

                startValue={startValue}
                maxValue={maxValue}

                //setCounter={setCounter}
            />
        </div>
    );
}

export default App;
