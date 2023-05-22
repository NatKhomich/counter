import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

function App() {

    const [value, setValue] = useState<number>(0)
    //const [maxValue, setMaxValue] = useState(5)
    //const [minValue, setMinValue] = useState(0)

    const buttonIncrease = () => {
        // let result = num < 5 ? num + 1 : 5
        setValue(prevNum => prevNum + 1)
    }

    const buttonDecrease = () => {
        setValue(prevNum => prevNum - 1)
    }

    const buttonReset = () => {
        setValue(0)
    }

    return (
        <div className="App">

            <Settings/>

            <Counter
                buttonIncrease={buttonIncrease} //увеличить
                buttonDecrease={buttonDecrease} //уменьшить

                buttonReset={buttonReset} //перезагрузить

                value={value}
            />
        </div>
    );
}

export default App;
