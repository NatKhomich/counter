import React, {useReducer} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {
    counterReducer,
    increaseValueAC,
    resetValueAC, setButtonAC,
    settingsMaxValueAC,
    settingsStartValueAC
} from './state/counterReducer';

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

 const [state, dispatch] = useReducer(counterReducer, {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    })

    const increaseValue = () => {
        dispatch(increaseValueAC())
    }

    const resetValue = () => {
        dispatch(resetValueAC())
    }

    const settingsMaxValue = (maxValue: number) => {
        dispatch(settingsMaxValueAC(maxValue))
    }

    const settingsStartValue = (startValue: number) => {
        dispatch(settingsStartValueAC(startValue))
    }

    const setButton = () => {
        dispatch(setButtonAC())
    }

    return (

        <div className="App">

            <Settings startValue={state.startValue}
                      maxValue={state.maxValue}

                      settingsStartValue={settingsStartValue}
                      settingsMaxValue={settingsMaxValue}

                      setButton={setButton}
                      error={state.error}/>

            <Counter increaseValue={increaseValue} //увеличить
                     resetValue={resetValue} //перезагрузить

                     startValue={state.counter}
                     maxValue={state.maxValue}

                     error={state.error}
                     displayCounter={state.displayCounter}
            />

        </div>


    );
}

export default AppReducer;

