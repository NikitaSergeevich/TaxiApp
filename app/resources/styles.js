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

console.log(dim.width + " " + dim.height);

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
        margin: 0
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

export const faqstyles = StyleSheet.create({
    title: {
        color: "#000000",
        fontFamily: montserrat_bold,
        fontSize: 18
    },
    message: {
        color: "#000000",
        fontFamily: montserrat_regular,
        fontSize: 16,
        paddingLeft: 16
    },
})

export const welcomeBoardStyles = StyleSheet.create({
    welcomeboardcontainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#2196F3"
    },
    viewpager: {
        flex: 1,
    },
    background: {
        backgroundColor: '#2196F3',
        flex: 1
    },
    buttonRoot: {
        flex: 1,
        marginRight: 16,
        marginLeft: 16,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 30
    },
    buttonText: {
        fontSize: 16,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 12,
        marginBottom: 12,
        color: '#2196F3',
        fontWeight: "900",
        fontFamily: montserrat_bold,
    },
    container: {
        flex: .6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    circle: {
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: 'white',
    },
    circleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomPartContainer: {
        flex: 0.4
    }
})

export const phoneNumberFormStyles = StyleSheet.create({
    cardInfoText: {
        fontSize: 14, //TODO
    },
    firstLine: {
        color: 'black',
        fontSize: 22, //TODO
        fontFamily: montserrat_bold
    },
    secondLine: {
        color: 'black',
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    phoneNumberInput: {
        marginTop: 35, //TODO
    },
})

export const сonfirmationCodeFormStyles = StyleSheet.create({
    option: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    firstline: {
        color: 'black',
        fontSize: 22, //TODO
        fontFamily: montserrat_bold
    },
    secondline: {
        marginTop: 4, //TODO
        color: 'black',
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    remainingTimeTextStyle: {
        color: '#2196F3', //TODO
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    resendTextStyle: {
        color: '#71C6B6', //TODO
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    codeInput: {
        marginTop: 24,
    },
    errorTextStyle: {
        color: '#E36161',
        fontSize: 16,
        fontFamily: montserrat_regular,
    }
})

export const securityCodeFormStyles = StyleSheet.create({
    securityConfirmationContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    firstline: {
        color: 'black',
        fontSize: 22, //TODO
        fontFamily: montserrat_bold
    },
    secondline: {
        marginTop: 4, //TODO
        color: 'black',
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    thirdline: {
        marginTop: 24,
    },
    fourthline: {
        marginTop: 24,
    },
    securityCodeText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 23
    },
    codeInputContainer: {
        marginTop: -6,
        borderBottomWidth: 1,
        borderBottomColor: '#2196F3',
        width: (dim.width - 16 * 2) / 2,
        height: 40,
    },
    codeInput: {
        backgroundColor: 'transparent',
        fontSize: 18,
        flexDirection: 'row',
        height: 48,
    },
})

export const userFormStyles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 22, //TODO
        fontFamily: montserrat_bold
    },
    description: {
        marginTop: 4, //TODO
        color: 'black',
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    nicknameinput: {
        marginTop: 24,
    },
    optionTitle: {
        fontFamily: montserrat_regular,
        fontSize: 14,
        color: 'gray'
    },
    option: {
        marginRight: 16,
        marginBottom: 10,
        fontFamily: montserrat_regular,
        fontSize: 16,
        color: 'black',
    },
    securityCodeText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 23
    },
    codeInputContainer: {
        marginTop: -6,
        borderBottomWidth: 1,
        borderBottomColor: '#2196F3',
        width: (dim.width - 16 * 2) / 2,
        height: 40,
    },
    codeInput: {
        backgroundColor: 'transparent',
        fontSize: 18,
        flexDirection: 'row',
        height: 48,
    },

    locationOption: {
        fontSize: 14,
        color: 'gray',
        fontFamily: montserrat_regular,
    }
})

export const appEnterScreenStyles = StyleSheet.create({
    securityConfirmationContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    circle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'white',
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 10,
    },
    borderCircle: {
        borderWidth: 2,
        backgroundColor: 'transparent',
    },
    firstLine: {
        color: 'white',
        fontSize: 14, //TODO
        fontFamily: montserrat_bold
    },
    secondLine: {
        color: 'white',
        fontSize: 12, //TODO
        fontFamily: montserrat_regular
    },
    securityCodeText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 23
    },
    codeInputContainer: {
        marginTop: -6,
        borderBottomWidth: 1,
        borderBottomColor: '#2196F3',
        width: (dim.width - 16 * 2) / 2,
        height: 40,
    },
    codeInput: {
        backgroundColor: 'transparent',
        fontSize: 18,
        flexDirection: 'row',
        height: 48,
    },
})

export const videoModuleStyles = StyleSheet.create({
    cardInfoText: {
        fontSize: 14, //TODO
    },
    firstLine: {
        color: 'black',
        fontSize: 22, //TODO
        fontFamily: montserrat_bold
    },
    secondLine: {
        color: 'black',
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    cellPhone: {
        marginTop: 35, //TODO
        color: '#2196F3', //TODO
        fontSize: 14, //TODO
        fontFamily: montserrat_regular,
    },
    phoneInputContainer: {
        marginTop: -6, //TODO поднимается ближе
        borderBottomWidth: 1,
        borderBottomColor: '#2196F3', //TODO
        width: (dim.width - 16 * 2) / 2, //TODO paddings
        height: 40, //TODO
    },
    phoneInput: {
        backgroundColor: 'transparent',
        fontSize: 18, //TODO
        flexDirection: 'row',
        height: 48, //TODO
    },
    container: {
        flex: 1,
    },

    //VideoGameLose
    tableCell: {
        borderRightWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tableRow: {
        flexDirection: 'row',
        flex: 1
    },
    tableContainer: {
        backgroundColor: 'transparent',
        width: 140,
        height: 70,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    },
    previewContainer: {
        flex: 1,
        zIndex: 100,
        backgroundColor: '#2196F3',
    },
    previewHeaderContainer: {
        flex: 0.1,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    previewTextContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    previewBoldText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18, //TODO
        fontFamily: montserrat_bold
    },
    winBoldText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18, //TODO
        fontFamily: montserrat_bold
    },
    previewMediumText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16, //TODO
        fontFamily: montserrat_regular,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        zIndex: 100,
        backgroundColor: 'transparent',
    },
    buttonRoot: {
        marginRight: 36,
        marginLeft: 36,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 16,
        marginRight: 56,
        marginLeft: 56,
        marginTop: 12,
        marginBottom: 12,
        color: '#2196F3',
        fontWeight: "900"
    },
})

export const meassageStyles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    titleContainer: {
        alignItems: 'center',
    },
    underline: {
        textDecorationLine: 'underline'
    },
    contentContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        fontWeight: 'normal',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: montserrat_medium,
    },
    textBold: {
        fontFamily: montserrat_bold,
        fontSize: 17,
        color: 'white',
    },
});
