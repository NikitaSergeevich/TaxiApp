
import * as React from 'react';
import { Provider, Store } from 'react-redux';
import configureStore from '../store'
// import HelloWorld from './helloworld'
import CityMap from './map'
import MainScreen from '../screens/main'

const store = configureStore()

export default class TaxiApp extends React.Component <null, null>{

  render() {
    return (
      <Provider store={store}>
        {/*<HelloWorld/>*/}
        <CityMap />
        {/*<MainScreen/>*/}
      </Provider>
    );
  }
}