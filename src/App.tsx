import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {
    increaseValueTC,
    resetValueTC,
    setButtonTC,
    settingsMaxValueTC,
    settingsStartValueTC,
    StateType
} from './state/counterReducer';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from './state/store';

function App() {
    const state = useSelector<AppRootStateType, StateType>(state => state.counter)
    const dispatch = useAppDispatch()

    const increaseValue = () => dispatch(increaseValueTC())
    const resetValue = () => dispatch(resetValueTC())
    const settingsMaxValue = (maxValue: number) => dispatch(settingsMaxValueTC(maxValue))
    const settingsStartValue = (startValue: number) => dispatch(settingsStartValueTC(startValue))
    const setButton = () => dispatch(setButtonTC())

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
                     displayCounter={state.displayCounter}/>
        </div>
    );
}

export default App;

