import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import OnboardScreen from '../screens/OnboardScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FirstScreen from '../screens/FirstScreen';
import HomeScreen from '../screens/HomeScreen';
import MoreDetails from '../screens/MoreDetails';
import HeaderTab from '../components/HeaderTab';
import Firstscreen from '../screens/MoreDetailScreens/Firstscreen';
import Secondscreen from '../screens/MoreDetailScreens/Secondscreen';
import Thirdscreen from '../screens/MoreDetailScreens/Thirdscreen';
import Forthscreen from '../screens/MoreDetailScreens/Forthscreen';
import OrderCompleted from '../screens/OrderCompleted';
import ViewCart from '../components/ViewCart';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../reducers/Store';

const store = configureStore();

const PrimaryNavigator = createStackNavigator();

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <NavigationContainer>
          <PrimaryNavigator.Navigator
            headerMode={{}}
            initialRouteName="OnboardScreen">
            <PrimaryNavigator.Screen
              name="OnboardScreen"
              component={OnboardScreen}
            />
            <PrimaryNavigator.Screen
              name="SignInScreen"
              component={SignInScreen}
            />
            <PrimaryNavigator.Screen
              name="SignUpScreen"
              component={SignUpScreen}
            />
            <PrimaryNavigator.Screen
              name="Firstscreen"
              component={Firstscreen}
            />
            <PrimaryNavigator.Screen
              name="Secondscreen"
              component={Secondscreen}
            />
            <PrimaryNavigator.Screen
              name="FirstScreen"
              component={FirstScreen}
            />
            <PrimaryNavigator.Screen name="HomeScreen" component={HomeScreen} />
            <PrimaryNavigator.Screen
              name="MoreDetails"
              component={MoreDetails}
            />
            <PrimaryNavigator.Screen name="HeaderTab" component={HeaderTab} />
            <PrimaryNavigator.Screen
              name="Thirdscreen"
              component={Thirdscreen}
            />
            <PrimaryNavigator.Screen
              name="Forthscreen"
              component={Forthscreen}
            />
            <PrimaryNavigator.Screen
              name="OrderCompleted"
              component={OrderCompleted}
            />
            <PrimaryNavigator.Screen name="ViewCart" component={ViewCart} />
          </PrimaryNavigator.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    );
  }
}

export default App;
