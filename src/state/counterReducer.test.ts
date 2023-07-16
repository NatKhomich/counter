import React from 'react';
/*
import {
    counterReducer,
    increaseValueAC,
    resetValueAC, setButtonAC,
    settingsMaxValueAC,
    settingsStartValueAC
} from './counterReducer';
import {StateType} from '../AppReducer';


test('correct counter should be increment value', () => {
    let startState: StateType = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    const endState = counterReducer(startState, increaseValueAC())

    expect(endState.counter).toBe(1)
    expect(startState.counter).toBe(0)
})

test('correct counter should be reset value', () => {
    let startState: StateType = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    let startState2: StateType = {
        startValue: 3,
        maxValue: 5,
        counter: 3,
        error: 'enter',
        displayCounter: 'none'
    }

    const endState = counterReducer(startState, resetValueAC())
    const endState2 = counterReducer(startState2, resetValueAC())

    expect(endState.counter).toBe(0)
    expect(startState.counter).toBe(0)

    expect(endState2.counter).toBe(3)
    expect(startState2.counter).toBe(3)
})


test('correct counter should be settings max value correct', () => {
    let startState: StateType = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    let startState2: StateType = {
        startValue: 4,
        maxValue: 3,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    const endState = counterReducer(startState, settingsMaxValueAC(startState.maxValue))

   const endState2 = counterReducer(startState2, settingsMaxValueAC(startState2.maxValue))

    expect(endState.maxValue).toBe(5)
    expect(endState.error).toBe('none')
    expect(endState.displayCounter).toBe('startTitle')


    expect(endState2.maxValue).toBe(3)
    expect(endState2.error).toBe('error')
    expect(endState2.displayCounter).toBe('error')
})


test('correct counter should be settings start value correct', () => {
    let startState: StateType = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    let startState2: StateType = {
        startValue: 4,
        maxValue: 3,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    const endState = counterReducer(startState, settingsStartValueAC(startState.startValue))

    const endState2 = counterReducer(startState2, settingsStartValueAC(startState2.startValue))

    expect(endState.startValue).toBe(0)
    expect(endState.error).toBe('none')
    expect(endState.displayCounter).toBe('startTitle')


    expect(endState2.startValue).toBe(4)
    expect(endState2.error).toBe('error')
    expect(endState2.displayCounter).toBe('error')
})

test('correct counter should be button value correct', () => {
    let startState: StateType = {
        startValue: 0,
        maxValue: 5,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    let startState2: StateType = {
        startValue: 4,
        maxValue: 3,
        counter: 0,
        error: 'enter',
        displayCounter: 'none'
    }

    const endState = counterReducer(startState, setButtonAC())

    const endState2 = counterReducer(startState2, setButtonAC())


    expect(endState.counter).toBe(0)
    expect(endState.error).toBe('none')
    expect(endState.displayCounter).toBe('number')

    expect(endState2.error).toBe('error')
    expect(endState2.displayCounter).toBe('error')
})
*/

