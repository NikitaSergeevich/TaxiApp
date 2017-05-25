import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import OrderModal from '../components/ordermodal';
import HamburderIcon from '../resources/icons/hamburdericon';

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
            spinValue: new Animated.Value(0),
            initialPosition: null,
            userCurrentRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        };
    }

    componentDidMount() {
        this.toggle();
    }

    // TODO check if geo enabled
    // Do not work with high accurancy
    // Enable geo in emulator
    getMyGeoLocation() {
        console.log("lol");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                //var initialPosition = JSON.stringify(position);
                let c = {
                    latitude: Number(position.coords.latitude), // selected marker lat
                    longitude: Number(position.coords.longitude) // selected marker lng
                }
                console.log(c);
                //var { region } = this.state.userCurrentRegion;
                this.refs.map.animateToCoordinate(c, 10000);


                /*this.setState({
                    userCurrentRegion: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: this.state.userCurrentRegion.latitudeDelta,
                        longitudeDelta: this.state.userCurrentRegion.longitudeDelta
                    }
                });*/
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        );
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
                    ref={"map"}
                    //onRegionChange={(e) => (console.log(e))}
                    style={{
                        flex: 1
                    }}
                    region={this.state.userCurrentRegion}
                    initialRegion={{
                        latitude: 55.037452,
                        longitude: 82.933740,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker.Animated style={{ backgroundColor: '#ccc', transform: [{ rotate: spin }], }} coordinate={{ latitude: 37.78825, longitude: -122.4324 }} image={require('../resources/icons/image.png')} />
                </MapView>
                <OrderModal />

                <TouchableOpacity onPress={() => { this.getMyGeoLocation() }} style={{ backgroundColor: 'red', height: 30, width: 30, position: 'absolute', top: 300, right: 20, borderRadius: 15 }}>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.getMyGeoLocation() }}
                    style={{ height: 60, width: 60, position: 'absolute', top: 50, left: 20 }}>
                    <HamburderIcon />
                </TouchableOpacity>
            </Animated.View>
        );
    }
}