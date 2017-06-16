import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import LocationInput from '../components/locationinput';
import Button from "../components/button";
import RateIcon from '../resources/icons/rateicon';
import TimeIcon from '../resources/icons/timeicon';
import PaymentTypeIcon from '../resources/icons/paymenttypeicon';
import QuotesIcon from '../resources/icons/quotesicon';
var dim = Dimensions.get('window');
const expandedContainerHeight = dim.height * 0.90;
const expandedBodyHeight = dim.height * 0.60;
const collapsedContainerHeight = dim.height * 0.25;
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { orderModalStyles as styles, keyboardViewStyles } from '../resources/styles';

export default class OrderModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            isExpanded: false,
            completed: true,
            modalContainerHeight: new Animated.Value(collapsedContainerHeight),
            modalBodyHeight: new Animated.Value(collapsedContainerHeight),
        };
    }

    componentWillMount() {
        //this.toggle();
    }

    componentDidMount() {
        //this.toggle();
    }

    toggle() {
        this.setState({ isExpanded: true });
        /*setTimeout(() => {
            Animated.timing(
                this.state.modalContainerHeight,
                {
                    duration: 300,
                    toValue: collapsedContainerHeight,
                }
            ).start();
            this.setState({ isExpanded: false });
        }, 3000);*/
        Animated.timing(
            this.state.modalContainerHeight,
            {
                duration: 300,
                toValue: expandedContainerHeight,
            }
        ).start();
        Animated.timing(
            this.state.modalBodyHeight,
            {
                duration: 300,
                toValue: expandedBodyHeight,
            }
        ).start();
    }

    expandModal() {
        this.toggle();
    }

    onSwipeDown(state) {
        Animated.timing(
            this.state.modalContainerHeight,
            {
                duration: 300,
                toValue: collapsedContainerHeight,
            }
        ).start();
        Animated.timing(
            this.state.modalBodyHeight,
            {
                duration: 300,
                toValue: collapsedContainerHeight,
            }
        ).start();
    }

    render() {
        const config = {
            velocityThreshold: 0.01,
            directionalOffsetThreshold: 25
        };
        let makeOrderButton = null
        return (
            <Animated.View style={[styles.modalContainer, { height: this.state.modalContainerHeight }]}>
                <GestureRecognizer
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, backgroundColor: 'transparent', }}
                    config={ config }
                    onSwipeDown={(state) => this.onSwipeDown(state) }/>
                <Animated.View style={[styles.modalBody, { height: this.state.modalBodyHeight }]}>
                    <View style={[
                        styles.fieldStyle,
                        styles.geoFieldStyle,
                        this.state.isExpanded ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 } : {}]}
                        >
                        <LocationInput />
                        <LocationInput />
                    </View >
                </Animated.View>
            </Animated.View>
        );
    }
}