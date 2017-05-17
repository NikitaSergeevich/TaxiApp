import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { Keyboard, Text } from 'react-native';

import { ActionCreators } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainScreen from './mainscreen';

//Title
import { screenStyles as styles } from '../resources/styles';

class ConnectedRouter extends Component {

    render() {

        return (
            <Router>
                <Scene key='mainscreen'
                    initial={true}
                    hideNavBar={true}
                    component={MainScreen}
                />
            </Router>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(store) {
    return {
        init: store.userReducer.init,
        phoneNumber: store.userReducer.phoneNumber,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRouter);
