import {DisplayCounterType, ErrorType} from '../components/Counter/Counter';
import {Dispatch} from 'redux';
import {AppRootStateType} from './store';

export type StateType = {
    startValue: number
    maxValue: number
    counter: number
    error: ErrorType
    displayCounter: DisplayCounterType
}

let initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    counter: 0,
    error: 'enter',
    displayCounter: 'none'
}

export const counterReducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INCREASE-VALUE' : {
            return {...state, counter: state.counter + 1}
        }
        case 'RESET-VALUE' : {
            return {...state, counter: state.startValue}
        }
        case 'SETTINGS-MAX-VALUE' : {
            if (action.maxValue < 1 || action.maxValue <= state.startValue) {
                return {
                    ...state, maxValue: action.maxValue,
                    error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error'
                }
            } else {
                return {
                    ...state,
                    maxValue: action.maxValue,
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'startTitle',
                }
            }
        }
        case 'SETTINGS-START-VALUE' : {
            if (action.startValue < 0 || action.startValue >= state.maxValue) {
                return {
                    ...state,
                    startValue: Math.round(action.startValue),
                    counter: state.startValue,
                    error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error'
                }
            } else {
                return {
                    ...state,
                    startValue: Math.round(action.startValue),
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'startTitle'
                }
            }
        }
        case 'SET-BUTTON' : {
            if (state.maxValue < 1 || state.startValue < 0 || state.startValue >= state.maxValue) {
                return {
                    ...state,
                    error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error',
                }
            } else {
                return {
                    ...state, error: state.error = 'none',
                    displayCounter: state.displayCounter = 'number',
                    counter: state.startValue
                }
            }
        }
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof increaseValueAC> | ReturnType<typeof resetValueAC>
    | ReturnType<typeof settingsMaxValueAC> | ReturnType<typeof settingsStartValueAC>
    | ReturnType<typeof setButtonAC>

export const increaseValueAC = () => ({type: 'INCREASE-VALUE'} as const)
export const resetValueAC = () => ({type: 'RESET-VALUE'} as const)
export const settingsMaxValueAC = (maxValue: number) => ({type: 'SETTINGS-MAX-VALUE', maxValue} as const)
export const settingsStartValueAC = (startValue: number) => ({type: 'SETTINGS-START-VALUE', startValue} as const)
export const setButtonAC = () => ({type: 'SET-BUTTON'} as const)
//thunk
export const increaseValueTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const currentStartValue = getState().counter.counter
    localStorage.setItem('startValue', JSON.stringify(currentStartValue + 1))
    dispatch(increaseValueAC())
}

/*export const setStartValueLocalStorageTC = () => (dispatch: Dispatch) => {
    let max = localStorage.getItem('maxValue')
    let start = localStorage.getItem('startValue')
    if (max) {
        let newMax = JSON.parse(max)
        setMaxValue(newMax)
    }
    if (start) {
        setStartValue(JSON.parse(start))
    }
}*/

