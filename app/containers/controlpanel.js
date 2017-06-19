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
import ControlPanelButton from '../components/controlpanelbutton';
import TimeIcon from '../resources/icons/timeicon';
import HomeIcon from '../resources/icons/homeicon';
import HistoryIcon from '../resources/icons/historyicon';
import ProfileIcon from '../resources/icons/profileicon';
import TarifIcon from '../resources/icons/tarificon';
import RulesIcon from '../resources/icons/rulesicon';

export class ControlPanel extends Component {

    render() {
        return (
            <View style={{
                backgroundColor: '#B4C4D1',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>

                <ControlPanelButton
                    icon={<HomeIcon/>}
                    text={"На главную"}
                    handlePress={() => { } } />
                <ControlPanelButton
                    icon={<HistoryIcon/>}
                    text={"История"}
                    handlePress={() => { } } />
                <ControlPanelButton
                    icon={<ProfileIcon/>}
                    text={"Профиль"}
                    handlePress={() => { } } />
                <ControlPanelButton
                    icon={<TarifIcon/>}
                    text={"Тарифы"}
                    handlePress={() => { } } />
                <ControlPanelButton
                    icon={<RulesIcon/>}
                    text={"Правила"}
                    handlePress={() => { } } />
                <ControlPanelButton
                    icon={<RulesIcon/>}
                    text={"Контакты"}
                    handlePress={() => { } } />


                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: '6%',
                    height: '8%',
                    alignItems: 'flex-start'
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 14,
                            color: 'white',
                            fontWeight: '500'
                        }}>
                            {"Выйти"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}