import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import Settings from './components/Settings/Settings';


function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [counter, setCounter] = useState(0)
    const [error, setError] = useState<string|null>(null)


    const increaseStartValue = () => {
        setCounter(num => Number(num) + 1)
        setError(null)
    }

    /*const decreaseStartValue = () => {
        setStartValue(num => num - 1)
        console.log(startValue)
    }*/

    const resetValue = () => {
        setCounter(startValue)
    }

    const settingsMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
       // console.log(maxValue)
    }

    const settingsStartValue = (startValue: number) => {
        setStartValue(startValue)
    }


    const setButton = () => {
        if(maxValue <= startValue || maxValue<= 0 || startValue <= 0) {
            setError('incorrect value!')
        } else {
            setCounter(startValue)
        }
    }

   /* const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }*/

    return (
        <div className="App">

            <Settings startValue={startValue}
                      maxValue={maxValue}

                      settingsStartValue={settingsStartValue}
                      settingsMaxValue={settingsMaxValue}

                      setButton={setButton}
            />

            <Counter
                increaseStartValue={increaseStartValue} //увеличить
                //decreaseStartValue={decreaseStartValue} //уменьшить
                resetValue={resetValue} //перезагрузить

                startValue={counter}
                maxValue={maxValue}

                error={error}
            />
        </div>
    );
}

export default App;
