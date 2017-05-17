import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

//Redux & Navigation
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import { Provider } from 'react-redux';
import promises from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

import reducer from '../reducers';
import { Actions, Router, Scene } from 'react-native-router-flux';
import ConnectedRouter from './connectedRouter';
import MainScreen from './mainscreen';

//Screens

import codePush from "react-native-code-push";

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunk,
            loggerMiddleware,
            promises()
        ),
        autoRehydrate()
    );
    let store = createStore(reducer, initialState, enhancer);
    persistStore(store, { storage: AsyncStorage }, () => {
        console.log('restored')
    });
    return store;
}

const store = configureStore({});

class App extends Component {
    render() {
        console.log("lol")
        return (
            <Provider store={store}>
                <ConnectedRouter />
            </Provider>
        );
    }
}

export default codePush(App);
