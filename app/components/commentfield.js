/**
* Created by innopolis2 on 02.11.16.
*/

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import QuotesIcon from '../resources/icons/quotesicon';
import { orderModalStyles as styles, sizeconsts } from '../resources/styles';

export default class CommentField extends Component {

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
            <View style={styles.commentFieldStyle}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => { } }>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'transparent'
                    }}>
                        <View style={{
                            flex: 1,
                            paddingTop: '3%',
                            backgroundColor: 'transparent',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end'
                        }}>
                            <QuotesIcon style={{ alignSelf: 'center' }} />
                        </View>
                        <View style={{
                            flex: 9,
                            backgroundColor: 'transparent',
                            justifyContent: 'flex-start',
                            paddingTop: '8%',
                            paddingLeft: '2%',
                        }}>
                            <Text style={{ color: '#B6C6D2', fontSize: 14, fontStyle: 'italic' }}>
                                {"Оставьте комментарий"}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}




