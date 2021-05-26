import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/index'
let store


const initialState = {
    lastUpdate: 0,
    light: false,
    count: 0,
  }





function initStore(preloadedState = initialState) {
    return createStore(
      reducer,
      composeWithDevTools(applyMiddleware())
    )
  }
  
  export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)
    if (preloadedState && store) {
      _store = initStore({
        ...store.getState(),
        ...preloadedState,
      })
      store = undefined
    }
    if (typeof window === 'undefined') return _store
    if (!store) store = _store
  
    return _store
  }
  
  export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
  }