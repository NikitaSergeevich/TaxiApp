import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { screenStyles as styles, userFormStyles } from '../resources/styles';

export default class FormAutoCompleteInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            text: '',
            selected: false,
        }
    }

    static get defaultProps() {
        return {
            onChangeText: () => { },
            onSelectionChange: () => { },
            onSelection: () => { },
            autoFocus: false,
            isError: false,
            keyboardType: 'default',
            secureTextEntry: false,
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

    onChangeText(text) {
        this.setState({ text: text, selected: false });
        this.props.onChangeText(text);
    }

    onSelection(e, o) {
        this.setState({ selected: true, text: o.name });
        this.props.onSelection(o.data);
    }

    render() {
        let result = '';
        if (this.state.isFocused && !this.props.isError) {
            result = styles.selected;
        }
        if (!this.state.isFocused && !this.props.isError) {
            result = styles.blured;
        }
        if (this.props.isError) {
            result = styles.error;
        }

        let options = null;
        if (Array.isArray(this.props.data) && !this.state.selected) {
            options = this.props.data.map((o, i) => {
                return (
                    <TouchableHighlight key={i} underlayColor={'transparent'}
                        activeOpacity={0.6}
                        onPress={(e) => { this.onSelection(e, o) }}>
                        <Text style={userFormStyles.locationOption}>
                            {o.name}
                        </Text>
                    </TouchableHighlight>
                )
            })
        }
        const style = !this.state.selected && Array.isArray(this.props.data) && this.props.data.length != 0 ?
            { borderBottomWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderTopWidth: 0 } :
            { borderBottomWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 };

        return (
            <View style={[this.props.style, { marginBottom: 30 }]}>
                <Text style={[styles.textInputTitle, result]}>
                    {this.props.title}
                </Text>
                <View style={[styles.inputFullContainer, styles.inputBorder, { borderBottomColor: this.props.isError ? '#E36161' : '#2196F3' }]}>
                    <TextInput
                        ref={(ref) => { this.textinput = ref; }}
                        style={[styles.input, { color: this.props.isError ? '#E36161' : '#000000' }]}
                        autoFocus={this.props.autoFocus}
                        onFocus={() => { this.onFocus(); }}
                        onBlur={() => { this.onBlur(); }}
                        secureTextEntry={this.props.secureTextEntry}
                        autoCorrect={false}
                        textAlign={'left'}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#ACACAC'}
                        placeholder={this.props.placeholder}
                        keyboardType={this.props.keyboardType}
                        blurOnSubmit={false}
                        numberOfLines={1}
                        maxLength={this.props.maxLength}
                        value={this.state.text}
                        selection={this.props.selection}
                        onChangeText={(text) => {
                            this.onChangeText(text)
                        }}
                        onSelectionChange={() => {
                            this.props.onSelectionChange()
                        }}
                    />
                </View>
                <View style={[styles.inputFullContainer, { borderColor: 'gray', paddingLeft: 8 }, style]}>
                    {options}
                </View>
            </View>
        );

    }
}