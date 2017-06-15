import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Animated,
    Easing,
    TouchableOpacity
} from 'react-native';

import Button from '../components/button';
import TimeIcon from '../resources/icons/timeicon';

export class ControlPanel extends Component {

    onDontRemember() {

    }

    render() {
        return (
            <View style={{ backgroundColor: '#B4C4D1', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>

                <Button text={"На главную"}
                    isEnabled={true}
                    icon={
                        <View style={{ backgroundColor: 'red', marginRight: '6%' }}>
                            <TimeIcon/>
                        </View>
                    }
                    rootStyle={{ backgroundColor: 'transparent' }}
                    container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.onDontRemember();
                    } } />
                <Button text={"История"}
                    isEnabled={true}
                    icon={
                        <View style={{ backgroundColor: 'red', marginRight: '6%' }}>
                            <TimeIcon/>
                        </View>
                    }
                    rootStyle={{ backgroundColor: 'transparent' }}
                    container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.onDontRemember();
                    } } />
                <Button text={"Профиль"}
                    isEnabled={true}
                    icon={
                        <View style={{ backgroundColor: 'red', marginRight: '6%' }}>
                            <TimeIcon/>
                        </View>
                    }
                    rootStyle={{ backgroundColor: 'transparent' }}
                    container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.onDontRemember();
                    } } />
                <Button text={"Тарифы"}
                    isEnabled={true}
                    icon={
                        <View style={{ backgroundColor: 'red', marginRight: '6%' }}>
                            <TimeIcon/>
                        </View>
                    }
                    rootStyle={{ backgroundColor: 'transparent' }}
                    container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.onDontRemember();
                    } } />
                <Button text={"История"}
                    isEnabled={true}
                    icon={
                        <View style={{ backgroundColor: 'red', marginRight: '6%' }}>
                            <TimeIcon/>
                        </View>
                    }
                    rootStyle={{ backgroundColor: 'transparent' }}
                    container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.onDontRemember();
                    } } />
                <Button text={"Контакты"}
                    isEnabled={true}
                    icon={
                        <View style={{ backgroundColor: 'red', marginRight: '6%' }}>
                            <TimeIcon/>
                        </View>
                    }
                    rootStyle={{ backgroundColor: 'transparent' }}
                    container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.onDontRemember();
                    } } />

                <View style={{position: 'absolute', bottom: 0, right: 0, left: 0, height: '10%', alignItems: 'flex-start' }}>
                    <Button text={"История"}
                        isEnabled={true}
                        rootStyle={{ backgroundColor: 'transparent' }}
                        container={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        textStyle={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.onDontRemember();
                        } } />
                </View>
            </View>
        )
    }
}