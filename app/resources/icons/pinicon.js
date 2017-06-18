/**
 * Created by innopolis on 15.12.16.
 */
import React, { Component } from 'react';
import { View,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
    TouchableHighlight,
    Animated
} from "react-native";
const dim = Dimensions.get('window');
import resolveAssetSource from 'resolveAssetSource';
import {getSource} from '../../services/utils';

export default class PinIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
        };
    }

    render() {
        let ratio = PixelRatio.get();
        let source = ''
        switch (ratio) {
            case 0:
                source = require('../images/drawable-ldpi/pin.png');
                break;
            /*case 1:
                source = require('../images/drawable-mdpi/pin.png');
                break;
            case 1.5:
                source = require('../images/drawable-hdpi/pin.png');
                break;*/
            case 2:
                source = require('../images/drawable-mdpi/pin.png');
                break;
            case 3:
                source = require('../images/drawable-mdpi/pin.png');
                break;
            /*case 3.5:
                source = require('../images/drawable-xxxhdpi/pin.png');
                break;*/
            default:
                break;
        }
        let l = resolveAssetSource(source);
        console.log(l);
        let position = (dim.width - l.width) / 2 ;
        let icon = <Image source={ source } />;
        return (
            <Animated.View style={[this.props.style, { alignItems: 'center', right: position}]}>
                {icon}
            </Animated.View>
        )
    }
}