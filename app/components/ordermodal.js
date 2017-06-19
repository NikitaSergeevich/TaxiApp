import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
var dim = Dimensions.get('window');
import Interactable from 'react-native-interactable';

import GeoField from './geofield';
import RateField from './ratefield';

import { orderModalStyles as styles, sizeconsts } from '../resources/styles';

export default class OrderModal extends Component {

    constructor(props) {
        super(props);
        this._deltaY = new Animated.Value(0); // Touch toungue position
        this.modalContainerHeight = new Animated.Value(sizeconsts.MIN_CONTAINER_HEIGHT); // Container height
        this.modalContainerYPosition = new Animated.Value(sizeconsts.BOTTOM_MODAL_CLOSED_POSITION); //Container position
        this.height = new Animated.Value(sizeconsts.MIN_BODY_HEIGHT); // Body height (visible)
        this._deltaY.addListener(({value}) => {
            //When touch toungue is moving we updating body height
            let result = sizeconsts.MAX_CONTAINER_HEIGHT - value - 60;
            if (result < sizeconsts.MIN_CONTAINER_HEIGHT) {
                result = sizeconsts.MIN_CONTAINER_HEIGHT;
            }
            this.height.setValue(result);
        });
        this.state = {
            isExpanded: false,
        };
    }

    expandModal() {
        this.open();
    }

    open() {
        // Increase modal container (invisible) height
        Animated.timing(
            this.modalContainerHeight,
            {
                duration: 300,
                toValue: sizeconsts.MAX_CONTAINER_HEIGHT,
            }
        ).start(() => { this.setState({ isExpanded: true }) });

        // Increase modal body (visible) height
        Animated.timing(
            this.height,
            {
                duration: 300,
                toValue: sizeconsts.MAX_CONTAINER_HEIGHT - 60,
            }
        ).start(() => { this.setState({ isExpanded: true }) });

        // Move container to bottom
        Animated.timing(
            this.modalContainerYPosition,
            {
                duration: 300,
                toValue: sizeconsts.BOTTOM_MODAL_OPEN_POSITION,
            }
        ).start(() => { this.setState({ isExpanded: true }) });
    }

    onSnap(event) {
        const snapPointId = event.nativeEvent.id;
        if (snapPointId == 'close') {

            // Move container to bottom
            Animated.timing(
                this.modalContainerYPosition,
                {
                    duration: 300,
                    toValue: sizeconsts.BOTTOM_MODAL_CLOSED_POSITION,
                }
            ).start();

            // Set height to container & body
            this.height.setValue(sizeconsts.MIN_BODY_HEIGHT);
            this.modalContainerHeight.setValue(sizeconsts.MIN_CONTAINER_HEIGHT);
            this.setState({ isExpanded: false });
            this.props.onClose();
        }
    }

    render() {
        let view = null;
        let style = null;
        if (this.state.isExpanded) {
            view = (
                <Interactable.View
                    style={styles.toucharea}
                    verticalOnly={true}
                    snapPoints={[{ y: 0, id: 'open' }, { y: sizeconsts.MAX_CONTAINER_HEIGHT - sizeconsts.MIN_BODY_HEIGHT, id: 'close' }]}
                    onSnap={(e) => { this.onSnap(e) } }
                    boundaries={{ top: 0 }}
                    animatedValueY={this._deltaY}>
                </Interactable.View>
            )
        }


        return (
            <Animated.View style={[
                styles.modalContainer,
                { height: this.modalContainerHeight, bottom: this.modalContainerYPosition }
            ]}>
                {view}
                <Animated.View style={[styles.modalBody, { height: this.height }]}>
                    <GeoField/>
                    <RateField/>
                </Animated.View>
            </Animated.View >
        );
    }
}