import { useMemo } from "react"
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ThunkMiddleware from "redux-thunk"
import reducers from "./reducers"

let store

function initStore(initialState) {
    return createStore(
        reducers, initialState, composeWithDevTools(applyMiddleware(ThunkMiddleware))
    )
}

export const initializerStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getSate(),
            ...preloadedState,
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializerStore(initialState), [initialState])
    return store
}