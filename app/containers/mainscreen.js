import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
import Button from "../components/button";
import OrderModal from '../components/ordermodal';
import HamburderIcon from '../resources/icons/hamburdericon';
import PinIcon from '../resources/icons/pinicon';
import { mainScreenStyles as styles, sizeconsts } from '../resources/styles';

var dim = Dimensions.get('window');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);

        this.initialPosition = null;
        this.makeOrderButtonYPosition = new Animated.Value(sizeconsts.TAKE_ORDER_TOP_POSITION);
        this.state = {
            spinValue: new Animated.Value(0),
            yMarkerPosition: new Animated.Value(sizeconsts.PIN_BOTTOM_POSITION),
            userCurrentRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    onHamButtonPressed() {
        this.props.onHamButtonPressed();
    }

    // TODO check if geo enabled
    // Do not work with high accurancy
    // Enable geo in emulator
    getMyGeoLocation() {

    }

    //Lets remember initial coordinate to return map view when modal closes
    onRegionChange(region) {
        console.log(region);
        this.setState({ userCurrentRegion: region });
    }

    //Lets remember initial coordinate to return map view when modal closes
    onGetOrder() {
        let pixelheight = dim.height * PixelRatio.get();
        let pixelwidth = dim.width * PixelRatio.get();
        let y = (pixelheight / 2 + ((pixelheight - pixelheight * (0.25 + 0.20)) / 2 - (pixelheight - pixelheight * (0.7 + 0.2)) / 2));
        let x = pixelwidth * 0.5;

        //Move Marker To Top
        Animated.timing(
            this.state.yMarkerPosition,
            {
                duration: 300,
                toValue: sizeconsts.PIN_TOP_POSITION,
            }
        ).start();

        //Move Button Down
        Animated.timing(
            this.makeOrderButtonYPosition,
            {
                duration: 300,
                toValue: -dim.height * 0.1,
            }
        ).start();

        //Lets remember initial position
        this.initialPosition = this.state.userCurrentRegion;

        //Move to projection
        this.refs.map.getProjection(
            Math.round(sizeconsts.PIN_DELTA_X_PIXEL_POSITION),
            Math.round(sizeconsts.PIN_DELTA_Y_PIXEL_POSITION), 300
        );
        this._modal.expandModal();
    }

    onOrderModalClose() {
        Animated.timing(
            this.state.yMarkerPosition,
            {
                duration: 300,
                toValue: sizeconsts.PIN_BOTTOM_POSITION,
            }
        ).start();

        Animated.timing(
            this.makeOrderButtonYPosition,
            {
                duration: 300,
                toValue: dim.height * 0.02,
            }
        ).start();

        this.refs.map.animateToRegion(this.initialPosition, 300);
    }

    render() {
        let hambutton = null;
        let pinmarker = null;
        let makeOrderButton = null;
        let orderModal = null;
        if (this.props.open) {
            hambutton = (
                <TouchableOpacity onPress={() => { this.onHamButtonPressed() } }
                    style={{ position: 'absolute', top: '3%', left: '4%', justifyContent: 'center' }}>
                    <HamburderIcon />
                </TouchableOpacity>
            )
            orderModal = (
                <OrderModal ref={(ref) => this._modal = ref} onClose={() => { this.onOrderModalClose() } }/>
            )
            makeOrderButton = (
                <Animated.View style={[styles.buttonRoot, { bottom: this.makeOrderButtonYPosition }]}>
                    <Button text={"ЗАКАЗАТЬ"}
                        isEnabled={true}
                        rootStyle={{ flex: 1, margin: 0, }}
                        container={styles.buttonContainer}
                        textStyle={styles.buttonText}
                        disabledTextStyle={styles.buttonDisabledText}
                        onPress={() => { this.onGetOrder(); } } />
                </Animated.View>
            )
            pinmarker = (
                <PinIcon style={{
                    position: 'absolute',
                    top: this.state.yMarkerPosition,
                }}/>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={"map"}
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, }}
                    region={this.state.userCurrentRegion}
                    onRegionChange={(e) => { this.onRegionChange(e) } }
                    initialRegion={{
                        latitude: 55.037452,
                        longitude: 82.933740,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}/>
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 20, backgroundColor: 'transparent' }}/>
                {hambutton}
                {pinmarker}
                {orderModal}
                {makeOrderButton}
            </View>
        );
    }
}
