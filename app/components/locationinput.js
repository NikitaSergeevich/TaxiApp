import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { screenStyles as styles } from '../resources/styles';
import GeoIcon from '../resources/icons/geoicon';

export default class LocationInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            secureTextEntry: false,
            isSet: false,
        }
    }

    static get defaultProps() {
        return {
            onChangeText: () => { },
            onSelectionChange: () => { },
            autoFocus: false,
            isError: false,
            keyboardType: 'default',
            secureTextEntry: false
        };
    }

    onFocus() {
        this.setState({ isFocused: true });
    }

    onBlur() {
        this.setState({ isFocused: false });
    }

    focus() {
        this.textinput.focus();
    }

    render() {
        return (
            <TouchableHighlight style={{ flex: 1 }} onPress={() => { }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }}>
                        <GeoIcon isSelected={this.state.isSet} style={{ alignSelf: 'center' }} />
                    </View>
                    <View style={{ flex: 3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>
                            {this.state.isSet ? "Ул. Фрунзе 86" : "Куда едем"}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );

    }
}