/**
 * Created by innopolis2 on 02.11.16.
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text, TouchableHighlight, StyleSheet} from "react-native";

export default class Button extends Component {

    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            isEnabled: true,
            isClickableOutside: false,
            isVisible: true,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.isClickableOutside) {
            if (this.props.isVisible &&
                (this.props.click.x < this.state.x || this.props.click.x > this.state.xwidth ||
                    this.props.click.y < this.state.y || this.props.click.y > this.state.yheight)) {
                this.props.hideExitButton();
            }
        }
        return true;
    }

    measureView(event) {
        if (this.props.isClickableOutside) {
            this.setState({
                x: event.nativeEvent.layout.x,
                y: event.nativeEvent.layout.y,
                xwidth: event.nativeEvent.layout.width + event.nativeEvent.layout.x,
                yheight: event.nativeEvent.layout.height + event.nativeEvent.layout.y,
            })
        }
    }

    handlePress() {
        if (this.props.onPress) {
            this.props.onPress();
        }
    }

    render() {
        let disabledButton = (
            <View style={[styles.rootContainer, this.props.rootStyle]}>
                <View style={[styles.container, this.props.container, this.props.disabledStyle]}>
                    {this.props.icon}
                    <Text style={[styles.text, this.props.textStyle, this.props.disabledTextStyle]}>{this.props.text}</Text>
                </View>
            </View>
        );

        let enabledButton = (
            <TouchableHighlight activeOpacity={0.6} style={[styles.rootContainer, this.props.rootStyle]}
                onPress={() => this.handlePress() }
                onLayout={this.measureView.bind(this) }
                underlayColor={'transparent'}>
                <View style={[styles.container, this.props.container]}>
                    {this.props.icon}
                    <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        );

        let invisibleButton = (
            <View style={this.props.invisbleStyle}/>
        );

        let content = null;

        if (!this.props.isEnabled) {
            content = disabledButton;
        } else {
            content = enabledButton;
        }

        if (!this.props.isVisible) {
            content = invisibleButton;
        }

        return (
            content
        )
    }
}

var styles = StyleSheet.create({
    rootContainer: {
        margin: 8,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#476fd0",
        borderRadius: 10,
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        textAlign: 'center',
        color: "#4f4e4e",
    },
    colorTransparent: {
        color: 'transparent',
    },
    borderColorTransparent: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    }
})


