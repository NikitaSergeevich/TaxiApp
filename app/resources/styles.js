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

export const keyboardViewStyles = StyleSheet.create({
    keyboardViewContainer: {
        flex: 1,
    },
    upperView: {
        marginTop: 80, //TODO
        flex: 1,
        paddingLeft: 16 //TODO
    },
    buttonRoot: {
        flexDirection: 'row',
        margin: -1
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        backgroundColor: '#2196F3', //TODO
        flexDirection: 'row',
        borderRadius: 0,
        flex: 1,
    },
    buttonText: {
        fontSize: 16, //TODO
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

const expandedContainerHeigth = dim.height * 0.60;
const filedStyle = dim.height * 0.35 * 0.22;
const filedCommentHeigth = dim.height * 0.35 * 0.33;

export const orderModalStyles = StyleSheet.create({

    // Modal Body

    modalContainer: {
        position: 'absolute',
        bottom: '20%',
        left: '7%',
        right: '7%',
        backgroundColor: 'transparent',
    },
    modalCollapsed: {
        height: dim.height * 0.25 + dim.height * 0.05 + dim.height * 0.07,
    },
    modalExpanded: {
        height: expandedContainerHeigth, //Expanded
    },
    modalBody: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    modalBodyCollapsed: {
        height: dim.height * 0.25,
    },
    modalBodyExpanded: {
        height: expandedContainerHeigth, //Expanded
    },

    // Fileds style
    fieldStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    geoFieldStyle: {
        borderRadius: 20,
        backgroundColor: 'white',
        height: dim.height * 0.25,
    },
    rateFieldStyle: {
        height: filedStyle,
        backgroundColor: 'white',
    },
    timeandpaymenttypeFieldStyle: {
        height: filedStyle,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    commentFieldStyle: {
        height: filedCommentHeigth,
        backgroundColor: 'white',
    },
    letsgoFieldStyle: {
        height: filedStyle,
        backgroundColor: 'transparent',
    },

    //Order Button
    buttonRoot: {
        position: 'absolute',
        bottom: '1%',
        alignSelf: 'center',
        height: '9.5%',
        width: '50.5%',
        flexDirection: 'row',
        margin: 0,
        padding: 2,
    },
    buttonContainer: {
        //elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        backgroundColor: '#2196F3', //TODO
        flexDirection: 'row',
        borderRadius: 10,
        flex: 1,
    },
})