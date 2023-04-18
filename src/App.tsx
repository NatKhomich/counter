import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import Settings from './components/Settings/Settings';

function App() {

    const [num, setNum] = useState<number>(0)

    const buttonIncrease = () => {
        // let result = num < 5 ? num + 1 : 5
        setNum(prevNum => prevNum + 1)
    }

    const buttonDecrease = () => {
        setNum(prevNum => prevNum - 1)
    }

    const buttonReset = () => {
        setNum(0)
    }

    return (
        <div className="App">

            <Settings/>

            <Counter
                buttonIncrease={buttonIncrease}
                buttonResetHandler={buttonReset}
                buttonDecrease={buttonDecrease}
                num={num}
            />
        </div>
    );
}

export default App;
