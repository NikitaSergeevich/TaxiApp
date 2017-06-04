import * as React from 'react'
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native'
const MapView = require('react-native-maps')
//, { MAP_TYPES } from 'react-native-maps';

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
interface Props {}
interface State {
    region: Region
}

export default class Map extends React.Component<Props, State> {
    private map:any
    constructor(props:Props) {
        super(props)
        this.state = {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }
        }
    }
    onRegionChange(region:Region){
        this.setState({region})
    }
    jumpRandom() {
        this.setState({ region: this.randomRegion() });
    }

    animateRandom() {
        this.map.animateToRegion(this.randomRegion());
    }
    randomRegion() {
        const { region } = this.state;
        return {
        ...this.state.region,
        latitude: region.latitude + ((Math.random() - 0.5) * (region.latitudeDelta / 2)),
        longitude: region.longitude + ((Math.random() - 0.5) * (region.longitudeDelta / 2)),
        };
    }
    render(){
        return (
            <View style={styles.container}>
                <MapView
                    ref={ref => this.map = ref}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onRegionChange={region => this.onRegionChange(region)}
                />
                <View style={[styles.bubble, styles.latlng]}>
                    <TouchableOpacity onPress={() => this.animateRandom()}>
                        <Text style={{ textAlign: 'center' }}>
                            {this.state.region.latitude.toPrecision(7)},
                            {this.state.region.longitude.toPrecision(7)}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject as any,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject as any
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    
})