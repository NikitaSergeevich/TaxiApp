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
                <TouchableOpacity style={{ flex: 1, paddingTop: 20 }} onPress={() => { } }>
                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                            <QuotesIcon style={{ alignSelf: 'center' }} />
                        </View>
                        <View style={{ flex: 7, paddingTop: 30, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ color: 'black', fontSize: 10 }}>
                                {"Оставьте комментарий"}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}




