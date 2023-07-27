import {StateType} from '../AppReducer';

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
            if (action.payload.maxValue < 1 || action.payload.maxValue <= state.startValue) {
                return {
                    ...state,
                    maxValue: action.payload.maxValue,
                    error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error'
                }
            } else {
                return {
                    ...state,
                    maxValue: action.payload.maxValue,
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'startTitle',
                }
            }
        }

        case 'SETTINGS-START-VALUE' : {
            if (action.payload.startValue < 0 || action.payload.startValue >= state.maxValue) {
                console.log('fvfdv')
                return {
                    ...state,
                    startValue: Math.round(action.payload.startValue),
                    counter: state.startValue,
                    error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error'
                }
            } else {
                return {
                    ...state,
                    startValue: Math.round(action.payload.startValue),
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'startTitle'
                }
            }
        }

        case 'SET-BUTTON' : {
            if (state.maxValue < 1 || state.startValue < 0 || state.startValue >= state.maxValue ) {
                return {
                    ...state,
                    error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error',
                }
            } else {
                return {
                    ...state,
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'number',
                    counter: state.startValue
                }
            }
        }

        default:
            return state
    }
}

type ActionsType = IncreaseValueACType | ResetValueACType
    | SettingsMaxValueACType | SettingsStartValueACType | SetButtonACType

type IncreaseValueACType = ReturnType<typeof increaseValueAC>
export const increaseValueAC = () => {
    return {
        type: 'INCREASE-VALUE',
    } as const
}

type ResetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = () => {
    return {
        type: 'RESET-VALUE',
    } as const
}

type SettingsMaxValueACType = ReturnType<typeof settingsMaxValueAC>
export const settingsMaxValueAC = (maxValue: number) => {
    return {
        type: 'SETTINGS-MAX-VALUE',
        payload: {
            maxValue
        }
    } as const
}

type SettingsStartValueACType = ReturnType<typeof settingsStartValueAC>
export const settingsStartValueAC = (startValue: number) => {
    return {
        type: 'SETTINGS-START-VALUE',
        payload: {
            startValue
        }
    } as const
}

type SetButtonACType = ReturnType<typeof setButtonAC>
export const setButtonAC = () => {
    return {
        type: 'SET-BUTTON',
    } as const
}


