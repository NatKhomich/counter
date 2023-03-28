import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {

    const [num, setNum] = useState<number>(0)

    const buttonIncrease = () => {
        // let result = num < 5 ? num + 1 : 5
       setNum(prevNum => prevNum +1)
    }

    const buttonReset = () => {
        setNum(0)
    }

    return (
    <div className="App">
      <Counter
          buttonIncrease={buttonIncrease}
          buttonResetHandler={buttonReset}
          num={num}
      />
    </div>
  );
}

export default App;
