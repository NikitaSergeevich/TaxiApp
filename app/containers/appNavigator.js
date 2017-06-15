import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MainScreen from './mainscreen';

const AppRouteConfigs = {
    MainScreen: { screen: MainScreen },
}

export const AppNavigator = StackNavigator(
    {
        MainScreen: { screen: MainScreen },
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav }) } />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.navReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);
