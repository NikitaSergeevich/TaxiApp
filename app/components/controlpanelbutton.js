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
            <TouchableOpacity
                style={{
                    marginLeft: '6%',
                    marginBottom: '9%',
                }}
                activeOpacity={0.6}
                onPress={() => { this.handlePress() } }
                underlayColor={'transparent'}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    {this.props.icon}
                    <View style={{
                        width: '60%',
                        marginLeft: '8%',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: 'white',
                        }}>
                            {this.props.text}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
