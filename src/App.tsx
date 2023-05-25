import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

export type ErrorType = 'error' | 'none' | 'enter'

function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(0)

    const [error, setError] = useState<ErrorType>('enter')
    const [displayCounter, setDisplayCounter] = useState(false)
    //const [disabled, setDisabled] = useState(false)

    useEffect( ()=> {
        let max = localStorage.getItem('maxValue')
        let start = localStorage.getItem('startValue')
        if (max) {
           let newMax =  JSON.parse(max)
          setMaxValue(newMax)
        }
        if (start) {
            setStartValue( JSON.parse(start))
        }
      /*if(max && start) {
          if(max <= start) {
              setError('error')
          }
      }*/
    },[] )
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [maxValue, startValue])

    const isInitDataFalse =
        maxValue < 1 || startValue < 0 || startValue >= maxValue //иниц данные не верны

    const increaseStartValue = () => {
        setCounter(num => Number(num) + 1)
        setError('none')
    }
    /*const decreaseStartValue = () => {
        setStartValue(num => num - 1)
        console.log(startValue)
    }*/
    const resetValue = () => {
        setCounter(startValue)
    }

    const settingsMaxValue = (maxValue: number) => {
       /* if(maxValue < 1) {
            setError('error')
        } else {
            setError('none')
        }*/
        setMaxValue(Math.round(maxValue))
    }
    const settingsStartValue = (startValue: number) => {
        /*if( startValue < 0) {
            setError('error')

        } else {
            setError('none')
        }*/
        setStartValue(Math.round(startValue))
    }

    const setButton = () => {
        if (isInitDataFalse) {
           setError('error')
            setDisplayCounter(false)

        } else {
            setCounter(Math.round(startValue))
            setError('none')
            setDisplayCounter(true)
        }
    }

    return (
        <div className="App">

            <Settings startValue={startValue}
                      maxValue={maxValue}

                      settingsStartValue={settingsStartValue}
                      settingsMaxValue={settingsMaxValue}

                      setButton={setButton}
                      error={error}
                      isInitDataFalse={isInitDataFalse}

            />

            <Counter increaseStartValue={increaseStartValue} //увеличить
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
