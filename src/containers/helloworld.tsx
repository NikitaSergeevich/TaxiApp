
import * as React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/index'
import {UserState} from '../reducers/user'

const {connect} = require('react-redux')

interface Props {
    user?: UserState
    actions?: Actions.Interface
}

@connect(
    store => ({
        user: store.user as UserState
    }),
    dispatch => ({
        actions: {
            user: bindActionCreators(Actions.User as any, dispatch)  
        } 
    })
)
export default class HelloWorld extends React.Component <Props, null>{
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={require('../resources/images/map.png')}>
        <Text style={styles.welcome}>
          Welcome to React Native! {'\n'}
          v.0.0.5 {'\n'}
          tel: {this.props.user.phoneNumber}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu{'\n'}
          {Platform.OS}
        </Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'rgba(180,180,180,.4)'
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
});