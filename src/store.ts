import { createStore, applyMiddleware, Store, compose, GenericStoreEnhancer, Middleware } from 'redux'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise-middleware'
import { persistStore, autoRehydrate } from 'redux-persist'
import rootReducer, { RootState } from './reducers/index'

export default function configureStore(initialState?: RootState): Store<RootState> {
    const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
    const middleware: Middleware[] = [loggerMiddleware, ReduxThunk, ReduxPromise()]
    const storeEnhancer = compose(applyMiddleware(...middleware), autoRehydrate()) as GenericStoreEnhancer;
    const store = createStore(rootReducer, initialState, storeEnhancer)
    return store
}