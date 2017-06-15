import React, { Component } from 'react';
import {
    View,
    DrawerLayoutAndroid,
    Dimensions
} from 'react-native';
import {ControlPanel} from './controlpanel';
import MainScreen from './mainscreen';

var dim = Dimensions.get('window');

export class DrawerContainer extends Component {

    //For React-Navigation, header: null is to remove header
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        };
    }

    onHamButtonPressed(flag) {
        this._drawer.openDrawer();
        if (flag == 'open') {
            this.setState({ drawerOpen: true });
        } else {
            this.setState({ drawerOpen: false });
        }
    }

    onDrawerCloseHandler() {
        this.setState({ drawerOpen: false });
    }

    onDrawerOpenHandler() {
        this.setState({ drawerOpen: true });
    }

    //Adoptation for drawer width is needed
    render() {
        let navigationView = (
            <ControlPanel/>
        );
        return (
            <DrawerLayoutAndroid
                ref={(ref) => this._drawer = ref}
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <MainScreen
                    ref={(ref) => this._main = ref}
                    open={!this.state.drawerOpen}
                    onHamButtonPressed={() => { this.onHamButtonPressed() } }/>
            </DrawerLayoutAndroid>
        )
    }
}