import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

export type ErrorType = 'error' | 'none' | 'enter'
export type DisplayCounterType = 'error' | 'number' | 'startTitle' | 'none'

export type StateType = {
    startValue: number
    maxValue: number
    counter: number
    error: ErrorType
    displayCounter: DisplayCounterType
}

function AppReducer() {

    const state = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [counter, setCounter] = useState(0)

    const [error, setError] = useState<ErrorType>('enter')
    const [displayCounter, setDisplayCounter] = useState<DisplayCounterType>('none')

    const isInitDataFalse =
        maxValue < 1 || startValue < 0 || startValue >= maxValue //иниц данные не верны

    const increaseValue = () => {
        setCounter(num => Number(num) + 1)
       // setError('none')
    }

    const resetValue = () => {
        setCounter(startValue)
    }

    const settingsMaxValue = (maxValue: number) => {
        if (maxValue < 1 || maxValue <= startValue) {
            setError('error')
            setDisplayCounter('error')
            setMaxValue(Math.round(maxValue))
        } else {
            setError('none')
            setDisplayCounter('startTitle')
            setMaxValue(Math.round(maxValue))
        }
        //setMaxValue(Math.round(maxValue))
    }

    const settingsStartValue = (startValue: number) => {
        if (startValue < 0 || startValue >= maxValue) {
            setError('error')
            setDisplayCounter('error')
            setStartValue(Math.round(startValue))

        } else {
            setError('none')
            setDisplayCounter('startTitle')
            setStartValue(Math.round(startValue))
        }
       // setStartValue(Math.round(startValue))
    }

    const setButton = () => {
        if (isInitDataFalse) {
            setError('error')
            setDisplayCounter('error')
        } else {
            setCounter(Math.round(startValue))
            setError('none')
            setDisplayCounter('number')
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

            <Counter increaseValue={increaseValue} //увеличить
                     resetValue={resetValue} //перезагрузить

                     startValue={counter}
                     maxValue={maxValue}

                     error={error}
                     displayCounter={displayCounter}
            />

        </div>


    );
}

export default AppReducer;
