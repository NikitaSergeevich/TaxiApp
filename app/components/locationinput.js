import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import GeoIcon from '../resources/icons/geoicon';

export default class LocationInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSet: false,
        }
    }

    static get defaultProps() {
        return {
            
        };
    }

    onSelectLocation() {
        this.setState({ isSet: true });
    }

    render() {
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.onSelectLocation() } }>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent' }}>
                    <View style={{ width: '22%', backgroundColor: 'transparent', justifyContent: 'center' }}>
                        <GeoIcon isActive={this.state.isSet} style={{ alignSelf: 'center' }} />
                    </View>
                    <View style={{ width: '75%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ color: '#4E7F9D', fontSize: 15, fontStyle: 'normal'}}>
                            {this.state.isSet ? "Ул. Фрунзе 86" : "Куда поедем?"}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}