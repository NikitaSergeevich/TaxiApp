import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing
} from 'react-native';
import MapView from 'react-native-maps';
import LocationInput from '../components/locationinput';
import Button from "../components/button";

import { orderModalStyles as styles, keyboardViewStyles } from '../resources/styles';

export default class OrderModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            isExpanded: false,
            completed: true,
            heigthAnimation: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.toggle();
    }

    toggle() {
        this.setState({ isExpanded: true });
        setTimeout(() => {
            this.setState({ isExpanded: false });
        }, 3000);
        Animated.timing(
            this.state.heigthAnimation,
            {
                duration: 3000,
                toValue: 20,
            }
        ).start();
    }

    onGetOrder() {
        this.toggle();
    }

    render() {

        let makeOrderButton = null

        if (!this.state.isExpanded) {
            makeOrderButton = (
                <Button text={"ЗАКАЗАТЬ"}
                    isEnabled={this.state.completed}
                    rootStyle={styles.buttonRoot}
                    container={styles.buttonContainer}
                    textStyle={keyboardViewStyles.buttonText}
                    disabledTextStyle={keyboardViewStyles.buttonDisabledText}
                    onPress={() => { this.onGetOrder(); }} />
            )
        }

        return (
            <View style={[styles.modalContainer, this.state.isExpanded ? styles.modalExpanded : styles.modalCollapsed]}>
                <View style={[styles.modalBody, this.state.isExpanded ? styles.modalBodyExpanded : styles.modalBodyCollapsed]}>
                    <View style={[styles.fieldStyle, styles.geoFieldStyle]}>
                        <LocationInput />
                        <LocationInput />
                    </View>
                    <View style={[styles.fieldStyle, styles.rateFieldStyle]}>

                    </View>
                    <View style={[styles.fieldStyle, styles.timeandpaymenttypeFieldStyle]}>

                    </View>
                    <View style={[styles.fieldStyle, styles.commentFieldStyle]}>

                    </View>
                    <View style={[styles.fieldStyle, styles.letsgoFieldStyle]}>
                        <Button text={"ПОЕХАЛИ"}
                            isEnabled={this.state.completed}
                            rootStyle={[keyboardViewStyles.buttonRoot]}
                            container={[keyboardViewStyles.buttonContainer, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}
                            textStyle={keyboardViewStyles.buttonText}
                            disabledTextStyle={keyboardViewStyles.buttonDisabledText}
                            onPress={() => { this.onGetOrder(); }} />
                    </View>
                </View>

                {makeOrderButton}

            </View>
        );
    }
}