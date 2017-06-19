/**
* Created by innopolis2 on 02.11.16.
*/

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { orderModalStyles as styles } from '../resources/styles';

export default class ControlPanelButton extends Component {

    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            handlePress: () => { }
        };
    }

    handlePress() {
        this.props.handlePress();
    }

    render() {
        return (
            <View style={[
                styles.fieldStyle,
                styles.geoFieldStyle,
                this.state.isExpanded ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 } : {}]}>
                <LocationInput />
                <LocationInput />
                <View style={{
                    backgroundColor: '#4E7F9D55',
                    position: 'absolute',
                    left: '4%',
                    right: '4%',
                    bottom: 0,
                    height: 1,
                    alignSelf: 'center'
                }} />
            </View >
        )
    }
}


