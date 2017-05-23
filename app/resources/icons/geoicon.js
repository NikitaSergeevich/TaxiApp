/**
 * Created by innopolis on 15.12.16.
 */
import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions, PixelRatio, TouchableHighlight} from "react-native";
import Svg, {Path, Circle, Defs, LinearGradient, Stop, G, ClipPath, Rect} from 'react-native-svg'
const dim = Dimensions.get('window');

export default class GeoIcon extends Component {

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

        return (
            <TouchableHighlight style={[styles.arrow, this.props.style]} onPress={() => this.props.action()} underlayColor={'transparent'}>
                <Svg height={26} width={20}>
                    <Path
                        d="M5.60000038,13 L9.80000019,17.1999998 L8.5,18.5 L2,12 L8.5,5.5 L9.80000019,6.80000019 L5.60000038,11 L22,11 L22,13 L5.60000038,13 Z"
                        scale={1}
                        fillRule="evenodd"
                        fill= {this.props.color ? this.props.color : 'black'}/>
                </Svg>
            </TouchableHighlight>
        )

    }
}

styles = StyleSheet.create({
    arrow: {
        alignSelf: 'flex-start',
        backgroundColor: 'red',
    }
})  