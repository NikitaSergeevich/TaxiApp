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
import LocationInput from '../components/locationinput';
import Button from "../components/button";
import RateIcon from '../resources/icons/rateicon';
import TimeIcon from '../resources/icons/timeicon';
import PaymentTypeIcon from '../resources/icons/paymenttypeicon';
import QuotesIcon from '../resources/icons/quotesicon';

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
        //this.toggle();
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
                    <View style={[
                        styles.fieldStyle,
                        styles.geoFieldStyle,
                        this.state.isExpanded ? { borderBottomRightRadius: 0, borderBottomLeftRadius: 0 } : {}]}>
                        <LocationInput />
                        <LocationInput />
                    </View>
                    <View style={[styles.fieldStyle, styles.rateFieldStyle]}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { }}>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }}>
                                    <RateIcon isActive={this.state.isSet} style={{ alignSelf: 'center' }} />
                                </View>
                                <View style={{ flex: 3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        {"Эконом; от 99Р"}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.fieldStyle, styles.timeandpaymenttypeFieldStyle]}>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { }}>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }}>
                                    <TimeIcon isActive={this.state.isSet} />
                                </View>
                                <View style={{ flex: 3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        {"Ближайшие"}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => { }}>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center' }}>
                                    <PaymentTypeIcon style={{ alignSelf: 'center' }} />
                                </View>
                                <View style={{ flex: 3, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        {"Наличные"}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.fieldStyle, styles.commentFieldStyle]}>
                        <TouchableOpacity style={{ flex: 1, paddingTop: 20 }} onPress={() => { }}>
                            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                                    <QuotesIcon style={{ alignSelf: 'center' }} />
                                </View>
                                <View style={{ flex: 7, paddingTop: 30, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        {"Оставьте комментарий"}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
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