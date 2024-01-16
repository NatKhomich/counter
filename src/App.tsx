import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {StateType} from './state/counterReducer';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';

function App() {
    const state = useSelector<AppRootStateType, StateType>(state => state.counter)

    return (
        <div className="App">
            <Settings />

            <Counter
                counter={state.counter}
                maxValue={state.maxValue}
                error={state.error}
                displayCounter={state.displayCounter}/>
        </div>
    );
}

export default App;

