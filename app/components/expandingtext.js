import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux';

import { сonfirmationCodeFormStyles as styles } from '../resources/styles'

export default class ExpandingText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            animation: new Animated.Value(1),
            minHeight: 0,
            maxHeight: 0,
        };
    }

    static get defaultProps() {
        return {
            isShown: false
        };
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.isShown && !nextProps.isShown || !this.props.isShown && nextProps.isShown) {
            this.toggle();
        }
    }

    toggle() {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.timing(
            this.state.animation,
            {
                duration: 200,
                toValue: finalValue,
            }
        ).start();
    }

    _setMaxHeight(event) {
        if (this.state.maxHeight == 0) {
            this.setState({
                maxHeight: event.nativeEvent.layout.height
            });
        }
    }

    render() {
        //RN BUG
        return (
            <Animated.View style={{ height: this.state.animation, overflow: 'hidden', backgroundColor: 'transparent' }}>
                <View onLayout={this._setMaxHeight.bind(this)} >
                    <Text style={styles.errorTextStyle}>
                        {this.props.text}
                    </Text>
                </View>
            </Animated.View>
        );
    }
}
