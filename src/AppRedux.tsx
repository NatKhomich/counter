import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {
    increaseValueAC,
    resetValueAC, setButtonAC,
    settingsMaxValueAC,
    settingsStartValueAC
} from './state/counterReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

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

    const state = useSelector<AppRootStateType, StateType>(state => state.counter)
    const dispatch = useDispatch()

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

            <Counter increaseValue={increaseValue}
                     resetValue={resetValue}

                     startValue={state.counter}
                     maxValue={state.maxValue}

                     error={state.error}
                     displayCounter={state.displayCounter}
            />

        </div>


    );
}

export default AppReducer;

