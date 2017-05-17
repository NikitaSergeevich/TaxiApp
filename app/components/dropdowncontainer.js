import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import ArrowDown from '../resources/icons/arrowdown';
import ArrowUp from '../resources/icons/arrowup';
const dim = Dimensions.get('window');

export default class DropDownContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            expanded: false,
            animation: new Animated.Value(2),
            minHeight: 2,
            maxHeight: 0,
        };
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
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });

        //console.log(event.nativeEvent.layout.height);

        if (this.state.expanded) {
            Animated.timing(
                this.state.animation,
                {
                    duration: 20,
                    toValue: Math.min(event.nativeEvent.layout.height + 16, dim.height / 3),
                }
            ).start();
        }
    }

    render() {
        let icon = <ArrowDown />

        if (this.state.expanded) {
            icon = <ArrowUp />;
        }

        return (
            <View style={{
                backgroundColor: 'white',
            }}>
                <TouchableHighlight onPress={this.toggle.bind(this)} underlayColor='transparent'>
                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 16,
                    }}>
                        <View style={{ flex: 1 }}>
                            {this.props.title}
                        </View>

                        <View style={styles.iconContainer}>
                            <View style={styles.buttonImage}>
                                {icon}
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                <Animated.View
                    style={{ height: this.state.animation }}>

                    <View onLayout={this._setMaxHeight.bind(this)}>
                        {this.props.children}
                    </View>

                </Animated.View>

                <View style={{
                    height: 1.6,
                    backgroundColor: 'gray',
                    marginLeft: this.state.expanded ? 16 : 0,
                    marginTop: this.state.expanded ? 16 : 0,
                }} />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    containerContent: {
        flex: 1
    },
    iconContainer: {
        borderColor: '#89a1db',
        width: 55,
        alignItems: 'center'
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#1cb9be',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
    },
    dropMenu: {
        alignSelf: 'flex-start',
        paddingLeft: 12,
        borderColor: '#1cb9be',
        borderRightWidth: 1,
        paddingBottom: 8,
        paddingTop: 8,
        flex: 1,
    },
    buttonImage: {
        width: 32,
        height: 22,
    },
});