import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing
} from 'react-native';
import MapView from 'react-native-maps';
import OrderModal from '../components/ordermodal';

import { videoModuleStyles } from '../resources/styles';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            expanded: false,
            animation: new Animated.Value(0),
            minHeight: 2,
            maxHeight: 0,
            spinValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.toggle();
    }

    toggle() {
        /*Animated.timing(
            this.state.animation,
            {
                duration: 3000,
                toValue: 20,
            }
        ).start();*/

        Animated.timing(
            this.state.spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start()
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <Animated.View style={{ position: 'absolute', top: this.state.animation, bottom: this.state.animation, left: 0, right: 0 }}>
                <MapView
                    style={{
                        flex: 1
                    }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker.Animated style={{ backgroundColor: '#ccc', transform: [{ rotate: spin }], }} coordinate={{ latitude: 37.78825, longitude: -122.4324 }} image={require('../resources/icons/image.png')} />
                </MapView>
                <OrderModal/>
            </Animated.View>
        );
    }
}