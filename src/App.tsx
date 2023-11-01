import React, {useCallback} from 'react';
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

    const increaseValue = useCallback(() => dispatch(increaseValueTC()), [dispatch])
    const resetValue = useCallback(() => dispatch(resetValueTC()), [dispatch])
    const settingsMaxValue = useCallback((maxValue: number) => dispatch(settingsMaxValueTC(maxValue)), [dispatch])
    const settingsStartValue = useCallback((startValue: number) => dispatch(settingsStartValueTC(startValue)), [dispatch])
    const setButton = useCallback(() => dispatch(setButtonTC()), [dispatch])

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

