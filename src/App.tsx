import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

function App() {

    //const [value, setValue] = useState<number>(0)

    const [startValue, setStartValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(5)


    const increaseStartValue = () => {
        setStartValue(num => num + 1)
    }

    const decreaseStartValue = () => {
        setStartValue(num => num - 1)
    }

    const resetValue = () => {
        setStartValue(0)
    }

    const settingsMaxValue = (maxValue: number) => {
        setMaxValue(maxValue)
        console.log(maxValue)
    }

    const settingsStartValue = (startValue: number) => {
        setStartValue(startValue)
        console.log(startValue)
    }

    const setButton = () => {

    }

    return (
        <div className="App">

            <Settings startValue={startValue}
                      settingsStartValue={settingsStartValue}

                      maxValue={maxValue}
                      settingsMaxValue={settingsMaxValue}


            />

            <Counter
                increaseStartValue={increaseStartValue} //увеличить
                decreaseStartValue={decreaseStartValue} //уменьшить

                resetValue={resetValue} //перезагрузить

                startValue={startValue}
            />
        </div>
    );
}

export default App;
