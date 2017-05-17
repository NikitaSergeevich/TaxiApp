import { Constants as types } from "../constants/restApiTypes";
//import XMLParser from "react-xml-parser";
//import DOMParser from "xmldom";
var DOMParser = require('xmldom').DOMParser;
import {
    Keyboard,
} from "react-native";
import { Actions } from 'react-native-router-flux';

export async function sendCode(phoneNumber) {
    /*try {
        let formBody = [];
        formBody.push(encodeURIComponent("Phone") + "=" + encodeURIComponent(phoneNumber));
        formBody = formBody.join("&");
        let response = await fetch(types.POST_CONFIRM_PHONE_NUMBER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });
        if (response.status >= 200 && response.status < 300) {
            return phoneNumber;
        } else {
            let errors = await response.json();
            throw errors;
        }
    } catch (errors) {
        throw errors;
    }*/
}

export async function resendCode(phoneNumber) {
    /*try {
        var formBody = [];
        formBody.push(encodeURIComponent("Phone") + "=" + encodeURIComponent(phoneNumber));
        formBody = formBody.join("&");
        let response = await fetch(types.POST_RESEND_CODE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let errors = await response.json();
            throw errors;
        }
    } catch (errors) {
        throw errors;
    }*/
}

export async function confirmCode(phoneNumber, code) {
    /*try {
        //return "15218353-1fed-4294-a2b4-c823525610eb";
        //throw {};
        let formBody = [];
        formBody.push(encodeURIComponent("Phone") + "=" + encodeURIComponent(phoneNumber));
        formBody.push(encodeURIComponent("ConfirmationCode") + "=" + encodeURIComponent(code));
        formBody = formBody.join("&");
        let response = await fetch(types.POST_CONFIRM_CODE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        });
        if (response.status >= 200 && response.status < 300) {
            let result = await response.json();
            return result;
        } else {
            let errors = await response.json();
            throw errors;
        }
    } catch (errors) {
        throw errors;
    }*/
}

export const makeCancelable = (promise) => {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            result => {
                hasCanceled_ ? reject({ isCanceled: true }) : resolve(result)
            },
            error => {
                hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
            }
        );
        promise.catch((error) =>
            hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};
