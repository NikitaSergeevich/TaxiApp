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

import LocationInput from './locationinput';
import { orderModalStyles as styles } from '../resources/styles';

export default class GeoField extends Component {

    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            handlePress: () => { },
            isExpanded: false,
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
                this.props.isExpanded ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 } : {}]}>
                <LocationInput />
                <LocationInput />
                <View style={{
                    backgroundColor: '#00000029',
                    position: 'absolute',
                    left: '5%',
                    right: '5%',
                    bottom: 0,
                    height: 1,
                    alignSelf: 'center'
                }} />
            </View >
        )
    }
}


