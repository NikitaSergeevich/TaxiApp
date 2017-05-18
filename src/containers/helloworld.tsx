
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { bindActionCreators } from 'redux'
const {connect} = require('react-redux')
import * as Actions from '../actions/index'
import {UserState} from '../reducers/user'

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
        <Text style={styles.welcome}>
          Welcome to React Native! {'\n'}
          v.0.0.2 {'\n'}
          tel: {this.props.user.phoneNumber}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});