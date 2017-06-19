/**
 * Created by innopolis on 15.12.16.
 */
import React, { Component } from 'react';
import { 
    View, 
    Image,
    PixelRatio, 
    TouchableHighlight 
} from "react-native";

export default class HistoryIcon extends Component {

    render() {
        let ratio = PixelRatio.get();
        let source = '';
        switch (ratio) {
            case 0:
                source = require('../images/drawable-ldpi/ic_history_R.png');
                break;
            /*case 1:
                source = require('../images/drawable-mdpi/pin.png');
                break;
            case 1.5:
                source = require('../images/drawable-hdpi/pin.png');
                break;*/
            case 2:
                source = require('../images/drawable-mdpi/ic_history_R.png');
                break;
            case 3:
                source = require('../images/drawable-mdpi/ic_history_R.png');
                break;
            /*case 3.5:
                source = require('../images/drawable-xxxhdpi/pin.png');
                break;*/
            default:
                break;
        }

        let icon = <Image source={source} />;

        return (
            <View style={{ alignItems: 'center' }}>
                {icon}
            </View>
        )
    }
}