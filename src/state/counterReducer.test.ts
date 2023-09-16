import {
    counterReducer,
    increaseValueAC,
    resetValueAC, setButtonAC,
    settingsMaxValueAC,
    settingsStartValueAC, StateType
} from './counterReducer';

let startState: StateType

beforeEach(() => {
    startState = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }
})

test('correct counter should be increment value', () => {
    const endState = counterReducer(startState, increaseValueAC())

    expect(endState.counter).toBe(1)
    expect(startState.counter).toBe(0)
})

test('correct counter should be reset value', () => {
    const endState = counterReducer(startState, resetValueAC())

    expect(endState.counter).toBe(0)
    expect(startState.counter).toBe(0)
})

test('correct counter should be settings max value correct', () => {
    const endState = counterReducer(startState, settingsMaxValueAC(startState.maxValue))

    expect(endState.maxValue).toBe(5)
    expect(endState.error).toBe('none')
    expect(endState.displayCounter).toBe('startTitle')
})


test('correct counter should be settings start value correct', () => {
    const endState = counterReducer(startState, settingsStartValueAC(startState.startValue))

    expect(endState.startValue).toBe(0)
    expect(endState.error).toBe('none')
    expect(endState.displayCounter).toBe('startTitle')
})

test('correct counter should be button value correct', () => {
    const endState = counterReducer(startState, setButtonAC())

    expect(endState.counter).toBe(0)
    expect(endState.error).toBe('none')
    expect(endState.displayCounter).toBe('number')
})

