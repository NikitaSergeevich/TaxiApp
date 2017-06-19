/**
 * Created by innopolis on 15.12.16.
 */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, PixelRatio, TouchableHighlight } from "react-native";
import Svg, { Path, Circle, Defs, LinearGradient, Stop, G, ClipPath, Rect } from 'react-native-svg'
const dim = Dimensions.get('window');

export default class RateIcon extends Component {

    render() {
        let ratio = PixelRatio.get();
        let source = ''
        switch (ratio) {
            case 0:
                source = require('../images/drawable-ldpi/ic_coin.png');
                break;
            /*case 1:
                source = require('../images/drawable-mdpi/ic_coin.png');
                break;
            case 1.5:
                source = require('../images/drawable-hdpi/ic_coin.png');
                break;*/
            case 2:
                source = require('../images/drawable-mdpi/ic_coin.png');
                break;
            case 3:
                source = require('../images/drawable-mdpi/ic_coin.png');
                break;
            /*case 3.5:
                source = require('../images/drawable-xxxhdpi/ic_coin.png');
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