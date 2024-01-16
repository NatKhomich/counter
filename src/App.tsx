import React from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';

function App() {

    return (
        <div className="App">
            <Settings/>

            <Counter/>
        </div>
    );
}

export default App;

