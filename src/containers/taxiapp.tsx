
import * as React from 'react';
import { Provider, Store } from 'react-redux';
import configureStore from '../store'
import HelloWorld from './helloworld'

const store = configureStore()

export default class TaxiApp extends React.Component <null, null>{

  render() {
    return (
      <Provider store={store}>
        <HelloWorld/>
      </Provider>
    );
  }
}