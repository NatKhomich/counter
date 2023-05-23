import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import Settings from './components/Settings/Settings';


function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [counter, setCounter] = useState(0)
    const [error, setError] = useState(false)

    const [displayCounter, setDisplayCounter] = useState(false)


    const isInitDataWrong =
        maxValue < 1 || startValue < 0 || startValue >= maxValue //иниц данные не верны

    const increaseStartValue = () => {
        setCounter(num => Number(num) + 1)
        setError(false)
    }
    /*const decreaseStartValue = () => {
        setStartValue(num => num - 1)
        console.log(startValue)
    }*/
    const resetValue = () => {
        setCounter(startValue)
    }

    const settingsMaxValue = (maxValue: number) => {
        setMaxValue(Math.round(maxValue))
    }
    const settingsStartValue = (startValue: number) => {
        setStartValue(Math.round(startValue))
    }

    const setButton = () => {
        if(isInitDataWrong) {
            setError(true)
            setDisplayCounter(false)

        } else {
            setCounter(Math.round(startValue))
            setError(false)
            setDisplayCounter(true)

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
                      error={error}
            />

            <Counter
                increaseStartValue={increaseStartValue} //увеличить
                resetValue={resetValue} //перезагрузить

                startValue={counter}
                maxValue={maxValue}

                error={error}
                displayCounter={displayCounter}

                //decreaseStartValue={decreaseStartValue} //уменьшить
            />
        </div>
    );
}

export default App;
