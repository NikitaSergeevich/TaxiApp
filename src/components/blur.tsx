import * as React from 'react'
import { View, Image, Text, findNodeHandle, StyleSheet } from 'react-native';
const {BlurView}  = require('react-native-blur')

interface Props {
    map: React.Component<any, any>
}
interface State {
    viewRef: any
}

const styles = StyleSheet.create({
  container: {
       position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    top: 0, left: 0, bottom: 0, right: 0,
  },
  absolute: {
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
  },
  text: {
      color: 'white'
  }
})

export default class Blur extends React.Component <Props, State> {
    // private backgroundImage:  React.Component<any, State>
    private backgroundImage: React.Component<React.HTMLProps<Image>,React.ComponentState>

    state = { viewRef: null }
    private map:React.Component<any,any> = null

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) })
    }
    render(){
        const blur = !!this.state.viewRef ?  <BlurView
          style={styles.absolute}
          viewRef={this.state.viewRef}
          blurType="dark"
          blurAmount={10}
        /> : null

        return (
      <View style={styles.container}>
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Cobbe_Portrait.png'}}   
          style={styles.absolute}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        {blur}
        <Text>Hi, I am some unblurred text2r24t</Text>
      </View>
    );
  }
    
}