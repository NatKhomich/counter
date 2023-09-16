import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {loadState, saveState} from '../localStorage/localStorage';

const rootReducer = combineReducers({
        counter: counterReducer
    })

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

// @ts-ignore
window.store = store