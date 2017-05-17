import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';

import { videoModuleStyles } from '../resources/styles';

export default class MainScreen extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'red'
            }}>
                <StatusBar hidden={true} />

            </View>
        );
    }
}