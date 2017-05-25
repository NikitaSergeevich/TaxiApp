/**
 * Created by innopolis on 15.12.16.
 */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, PixelRatio, TouchableHighlight } from "react-native";
import Svg, { Path, Circle, Defs, LinearGradient, Stop, G, ClipPath, Rect } from 'react-native-svg'
const dim = Dimensions.get('window');

export default class RateIcon extends Component {

    render() {
        let height = "";
        let width = "";
        let scale = 0.5;

        let ratio = PixelRatio.get();
        switch (ratio) {
            case 1:
                size = getMDPISize(dim);
                height = size.height;
                width = size.width;
                scale = size.scale;
                break;
            default:
                break;
        }

        let icon = null;

        icon = <Image source={require('../images/drawable-hdpi/ic_coin.png')} />;

        return (
            <View style={{ alignItems: 'center' }}>
                {icon}
            </View>
        )
    }
}