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

import RateIcon from '../resources/icons/rateicon';
import { orderModalStyles as styles, sizeconsts } from '../resources/styles';

export default class RateField extends Component {

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
            <View style={[styles.fieldStyle, styles.rateFieldStyle]}>
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'transparent', }} onPress={() => { } }>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent', alignItems: 'center' }}>
                        <View style={{ width: '22%', backgroundColor: 'transparent', justifyContent: 'center' }}>
                            <RateIcon isActive={this.props.isSet} style={{ alignSelf: 'center' }} />
                        </View>
                        <View style={{ width: '75%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 15, color: '#4E7F9D' }}>
                                {"Эконом; от 99Р"}
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#00000029',
                        position: 'absolute',
                        left: '5%',
                        right: '5%',
                        bottom: 0,
                        height: 1,
                        alignSelf: 'center'
                    }} />
                    <View style={{
                        backgroundColor: '#00000029',
                        position: 'absolute',
                        left: '5%',
                        right: '5%',
                        top: 0,
                        height: 1,
                        alignSelf: 'center'
                    }} />
                </TouchableOpacity>
            </View>
        )
    }
}




