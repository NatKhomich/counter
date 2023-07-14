import {StateType} from '../AppReducer';


export const counterReducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INCREASE-VALUE' : {
            return {...state, counter: action.payload.counter + 1}
        }
        default: return state
    }
}

type ActionsType = IncreaseValueACType | ResetValueACType

type IncreaseValueACType = ReturnType<typeof increaseValueAC>
export const increaseValueAC = (counter: number) => {
    return {
        type: 'INCREASE-VALUE',
        payload: {
            counter
        }
    } as const
}

type ResetValueACType = ReturnType<typeof resetValueAC>
const resetValueAC = () => {
    return {
        type: 'RESET-VALUE',
    } as const
}