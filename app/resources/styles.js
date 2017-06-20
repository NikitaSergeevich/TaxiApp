import React, { Component } from 'react';
import { View, PixelRatio, StyleSheet, Dimensions, Platform } from "react-native";

let smallfont = 0;
let mediumfont = 0;
let largefont = 0;
let enormousfont = 0;
let font = 0;

let montserrat_semibold = (Platform.OS === 'ios') ? 'Montserrat-SemiBold' : 'montserrat_semibold';
let montserrat_bold = (Platform.OS === 'ios') ? 'Montserrat-Bold' : 'montserrat_bold';
let montserrat_regular = (Platform.OS === 'ios') ? 'Montserrat-Regular' : 'montserrat_regular';
let montserrat_medium = (Platform.OS === 'ios') ? 'Montserrat-Medium' : 'montserrat_medium';

var ratio = PixelRatio.get();
var dim = Dimensions.get('window');

export function getMDPIFont(dimension) {
    if (dimension.width <= 1024) {
        return {
            smallfont: 16,
            mediumfont: 20,
            largefont: 40,
            enormousfont: 120
        };
    } else if (dimension.width >= 1024 && dimension.width <= 1280) {
        return {
            smallfont: 26,
            mediumfont: 34,
            largefont: 40,
            enormousfont: 120
        };
    }
}

switch (ratio) {
    case 1:
        font = getMDPIFont(dim);
        break;
    case 1.5:
        font = getMDPIFont(dim);
        break;
    case 2:
        font = getMDPIFont(dim);
        break;
    case 3:
        font = getMDPIFont(dim);
        break;
    case 3.5:
        font = getMDPIFont(dim);
        break;
    default:
        break;
}

smallfont = font.smallfont;
mediumfont = font.mediumfont;
largefont = font.largefont;
enormousfont = font.enormousfont;

export { smallfont, mediumfont, largefont, enormousfont };

export const screenStyles = StyleSheet.create({
    navigationBar: {
        backgroundColor: 'white',
        marginTop: (Platform.OS === 'ios') ? -(dim.height / 50) : 0,
    },
    enterScreenNavigationBar: {
        backgroundColor: '#2196F3',
        marginTop: (Platform.OS === 'ios') ? -(dim.height / 50) : 0,
    },
    title: {
        fontSize: 18,
        fontFamily: montserrat_semibold,
        backgroundColor: 'white',
    },
    textInputTitle: {
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    selected: {
        color: '#2196F3'
    },
    blured: {
        color: '#000000'
    },
    error: {
        color: '#E36161'
    },
    inputContainer: {
        marginTop: -6, //TODO поднимается ближе
        borderBottomWidth: 1,
        borderBottomColor: '#2196F3', //TODO
        width: (dim.width - 16 * 2) / 2, //TODO paddings
        height: 40, //TODO
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputFullContainer: {
        marginRight: 16, //TODO paddings
    },
    inputBorder: {
        height: 40, //TODO
        borderBottomWidth: 1,
        borderBottomColor: '#2196F3', //TODO
    },
    input: {
        backgroundColor: 'transparent',
        fontSize: 18, //TODO
        flexDirection: 'row',
        height: 48, //TODO
        fontFamily: montserrat_bold,
        flex: 1
    },
})

const pixelheight = dim.height * PixelRatio.get();
const pixelwidth = dim.width * PixelRatio.get();
const mbh = 0.20;
const maxch = 0.76;

export const sizeconsts = {
    MAX_CONTAINER_HEIGHT: dim.height * maxch,
    TOUCH_HEIGHT: dim.height * 0.09, //attention, touch toungue!
    MIN_CONTAINER_HEIGHT: dim.height * 0.30,
    MIN_BODY_HEIGHT: dim.height * mbh,
    BOTTOM_MODAL_CLOSED_POSITION: dim.height * 0.10,
    BOTTOM_MODAL_OPEN_POSITION: dim.height * 0,

    RATE_FIELD_HEIGHT: dim.height * 0.1,
    TIME_AND_PAYMENT_TYPE_FIELD_HEIGHT: dim.height * 0.1,
    COMMENT_FIELD_HEIGHT: dim.height * 0.17,
    LETS_GO_FIELD_HEIGHT: dim.height * 0.11,

    //Buttons
    TAKE_ORDER_TOP_POSITION: dim.height * 0.02,
    PIN_BOTTOM_POSITION: (dim.height - dim.height * (mbh + 0.10)) / 2, //dependend
    PIN_TOP_POSITION: (dim.height - (dim.height * (maxch + 0.14))) / 2, //dependend why 73 not 60?
    PIN_DELTA_X_PIXEL_POSITION: pixelwidth * 0.5,
    PIN_DELTA_Y_PIXEL_POSITION:
    pixelheight / 2 +
    ((pixelheight - pixelheight * (mbh + 0.1)) / 2 -
        (pixelheight - pixelheight * (maxch + 0.1)) / 2) // dependent + pixelheight
}

export const orderModalStyles = StyleSheet.create({
    // Modal Body
    modalContainer: {
        position: 'absolute',
        left: '2%',
        right: '2%',
        backgroundColor: 'transparent',
    },
    modalBody: {
        position: 'absolute',
        bottom: '4%',
        left: '3%',
        right: '3%',
        borderRadius: 10,
        elevation: 8,
        backgroundColor: 'white',
    },
    toucharea: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    //Field
    geoFieldStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: sizeconsts.MIN_BODY_HEIGHT,
        paddingTop: '4%',
        paddingBottom: '4%',
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    rateFieldStyle: {
        position: 'absolute',
        top: sizeconsts.MIN_BODY_HEIGHT,
        left: 0,
        right: 0,
        height: sizeconsts.RATE_FIELD_HEIGHT,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    timeandpaymenttypeFieldStyle: {
        position: 'absolute',
        top: sizeconsts.MIN_BODY_HEIGHT + sizeconsts.RATE_FIELD_HEIGHT,
        left: 0,
        right: 0,
        height: sizeconsts.TIME_AND_PAYMENT_TYPE_FIELD_HEIGHT,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    commentFieldStyle: {
        position: 'absolute',
        top: sizeconsts.MIN_BODY_HEIGHT +
        sizeconsts.RATE_FIELD_HEIGHT +
        sizeconsts.TIME_AND_PAYMENT_TYPE_FIELD_HEIGHT,
        height: sizeconsts.COMMENT_FIELD_HEIGHT,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
    },
    letsgoFieldStyle: {
        marginTop: sizeconsts.MIN_BODY_HEIGHT +
        sizeconsts.RATE_FIELD_HEIGHT +
        sizeconsts.TIME_AND_PAYMENT_TYPE_FIELD_HEIGHT +
        sizeconsts.COMMENT_FIELD_HEIGHT,
        flex: 1,
        height: sizeconsts.LETS_GO_FIELD_HEIGHT,
        backgroundColor: '#00BAE3',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export const mainScreenStyles = StyleSheet.create({
    //Order Button
    buttonRoot: {
        position: 'absolute',
        alignSelf: 'center',
        height: '8.5%',
        width: '39%',
        margin: 0,
        padding: 2,
    },
    buttonContainer: {
        elevation: 2,
        margin: 3,
        marginRight: 4,
        marginLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#00BAE3',
        backgroundColor: '#00BAE3', //TODO
        flexDirection: 'row',
        borderRadius: 6,
        flex: 1,
    },
    buttonText: {
        fontSize: 13, //TODO
        marginRight: 10, //TODO
        marginLeft: 10, //TODO
        marginTop: 12, //TODO
        marginBottom: 12, //TODO
        color: 'white',
        fontFamily: montserrat_bold
    },
    buttonDisabledText: {
        color: '#85cafd', //TODO
    }
})

