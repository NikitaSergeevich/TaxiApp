import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import CityMap from '../containers/map'
import Blur from '../components/blur'

interface Props {}
interface State {}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
  }
})

export default class MainScreen extends React.Component <Props, State> {
    private map: React.Component<any, React.ComponentState>
    private loaded: boolean = false
    render(){
        return (
            <View style={styles.container}>
                {/*<CityMap ref={map=>this.map=map}/>*/}
                <Blur map={this.map}/> 
            </View>
        )
    }
}
