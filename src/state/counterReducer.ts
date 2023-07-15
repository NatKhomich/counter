import {StateType} from '../AppReducer';


export const counterReducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INCREASE-VALUE' : {
            return {...state, counter: state.startValue + 1}
        }

        case 'RESET-VALUE' : {
            return {...state, counter: action.payload.startValue}
        }

        case 'SETTINGS-MAX-VALUE' : {
            if (state.maxValue < 1 || state.maxValue <= state.startValue) {
                return {
                    ...state, error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error',
                    maxValue: action.payload.maxValue
                }
            } else {
                return {
                    ...state,
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'startTitle',
                    maxValue: action.payload.maxValue
                }
            }
        }

        case 'SETTINGS-START-VALUE' : {
            if (state.startValue < 0 || state.startValue >= state.maxValue) {
                return {
                    ...state, error: state.error = 'error',
                    displayCounter: state.displayCounter = 'error',
                    startValue: action.payload.startValue
                }
            } else {
                return {
                    ...state,
                    error: state.error = 'none',
                    displayCounter: state.displayCounter = 'startTitle',
                    startValue: action.payload.startValue
                }
            }
        }

        default:
            return state
    }
}

type ActionsType = IncreaseValueACType | ResetValueACType
    | SettingsMaxValueACType | SettingsStartValueACType

type IncreaseValueACType = ReturnType<typeof increaseValueAC>
export const increaseValueAC = () => {
    return {
        type: 'INCREASE-VALUE',
    } as const
}

type ResetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = (startValue: number) => {
    return {
        type: 'RESET-VALUE',
        payload: {
            startValue
        }
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