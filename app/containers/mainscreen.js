import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';
import Button from "../components/button";
import OrderModal from '../components/ordermodal';
import HamburderIcon from '../resources/icons/hamburdericon';

import { orderModalStyles as styles, videoModuleStyles, keyboardViewStyles } from '../resources/styles';

var dim = Dimensions.get('window');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);

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
            initialPosition: null,
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
        /*if (this.state.mapClosed) {
            this.props.onHamButtonPressed('open');
            this.setState({ mapClosed: false });
        } else {
            this.props.onHamButtonPressed('close');
            this.setState({ mapClosed: true });
        }*/

        this.refs.map.getProjection(20, 20, 300);

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

    onGetOrder() {
        this._modal.expandModal();
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })


        let hambutton = null;
        let makeOrderButton = null;
        let orderModal = null;
        let gestureView = null;
        if (this.props.open) {
            hambutton = (
                <TouchableOpacity onPress={() => { this.onHamButtonPressed() } }
                    style={{ height: '10%', width: '20%', position: 'absolute', top: 10, left: 10, justifyContent: 'center' }}>
                    <HamburderIcon />
                </TouchableOpacity>
            )
            orderModal = (
                <OrderModal ref={(ref) => this._modal = ref}/>
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
        }

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={"map"}
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, }}
                    region={this.state.userCurrentRegion}
                    initialRegion={{
                        latitude: 55.037452,
                        longitude: 82.933740,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}/>
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 20, backgroundColor: 'transparent' }}/>
                {hambutton}
                {orderModal}
                {makeOrderButton}
            </View>
        );
    }
}
