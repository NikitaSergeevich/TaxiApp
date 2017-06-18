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

import { orderModalStyles as styles, videoModuleStyles, keyboardViewStyles } from '../resources/styles';

var dim = Dimensions.get('window');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);

        this.initialPosition = null;
        this.state = {
            title: '',
            expanded: false,
            mapClosed: false,
            heightAnimation: new Animated.Value(dim.height),
            topAnimation: new Animated.Value(0),
            radiusAnimation: 40,
            minHeight: 2,
            maxHeight: 0,
            spinValue: new Animated.Value(0),
            yMarkerPosition: new Animated.Value((dim.height - dim.height * (0.25 + 0.20)) / 2),
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
        //let offset = dim.height - nextProps.drawerRatio * 60;

        //Expanding / Collapsing Radius and Heigth
        //this.setState({ heightAnimation: new Animated.Value(offset) });
        /*Animated.timing(
            this.state.heightAnimation,
            {
                toValue: offset,
                duration: 0.01,
            }
        ).start()*/
        /*Animated.timing(
            this.state.radiusAnimation,
            {
                toValue: 100,
                duration: 0.01,
            }
        ).start()*/
    }

    onHamButtonPressed() {
        this.props.onHamButtonPressed();
        /*if (this.state.mapClosed) {
            this.props.onHamButtonPressed('open');
            this.setState({ mapClosed: false });
        } else {
            this.props.onHamButtonPressed('close');
            this.setState({ mapClosed: true });
        }*/


        //Collapsing
        /*Animated.timing(
            this.state.heightAnimation,
            {
                toValue: dim.height + 60,
                duration: 0.5,
            }
        ).start();*/
    }

    openMap() {
        /*Animated.timing(
            this.state.heightAnimation,
            {
                toValue: dim.height,
                duration: 0.5,
            }
        ).start()*/
    }

    // TODO check if geo enabled
    // Do not work with high accurancy
    // Enable geo in emulator
    getMyGeoLocation() {

    }

    toggle() {

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
        //if (y > dim.height) {
        //}
        let x = pixelwidth * 0.5;
        Animated.timing(
            this.state.yMarkerPosition,
            {
                duration: 300,
                toValue: (dim.height - dim.height * (0.7 + 0.2)) / 2,
            }
        ).start();
        this.initialPosition = this.state.userCurrentRegion;
        this.refs.map.getProjection(Math.round(x), Math.round(y), 300);
        this._modal.expandModal();
    }

    onOrderModalClose() {
        //var initialPosition = JSON.stringify(position);
        /*let c = {
            latitude: Number(position.coords.latitude), // selected marker lat
            longitude: Number(position.coords.longitude) // selected marker lng
        }
        console.log(c);*/
        //var { region } = this.state.userCurrentRegion;
        Animated.timing(
            this.state.yMarkerPosition,
            {
                duration: 300,
                toValue: dim.height * 0.3,
            }
        ).start();
        this.refs.map.animateToRegion(this.initialPosition, 300);
        //this.setState({ userCurrentRegion: this.state.initialPosition });
        /*let y = (dim.height * 1.05 );
        let x = dim.width * 0.5;
        this.refs.map.getProjection(x, y, 300);*/
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

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
                <Button text={"ЗАКАЗАТЬ"}
                    isEnabled={true}
                    rootStyle={styles.buttonRoot}
                    container={styles.buttonContainer}
                    textStyle={keyboardViewStyles.buttonText}
                    disabledTextStyle={keyboardViewStyles.buttonDisabledText}
                    onPress={() => { this.onGetOrder(); } } />
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
