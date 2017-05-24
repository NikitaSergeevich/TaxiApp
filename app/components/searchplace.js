import React, { Component } from 'react';
import QS from 'query-string'
import { AppRegistry, Text, View, TextInput, StyleSheet, TouchableHighlight, ListView } from 'react-native';

async function getPlace(text) {
    // const API_KEY = 'AIzaSyD7nQhVcm-9ZMyWJfqBulilx_ntlGetOcQ'
    const API_KEY = 'AIzaSyAmk7cP6WPlqLXgIP4mlQKg7RTDVxhKm50'
    //const url = 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=AIzaSyAmk7cP6WPlqLXgIP4mlQKg7RTDVxhKm50&input=pizza+near%20par'
    const qs = {
            location: '37.773972,-122.431297',
            radius: '10000',
            // language: 'ru',
            key: API_KEY,
            types: 'address',
            strictbounds: true,
            input: text
        }
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        },
        
    }
    const  url = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'+QS.stringify(qs)
    try {
        const response = await fetch(url)
        if(!response.ok) throw new Error('Google autocomplete request error')
        return await response.json()
    } catch(error) {
        throw error
    }
}

export default class SearchPlace extends Component {

    constructor() {
        super();
        this.value = ''
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows([]),
        };
    }
    
    onChangeText(text) {
        this.value = text
    }

    onSubmit(){
        getPlace(this.value).then(data => {
            const list = data.predictions.map(item => item.description)
            this.setState({dataSource:this.ds.cloneWithRows(list)})
        })
    }



    render(){
        return (
            <View>
                <Text>SearchPlace</Text>
                <TextInput
                    ref={el => this.textinput = el }
                    onChangeText={text => this.onChangeText(text)}
                    onSubmitEditing={this.onSubmit.bind(this)}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
    }
}