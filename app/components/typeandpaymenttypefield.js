/**
* Created by innopolis2 on 02.11.16.
*/

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import PaymentTypeIcon from '../resources/icons/paymenttypeicon';
import TimeIcon from '../resources/icons/timeicon';
import { orderModalStyles as styles, sizeconsts } from '../resources/styles';

export default class TypeAndPaymentTypeField extends Component {

    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            handlePress: () => { },
            isExpanded: false,
        };
    }

    handlePress() {
        this.props.handlePress();
    }

    render() {
        return (
            <View style={styles.timeandpaymenttypeFieldStyle}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { } }>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'transparent'
                    }}>
                        <View style={{
                            marginLeft: '10%',
                            marginRight: '5%',
                            width: '20%',
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}>
                            <TimeIcon isActive={this.props.isSet} />
                        </View>
                        <View style={{
                            width: '60%',
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}>
                            <Text style={{ fontSize: 12, color: '#4E7F9D' }}>
                                {"Ближайшие"}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { } }>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'transparent'
                    }}>
                        <View style={{
                            marginLeft: '10%',
                            marginRight: '5%',
                            width: '20%',
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}>
                            <PaymentTypeIcon style={{ alignSelf: 'center' }} />
                        </View>
                        <View style={{
                            width: '60%',
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'flex-start'
                        }}>
                            <Text style={{ fontSize: 12, color: '#4E7F9D' }}>
                                {"Наличные"}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{
                    backgroundColor: '#00000029',
                    position: 'absolute',
                    left: '5%',
                    right: '5%',
                    bottom: 0,
                    height: 1,
                    alignSelf: 'center'
                }} />
            </View>
        )
    }
}



