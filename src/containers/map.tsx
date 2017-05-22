import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
const MapView = require('react-native-maps');

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface Region {
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
}
interface Props {
    provider?: any
}
interface State {
    region: Region
}

export default class StaticMap extends React.Component <Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

   render() {
    return (
      <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            <MapView.Marker
                title="This is a title"
                description="This is a description"
                coordinate={this.state.region}
            />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
});