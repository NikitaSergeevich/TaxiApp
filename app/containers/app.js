import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

//Redux & Navigation
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider, connect } from 'react-redux';
import promises from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';

import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import { createLogger } from "redux-logger";
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
import reducer from '../reducers';

//Screens
import MainScreen from './mainscreen';
import {DrawerContainer} from './drawer';
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

const AppNavigator = StackNavigator(
    {
        MainScreen: { screen: DrawerContainer }
    },
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav }) } />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.navReducer,
});

const ConnectedNav = connect(mapStateToProps)(AppWithNavigationState);


export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedNav />
            </Provider>
        );
    }
}

export default codePush(App);
