import {counterReducer, increaseValueAC} from './counterReducer';
import {StateType} from '../AppReducer';


test('correct counter increment value', () => {
    let startState: StateType = {
        startValue: 0,
        maxValue: 5,
        counter: 0
    }

    const endState = counterReducer(startState, increaseValueAC(startState.counter))

    expect(endState.counter).toBe(1)
})
