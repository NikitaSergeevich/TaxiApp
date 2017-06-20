/**
 * Created by innopolis on 15.12.16.
 */
import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, PixelRatio, TouchableHighlight } from "react-native";
import Svg, { Path, Circle, Defs, LinearGradient, Stop, G, ClipPath, Rect } from 'react-native-svg'
const dim = Dimensions.get('window');

export default class GeoIcon extends Component {

    render() {
        let ratio = PixelRatio.get();
        let source_active = '';
        let source_inactive = '';
        switch (ratio) {
            case 0:
                source_active = require('../images/drawable-ldpi/ic_minipin_active.png');
                source_inactive = require('../images/drawable-ldpi/ic_minipin_inactive.png');
                break;
            /*case 1:
                source_active = require('../images/drawable-mdpi/pin.png');
                break;
            case 1.5:
                source_active = require('../images/drawable-hdpi/pin.png');
                break;*/
            case 2:
                source_active = require('../images/drawable-mdpi/ic_minipin_active.png');
                source_inactive = require('../images/drawable-mdpi/ic_minipin_inactive.png');
                break;
            case 3:
                source_active = require('../images/drawable-ldpi/ic_minipin_active.png');
                source_inactive = require('../images/drawable-ldpi/ic_minipin_inactive.png');
                break;
            /*case 3.5:
                source_active = require('../images/drawable-xxxhdpi/pin.png');
                break;*/
            default:
                break;
        }

        let icon = null;
        if (this.props.isActive) {
            icon = <Image source={source_active} />;
        } else {
            icon = <Image source={source_inactive} />;
        }

        return (
            <View style={{ alignItems: 'center' }}>
                {icon}
            </View>
        )
    }
}