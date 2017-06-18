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
import { orderModalStyles as styles, keyboardViewStyles } from '../resources/styles';
const MAX_CONTAINER_HEIGHT = dim.height * 0.70;
const MIN_CONTAINER_HEIGHT = dim.height * 0.25;

export default class OrderModal extends Component {

    constructor(props) {
        super(props);
        this._deltaY = new Animated.Value(0);
        this.height = new Animated.Value(MIN_CONTAINER_HEIGHT);
        this.modalContainerHeight = new Animated.Value(MIN_CONTAINER_HEIGHT);
        this._deltaY.addListener(({value}) => {
            let result = MAX_CONTAINER_HEIGHT - value - 60;
            if (result < MIN_CONTAINER_HEIGHT) {
                result = MIN_CONTAINER_HEIGHT;
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
        Animated.timing(
            this.modalContainerHeight,
            {
                duration: 300,
                toValue: MAX_CONTAINER_HEIGHT,
            }
        ).start(() => { this.setState({ isExpanded: true }) });
        Animated.timing(
            this.height,
            {
                duration: 300,
                toValue: MAX_CONTAINER_HEIGHT - 60,
            }
        ).start(() => { this.setState({ isExpanded: true }) });
    }

    onSnap(event) {
        const snapPointId = event.nativeEvent.id;
        if (snapPointId == 'close') {
            this.height.setValue(MIN_CONTAINER_HEIGHT);
            this.modalContainerHeight.setValue(MIN_CONTAINER_HEIGHT);
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
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent'
                    }}
                    verticalOnly={true}
                    snapPoints={[{ y: 0, id: 'open' }, { y: MAX_CONTAINER_HEIGHT - MIN_CONTAINER_HEIGHT, id: 'close' }]}
                    onSnap={(e) => { this.onSnap(e) } }
                    animatedValueY={this._deltaY}>
                </Interactable.View>
            )
        }


        return (
            <Animated.View style={[styles.modalContainer, { height: this.modalContainerHeight }]}>
                {view}
                <Animated.View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    height: this.height,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    position: 'absolute'
                }}/>
            </Animated.View>
        );
    }
}