import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import сreateLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const logger = сreateLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            logger,
            thunk
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}